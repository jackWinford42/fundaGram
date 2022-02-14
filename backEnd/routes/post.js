"use strict";

/** Routes for fundaGram's posts. */

const jsonschema = require("jsonschema");
const db = require("../app.js").db;
const postsCollection = require("../app.js").postsCollection;
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const { BadRequestError } = require("../expressError");

/** POST /post/fetch:  { } => { all stored posts }
 *
 * Returns all the stored post information in the post collection.
 *
 * Authorization required: none
 */

router.get("/fetch", async function (req, res, next) {
  try {
    const posts = await postsCollection.find({}).toArray();
    return res.json({ posts: posts });
  } catch (err) {
    return next(err);
  }
});


/** POST /post/create:   { post information } => { post information }
 *
 * post information should include { url/picture, comment, location (optional) }
 *
 * Returns the same information that was passed in.
 *
 * Authorization required: none
 */

router.post("/create", async function (req, res, next) {
  try {
    const postItem = {likes: 0, comments: [], ...req.body}
    db.collection('posts').insertOne(postItem)
      .then(newPost => {
        return res.status(201).json({ newPost });
      })
      .catch(error => console.error(error))
  } catch (err) {
    return next(err);
  }
});

/** POST /post/comment:   { post_id, comment } => { }
 *
 * post information should include { the post that was commented on }
 *
 * Returns nothing
 *
 * Authorization required: none
 */

router.post("/comment", async function (req, res, next) {
  try {
    let ObjectId = require('mongodb').ObjectId;
    const postId = new ObjectId(req.body.id);
    const filter = { _id: postId }

    const updateDoc = {
      $set: {
        comments: [...req.body.prevComments, req.body.comment] 
      },
    };

    const result = await postsCollection.updateOne(filter, updateDoc);

    return res.status(201).json({ });
  } catch (err) {
    return next(err);
  }
});

/** POST /post/like:   { post_id } => { }
 *
 * post information should include { the post that was liked }
 *
 * Returns nothing
 *
 * Authorization required: none
 */

router.post("/like", async function (req, res, next) {
  try {
    let ObjectId = require('mongodb').ObjectId;
    const postId = new ObjectId(req.body.id);
    const filter = { _id: postId }

    const updateDoc = {
      $set: {
        likes: req.body.newNum 
      },
    };

    const result = await postsCollection.updateOne(filter, updateDoc);

    return res.status(201).json({ });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
