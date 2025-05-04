#pragma once

#include <iostream>
#include <string>
#include "asio.hpp"
#include "crow.h" // Crow depends on ASIO library
#include "../Contact.h"
#include "../database/InsertContact.h"
#include "crow/middlewares/cors.h"

// Defines the API route for adding a new contact
inline void AddContact(crow::App<crow::CORSHandler>& app) {

    CROW_ROUTE(app, "/api/contacts/add").methods("POST"_method)([](const crow::request& req) {
        try {
             // Try to parse JSON from the request body
            auto body = crow::json::load(req.body);
            if(!body) {
                return crow::response(400, "Invalid JSON");
            }
             // Extract fields from JSON
            std::string name = body["name"].s();
            std::string phone = body["phone"].s();
            std::string email = body["email"].s();
            //TODO: need to handle optional
            std::string tag = body["tag"].s(); 

            // Passing data to Contact class
            Contact contact(name, phone, email, tag);


            //TODO: call InsertContact function to insert data into database
            InsertContact(contact);
            return crow::response(200, "Contact added successfully");

        } catch(std::exception& e) {
            return crow::response(500, std::string("Server error: ") + e.what());
        }
        return crow::response(400, "Missing required fields");
    });
}