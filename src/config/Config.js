require('dotenv').config();

const port = process.env.PORT || 4000;
const mongodb_uri = process.env.MONGODB_URI;
module.exports = {port, mongodb_uri};