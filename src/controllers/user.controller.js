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
        
    } catch (error) {
        
    }
}

const putUser = async (req, res ) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = { deleteUser, getAllUsers, getUserId, putUser };