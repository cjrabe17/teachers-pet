'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        name: 'SpongeBob SquarePants',
        dateOfBirth: "2000-06-04",
        image: "https://vignette.wikia.nocookie.net/spongebob/images/e/e4/SpongeBob_%285%29.png/revision/latest?cb=20140824163949",
        behaviorScore: -1,
        behaviorNotes: "Testing this out"
      },
      {
        name: 'Patrick Star',
        dateOfBirth: "2000-10-10",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Patrick_Star.png/220px-Patrick_Star.png",
        behaviorScore: -17,
        behaviorNotes: "Testing this out part deux"
      },
      {
        name: 'Squidward Tentacles',
        dateOfBirth: "1995-12-17",
        image: "https://upload.wikimedia.org/wikipedia/en/a/ac/Squidward.png",
        behaviorScore: 0,
        behaviorNotes: "Testing this out part three"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
