const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedSchema = new Schema({
    favoriteSport: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    goal: {
        type: String,
        require: true
    },
    userID: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Feed', feedSchema); 