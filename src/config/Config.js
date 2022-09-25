require('dotenv').config();

const port = process.env.PORT || 4000;
const mongodb_uri = process.env.MONGODB_URI;
const jwt_secret = process.env.JWT_SECRET;

module.exports = {port, mongodb_uri, jwt_secret};