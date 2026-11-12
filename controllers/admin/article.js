'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../../models');

const createArticle = async (req, res) => {
  const { name, slug, image, body, author_id } = req.body;

  try {
    await models.Article.create({
      name,
      slug,
      image,
      body,
      author_id,
      published: new Date().toISOString().slice(0, 19).replace('T', ' '),
    });

    return res.status(200).json({ message: 'Article created successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateArticle = async (req, res) => {
  const articleId = Number(req.params.id);

  if (!Number.isInteger(articleId) || articleId < 1) {
    return res.status(400).json({ message: 'Article id must be a positive integer.' });
  }

  if (req.method === 'GET') {
    try {
      const [article, authors] = await Promise.all([
        models.Article.findByPk(articleId),
        models.Author.findAll({ order: [['name', 'ASC']] })
      ]);

      if (!article) {
        return res.status(404).json({ message: 'Article not found.' });
      }

      return res.status(200).json({ article, authors });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  if (req.method === 'POST') {
    const { name, slug, image, body, author_id, published } = req.body;

    try {
      const article = await models.Article.findByPk(articleId);
      if (!article) {
        return res.status(404).json({ message: 'Article not found.' });
      }

      await article.update({
        name: name ?? article.name,
        slug: slug ?? article.slug,
        image: image ?? article.image,
        body: body ?? article.body,
        author_id: author_id ?? article.author_id,
        published: published ?? article.published,
      });

      return res.status(200).json({ message: 'Article updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed.' });
};

const deleteArticle = async (req, res) => {
  const articleId = Number(req.params.id);

  if (!Number.isInteger(articleId) || articleId < 1) {
    return res.status(400).json({ message: 'Article id must be a positive integer.' });
  }

  try {
    const article = await models.Article.findByPk(articleId);
    if (!article) {
      return res.status(404).json({ message: 'Article not found.' });
    }

    await article.destroy();
    return res.status(200).json({ message: 'Article deleted successfully', id: articleId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
};