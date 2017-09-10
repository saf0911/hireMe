import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import AuthenicationRoute from './routes/AuthenicationRoute';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';


const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = process.env.Port || 4001;

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());

  // Define all you backend handlers here...
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://saf0911:Memphis4599@ds151973.mlab.com:51973/scottsjobsearch');

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function () {
    console.log('we are connected!');
  });

  // eslint-disable-next-line
  app.use('*', (err, request, response, nextHandler) => {
    return response.status(500).json({
      message: err.message
    });

  });

  app.use(AuthenicationRoute);
  app.use(userRoutes);
  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});
