//const http = require('http');
const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

//const db = require("../models");
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

//create server
/*const server = http.createServer((req, res) => {
  if (req.url === '/movies') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('All Movies Data in JSON format from Mongo DB');
  } else if (req.url === '/genres') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('All Genres Data in JSON format from Mongo DB');
  } else if (req.url === '/artists') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('All Artists Data in JSON format from Mongo DB');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});*/



/*db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });*/


//server.listen(9000, () => {
 // console.log('Server running at http://localhost:9000/');
//});

// Load express and create an express app object.
const express = require('express');
const app = express();

// Load cors module.
const cors = require('cors');

// Enable CORS for all origins.
app.use(cors());

// Set the default route for the index or root path i.e /
app.get("/", (req, res) => {
  res.json({ message: "Movie booking application" });
});

// Set the PORT and start the server (i.e LISTEN on PORT for request).
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
