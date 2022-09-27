const { verifyToken } = require('../helpers/handleJwt');
const userService = require('../services/user.services');
const roleService = require('../services/role.services');

const checkJwt = async (req, res, next) => {
    if(!req.headers.authorization) return res.status(403).json({ message: "No token provided"});
    const token = req.headers.authorization.split(' ').pop();
    try {
        const tokenData = await verifyToken(token);
        const userData = await userService.getOneUserById(tokenData._id);
        if(!userData) return res.status(404).json({ message: "No user found"});
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized"});
    }
};

const checkRoleAuth = (roles) =>  async (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop();
    try {
        const tokenData = await verifyToken(token);
        const rolesUser = await roleService.getByArrayId(tokenData.roles);
        const rolesUserName = rolesUser.map((role) =>  role.name);
        const result = rolesUserName.map((role) =>  roles.includes(role));
        console.log(result);
        if(result.includes(true)){
            next();
        }else{
            return res.status(409).json({ message: "Unauthorized role"});    
        }
        
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized"});
    }
};

module.exports = { checkJwt, checkRoleAuth };