/* eslint-disable no-console */
import 'reflect-metadata';
import express from 'express';
import routes from './routes/index.routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.get('/', (request, response) =>
  response.json({
    message: 'Hello World!',
  }),
);

app.listen(3333, () => {
  console.log('🚧 server starts on port 3333!');
});
