
#include "../include/Contact.h"

Contact::Contact(const std::string& name, const std::string& phone, const std::string& email, const std::string& tag) {
    this->name = name;
    this->phone = phone;
    this->email = email;
    this->tag = tag;
}

void Contact::SetName(std::string& name) {
    this->name = name;
}

void Contact::SetPhone(std::string& phone) {
    this->phone = phone;
}

void Contact::SetEmail(std::string& email) {
    this->email = email;
}

void Contact::SetTag(std::string& tag) {
    this->tag = tag;
}

std::string Contact::GetName() const {
    return name;
}

std::string Contact::GetPhone() const {
    return phone;
}

std::string Contact::GetEmail() const {
    return email;
}

std::string Contact::GetTag() const {
    return tag;
}
