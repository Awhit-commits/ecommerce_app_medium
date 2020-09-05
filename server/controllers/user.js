const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
//sanity message
exports.signUp = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    err
      ? res.status(400).json({ err: errorHandler(err) })
      : (user.salt = undefined);
    user.hashed_password = undefined;
    res.json({ user });
  });
};
