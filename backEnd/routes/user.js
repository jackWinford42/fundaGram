"use strict";

/** Routes for users. */
//THESE ROUTES ARE NOT USED AND THIS PAGE IS UNDER CONSTRUCTION
const jsonschema = require("jsonschema");
const db = require("../app.js").db;
const usersCollection = require("../app.js").usersCollection;
const express = require("express");
const router = new express.Router();
const { BadRequestError } = require("../expressError");

/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.get("/", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await usersCollection.findOne({ username, password });
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
