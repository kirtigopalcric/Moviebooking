const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

//find all artists
router.get('/artists', artistController.findAllArtists);

module.exports = router;
