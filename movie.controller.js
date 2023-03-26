const Movie = require('../models/movie.model.js');

// Find all movies by status
exports.findAllMovies = (req, res) => {
  const status = req.query.status;
  Movie.find({status: status})
    .then(movies => {
      res.json(movies);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies."
      });
    });
};

// Find one movie by id
exports.findOne = (req, res) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then(movie => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found with id " + id
        });
      }
      res.json(movie);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Movie not found with id " + id
        });
      }
      return res.status(500).send({
        message: "Error retrieving movie with id " + id
      });
    });
};

// Find all shows of a specific movie by id
exports.findShows = (req, res) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .populate('shows')
    .then(movie => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found with id " + id
        });
      }
      res.json(movie.shows);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Movie not found with id " + id
        });
      }
      return res.status(500).send({
        message: "Error retrieving shows of movie with id " + id
      });
    });
};
