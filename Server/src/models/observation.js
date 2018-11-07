const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const observationSchema = new Schema({
    id: String,
    discussion: String,
    discussionDate: Date,
    discussionLocation: String,
    subject: String,
    outcome: String,
    discussionWith:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    recordedBy:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    recordedDate: Date
});

module.exports = mongoose.model('observation', observationSchema);