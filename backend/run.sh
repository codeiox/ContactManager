#!/bin/bash

cd build
cmake ..
cmake --build .

export DYLD_LIBRARY_PATH="/opt/homebrew/opt/openssl@3/lib"

# Uncomment when running server
#sudo DYLD_LIBRARY_PATH="$DYLD_LIBRARY_PATH" ./ContactManager

./ContactManager