const Genre = require('../models/genre.model');

// Find all genres
exports.findAllGenres = (req, res) => {
  Genre.find()
    .then(genres => {
      res.json(genres);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving genres."
      });
    });
};
