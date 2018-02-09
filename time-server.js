const net = require('net');

function zeroFill(n) {
  return n < 10 ? '0' + n : n;
}
var date = new Date();
var server = net.createServer(function (socket) {
  var date = new Date();
  var output = date.getFullYear() + '-'
    + zeroFill((date.getMonth() + 1)) + '-'
    + zeroFill(date.getDate()) + ' '
    + zeroFill(date.getHours()) + ':'
    + zeroFill(date.getMinutes()) + '\n';
  socket.write(output);
  socket.end();
});
server.listen(process.argv[2]);
