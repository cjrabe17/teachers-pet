'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Attendances', [
      {
        classDate: "2018-04-21",
        attendanceCode: "Present"
      },
      {
        classDate: "2018-04-19",
        attendanceCode: "Tardy"
      },
      {
        classDate: "2018-04-17",
        attendanceCode: "Absent"
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
