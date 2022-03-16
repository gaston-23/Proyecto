
import mongoose from "mongoose";


var schema = mongoose.Schema;

var PetSchema = schema({
    name: String,
    age: Number,
    img: String,
    kind: String,
    subkind: String,
    tags: Array,
    owner: {type: schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Pet', PetSchema);