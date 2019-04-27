const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feed");

router.get('/', feedController.getAllFeed);

router.post('/', feedController.addFeed);

router.get('/filter', feedController.filterFeed);

module.exports = router;