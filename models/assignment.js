module.exports = function(sequelize, DataTypes) {
  const Assignment = sequelize.define("Assignment", {
    // studentId
    // classId
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
    assignmentType: {
      type: DataTypes.ENUM("Classwork", "Homework", "Test", "Project"),
      allowNull: false,
      defaultValue: "Classwork"
    },
    assignmentName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    studentScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date(3),
      validate: {
        isDate: true
      }
    },
    possiblePts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 100
    },
    extraCredit: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return Assignment;
}