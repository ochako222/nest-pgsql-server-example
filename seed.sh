#!/bin/bash

echo 'Seeding...'

users=(
    '{"username":"alex","password":"123"}'
    '{"username":"test_user","password":"456"}'
)

for (( c=0; c<=${#users[@]}; c++ ))
do 
    curl --location 'http://localhost:3001/users' \
    --header 'Content-Type: application/json' \
    --data ${users[$c]}
done


    curl --location 'http://localhost:3001/products' \
    --header 'Content-Type: application/json' \
    --data '{
        "name":"Bamboo Tan",
        "price":"89",
        "imageUrl":"https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "rating":"2"
    }'

    curl --location 'http://localhost:3001/products' \
    --header 'Content-Type: application/json' \
    --data '{
        "name":"Iconic Turquoise",
        "price":"175",
        "imageUrl":"https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "rating":"3"
    }'

        curl --location 'http://localhost:3001/products' \
    --header 'Content-Type: application/json' \
    --data '{
        "name":"Marble Leather",
        "price":"209",
        "imageUrl":"https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "rating":"3"
    }'

        curl --location 'http://localhost:3001/products' \
    --header 'Content-Type: application/json' \
    --data '{
        "name":"Silve wolf",
        "price":"143",
        "imageUrl":"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
        "rating":"5"
    }'
    
echo 'Seeding complete!'