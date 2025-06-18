const mongoose = require('mongoose');

const ShayariSchema = new mongoose.Schema({
  name : String,
  content: String,
  category: String,
});

module.exports = mongoose.model('Shayari', ShayariSchema);
   