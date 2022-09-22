const userService = require('../services/user.services');

const deleteUser = async (req, res ) => {
    try {
        const { id } = req.params;
        const response = await userService.deleteOneUser(id);
        res.send(response);
    } catch (error) {
        
    }
}

const getAllUsers = async (req, res ) => {
    try {
        const response = await userService.getUsers();
        res.send(response);
    } catch (error) {
        
    }
}

const getUserId = async (req, res ) => {
    try {
        const { id } = req.params;
        const response = await userService.getOneUserById(id);
        res.send(response);
    } catch (error) {
        
    }
}

const putUser = async (req, res ) => {
    try {
        const { id } = req.params;
        const { name, age, password } = req.body;
        const response = await userService.updateOneUser(id, {name, age, password});
        res.send(response);
    } catch (error) {
        
    }
}

module.exports = { deleteUser, getAllUsers, getUserId, putUser };