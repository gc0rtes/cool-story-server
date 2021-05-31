"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "How I became a developer",
          description: "How I scape from internet tutorials looping",
          backgroundColor: "#D133FF",
          color: "#FFFFFF",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "My space is very cool - it makes BOOM!",
          description: "chekout some BO00OMS code here!",
          backgroundColor: "#D133FF",
          color: "#FFFFFF",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
