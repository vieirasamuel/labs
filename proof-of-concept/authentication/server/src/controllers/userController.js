const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');

const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return res.json(user);
  },
};
