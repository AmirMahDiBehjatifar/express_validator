const { param } = require("express-validator");

const IdValidator = param("id").isMongoId().withMessage("invalid objectid");

module.exports = {
    IdValidator
}