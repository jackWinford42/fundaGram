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

    usersCol = db.collection('users')
    module.exports.usersCollection = usersCol;

    postsCol = db.collection('posts')
    module.exports.postsCollection = postsCol;

    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))
    app.use(cors());

    const authRoute = require("./routes/auth")
    const postRoute = require("./routes/post")

    app.use("/auth", authRoute);
    app.use("/post", postRoute);
})
.catch(console.error)

module.exports.app = app;

