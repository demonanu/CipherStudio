import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { files } = req.body;
    const project = await Project.create({ files });
    res.json({ success: true, projectId: project._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project.files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
