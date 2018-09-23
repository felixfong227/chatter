const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    name: String,
    profilePicture: String,
    date_of_creation: Date,
    socialMedias: {
        isPublic: {
            type: boolean,
            default: false,
        },
        links: {
            twitter: String,
            facebook: String,
        }
    }
});
module.exports = mongoose.model('Users', schema);
