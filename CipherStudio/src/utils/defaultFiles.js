export const defaultFiles = {
  "index.jsx": {
    code: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);`
  },
  "App.jsx": {
    code: `import React from "react";

export default function App() {
  return (
    <div style={{ padding: 20, color: "white" }}>
      <h2>Welcome to CipherStudio</h2>
      <p>Start editing App.jsx to see live preview!</p>
    </div>
  );
}`
  }
};
