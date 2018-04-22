'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Assignments', [
        {
          assignmentType: "Classwork",
          assignmentName: "1st Semester Participation",
          studentScore: 90,
          dueDate: "2018-05-04",
          possiblePts: 100
        },
        {
          assignmentType: "Homework",
          assignmentName: "Verb Homework",
          studentScore: 90,
          dueDate: "2018-05-04",
          possiblePts: 100
        },
        {
          assignmentType: "Test",
          assignmentName: "Test 1",
          studentScore: 64,
          dueDate: "2018-05-04",
          possiblePts: 100
        },
        {
          assignmentType: "Project",
          assignmentName: "Project 1",
          studentScore: 100,
          dueDate: "2018-05-04",
          possiblePts: 100
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