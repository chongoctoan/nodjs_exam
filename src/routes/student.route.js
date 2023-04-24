const permission = "student";
const express = require("express");

let router =express.Router();

let studentController = require("../controllers/student.controller")
const middleware = require("./../middlewares/student.middleware");
router.use(middleware.can_view);
router.use("/create-student",middleware.can_action);
router.use("/edit-student/:id",middleware.can_action);
router.use("/delete-student/:id",middleware.can_action);

router.get("/",studentController.get);
router.get("/create-student",studentController.createForm)
router.post("/create-student",studentController.save);

module.exports = router;