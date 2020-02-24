const express = require("express");
const apiRouter = require('');
const configureMiddleware = require('');
const server = express();

configureMiddleware(server);

server.use(express.json());

server.use("/", apiRouter)

module.exports = server;

