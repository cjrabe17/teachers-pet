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
    score: {
      type: DataTypes.INTEGER
    }
  });
  return AssignmentStudent;
}