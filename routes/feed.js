const express = require("express");
const router = express.Router();
const passport = require('passport');

const feedController = require("../controllers/feed");

router.get('/', feedController.getAllFeed);

router.post('/', passport.authenticate('jwt', {session: false}), feedController.addFeed);

router.get('/filter', feedController.filterFeed);

module.exports = router;