require('dotenv/config');
const { hash, compare } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const jwt = require('../middlewares/jwt');

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
    const verify = jwt.verify(req);
    if (typeof verify === 'undefined') {
      try {
        const user = await User.findOne({
          attributes: ['uuid', 'name', 'email', 'password'],
          where: { email },
        });
        const truePassword = await compare(
          password + process.env.PEPPER,
          user.password
        );
        if (!truePassword) {
          return res.status(401).json('Invalid Password');
        }
        user.password = undefined;
        const token = jwt.auth(user);
        return res.json({ user, token });
      } catch (err) {
        res.status(400).json({ message: 'User not Find' });
        return;
      }
    }
    return res.status(200).json('User is already authenticated.');
  },
};
