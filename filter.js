var path = require('path');
var fs = require('fs');

module.exports = function (dir, ext, callback) {
  var outputArray = [];
  ext = '.' + ext;
  fs.readdir(dir, function (err, files) {
    if (err) {
      return callback(err);
    }
    files.forEach(function (file) {
      if (path.extname(file) == ext) {
        outputArray.push(file);
      }
    });
    callback(null, outputArray);
  });
}
