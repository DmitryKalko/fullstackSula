const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    fio: String,
    id: Number,
    lastName: String,
    flagName: String,
    imgId: Number,
    date: String,
    email: String,
    status: Boolean,
    //blob: String,
});

const Client = mongoose.model('client', ClientSchema);

module.exports = Client;