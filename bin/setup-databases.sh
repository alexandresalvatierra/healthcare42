#!/bin/bash

DB_NAMES=("healthcare42")

for db_name in "${DB_NAMES[@]}"
do
    psql -U admin -d postgres -tc "SELECT 1 FROM pg_database WHERE datname = '$db_name'" | grep -q 1
    
    if [ $? -ne 0 ]; then
        psql -U admin -d postgres -c "CREATE DATABASE $db_name"
    fi
done