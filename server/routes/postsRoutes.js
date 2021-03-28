const router = require('express').Router();
const postsCtrl = require('../controllers/postsCtrl');

router.get('/get', postsCtrl.getPosts);

router.post('/create', postsCtrl.createPost);

module.exports = router