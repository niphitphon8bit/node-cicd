const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
    res.status(200).send("Hello world")
})

app.get("/test2", (_req, res) => {
    res.status(200).send("Hello Update from github")
})

app.get("/test3", (_req, res) => {
    res.status(200).send("Hello Update from github2")
})
module.exports = app;