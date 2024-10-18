const express = require("express");
const router = express.Router();

const {CreateTask, DeleteTask, GetTask, PutTask} = require("../controller/TaskController");



router.post("/createtask",  CreateTask);

router.delete("/deletetask/id/:id",  DeleteTask);

router.get("/gettask/UserID/:UserID",  GetTask);

router.put("/updatetask/ID/:ID",  PutTask);

module.exports = router;