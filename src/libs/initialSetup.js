const Role = require('../models/Role');
const roleService = require('../services/role.services');
const userService = require('../services/user.services');
const { encrypt } = require('../helpers/handleBcrypt');

const createRoles = async () => {
    try {
        const count = await roleService.getCountAll();
        console.log(`${count} roles`);
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
    const userAdmin = await userService.getOneUserByEmail('admin@gmail.com');
    const roles = await roleService.getByArrayName(["admin"]);
    if(userAdmin){
        console.log('admin is already created');
        return;
    }

    const admin = {
        name: "admin",
        age: 24,
        email: "admin@gmail.com",
        password: await encrypt('admin'),
        roles: roles.map((role) => role._id),
    }
    await userService.insertOneUser(admin);
    console.log('inicial admin created!');
};

module.exports = { createRoles, createInicialAdmin };