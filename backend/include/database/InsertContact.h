#pragma once
#include <cppconn/exception.h>
#include <cppconn/prepared_statement.h>
#include <mysql_connection.h>
#include <mysql_driver.h>

#include <cstdlib>
#include <iostream>
#include <memory>

#include "../config/DotEnv.h"

// sql::Connection is an abstract class, so must use pointer
sql::Connection* getConnection() {
    try {
        // Get the Database credentials from .env file
        std::string host, port, user, pass, db;
        load_env(host, port, user, pass, db);

        // initializes and gives you access to the MySQL Driver.
        // returns a pointer of type sql::mysql::MySQL_Driver*
        sql::mysql::MySQL_Driver* driver = sql::mysql::get_mysql_driver_instance();

        // Replace with your actual credentials and database
        sql::Connection* conn = driver->connect(host, user, pass);
        conn->setSchema(db);

        return conn;
    } catch (sql::SQLException& e) {
        std::cerr << "MySQL connection error: " << e.what() << std::endl;
        throw;
    }
}

inline void RunSQLFile(const std::string& filePath, sql::Connection* conn) {
    std::ifstream file(filePath);
    if (!file.is_open()) {
        std::cerr << "Failed to open SQL file: " << filePath << std::endl;
        return;
    }

    std::stringstream buffer;
    buffer << file.rdbuf();
    std::string query = buffer.str();

    try {
        std::unique_ptr<sql::Statement> stml(conn->createStatement());
        std::cout << "[INFO] Running SQL from file: " << filePath << "\n";
        std::cout << "[INFO] SQL Content:\n" << query << std::endl;

        stml->execute(query);
    } catch (const sql::SQLException& e) {
        std::cerr << "Error executing SQL file: " << e.what() << std::endl;
        throw;
    }
}

// Inserts a contact record into the MySQL database
inline bool InsertContact(const Contact& contacts) {
    try {
        std::unique_ptr<sql::Connection> conn(getConnection());

        // Create table if not exists
        RunSQLFile("../sql/CreateTable.sql", conn.get());

        // Automatically deletes it when it goes out of scope
        std::unique_ptr<sql::PreparedStatement> stml(conn->prepareStatement(
            "INSERT INTO contacts (name, phone, email, tag) VALUES (?, ?, ?, ?)"));
        stml->setString(1, contacts.GetName());
        stml->setString(2, contacts.GetPhone());
        stml->setString(3, contacts.GetEmail());
        stml->setString(4, contacts.GetTag());

        stml->execute();

    } catch (const sql::SQLException& e) {
        std::cerr << "SQL error: " << e.what() << std::endl;
        throw;
    }
    return true;
}