const userService = require('../services/user.services');
const { ROLES } = require('../models/Role');

const checkDuplicateEmail = async (req, res, next) => {
    try {
        const userDuplicate = await userService.getOneUserByEmail(req.body.email);
        if(userDuplicate)
            return res.status(400).json({ error: "the email already exists"});
        next();
    } catch (error) {
    }
}

const checkRoleExisted = async (req, res, next) => {
    if(req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({ error: `Role ${req.body.roles[i]} does not exist`});
            }
        }
    }
    next();
}

module.exports = { checkDuplicateEmail, checkRoleExisted };