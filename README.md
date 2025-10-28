⚡ CipherStudio – Browser Based React IDE

CipherStudio is a web-based development environment where users can write, preview, and manage React projects directly inside the browser. It simulates an online IDE experience similar to CodeSandbox and NextLeap.js.

✅ Core Features
Feature	Status
Create & manage multiple files	✅ Done
Write React code in browser	✅ Monaco Editor
Live React Preview	✅ Sandpack
Save project to MongoDB	✅ Auto project ID
Load project by Project ID	✅ Working
Rename files	✅ Double-click
Clean UI & responsive layout	✅ Dark IDE Theme

📌 Optional / Future Enhancements:

Delete file

Folder structure

Autosave toggle

Theme switcher (dark/light)

Login & Project Dashboard

🚀 Tech Stack
Layer	Technology
Frontend	React + Vite + Monaco Editor + Sandpack
Backend	Node.js + Express.js
Database	MongoDB Atlas
Styling	Vanilla CSS
Deployment	Localhost (can deploy to Vercel + Render)
📂 Project Structure
CipherStudio/
 ├── src/
 │   ├── components/
 │   │   ├── FileExplorer.jsx
 │   │   ├── CodeEditor.jsx
 │   │   ├── Preview.jsx
 │   ├── styles/app.css
 │   ├── App.jsx
 │   ├── main.jsx
 ├── backend/
 │   ├── server.js
 │   ├── package.json
 │   ├── .env (not committed)
 ├── package.json
 ├── README.md ✅

🛠️ Setup & Installation
1️⃣ Clone Repo 
git clone https://github.com/demonanu/CipherStudio.git

2️⃣ Setup Frontend
cd CipherStudio
npm install
npm run dev


Frontend runs at: http://localhost:5173

3️⃣ Setup Backend
cd backend
npm install
node server.js


Create .env inside backend:

MONGO_URI=YOUR_MONGO_ATLAS_URI
PORT=5001


Backend runs at: http://localhost:5001

💾 Save & Load Workflow

1️⃣ Click 💾 Save → Generates a unique Project ID
2️⃣ Copy the ID
3️⃣ Click 📂 Load → Enter the same ID
✅ Project is restored instantly!

🧪 Demo Highlights

✔ Real-time React code compilation
✔ Syntax highlighting editor
✔ MongoDB persistent storage
✔ VS Code-like professional UI



🎯 Status: MVP Completed ✅

Future enhancements:

Delete File / Folder Support

Theme Switcher

Autosave

👤 Developer

Anubhav Kumar
CipherStudio – Full Stack Developer Assignment

⭐ Thank You!

Feedback is appreciated 🙌