const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    password:{
        type: String
    },
    roles:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "role"
        }
    ]
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model('user', UserSchema);