const roleModel = require('../models/Role');

const getCountAll = async () => {
    const count = await roleModel.estimatedDocumentCount();
    return count;
}

const getByArrayName = async (arrayName) => {
    const roles = await roleModel.find({name: { $in: arrayName}});
    return roles;
}

module.exports = { getCountAll, getByArrayName };