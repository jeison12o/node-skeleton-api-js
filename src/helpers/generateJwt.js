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

module.exports = { tokenSign }