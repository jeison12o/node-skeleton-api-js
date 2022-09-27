const userService = require('../services/user.services');
const roleService = require('../services/role.services');
const { encrypt, verifyPassword } = require('../helpers/handleBcrypt');
const { tokenSign } = require('../helpers/handleJwt');

const signIn = async (req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await userService.getOneUserByEmail(email);
        if(!user){
            res.status(404);
            res.send({error: 'User not found'});
        }

        const checkPassword = await verifyPassword(password, user.password);

        if(!checkPassword){
            res.status(409);
            res.send({error: 'Invalid password'});
            return;
        }

        if(checkPassword){
            const tokenJwt = await tokenSign(user);
            res.status(200);
            res.send({
                token: tokenJwt,
                data: user
            });
            return;
        }
    } catch (error) {
        
    }
}

const signUp = async (req, res) => {
    try {
        const { name, email, age, password, roles } = req.body;
        const passwordHash = await encrypt(password);
        const rolesId = await roleService.getByArrayName(roles);
        const newUser = {
            name,
            email,
            age,
            password: passwordHash,
            roles: rolesId.map((role) =>  role._id),
        };
        const response = await userService.insertOneUser(newUser);
        const tokenJwt = await tokenSign(response);
        res.send({
            token: tokenJwt,
            data: response
        });
    } catch (error) {
        
    }
}

module.exports = { signUp, signIn }