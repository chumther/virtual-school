//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var path = require('path');
var root = __dirname;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("logIn");
});

app.post("/horario", function(req, res){
  res.render("horario-v2");
});

app.get("/horario", function(req, res){
  res.redirect("/");
});

app.get("/clase", function(req, res){
  res.render("clase");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
