// Require dependencies 
const express = require('express');
const router = express.Router();
const multer = require('multer');

// Require controllers
const formController = require('../controllers/form.js');
const requestController = require('../controllers/request.js');
const slackController = require('../controllers/slack.js');

// Configure multer for file saving
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, __dirname + '/../documents/');
  },

  filename: function (req, file, cb) {
    cb(null, req.body.short + '.docx');
  }

});

const upload = multer({ storage: storage });

// Routes for Forms
router.get('/documents', formController.form_list);
router.get('/documents/:doc', formController.form_download);
router.post('/documents', upload.single('selectedFile'), formController.form_create);
router.put('/documents', upload.single('selectedFile'), formController.form_update);
router.delete('/documents/:id', formController.form_delete);

// Routes for Requests
router.get('/requests', requestController.request_list);

// Routes for Slack
router.post('/slack/command/legal', slackController.respond);

module.exports = router;
