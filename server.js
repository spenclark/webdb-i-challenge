const express = require('express');
const router = require("./api/router")

const server = express();

server.use(express.json());
server.use("/api/accounts", router)

server.get("/", (req, res) => {
    res.send('<h2>Server is Alive and well </h2>')
})
module.exports = server;