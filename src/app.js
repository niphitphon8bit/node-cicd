const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
    res.status(200).send("Hello world")
})

app.get("/test2", (_req, res) => {
    res.status(200).send("Hello Update from github")
})
module.exports = app;