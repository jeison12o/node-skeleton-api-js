const roleService = require('../services/role.services');
const userService = require('../services/user.services');
const { encrypt } = require('../helpers/handleBcrypt');

const createRoles = async () => {
    try {
        const count = await roleService.getCountAll();
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