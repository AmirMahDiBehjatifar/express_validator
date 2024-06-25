const { validationResult } = require("express-validator");


function checkValidation(req, res, next) {
    const error = validationResult(req);
    // console.log(error);
    let obj = {}
    error?.errors?.forEach(err => {
        obj[err.path] = err.msg
    })

    if (Object.keys(obj).length > 0) {

        throw {
            statusCode: 400,
            message: "validation error",
            Error: {
                obj
            }
        }
    } else {
        next();
    }
}

module.exports = {
    checkValidation
}