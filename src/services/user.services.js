const userModel = require('../models/User');

const getUsers = async () => {
    const responseUser = await userModel.find({});
    return responseUser;
}

const getOneUserById = async (id) => {
    const responseUser = await userModel.findOne({ _id: id});
    return responseUser;
}

const getOneUserByEmail = async (email) => {
    const responseUser = await userModel.findOne({ email: email });
    return responseUser;
}

const insertOneUser = async (newUser) => {
    const responseUser = await userModel.create(newUser);
    return responseUser;
}

const updateOneUser = async (id, user) => {
    const responseUser = await userModel.findOneAndUpdate({ _id: id}, user, {
        new:true,
    });
    return responseUser;
}

const deleteOneUser = async (id) => {
    const responseUser = await userModel.remove({ _id: id});
    return responseUser;
}

module.exports = { getUsers, getOneUserById, getOneUserByEmail, insertOneUser, updateOneUser, deleteOneUser };