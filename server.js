const express = require('express');
const router = require("./api/router")

const server = express();

server.use(express.json());
server.use("/api/accounts", router)

module.exports = server;