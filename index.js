const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Artist = require('../models/artist.model');
const Genre = require('../models/genre.model');
const Movie = require('../models/movie.model');
const User = require('../models/user.model');

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb://localhost:27017/moviesdb';

db.Artist = Artist;
db.Genre = Genre;
db.Movie = Movie;
db.User = User;

module.exports = db;
