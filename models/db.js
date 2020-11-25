const List = require('./schema');

exports.getList = function () {
  return List.find();
};
