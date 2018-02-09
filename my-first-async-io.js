var fs = require('fs');

fs.readFile(process.argv[2], function callback (err, data) {
  if (err) {
    return console.log(err);
  }
  var str = data.toString();
  var lines = str.split('\n');
  console.log(lines.length - 1);
});
