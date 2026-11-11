'use strict';

const models = require('../models');

const getAuthorById = async (req, res) => {
  const authorId = Number(req.params.id);
  if (!Number.isInteger(authorId) || authorId < 1) {
    return res.status(400).json({ message: 'Author id must be a positive integer.' });
  }

  try {
    const author = await models.Author.findByPk(authorId, {
      include: [{ model: models.Article, as: 'articles' }],
      order: [[{ model: models.Article, as: 'articles' }, 'id', 'ASC']]
    });

    if (!author) {
      return res.status(404).json({ message: 'Author not found.' });
    }

    return res.status(200).json({ author });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAuthorById };