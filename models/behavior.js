module.exports = function(sequelize, DataTypes) {
  const Behavior = sequelize.define("Behavior", {
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
    behaviorScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    behaviorNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  return Behavior;
}