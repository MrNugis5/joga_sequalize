
'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('Tags', [
      { id: 1, name: 'yogapractice', createdAt: now, updatedAt: now },
      { id: 2, name: 'yogainspiration', createdAt: now, updatedAt: now },
      { id: 3, name: 'wellness', createdAt: now, updatedAt: now },
      { id: 4, name: 'nature', createdAt: now, updatedAt: now },
      { id: 5, name: 'spiritual', createdAt: now, updatedAt: now },
      { id: 6, name: 'sport', createdAt: now, updatedAt: now },
      { id: 7, name: 'yogateacher', createdAt: now, updatedAt: now }
    ], {
      ignoreDuplicates: true
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tags', {
      id: [1, 2, 3, 4, 5, 6, 7]
    });
  }
};
