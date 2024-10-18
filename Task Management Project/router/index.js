const express = require("express");
const router = express.Router();

const TaskRoute = require("./TaskRoute");
const userRoute = require("./userRoute");

router.use("/task", TaskRoute);
router.use("/user", userRoute);

module.exports = router;
