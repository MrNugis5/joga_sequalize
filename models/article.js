'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Article extends Model {

    static associate(models) {

      // Article belongs to Author
      this.belongsTo(models.Author, {
        as: 'author',
        foreignKey: 'author_id'
      });

      this.hasMany(models.ArticleTags, {
        as: 'articleTags',
        foreignKey: 'article_id'
      });

      // Article belongs to many Tags
      this.belongsToMany(models.Tag, {
        through: 'ArticleTags',
        foreignKey: 'article_id',
        otherKey: 'tag_id'
      });

    }
  }

  Article.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};