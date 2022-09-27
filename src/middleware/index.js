const { checkDuplicateEmail, checkRoleExisted } = require('./verifysignUp');
const { checkJwt, checkRoleAuth } = require('./authJwt');

module.exports = { checkDuplicateEmail, checkRoleExisted, checkJwt, checkRoleAuth };