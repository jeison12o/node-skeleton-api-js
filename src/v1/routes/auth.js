const  express  = require('express');
const router = express.Router();
const { signUp, signIn } = require('../../controllers/auth.controller');
const { checkDuplicateEmail, checkRoleExisted, logMiddleware } = require('../../middleware');
const { validateCreate } = require('../../validators/userValidator');

//login
router.post('/signin', [logMiddleware], signIn);
//registrarse
router.post('/signup', [ validateCreate,checkDuplicateEmail, checkRoleExisted], signUp);

module.exports = router;