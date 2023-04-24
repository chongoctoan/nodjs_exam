const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.get("/",userController.home);
router.get("/form",userController.form);
router.post("/form",userController.saveform);
router.get("/list",userController.list);

module.exports = router;