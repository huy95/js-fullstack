const Users = require("../models/User.js");
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
  let { firstName, lastName, userName, password } = req.body;
  try {
    const duplicate = await Users.find({ userName });
    if (duplicate && duplicate.length > 0) {
      return res
        .status(400)
        .send({ message: "User already registered with this user" });
    }
    let user = new Users({ firstName, lastName, userName, password });
    const result = await user.save();
    console.log(`registerUser + `, result);
    res.status(201).send({ message: "user register successfully!" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

async function Login(req, res) {
  try {
    const {userName, password} = req.body;
    const user = await Users.findOne({userName});
    if (!user){
      return res.status(404).send('Authentication Failed!');
    }
    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid){
      return res.status(404).send({error: "Wrong password"})
    }
    let token = jwt.sign({userId: user?.id} , process.env.JWT_SECRET, {expiresIn: '1h'});
    let finalData = {
      userId: user?.id,
      userName: user?.userName,
      firstName: user?.firstName,
      lastName: user?.lastName,
      token: token
    }
    res.send(finalData)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
const AuthController = {
  registerUser,
  Login
};
module.exports = AuthController;
