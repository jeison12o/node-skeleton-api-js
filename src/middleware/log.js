const logMiddleware = (req, res, next) => {
    const userAgent = req.headers["user-agent"];
    console.log("user-agent",userAgent);
    next();
}

module.exports = { logMiddleware }