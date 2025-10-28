export default function FileExplorer({
  files,
  setFiles,
  activeFile,
  setActiveFile,
}) {
  const createFile = () => {
    const name = prompt("Enter file name (e.g., Component.jsx)");
    if (!name || files[name]) return alert("Invalid or duplicate filename");
    setFiles({ ...files, [name]: `// ${name}` });
    setActiveFile(name);
  };

  const renameFile = (oldName) => {
    const newName = prompt("Enter new file name:", oldName);
    if (!newName || newName === oldName) return;

    if (files[newName]) {
      return alert("A file with that name already exists!");
    }

    let updatedFiles = { ...files };
    updatedFiles[newName] = updatedFiles[oldName];
    delete updatedFiles[oldName];

    setFiles(updatedFiles);
    setActiveFile(newName);
  };

  return (
    <div className="file-explorer">
      <button onClick={createFile} style={{ marginBottom: "10px" }}>
        ➕ New File
      </button>

      {Object.keys(files).map((file) => (
        <div
          key={file}
          className={`file-item ${activeFile === file ? "active" : ""}`}
          onClick={() => setActiveFile(file)}
          onDoubleClick={() => renameFile(file)} // ✅ Rename feature
        >
          {file}
        </div>
      ))}
    </div>
  );
}
