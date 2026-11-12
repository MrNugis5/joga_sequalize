const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const adminArticleController = require('../controllers/admin/article');

router.post('/admin/article/create', adminArticleController.createArticle);
router.post('/admin/articles/create', adminArticleController.createArticle);

router.get('/', articleController.getAllArticles);
router.get('/articles/:slug', articleController.getArticleBySlug);

module.exports = router;