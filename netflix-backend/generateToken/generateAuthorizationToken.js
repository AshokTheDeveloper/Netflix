const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRETE_KEY;

const generateAuthorizationToken = (user, res) => {
  const payload = {
    username: user.name,
    userId: user.id,
  };

  const jwtToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });
  res.status(200).json({ jwt_token: jwtToken });
};

module.exports = generateAuthorizationToken;
