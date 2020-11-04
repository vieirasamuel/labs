require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = {
  auth(user) {
    const token = jwt.sign(
      {
        uuid: user.uuid,
        user: user.name,
        email: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    return token;
  },
  verify(req) {
    const { token } = req.body;
    try {
      return (validation = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET));
    } catch (err) {
      return;
    }
  },
};
