
#include "../include/Contact.h"

Contact::Contact(const std::string& name, const std::string& phone, const std::string& email, const std::string& tag) {
    this->name = name;
    this->phone = phone;
    this->email = email;
    this->tag = tag;
}