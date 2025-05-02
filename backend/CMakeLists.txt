# set minimum version
cmake_minimum_required(VERSION 3.10)

# set project name
project(ContactManager)


# Set the C++ standard
set(CMAKE_CXX_STANDARD 20)

set(CMAKE_CXX_STANDARD_REQUIRED ON)



#openSSL
find_package(OpenSSL REQUIRED)

#python3 executable
find_package(Python3 REQUIRED COMPONENTS Interpreter)

#add definition for .env 
add_definitions(-DENABLE_DOTENV)


#crow
find_package(Threads REQUIRED)
# C++ Crow framework
include_directories(${CMAKE_SOURCE_DIR}/Crow/include)
# include path to asio dependency which crow depends on
include_directories(${CMAKE_SOURCE_DIR}/asio/asio/include)


#include path to mysql connector/c++
include_directories(/usr/local/mysql-connector-c++-9.2.0/lib64)

# include path to mysql connector/c++
include_directories(/usr/local/mysql/include)
include_directories(/usr/local/mysql-connector-c++-9.2/include)



# add executable
add_executable(${PROJECT_NAME}
    main.cpp
)


#Add linker flags
if (CMAKE_CXX_COMPILER_ID MATCHES "Clang")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -pthread")
elseif (CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -lpthread")
endif()


link_directories(/usr/local/mysql-connector-c++-9.2.0/lib64)

# Link libraries
target_link_libraries(${PROJECT_NAME}
        PRIVATE
        Threads::Threads
        OpenSSL::SSL
        OpenSSL::Crypto
        /usr/local/mysql-connector-c++-9.2.0/lib64/libmysqlcppconn.dylib
        /usr/local/mysql-connector-c++-9.2.0/lib64/libmysqlcppconnx.dylib
)