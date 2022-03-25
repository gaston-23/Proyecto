
import mongoose from "mongoose";


var schema = mongoose.Schema;

var MatchSchema = schema({
    user: {type: schema.ObjectId, ref: 'User'},
    pet: {type: schema.ObjectId, ref: 'Pet'},
    time: Date,
    pet_matched: {type: schema.ObjectId, ref: 'Pet'},
    owner: {type: schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('match', MatchSchema);