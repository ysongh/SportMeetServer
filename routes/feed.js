const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feed");

router.post('/', feedController.addFeed);

module.exports = router;