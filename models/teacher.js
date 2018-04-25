module.exports = function(sequelize, DataTypes) {
  const Teacher = sequelize.define("Teacher", {
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
    }
  });
  Teacher.associate = function(models) {
    models.Teacher.hasMany(models.Period, {
      onDelete: "CASCADE",
      allowNull: false
    });
  };
  return Teacher;
}