const Feed = require('../models/Feed');

exports.getAllFeed = (req, res, next) => {
    Feed.find()
        .then(result => {
            res.status(200).json({
                success: "Success on finding all feed",
                items: result
            });
        })
        .catch(err => console.log(err));
};

exports.filterFeed = (req, res, next) => {
    const city = req.query.city;
    
    Feed.find({ 'city' : new RegExp(city, 'i') })
        .then(result => {
            res.status(200).json({
                success: "Success on finding all feed that match: " + city,
                items: result
            });
        })
        .catch(err => console.log(err));
};

exports.addFeed = (req, res, next) => {
    const favoriteSport = req.body.favoriteSport;
    const level = req.body.level;
    const city = req.body.city;
    const goal = req.body.goal;
    const userName = req.user.name || "Guest";

    const newFeed = new Feed({
        favoriteSport: favoriteSport,
        level: level,
        city: city,
        goal: goal,
        userName: userName
    });

    newFeed.save()
        .then(result => {
            res.status(201).json({
                success: "Add Feed Success",
                feed: result
            });
        })
        .catch(err => console.log(err));
};