# Registration form

Simple registration form \
Frontend: VueJS \
Backend: NodeJS Express \
Database: MySQL

App contains registration form.
On submit it sends POST request with data from input fields to server.
Server adds this user data to MySQL Database

# Prerequisites

## Database

create table in your database \
users(name, age, phone, email)

create .env file with next data \
HOST=localhost \
DATABASE_USER=your_database_username \
DATABASE=database_name \
PASSWORD=password_to_your_database

# Scripts

## npm run-script build

builds vuejs frontend for production

## npm run-script serve

runs server and app in development mode

## npm run-script run-dev-server

runs server in development mode
