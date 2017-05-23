import express from 'express';
import middleware from './config/middleware';
import routes from './config/routes';

var app = express();
var port = process.env.port || 1337;

middleware(app, express);
routes(app, express);

app.listen(port, () => {
  console.log('Listening on port ' + port + '...');
});
