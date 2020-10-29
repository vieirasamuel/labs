require('dotenv/config');
const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');

const User = require('../models/User');
const { get } = require('../routes/user.routes');
const { create } = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll({ attributes: ['name', 'email'] });
    return res.json(users);
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    const pepperedPassword = password + process.env.PEPPER;
    const hashedPassword = await hash(pepperedPassword, 10);
    const [user, created] = await User.findOrCreate({
      attributes: {
        name,
        email,
      },
      where: { email },
      defaults: {
        name,
        password: hashedPassword,
      },
    });
    if (created) {
      return res.json(user);
    }
    return res.json('User already exists.');
  },
  async get(req, res) {
    const { email } = req.body;
    const user = await User.findOne({
      attributes: ['name', 'email'],
      where: { email },
    });
    if (user) {
      return res.json(user);
    }
    return res.json('User not find.');
  },
};
