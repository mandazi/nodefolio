var Parse = require('parse').Parse;
Parse.initialize("9lhT1ShoknzmY79AhDIaE3Q8Gq1oCEUtiiWOZAAd", "GOW33U7g4PLw1YQPjjI5eONRE2v3UsOewxBXiHGY","qfXMFNC0wI2ZDWqEfNNzaGyUfJi2TqSNtmyshPeC");

module.exports.create = function(req,res){

	var Project = Parse.Object.extend("Project");
	var project = new Project();
	project.save(req.body).then(function(object) {
		res.redirect('/projects');
	});

};

module.exports.index = function(req,res){

	var query = new Parse.Query('Project');
	query.find({
	  success: function(projects) {
	  	console.log(projects);
	    // results is an array of Parse.Object.
	    var json = {
	    	projects: projects
	    }
		res.render('projects/index',json);
		//res.json(projects);
	  },
	  error: function(error) {
	    // error is an instance of Parse.Error.
	    console.log("Error: " + error.code + " " + error.message);

	  }
	});

};

// rendering an html form to let user create a project
module.exports.new = function(req,res){
	res.render('projects/new');
	/*res.send('<form method="post" action="/projects">\
		<input type="text" placeholder="title" name="title">\
		<input type="text" placeholder="client" name="client">\
		<textarea name="description"></textarea>\
		<button type="submit">Add Project</button>\
		</form>');*/
};