// Require dependencies
const Request = require('../models/request');

const request_list = (req, res) => {
  Request.find()
  .sort('-created_at')
  .exec((err, requests) => {
    if (err) {
      res.send("Error");

    } else {
      res.send(requests);
    }
  });

};

const request_create = (req, res) => {

  Request.create({
    token: req.body.token,
    channel_name: req.body.channel_name,
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    command: req.body.command,
    text: req.body.text
  }, (err) => {
    if (err) {
      // log error to server for records
      console.log(err);
    }
  });

};

const request_update = (req, res) => {
  // Does not need to be implemented at this time.
};

const request_delete = (req, res) => {
  // Does not need to be implemented at this time.
};

module.exports.request_list = request_list;
module.exports.request_create = request_create;
