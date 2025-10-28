import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    files: { type: Object, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
