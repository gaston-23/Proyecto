
import mongoose from "mongoose";


var schema = mongoose.Schema;

var PetSchema = schema({
    name: String,
    age: Number,
    img: String,
    kind: String,
    subkind: String,
    tags: Array    
});

module.exports = mongoose.model('Pet', PetSchema);