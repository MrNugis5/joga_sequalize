'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('Articles', [
      {
        name: 'Article 1',
        slug: 'article-1',
        image: 'image1.jpg',
        body: '<p>This is the body of article 1.</p>',
        published: '2023-01-01 00:00:00',
        author_id: 1,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Article 2',
        slug: 'article-2',
        image: 'image2.jpg',
        body: '<p>This is the body of article 2.</p>',
        published: '2023-01-02 00:00:00',
        author_id: 1,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Article 3',
        slug: 'article-3',
        image: 'image3.jpg',
        body: '<p>This is the body of article 3.</p>',
        published: '2023-01-03 00:00:00',
        author_id: 3,
        createdAt: now,
        updatedAt: now
      }
    ], { ignoreDuplicates: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Articles', {
      slug: ['article-1', 'article-2', 'article-3']
    });
  }
};
