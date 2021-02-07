require('dotenv/config');
const jwt = require('jsonwebtoken');

function auth(user) {
  const token = jwt.sign(
    {
      uuid: user.uuid,
      name: user.name,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '1h',
    }
  );
  return token;
}
function verify(req, res, next) {
  let validation;
  try {
    const token = req.headers['x-access-token'];
    if (!token) {
      res.status(401).json({ message: 'Invalid Token' });
    }
    validation = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return res.status(500).json({ err });
  }
  req.headers['x-access-token'] = refresh(validation);
  req.uuid = validation.uuid;
  req.email = validation.email;
  req.name = validation.name;
  next();
}
function refresh(tokenData) {
  const { uuid, name, email } = tokenData;
  const newToken = { uuid, name, email };
  return auth(newToken);
}

module.exports = { auth, verify, refresh };
