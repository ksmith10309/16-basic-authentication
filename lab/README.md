# Basic Auth

## Overview
This application is a server with basic authorization for sign up and sign in routes and utilizes MongoDB for storage

## Getting Started
- Clone this repository
- Ensure node.js is installed
    - If not, run the command `brew install node` in the terminal
- Ensure MongoDB is installed
    - If not, follow the instructions at [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
- Navigate to the `/16-basic-authentication/lab` directory and run the command `npm i` to install dependencies
- Create a .env file
    - Set `PORT` to `8080`
    - Set `MONGODB_URI` to `mongodb://localhost:27017/basicauth`
    - Set `APP_SECRET` to `password`
- Create a folder to store the database
- In the terminal, run the command `mongod --dbpath=[path to database folder]` to start the database server
- In a different terminal window, run the command `node index.js` to start the web server

## Testing Instructions
- Open up Postman
    - Postman can be downloaded at [https://www.getpostman.com/](https://www.getpostman.com/)

- To sign up by making a POST request:
    - Click on the dropdown and change it to POST
    - Type `localhost:8080/api/signup` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a note in JSON with the following format:
        - `{ "username": "[username]", "email": "[email]", "password": "[password]" }`
    - Click Send

- To sign in by making a GET request:
    - Click on the dropdown and change it to GET
    - Type `localhost:8080/api/signin` in the address bar
    - Click on the Authorization tab
        - Click on the Type dropdown and change it to Basic Auth
        - Fill in the Username and Password fields
    - Click Send