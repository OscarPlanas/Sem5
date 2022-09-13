const userController = require('../controller/userController');
const express = require('express');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.profile);
router.get('/', userController.getall);

module.exports = router;