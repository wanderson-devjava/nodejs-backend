const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/api/boxes', BoxController.store);
routes.get('/api/boxes/:id', BoxController.show);

routes.post('/api/boxes/:id/files', multer(multerConfig).single('file') ,FileController.store);

module.exports = routes;