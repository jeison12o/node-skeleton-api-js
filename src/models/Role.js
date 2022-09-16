const mongoose = require('mongoose');
const ROLES = ['user','admin'];

const RoleSchema = new mongoose.Schema(
{
    name: String
},
{
    timestamps:true,
    versionKey:false
});

module.exports =  mongoose.model('roles', RoleSchema), ROLES;