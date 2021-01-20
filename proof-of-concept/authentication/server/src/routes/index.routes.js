const express = require('express');
const user = require('./user.routes');
const router = express.Router();

router.use('/users', user);

router.get('/', (req, res) => {
  res.send('Auth API with NodeJS and JWT.');
});
router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;
