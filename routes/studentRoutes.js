const express = require("express");

// const Blog = require("../models/blog");
const router = express.Router();
const studController = require("../controllers/studentController");

router.get("/", studController.stud_index);

router.get("/create", studController.stud_create_get);

router.post("/", studController.stud_create_post);

router.get("/:id", studController.stud_details);

module.exports = router;
