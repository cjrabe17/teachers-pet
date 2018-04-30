const router = require("express").Router();
const assignmentRoutes = require("./assignments");
const studentRoutes = require("./students")

// Assignment routes
router.use("/assignments", assignmentRoutes);
router.use('/students', studentRoutes);

module.exports = router;
