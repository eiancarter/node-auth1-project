const bcrypt = require("bcryptjs");
const router = require("express").Router()

const authRouter = require("../auth/auth-router");
usersRouter = require("../users/users-router");
const restricted = require("../auth/restricted");

router.use("/auth", authRouter);
router.use("/users", restricted, usersRouter);

router.get("/hash", (req, res) => {
    const authentication = req.headers.authentication;
    const hash = bcrypt.hashSync(authentication, 8);

    res.json({ originalValue: authentication, hashedValue: hash });
});

router.get("/", (req,res) => {
    res.json({ api: "working working"});
});

module.exports = router;
