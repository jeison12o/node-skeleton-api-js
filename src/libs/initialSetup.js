const role = require('../models/Role');
const user = require('../models/User');
const { encrypt } = require('../helpers/handleBcrypt');

const createRoles = async () => {
    try {
        const count = await role.estimatedDocumentCount();
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
    const userAdmin = await user.findOne({ email: "admin@gmail.com"});
    const roles = await role.find({name: { $in: ["admin"]}});
    if(userAdmin) return;
    await user.create({
        name: "admin",
        age: 24,
        email: "admin@gmail.com",
        password: await encrypt('admin'),
        roles: roles.map((role) => { role._id}),
    });
    console.log('inicial admin created!');
};

module.exports = { createRoles, createInicialAdmin };