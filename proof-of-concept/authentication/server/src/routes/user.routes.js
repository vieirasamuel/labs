const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.send('Hello World User!');
});

router.route('/register').post(userController.store);
router.route('/list').get(userController.index);

module.exports = router;
