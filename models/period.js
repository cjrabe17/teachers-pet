module.exports = function(sequelize, DataTypes) {
  const Period = sequelize.define("Period", {
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

  Period.associate = function (models) {
    models.Period.belongsTo(models.Teacher, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // models.Period.hasMany(models.Student, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };

  return Period;
}