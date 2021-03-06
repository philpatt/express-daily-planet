
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

var db = require('./models');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.use('/articles', require('./controllers/articles.js'));

app.get('/', function(req, res) {
	// db.dailyplanet.create({
	// 	title:'Test Title',
	// 	body: 'This is a test content article',
	// }).then(function(data){
	// });
  res.render('home');
});

app.get('/static/about', function(req, res){
	res.render('static/about.ejs');
});

app.get('/static/contact', function(req, res){
	res.render('static/contact.ejs');	
});

app.listen(3000);