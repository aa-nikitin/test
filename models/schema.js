const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    text: {
      type: String
    }
  },
  { versionKey: false }
);

const List = mongoose.model('list', listSchema, 'list');
module.exports = List;
