const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cart:{
        type: Array,
        default: []
    }
})

const User = mongoose.model('user', userSchema, 'users');
module.exports = User;