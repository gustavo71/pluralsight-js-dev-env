import express from 'express';  //ES6 - Transpiled by Babel (see package.json)
import path from 'path'; //ES6 - Transpiled by Babel (see package.json)
import open from 'open'; //ES6 - Transpiled by Babel (see package.json)
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
