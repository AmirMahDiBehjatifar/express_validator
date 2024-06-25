const express = require("express");
const app = express();
const { RouteHandler, ErrorHandler } = require("./util/errorHandler");
const { validationResult, check } = require("express-validator");
const { loginValidator, registerValidator } = require("./validators/auth.validator");
const { checkValidation } = require("./middlewares/valid1");
const { IdValidator } = require("./validators/blog.validator");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get", (req, res) => {
    res.send("hello world")
})
app.post("/login", loginValidator(),checkValidation, (req, res) => {
res.send(req.body)
})

app.post("/register",registerValidator(),checkValidation, (req, res) => {
    res.send(req.body)
})
app.get("/blogs/:id",IdValidator,checkValidation, (req, res) => {
    res.send(req.params)
})

// app.use(RouteHandler)
// app.use(ErrorHandler)
app.listen(3000, () => {
    console.log("server run on port 3000");
})