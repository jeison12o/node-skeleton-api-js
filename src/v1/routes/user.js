const  express  = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');

router
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getUserId)
    .put('/:id', userController.putUser)
    .delete('/:id', userController.deleteUser);

module.exports = router;