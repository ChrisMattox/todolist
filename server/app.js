var express =  require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var thingsToDo = require('./routes/thingsToDo');

app.use(bodyParser.urlencoded({ extended: true }));

// Our routes
app.use('/thingsToDo', thingsToDo);

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('./server/public'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});
