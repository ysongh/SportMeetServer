const Feed = require('../models/Feed');

exports.addFeed = (req, res, next) => {
    const favoriteSport = req.body.favoriteSport;
    const level = req.body.level;
    const city = req.body.city;
    const goal = req.body.goal;

    const newFeed = new Feed({
        favoriteSport: favoriteSport,
        level: level,
        city: city,
        goal: goal,
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