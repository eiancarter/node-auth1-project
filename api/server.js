const express = require("express");
const apiRouter = require('./api-router');
const configureMiddleware = require('./configure-middleware');
const server = express();

configureMiddleware(server);

server.use(express.json());

server.use("/", apiRouter)

module.exports = server;

