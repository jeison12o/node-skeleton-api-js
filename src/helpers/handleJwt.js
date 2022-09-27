const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config');

const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
            roles: user.roles
        },
        jwt_secret,
        {
            expiresIn: "2h",
        }
    );
};

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, jwt_secret);
    } catch (error) {
        return null;
    }
}

const decodeSign = async (token) => {
    return jwt.decode(token, null);
}

module.exports = { tokenSign, verifyToken, decodeSign };