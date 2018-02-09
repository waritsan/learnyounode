var filter = require('./filter.js');
var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function (err, files) {
  if (err) {
    return console.log('There was an error:', err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
})
