
import mongoose from "mongoose";


var schema = mongoose.Schema;

var UserSchema = schema({
    name: String,
    surname: String,
    email: String,
    img: String,
    pets: Array,
    chats: Array,
    matchs: Array    
});

module.exports = mongoose.model('User', UserSchema);