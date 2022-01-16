const express = require("express");
const Post = require("../models/Posts")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("This is the posts page")
})

router.get("/specific", (req, res) => {
    res.send("This is a specific posts page")
})

// router.post("/", (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     })
//     post.save()
//     .exec()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(error => res.json({ message: error }))
// })

module.exports = router