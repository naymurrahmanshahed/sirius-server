const express = require("express");

//router
const router = express.Router();

//GET all  Projects

router.get("/", (req, res) => {
  res.json({ message: "get All projects" });
});

// GET a  single project

router.get("/:id", (req, res) => {
  res.json({ message: "get a single project" });
});

//POST a new project

router.post("/", (req, res) => {
  res.json({ message: "POST a new project" });
});

//delete a project

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a project" });
});

// update a project

router.patch("/:id", (req, res) => {
  res.json({ message: "update a project" });
});

module.exports = router;
