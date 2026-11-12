'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ArticleTags', [
      { article_id: 5, tag_id: 5 },
      { article_id: 5, tag_id: 6 }
    ], {
      ignoreDuplicates: true
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ArticleTags', {
      article_id: 5
    });
  }
};
