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

app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"}
  ])
})

app.get('/otherUsers', function(req, res){
  res.json([
    {"id": 1, "firstName": "Jan", "lastName": "Janssen", "email": "jan@gmail.com"},
    {"id": 2, "firstName": "Henk", "lastName": "de Vries", "email": "hdevries@yahoo.com"},
    {"id": 3, "firstName": "Piet", "lastName": "de Jong", "email": "jong.pietde@hotmail.com"}
  ])
})




app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
