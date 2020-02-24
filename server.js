const express = require("express");
const server = express();

//router here

server.use(express.json());
//use route api endpoints here
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', userRouter);

server.get("/", (req, res) => {
    res.send('<h2>Server running...</h2>')
})

module.exports = server;

