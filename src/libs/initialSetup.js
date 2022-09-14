const Role = require('../models/Role');
const User = require('../models/User');
const { encrypt } = require('../helpers/handleBcrypt');

const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        if(count > 0) return;
        const values = await Promise.all([
            new Role({name: "user"}).save(),
            new Role({name: "admin"}).save(),
        ]);
        console.log(values); 
    } catch (error) {
        console.log(error);
    }
};

const createInicialAdmin = async () => {
    const user = await User.findOne({ email: "admin@gmail.com"});
    const roles = await Role.find({name: { $in: ["admin"]}});
    if(user) return;
    await User.create({
        name: "admin",
        age: 24,
        email: "admin@gmail.com",
        password: await encrypt('admin'),
        roles: roles.map((role) => { role._id}),
    });
    console.log('inicial admin created!');
};

module.exports = { createRoles, createInicialAdmin };