var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello praveen World is waiting for you');
});
app.listen(8000, function () {
  console.log('Example "Hello World" app listening on port 8000!');
});
