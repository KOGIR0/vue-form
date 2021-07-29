const express = require('express')
const cors = require("cors")
import { addUser, getUsers, deleteUser } from './src/database/connection'


let app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());


app.post("/user", (req, res) => {
    console.log(req.body);
    addUser(req.body);
    res.send("OK");
})

app.post("/delete", (req, res) => {
    console.log(req.body);
    deleteUser(req.body.id);
    getUsers().then(data => {
        res.send(data);
    });
})

app.get("/users", (req, res) => {
    let data = getUsers();
    data.then(data => {
        res.send(data);
    });
})

app.listen("8000", console.log("Listening on port 8000"));