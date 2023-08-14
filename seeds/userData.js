const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');

// Show signup form 
 router.get('/signup', userController.showSignupForm);

// Handle signup logic with validation
router.post('/signup', 
  [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  ], 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    // If no validation errors, call the handleSignup controller
    userController.handleSignup(req, res, next);
  }
);

// You can add more routes (e.g., signIn, logout) as necessary.

module.exports = router;

