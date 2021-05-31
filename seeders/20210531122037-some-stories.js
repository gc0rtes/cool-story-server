"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stories", [
      {
        name: "Keeping Your Code Clean and Organized",
        content:
          "There are many reasons to keep your code clean and organized, here are some of those reasons and guidelines to help you",
        imageUrl:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191216192618/7-Tips-To-Write-Clean-And-Better-Code-in-2020.png",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Git for developers",
        content:
          "One of the biggest advantages of Git is its branching capabilities. Unlike centralized version control systems, Git branches are cheap and easy to merge.",
        imageUrl:
          "https://www.codeclouds.com/wp-content/uploads/2019/01/38.png",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "15 React Best Practices You Need to Follow in 2021",
        content:
          "If you’re a frontend developer engaged in building highly interactive user interfaces, you’ve most likely got React in your toolkit. ",
        imageUrl:
          "https://www.codeinwp.com/wp-content/uploads/2019/09/react-best-practices.jpg",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Top 50 Most Popular APIs on RapidAPI (2021)",
        content:
          "What is the most popular and top used APIs out there? Well, ask no more.",
        imageUrl:
          "https://www.programmableweb.com/sites/default/files/Most%20Clicked%20Through%20APIs%20in%202017%20v2.png",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
