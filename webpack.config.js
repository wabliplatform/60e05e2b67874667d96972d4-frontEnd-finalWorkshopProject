const path = require('path');

module.exports = {
  entry: {
	'homePage' : './javascript/homePage.js',
	'createProject' : './javascript/createProject.js',
	'updateProject' : './javascript/updateProject.js',
	'viewProject' : './javascript/viewProject.js',
	'createDeliverable' : './javascript/createDeliverable.js',
	'updateDeliverable' : './javascript/updateDeliverable.js',
	'viewDeliverables' : './javascript/viewDeliverables.js',
	'createWorkpackage' : './javascript/createWorkpackage.js',
	'updateWorkpackage' : './javascript/updateWorkpackage.js',
	'createEmployee' : './javascript/createEmployee.js',
	'viewEmployees' : './javascript/viewEmployees.js',
	'viewWorkpackages' : './javascript/viewWorkpackages.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};