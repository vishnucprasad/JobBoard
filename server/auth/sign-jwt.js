const jwt = require("jsonwebtoken");

module.exports.signJwt = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, { session: false }, async (error) => {
      if (error) reject(error);

      const token = jwt.sign({ user }, process.env.JWT_SECRET);

      const cookieOptions = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      resolve({ token, cookieOptions });
    });
  });
};
