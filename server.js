var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	Parse = require('parse').Parse;
	projects = require('./controllers/projects');

// Parse fun
// PARSE KEYS HERE (REMOVED FOR COMMIT TO GITHUB)

// Access the body posts content
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars view engine setup
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');


var notImplemented = function(req,res) {
	res.sendStatus(501);
}

// projects
app.get('/projects',projects.index);
app.get('/projects/new',projects.new);
app.post('/projects/new',projects.create);
app.get('/project/:projectId',notImplemented);
app.put('/project/:projectId',notImplemented);
app.delete('/project/:projectId',notImplemented);

// comments
app.post('/projects/:projectId/comments',notImplemented);
app.post('/projects/:projectId/comments:/commentId',notImplemented);

app.listen(8080);