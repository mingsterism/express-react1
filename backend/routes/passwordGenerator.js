const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

var router = express.Router();

router.get('/', (req, res) => {
  const count = 5;
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  res.json(passwords);
  console.log(`Sent ${count} passwords`);
})

module.exports = router;