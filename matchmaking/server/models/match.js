
import mongoose from "mongoose";


var schema = mongoose.Schema;

var MatchSchema = schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    pet: {type: Schema.ObjectId, ref: 'Pet'},
    time: Date,
    pet_matched: {type: Schema.ObjectId, ref: 'Pet'},
    owner: {type: schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('match', MatchSchema);