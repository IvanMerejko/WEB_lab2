const express = require("express");

const app = express();

const path = require("path");

const mustache = require('mustache-express');

const Words = require('./words/words');

const mongoose = require("mongoose"); //mongodb

mongoose.connect("mongodb://localhost/words", { useNewUrlParser : true}); // connect to database
mongoose.connection.once('open', function() {
  console.log("mongodb has started");
}).on('error', function(error) {
  console.log("error: ", error);
});

const viewsDir = path.join(__dirname, 'views'); // equal D:\example\vocabulary\views
app.engine("mst", mustache(path.join(viewsDir, "partials")));// bind mst with D:\example\vocabulary\views\partials
app.set('views', viewsDir);
app.set('view engine', 'mst');
app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server start");
});

app.get('/', function(req, res) {
  res.render('index');
});
