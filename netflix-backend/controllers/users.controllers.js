const generateAuthorizationToken = require("../generateToken/generateAuthorizationToken");
const User = require("../models/users.models");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const dbUser = await User.findOne({ email: email });
    if (dbUser) {
      return res.status(401).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        name,
        email,
        password: hashedPassword,
      };
      await User.create(newUser);
      return res.status(201).json({ message: "User signed up" });
    }
  } catch (error) {
    console.log("Internal server error", error.message);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const dbUser = await User.findOne({ email });
    if (!dbUser) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }
    const hasMatchedPassword = await bcrypt.compare(password, dbUser.password);
    if (!hasMatchedPassword) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }

    return generateAuthorizationToken(dbUser, res);
  } catch (error) {
    console.log("Internal server error: ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signup, signin };
