const bcrypt = require('bcryptjs');

const encrypt = async(textPlain) => {
    const hash = await bcrypt.hash(textPlain, 8);
    return hash;
};

const verifyPassword = async (passwordPlain, passwordHash) => {
    return await bcrypt.compare(passwordPlain, passwordHash);
};

module.exports = { encrypt, verifyPassword };