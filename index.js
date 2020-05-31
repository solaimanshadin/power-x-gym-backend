const express =  require("express");
const cors =  require("cors");
const bodyParser =  require("body-parser");
const mongClint = require("mongodb").MongoClient;
require("dotenv").config;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.DB_PATH;
let client = new mongClint(uri, {useNewUrlParser:true});

app.get("/" , (req, res) => {
    res.send("Welcome to the Power X Backend Server");
})


port = process.env.PORT || 2020;
app.listen(port , err => {
    try{
        console.log("Listening to the port " , port);
    }catch{
        console.log("failed to start server");
    }
})