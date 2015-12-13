var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
  contentBase: "dist",
  publicPath: '/js/',
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false
})

server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

server.app.use(function pushStateHook(req, res, next) {
  var ext = path.extname(req.url);
  if ((ext === '' || ext === '.html') && req.url !== '/') {
    req.pipe(request('/')).pipe(res);
  } else {
    next();
  }
});