
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    static associate(models) {
      // Define associations
      this.belongsTo(models.Tag, {
        foreignKey: 'tagId',
      });

      this.belongsTo(models.Article, {
        foreignKey: 'articleId',
      });
    }
  }

  ArticleTags.init({
    articleId: {
      type: DataTypes.INTEGER,
      field: 'article_id'
    },
    tagId: {
      type: DataTypes.INTEGER,
      field: 'tag_id'
    },
  }, {
    sequelize,
    modelName: 'ArticleTags',
    timestamps: false
  });

  return ArticleTags;
};
