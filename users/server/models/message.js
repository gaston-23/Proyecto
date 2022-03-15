
import mongoose from "mongoose";


var schema = mongoose.Schema;

var MessageSchema = schema({
    destiny: {type: Schema.ObjectId, ref: 'User'},
    msg: Text,
    time: Date,
    owner: {type: schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('message', MessageSchema);