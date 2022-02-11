"use strict";
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const cors = require("cors");
const app = express()

/** Express app for ramt. */
const connectionString = process.env.127.0.0.1:27017

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('fundaGram')
    const quotesCollection = db.collection('quotes')

app.use(cors());

const authRoute = require("./routes/auth")

app.use("/auth", authRoute);

module.exports = app;
