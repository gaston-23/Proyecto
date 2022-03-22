
import mongoose from "mongoose";


var schema = mongoose.Schema;

var UserSchema = schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    tel: String,
    img: String,
    matchs: [{type: schema.ObjectId, ref: 'User'}],  
});

module.exports = mongoose.model('User', UserSchema);