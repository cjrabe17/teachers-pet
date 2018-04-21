module.exports = function(sequelize, DataTypes) {
  const Attendance = sequelize.define("Attendance", {
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
    classDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date(3)
    },
    attendanceCode: {
        type: DataTypes.ENUM("Present", "Tardy", "Absent"),
        allowNull: false,
        defaultValue: "Present"
    }
  });
  return Attendance;
}