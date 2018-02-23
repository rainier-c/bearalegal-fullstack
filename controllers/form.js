// Require dependencies
const Form = require("../models/form");

const form_list = (req, res) => {
  console.log('fired');
  Form.find().exec((err, forms) => {
    if (err) {
      res.send("Error");
    } else {
      res.send(forms);
    }
  });
};

const form_list_promise = (req, res) => {
  return new Promise((resolve, reject) => {
    Form.find().exec((err, forms) => {
      if (err) {
        reject(err);
      } else {
        resolve(forms);
      }
    });
  });
};

const form_download = (req, res) => {
  res.download(
    __dirname + `/../documents/${req.params.doc}.docx`,
    `${req.params.doc}.docx`,
    err => {
      if (err) {
        res.send(err);
      }
    }
  );
};

const form_create = (req, res) => {
  Form.create(
    {
      full: req.body.full,
      short: req.body.short,
      type: req.body.type,
      description: req.body.description,
      filename: req.file.filename
    },
    (err, form) => {
      if (err) {
        res.send("Error");
      } else {
        res.send(form);
      }
    }
  );
};

const form_update = (req, res) => {
  if (req.file) {
    Form.update(
      { short: req.body.short },
      {
        full: req.body.full,
        type: req.body.type,
        description: req.body.description,
        filename: req.file.filename
      },
      (err, form) => {
        if (err) {
          res.send("Error");
        } else {
          res.send(form);
        }
      }
    );
  } else {
    Form.update(
      { short: req.body.short },
      {
        full: req.body.full,
        type: req.body.type,
        description: req.body.description
      },
      (err, form) => {
        if (err) {
          res.send("Error");
        } else {
          res.send(form);
        }
      }
    );
  }
};

const form_delete = (req, res) => {
  Form.remove({ _id: req.params.id }, err => {
    if (err) {
      res.send("Error");
    } else {
      res.send("Success");
    }
  });
};

module.exports.form_list = form_list;
module.exports.form_list_promise = form_list_promise;
module.exports.form_download = form_download;
module.exports.form_create = form_create;
module.exports.form_update = form_update;
module.exports.form_delete = form_delete;
