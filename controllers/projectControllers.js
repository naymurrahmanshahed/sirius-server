const Project = require("../models/projectModel");
const mongoose = require("mongoose");
// GET all projects

const getAllProject = async (req, res) => {
  const projects = await Project.find({});
  res.status(200).json(projects);
};

// GET a  single project

const getSingleProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "This is not valid id" });
  }
  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No Project Found" });
  }

  res.status(200).json(project);
};

//POST a new project
const postNewProject = async (req, res) => {
  const data = req.body;

  try {
    const project = await Project.create({
      ...data,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }

  res.json({ message: "POST a new project" });
};

module.exports = {
  postNewProject,
  getAllProject,
  getSingleProject,
};
