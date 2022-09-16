const userModel = require('../models/User');

const getUsers = async () => {
    const responseUser = await userModel.find({});
    return responseUser;
}

const getOneUserId = async (id) => {
    const responseUser = await userModel.findOne({ _id: id});
    return responseUser;
}

const getOneUserEmail = async (email) => {
    const responseUser = await userModel.findOne({ email: email });
    return responseUser;
}

const insertOneUser = async (email) => {
    
}

const updateOneUser = async (email) => {
    
}

const deleteOneUser = async (email) => {
    
}

module.exports = { getUsers, getOneUserId, getOneUserEmail, insertOneUser, updateOneUser, deleteOneUser };