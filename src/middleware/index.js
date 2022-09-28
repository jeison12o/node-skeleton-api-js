const { checkDuplicateEmail, checkRoleExisted } = require('./verifysignUp');
const { checkJwt, checkRoleAuth } = require('./authJwt');
const { logMiddleware } = require('./log');

module.exports = { checkDuplicateEmail, checkRoleExisted, checkJwt, checkRoleAuth, logMiddleware };