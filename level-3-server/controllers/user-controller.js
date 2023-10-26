const user = require('../models/user');
const bcrypt = require('bcrypt');




exports.register = async (req, res) => {
  try {
    const { email, password, confirmPassword} = req.body;

    // Check for missing email or password
    if (!email || !password || password !== confirmPassword) {
      return res.status(400).json({
        errors: [{ error: "Email and password are required" }]
      });
    }

    // Check if the user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(422).json({
        errors: [{ error: "User with this email already exists" }]
      });
    }

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new user({
      email,
      password: hashedPassword
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      result: savedUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      errors: [{ error: "Something went wrong" }]
    });
  }
};