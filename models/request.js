const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema(
  {
    token: String,
    channel_name: String,
    user_id: String,
    user_name: String,
    command: String,
    text: String
  },
  {
    timestamps:
    {
      createdAt: 'created_at'
    }
  }
);

module.exports = mongoose.model('Request', RequestSchema);
