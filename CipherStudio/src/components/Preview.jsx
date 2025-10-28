import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

export default function Preview({ files }) {
  return (
    <div className="preview">
      <SandpackProvider
        template="react"
        customSetup={{ files }}
        theme="light" // or "dark"
      >
        <SandpackLayout>
          <SandpackCodeEditor showTabs={false} style={{ height: "100%" }} />
          <SandpackPreview showOpenInCodeSandbox={false} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
