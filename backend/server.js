import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err.message));

const projectSchema = new mongoose.Schema({
  files: Object,
});

const Project = mongoose.model("Project", projectSchema);

app.post("/projects/save", async (req, res) => {
  try {
    const project = new Project({ files: req.body.files });
    await project.save();
    res.json({ success: true, projectId: project._id });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.get("/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.json({ error: "Not found" });

    res.json(project.files);
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Backend running on port ${process.env.PORT}`)
);
