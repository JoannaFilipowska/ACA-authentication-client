const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const AuthController = require("../controllers/auth");

router.post("/signup", (req, res) => {
  AuthController.SignUp(req.body)
    .then(() => res.send("User created successfully"))
    .catch(err => res.send(err.message));
});

router.post("/login", (req, res) => {
  // contents of login route
  AuthController.Login(req.body)
    .then(result => {
      var token = jwt.sign({ ...result }, "secret");
      return res.send(token);
    })

    .catch(err => res.send(err.message));
});

module.exports = router;
