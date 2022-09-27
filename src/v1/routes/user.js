const  express  = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
const { checkJwt, checkRoleAuth } = require('../../middleware');

router
    .get('/', [checkJwt, checkRoleAuth(["admin"])], userController.getAllUsers)
    .get('/:id', userController.getUserId)
    .put('/:id', userController.putUser)
    .delete('/:id', [checkJwt, checkRoleAuth(["admin"])], userController.deleteUser);

module.exports = router;