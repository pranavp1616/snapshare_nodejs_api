const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        username : String,
        email : String,
        password  : String
    }
);

module.exports = mongoose.model('UserModel', UserSchema);