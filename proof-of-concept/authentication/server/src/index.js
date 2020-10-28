require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//1. register a user
//2. login a user
//3. logout a user
//4. setup a protected route
//5.get a new accesstoken with a refresh token

const server = express();
const routes = require('./routes/index.routes');
require('./database');

server.use(helmet());
server.use(cookieParser());
server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}.`);
});
