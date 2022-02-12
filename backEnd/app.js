"use strict";
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
let db;
let usersCol;
let postsCol;

/** Express app for fundaGram. */

const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb://127.0.0.1:27017/fundaGram"

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    db = client.db('fundaGram')
    module.exports.db = db 
    //console.log(db);
    usersCol = db.collection('users')
    //console.log(usersCol);
    postsCol = db.collection('posts')

    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))
    app.use(cors());

    const authRoute = require("./routes/auth")

    app.use("/auth", authRoute);
    module.exports.usersCollection = usersCol;
})
.catch(console.error)

//console.log("second log of db" + db);
module.exports.app = app;

