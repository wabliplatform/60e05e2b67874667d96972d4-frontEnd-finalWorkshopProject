const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','homePage.html')));
			this.app.get('/homePage', (req, res) => res.sendFile(path.join(__dirname,'html','homePage.html')));
			this.app.get('/homePage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','homePage.html')));
			this.app.get('/createProject', (req, res) => res.sendFile(path.join(__dirname,'html','createProject.html')));
			this.app.get('/createProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createProject.html')));
			this.app.get('/updateProject', (req, res) => res.sendFile(path.join(__dirname,'html','updateProject.html')));
			this.app.get('/updateProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateProject.html')));
			this.app.get('/viewProject', (req, res) => res.sendFile(path.join(__dirname,'html','viewProject.html')));
			this.app.get('/viewProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewProject.html')));
			this.app.get('/createDeliverable', (req, res) => res.sendFile(path.join(__dirname,'html','createDeliverable.html')));
			this.app.get('/createDeliverable/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createDeliverable.html')));
			this.app.get('/updateDeliverable', (req, res) => res.sendFile(path.join(__dirname,'html','updateDeliverable.html')));
			this.app.get('/updateDeliverable/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateDeliverable.html')));
			this.app.get('/viewDeliverables', (req, res) => res.sendFile(path.join(__dirname,'html','viewDeliverables.html')));
			this.app.get('/viewDeliverables/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewDeliverables.html')));
			this.app.get('/createWorkpackage', (req, res) => res.sendFile(path.join(__dirname,'html','createWorkpackage.html')));
			this.app.get('/createWorkpackage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createWorkpackage.html')));
			this.app.get('/updateWorkpackage', (req, res) => res.sendFile(path.join(__dirname,'html','updateWorkpackage.html')));
			this.app.get('/updateWorkpackage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateWorkpackage.html')));
			this.app.get('/createEmployee', (req, res) => res.sendFile(path.join(__dirname,'html','createEmployee.html')));
			this.app.get('/createEmployee/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createEmployee.html')));
			this.app.get('/viewEmployees', (req, res) => res.sendFile(path.join(__dirname,'html','viewEmployees.html')));
			this.app.get('/viewEmployees/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewEmployees.html')));
			this.app.get('/viewWorkpackages', (req, res) => res.sendFile(path.join(__dirname,'html','viewWorkpackages.html')));
			this.app.get('/viewWorkpackages/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewWorkpackages.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;