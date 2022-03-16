
import mongoose from "mongoose";


var schema = mongoose.Schema;

var LikeSchema = schema({
    user: {type: schema.ObjectId, ref: 'User'},
    pet: {type: schema.ObjectId, ref: 'Pet'},
    time: Date,
    owner: {type: schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('like', LikeSchema);