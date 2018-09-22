const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    name: String,
    create_date: Date,
    isPublic: {
        type: Boolean,
        default: true,
    },
    password: String,
});
module.exports = mongoose.model('Chatroom', schema);
