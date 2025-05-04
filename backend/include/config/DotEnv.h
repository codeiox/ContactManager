#pragma once

#include <iostream>
#include <fstream>
#include <sstream>

inline void load_env(std::string& host, std::string& port, std::string& user, std::string& pass, std::string& db) {
    std::ifstream file(".env"); // opens the file

    if (!file.is_open()) {
        throw std::runtime_error("Unable to open .env file." );
    }

    std::string line;
    while (std::getline(file, line)) {
        // Skip comments and empty lines
        if (line.empty() || line[0] == '#') continue;

        size_t delimiter_pos = line.find('=');
        if (delimiter_pos == std::string::npos) continue;

        std::string key = line.substr(0, delimiter_pos);
        std::string value = line.substr(delimiter_pos + 1);

        // Remove potential whitespace
        key.erase(0, key.find_first_not_of(" \t\n\r\f\v"));
        key.erase(key.find_last_not_of(" \t\n\r\f\v") + 1);
        value.erase(0, value.find_first_not_of(" \t\n\r\f\v"));
        value.erase(value.find_last_not_of(" \t\n\r\f\v") + 1);

        // Set environment variable
        setenv(key.c_str(), value.c_str(), 1);


        // Assign values to corresponding class members
        if (key == "DB_HOST") host = value;
        else if (key == "DB_PORT") port = value;
        else if (key == "DB_USER") user = value;
        else if (key == "DB_PASS") pass = value;
        else if (key == "DB_NAME") db = value;
    }

    file.close(); // close the file
}
