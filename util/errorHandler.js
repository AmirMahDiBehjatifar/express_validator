const RouteHandler = (req, res, next) => {
    res.status(404).json({
        statusCode: res.statusCode,
        error: {
            message: "ROUTE NOT FOUND",
            URL: req.url,
        }
    })
}


const ErrorHandler = (err, req, res, next) => {
    res.json({
        StatusCode: err.status || 504,
        error: {
            message: err.message || "Internal Server Error..",
            invalidParams: err.error
        }
    })
}
module.exports = {
    ErrorHandler,
    RouteHandler
}