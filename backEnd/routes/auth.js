"use strict";

/** Routes for authentication. */

const jsonschema = require("jsonschema");
const db = require("../app.js").db;
const usersCollection = require("../app.js").usersCollection;
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const { BadRequestError } = require("../expressError");

/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/token", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await usersCollection.findOne({ username, password });
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});


/** POST /auth/register:   { user } => { token }
 *
 * user must include { email, username, profile_pic }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/register", async function (req, res, next) {
  try {
    db.collection('users').insertOne({...req.body})
      .then(newUser => {
        const token = createToken(newUser);
        return res.status(201).json({ ...token, worked: true });
      })
      .catch(error => console.error(error))
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
