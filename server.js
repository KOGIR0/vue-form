const express = require('express')
const cors = require("cors")

let app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());


app.post("/", (req, res) => {
    console.log(req.body);
    res.send("OK");
})

app.listen("8000", console.log("Listening on port 8000"));