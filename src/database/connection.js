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

function addUser(user)
{
    userInfo = [];
    Object.keys(user).forEach((key) => {
        userInfo.push(user[key]);
    });
    console.log(userInfo);
    const sql = `INSERT INTO users(name, age, phone, email) VALUES("${user.name}", ${+user.age}, "${user.phone}", "${user.email}")`;
 
    connection.query(sql, user, function(err, results) {
        if(err) console.log(err);
        else console.log("Данные добавлены");
    });
}

/*connection.end(function(err){
    if(err)
    {
        return console.log("Error: " + err.message);
    }
    console.log("Connection closed");
})*/

module.exports = { addUser };