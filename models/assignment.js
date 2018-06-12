module.exports = function(sequelize, DataTypes) {
  const Assignment = sequelize.define("Assignment", {
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
    assignmentName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    assignmentType: {
      type: DataTypes.ENUM("Classwork", "Homework", "Test", "Project"),
      allowNull: false,
      defaultValue: "Classwork"
    },
    possiblePts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 100
    },
    extraCredit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date(3),
      validate: {
        isDate: true
      }
    }
  });

  Assignment.associate = function (models) {
    models.Assignment.belongsToMany(models.Student, {
      through: "AssignmentStudent"
      }
    );
  };
  return Assignment;
}