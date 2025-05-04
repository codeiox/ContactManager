#include <iostream>
#include "../database/InsertContact.h"
#include "crow/middlewares/cors.h"

inline void DisplayContact(crow::App<crow::CORSHandler>& app) {
    CROW_ROUTE(app, "/api/contacts").methods("GET"_method)([] {
        try {
            // Connects to MySQL database
            auto conn = std::unique_ptr<sql::Connection>(getConnection());
            // Prepares to send message to database
            std::unique_ptr<sql::Statement> stml(conn->createStatement());
            // Sends message to database and 'res' gets list of response back from database
            std::unique_ptr<sql::ResultSet> res(stml->executeQuery("SELECT * FROM contacts"));

            // Creates empty json object that can be filled later
            crow::json::wvalue contacts_json; 
            int i = 0;
            while (res->next()) {
                contacts_json[i]["id"] = res->getInt("id");
                contacts_json[i]["name"] = res->getString("name");
                contacts_json[i]["phone"] = res->getString("phone");
                contacts_json[i]["email"] = res->getString("email");
                contacts_json[i]["tag"] = res->getString("tag");
                ++i;

            } 
            return crow::response(contacts_json);
        }catch (const std::exception& e) {
            return crow::response(500, e.what());
        }
    });
}