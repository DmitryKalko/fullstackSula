const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LastnamesSchema = new Schema({
    id: Number,
    lastName: String,
    flagName: String,
    imgId: Number,
    imgUrl: String,
});

const Lastnames = mongoose.model('lastnames', LastnamesSchema);

module.exports = Lastnames;