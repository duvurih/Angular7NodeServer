const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    observataions: [{
        type: Schema.Types.ObjectId,
        ref: 'observation'
    }]
});

module.exports = mongoose.model('user', userSchema);