const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

connection.connect(function(err){
    if(err)
    {
        return console.error("Error: " + err.message);
    } else {
        console.log("Succsessful mysql connection");
    }
});

connection.end(function(err){
    if(err)
    {
        return console.log("Error: " + err.message);
    }
    console.log("Connection closed");
})