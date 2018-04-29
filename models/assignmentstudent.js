module.exports = function(sequelize, DataTypes) {
  const AssignmentStudent = sequelize.define("AssignmentStudent", {
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    studentScore: {
      type: DataTypes.INTEGER
    }
  });
  return AssignmentStudent;
}