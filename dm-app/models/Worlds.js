const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorldsSchema = new Schema({
  name: String,
  bigPicture: [String],
  history: [String],
  gods: [String],
  continents: [String]
});

module.exports = mongoose.model('Worlds', WorldsSchema);