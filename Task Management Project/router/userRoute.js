const express = require("express");
const router = express.Router();

const {deleteuser, GetUser, Login, PutUser, Registration} = require("../controller/userController");



router.delete("/deleteuser/id/:id",  deleteuser);

router.get("/getuser/Id/:Id",  GetUser);

router.post("/login",  Login);

router.put("/putuser/Id/:Id",  PutUser);

router.post("/registration",  Registration);

module.exports = router;