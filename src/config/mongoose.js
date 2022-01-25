const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: Date, required: true },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});


module.exports = User;