const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    content: String,
    isEdited: {
        default: false,
        type: boolean,
    },
    isDeleted: {
        default: false,
        type: boolean,
    },
    version: [
        {
            modify_date: Date,
            beforeModify: String,
            afterModify: String,
        }
    ],
    owner: Object,
});
module.exports = mongoose.model('Messages', schema);
