var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var fs = require('fs');
var Truck = require('./models/truck');
var mongoose = require('mongoose');
var app = express();
var uriUtil = require('mongodb-uri');


var options = {
  server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGOLAB_URI || "mongodb://localhost/trucks";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);
app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

var config = require('./server/config');

var truckRoutes = require('./routes/routes');

app.use('/api', truckRoutes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/html', express.static('html'));


// Start the webserver
var port = config.PORT;
var hostname = config.HOSTNAME;
app.listen(port, hostname, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('The magic happens at ' + hostname + ':' + port);
});

