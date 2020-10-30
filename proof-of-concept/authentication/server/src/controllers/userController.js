require('dotenv/config');
const jwt = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll({ attributes: ['uuid', 'name', 'email'] });
    return res.json(users);
  },
  async store(req, res) {
    const { name, email, password } = req.body;
    const pepperedPassword = password + process.env.PEPPER;
    const hashedPassword = await hash(pepperedPassword, 10);
    const uuid = uuidv4();
    const [user, created] = await User.findOrCreate({
      attributes: {
        name,
        email,
      },
      where: { email },
      defaults: {
        uuid,
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
      attributes: ['uuid', 'name', 'email'],
      where: { email },
    });
    if (user) {
      return res.json(user);
    }
    return res.json('User not find.');
  },
  async auth(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
      attributes: ['uuid', 'name', 'email', 'password'],
      where: { email },
    });
    const result = await compare(password + process.env.PEPPER, user.password);
    if (result) {
      return res.json('User authenticated.');
    }
    return res.json('Wrong password.');
  },
};
