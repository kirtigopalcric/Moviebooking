const Artist = require('../models/artist.model');

// Find all artists
exports.findAllArtists = (req, res) => {
  Artist.find()
    .then(artists => {
      res.json(artists);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving artists."
      });
    });
};
