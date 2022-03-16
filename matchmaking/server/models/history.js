
import mongoose from "mongoose";


var schema = mongoose.Schema;

var HistorySchema = schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    petViewed: {type: Schema.ObjectId, ref: 'Pet'},
    time: Date,
});

module.exports = mongoose.model('history', HistorySchema);