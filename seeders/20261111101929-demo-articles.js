'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [
        {
          name: 'Article 1',
          slug: 'article-1',
          image: 'image1.jpg',
          body: '<p>This is the body of article 1.</p>',
          published: "2023-01-01 00:00:00",
          createdAt: new Date(),
          updatedAt: new Date()
      }]) ,
      queryInterface.bulkInsert('Articles', [
        {
          name: 'Article 2',
          slug: 'article-2',
          image: 'image2.jpg',
          body: '<p>This is the body of article 2.</p>',
          published: "2023-01-02 00:00:00",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    ])
      queryInterface.bulkInsert('Articles', [
        {
          name: 'Article 3',
          slug: 'article-3',
          image: 'image3.jpg',
          body: '<p>This is the body of article 3.</p>',
          published: "2023-01-03 00:00:00",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
