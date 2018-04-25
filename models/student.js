module.exports = function(sequelize, DataTypes) {
  const Student = sequelize.define("Student", {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    image: {
      type: DataTypes.STRING
    }
  });
  Student.associate = function (models) {
    models.Student.belongsToMany(models.Assignment, {
      through: "AssignmentStudent"
    });
    // models.Student.belongsToMany(models.Period, {
    //   through: 
    // });
    // models.Student.belongsToMany(models.Teacher, {
    //   through: 
    // });
  };
  return Student;
}