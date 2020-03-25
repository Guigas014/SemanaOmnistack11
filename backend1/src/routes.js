const express = require('express');

const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

//Sessiions
routes.post('/session', SessionController.create);

//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Profile
routes.get('/profile', ProfileController.index);    

//Incidents
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;
