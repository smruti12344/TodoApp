const express = require('express');
// create router
const router = express.Router();

const todoApp = require('../views/home');
console.log("router access");
router.get('/',todoApp.home);
module.exports = router;