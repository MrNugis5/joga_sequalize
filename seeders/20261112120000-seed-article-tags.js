'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ArticleTags', [
      { article_id: 1, tag_id: 1 },
      { article_id: 1, tag_id: 2 },
      { article_id: 2, tag_id: 3 },
      { article_id: 2, tag_id: 4 },
      { article_id: 3, tag_id: 5 },
      { article_id: 3, tag_id: 6 }
    ], {
      ignoreDuplicates: true
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ArticleTags', {
      article_id: [1, 2, 3]
    });
  }
};
