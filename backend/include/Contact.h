#pragma once

#include <iostream>
#include <string>
#include "asio.hpp"
#include "crow.h" // Crow depends on ASIO library



class Contact {
    private:
    std::string name;
    std::string phone;
    std::string email;
    std::string tag;

    public:
    Contact() = default;
    Contact(const std::string& name, const std::string& phone, const std::string& email, const std::string& tag);

    // Setters
    void SetName(std::string& name);
    void SetPhone(std::string& phone);
    void SetEmail(std::string& email);
    void SetTag(std::string& tag);

    // Getters
    std::string GetName() const;
    std::string GetPhone() const;
    std::string GetEmail() const;
    std::string GetTag() const;


    //Extend this class later
    // validate phonenumber
    // validate email

    // Comparison Operators
    // overload == and < to compare by name or phone
    
    /*
     2. Serialization
        std::string toJSON()
        std::string toSQLValues()
        Useful for logging or sending over APIs

    */
    
};