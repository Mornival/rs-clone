const Router = require('express').Router;
const userControlles = require('../controllers/user-controller');
const router = new Router();

router.post('/registration', userControlles.regestration);
router.post('/login', userControlles.login);
router.post('/logout', userControlles.logout);
router.get('/active/:link', userControlles.activate);
router.get('/refresh', userControlles.refresh);
router.get('/users', userControlles.getUsers);

module.exports = router;