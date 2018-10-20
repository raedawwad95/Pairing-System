var app = require('./server.js');
var port = 5000;
app.listen(process.env.PORT || port, function () {
  console.log('listening on port ' + port);
});
