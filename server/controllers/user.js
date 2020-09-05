const User = require('../models/user');
//sanity message
exports.signUp = (req, res) => {
  console.log(`req.body ${req.body}`)
  const user = new User(req.body);
  user.save((err,user)=>{
    err ? res.status(400).json({err}) : res.json({user})
  })
};
