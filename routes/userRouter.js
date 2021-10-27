const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/search', auth, userController.searchUser);
module.exports = router;