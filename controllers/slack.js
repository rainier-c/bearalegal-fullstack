// Require dependencies
const Request = require('../models/request');
const requestController = require('./request');
const formController = require('./form');

// Require helper methods
const slack = require('./slackHelpers');

// Controller methods
const respond = (req, res) => {
  // Record the request for analytics
  requestController.request_create(req);

  // Get first word after '/legal'
  let action = req.body.text.split(" ").shift();

  formController.form_list_promise()
  .then((forms) => {
    let commands = {};

    forms.forEach((item, index) => {
      commands[item.short] = item;
    });

    return commands;
  })
  .then((commands) => {

    if (req.body.text.trim() === '') {
      slack.sendHelp(req, res, commands);
    } else if (commands[action]) {
      slack.sendResponse(req, res, commands, commands[action]);
    } else {
      slack.sendError(req, res);
    }

  })
  .catch((err) => {
    // log error to server for records
    console.log(err)
  });

};


module.exports.respond = respond;
