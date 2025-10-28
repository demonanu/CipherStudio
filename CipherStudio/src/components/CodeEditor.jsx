import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange }) {
  return (
    <div className="editor">
      <Editor
        height="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={onChange}
      />
    </div>
  );
}
