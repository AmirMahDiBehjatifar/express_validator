const { body } = require("express-validator");

const loginValidator = () => [
    body("email").isEmail().withMessage("email is invalid"),
    body("password").isLength({ min: 6, max: 20 }).withMessage("password must to less than 20 and more than 6 char")
]

const registerValidator = () => [
    body("fullName").isLength({ min: 5, max: 15 }).withMessage("FullName Should be 5 minimum char and 15maximum"),
    body("age").custom(value => {
        if (isNaN(value)) {
            throw new Error("age must be a number")
        } else if (value > 100 || value < 12) {
            throw new Error("age must be between 12 ~ 99 years old")
        }
        return true
    }),
    body("mobile").isMobilePhone(['fa-IR']).withMessage("Iranian Mobile phones are just acceptable"),
    body("password").isLength({ min: 5, max: 10 }).withMessage("password must be 5char and 10char"),
    body("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("password does not match with confirmation");
        }
        return true
    })
]

module.exports = {
    registerValidator,
    loginValidator,

}