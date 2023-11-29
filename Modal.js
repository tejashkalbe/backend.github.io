const mongoose = require('mongoose');

const variableSchema = mongoose.Schema({
  timestamp: {
    type : Date,
    default:Date.now,
  },
  variables : {
    type:[Number],
    require: true,
  },
})

module.exports = new mongoose.model("timestamp", variableSchema);