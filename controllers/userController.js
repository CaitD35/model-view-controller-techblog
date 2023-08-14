const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.showSignupForm = (req, res) => {
  res.render('signup');  
};

exports.handleSignup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    req.session.user = user; // Saving user in session after signup
    res.redirect('/');      // Redirect to homepage or dashboard
  } catch (error) {
    console.error("Signup Error:", error.message); // Log the error message for debugging
    res.status(500).send("Error signing up. Please try again.");
  }
};

