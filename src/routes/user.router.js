const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.get("/",userController.home);
router.get("/form",userController.createUser);
router.post("/form",userController.saveCreateUser);
router.get("/list",userController.userList);

module.exports = router;