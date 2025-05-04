#include <iostream>
#include <string>
#include "asio.hpp"
#include "crow.h" // Crow depends on ASIO library
#include "../include/routes/AddContact.h"
#include "../include/Contact.h"
#include "../include/database/InsertContact.h"
#include "crow/middlewares/cors.h" // CORS middleware to allow frontend access


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


    // Use class object to insert data into database
    


    app.port(8080).multithreaded().run();
   
    return 0;
}