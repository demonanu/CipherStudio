import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import { API_URL } from "./config";
import "./styles/app.css";

export default function App() {
  const [files, setFiles] = useState({
    "/App.jsx": `export default function App() {
  return <h1>Hello CipherStudio 🚀</h1>;
}`,
  });

  const [activeFile, setActiveFile] = useState("/App.jsx");

  const handleFileContentChange = (newCode) => {
    setFiles((prev) => ({
      ...prev,
      [activeFile]: newCode,
    }));
  };

  const saveProject = async () => {
  try {
    const res = await fetch(`${API_URL}/projects/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ files }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Unknown Error");

    alert(`✅ Project Saved!\nProject ID: ${data.projectId}`);
    localStorage.setItem("projectId", data.projectId);
  } catch (err) {
    alert("❌ Failed to save project: " + err.message);
  }
};

  const loadProject = async () => {
    const id = prompt("Enter Project ID to load:");
    if (!id) return;
    try {
      const res = await fetch(`${API_URL}/projects/${id}`);
      const data = await res.json();
      if (data.error) return alert("❌ Project Not Found!");

      setFiles(data);
      setActiveFile(Object.keys(data)[0]);
      alert("✅ Project Loaded!");
    } catch (error) {
      alert("❌ Failed to load project");
    }
  };

  return (
    <div className="app-container">
      {/* Top Action Bar */}
      <div className="top-bar">
        <button onClick={saveProject}>💾 Save</button>
        <button onClick={loadProject}>📂 Load</button>
      </div>

      {/* Main Layout */}
      <div className="editor-layout">
        <FileExplorer
          files={files}
          setFiles={setFiles}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
        />

        <CodeEditor
          code={files[activeFile]}
          onChange={handleFileContentChange}
        />

        <Preview files={files} />
      </div>
    </div>
  );
}
