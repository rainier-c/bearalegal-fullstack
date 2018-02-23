const {db} = require('../db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema(
  {
    short: {
      type: String,
      unique: true
    },
    full: {
      type: String,
    },
    type: String,
    description: String,
    filename: String
  },
  {
    timestamps:
    {
      createdAt: 'created_at'
    }
  }
);

module.exports = mongoose.model('Form', FormSchema);