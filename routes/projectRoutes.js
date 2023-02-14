const express = require("express");
const {
  postNewProject,
  getAllProject,
  getSingleProject,
} = require("../controllers/projectControllers");

//router
const router = express.Router();

//GET all  Projects

router.get("/", getAllProject);

// GET a  single project

router.get("/:id", getSingleProject);

//POST a new project

router.post("/", postNewProject);

//delete a project

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a project" });
});

// update a project

router.patch("/:id", (req, res) => {
  res.json({ message: "update a project" });
});

module.exports = router;
