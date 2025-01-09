const Router = require('express').Router;
const usersController = require('./users-controller');
const router = new Router();

router.post('/', usersController.add);
router.get('/', usersController.get);

module.exports = router;