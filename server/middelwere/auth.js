const jwtToken = require("jsonwebtoken");

const authenticationToken = (res, req, next) => {
    var secretKey = "nsdfytfjksdtejaljsdfshubham";
    var autorizationToken = req.headers["authorization"];
    var result = {};

    try {
        if (autorizationToken) {
            var authToken = req.headers["authorization"].split("Bear ")[1];
            result = jwtToken.verify(authToken, secretKey)
            next();
        } else {
            result = {
                error: "Atontication Error",
                status: 401
            }
            res.status(401).send(result)
        }
    } catch (error) {
        result = {
            error: "Atontication Error" + error,
        }
    }
}

module.exports = {
    authenticationToken
}