const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    name: String,
    score: Number,
});

module.exports = model('Users', usersSchema);