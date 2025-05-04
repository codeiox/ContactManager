#include <iostream>
#include <string>
#include "asio.hpp"
#include "crow.h" // Crow depends on ASIO library
#include "../include/routes/AddContact.h"
#include "../include/Contact.h"
#include "../include/database/InsertContact.h"
#include "crow/middlewares/cors.h" // CORS middleware to allow frontend access
#include "../include/routes/DisplayContect.h"

// Alias for CORS middleware
using CORS = crow::CORSHandler;



int main(int argc, const char* argv[]) {

    // Create a Crow appp with CORS enabled
    crow::App<crow::CORSHandler> app;

    // Configure global CORS policy
    app.get_middleware<crow::CORSHandler>() 
    .global()
    .origin("*") // Allow all origins
    .methods("GET"_method, "POST"_method, "OPTIONS"_method)
    .headers("Content-Type");
    
    AddContact(app);
    DisplayContact(app);
    

 //************** Temporary code to Delete all data from MySQL Database ****************** */

    // try {
    //     // Connects to database
    //     auto connect = std::unique_ptr<sql::Connection>(getConnection()); 
    //     // Prepare message to send 
    //     std::unique_ptr<sql::Statement> stml(connect->createStatement());
    //     // DELETE FROM table_name;
    //     stml->executeQuery("DELETE FROM contacts");
    //     std::cout << "[INFO] All contacts deleted.\n";

    // } catch (const std::exception& e) {
    //     std::cerr  << "[ERROR] Failed to delete contacts: " << e.what() << "\n";
    // }
    
     //************** Temporary code to Delete all data from MySQL Database ****************** */


    app.port(8080).multithreaded().run();
   
    return 0;
}