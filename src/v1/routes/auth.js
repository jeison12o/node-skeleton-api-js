const  express  = require('express');
const router = express.Router();
const { signUp, signIn } = require('../../controllers/auth.controller');

router.post('/login', signUp);
router.post('/register', signIn);

module.exports = router;