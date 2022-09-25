const  express  = require('express');
const router = express.Router();
const { signUp, signIn } = require('../../controllers/auth.controller');
const { checkDuplicateEmail, checkRoleExisted } = require('../../middleware');

//login
router.post('/signin', signIn);
//registrarse
router.post('/signup', [checkDuplicateEmail, checkRoleExisted], signUp);

module.exports = router;