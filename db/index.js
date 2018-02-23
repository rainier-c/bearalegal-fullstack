// Require dependencies
const mongodb = require("mongodb");
const mongoose = require("mongoose");
// Load MongoDB access credientials (from env if exist, 
// otherwise from local file)
const MONGODB_URI_TOKEN = process.env.MONGODB_URI_TOKEN || require("../config/index");

// Connect to mongoDB database via mongoose
const db = mongoose.connect(MONGODB_URI_TOKEN);

// Export DB connection
exports.db = db;