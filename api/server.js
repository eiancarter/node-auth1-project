const express = require("express");
const apiRouter = require('./api-router');
const configureMiddleware = require('./configure-middleware');
const session = require("express-session")
const server = express();
configureMiddleware(server);

const sessionConfig = {
    name: 'funsession',
    secret: 'please keep it secret',
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: false, // true in production, requires https
    },
    httpOnly: true, //prevents js use on cookie
    resave: false,
    saveUninitialized: false,
    store: new KnexStore({
        knex,
        tablename: 'sessions',
        createtable: true,
        sidfieldname: 'sid',
        clearInterval: 1000 * 60 * 15,
    }),
};

server.use(session(sessionConfig));

server.use(express.json());

server.use("/", apiRouter)

module.exports = server;

