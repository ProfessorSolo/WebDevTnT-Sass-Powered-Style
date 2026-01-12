# 🚀 WebDevTnT — Pipelines to Platforms

### _From Task Runners to Modern Build & Delivery Systems_

This repository contains the **WebDevTnT demo set** for understanding how front‑end code moves from
**local scripts** to **modern build pipelines** and toward **deployment‑ready output**.

The focus is not on memorizing commands.
It is on building a **mental model** for why tools like Gulp and Vite exist, what problems they solve,
and how they fit into the larger path from **source → build → platform**.

Pure HTML, CSS, JavaScript, and minimal tooling.
No frameworks. No abstraction layers hiding the work.

---

## 📁 Project Structure

WebDevTnT-pipelines-to-platforms/
│
├── 01-a-sip-of-gulp/
│ │ ├── gulpfile.js
│ │ ├── package.json
│ │ ├── src/
│ │ └── dist/
│ │
├── 02-vite-vite/
│ │ ├── index.html
│ │ ├── package.json
│ │ ├── src/
│ │ └── vite.config.js
│ │
├── images/
├── scripts/
│ │ └── ui.js
│ │
├── styles/
│ │ ├── brand.css
│ │ ├── layout.css
│ │ └── reset.css
│ │
├── .gitignore
├── LICENSE
└── README.md

Each numbered folder is a **standalone demo** that can be explored independently.
Shared visual styling and UI helpers live at the repo root to keep the experience consistent.

---

## 🚀 Running the Demos

### 01 — A Sip of Gulp

This demo introduces **task‑based pipelines**.

```bash
cd 01-a-sip-of-gulp
npm install
npm run dev
```

Focus on:

- what tasks exist
- what files are read
- what files are written
- _why_ each step exists

### 02 — Vite, Vite

This demo introduces a **modern dev server + build tool**.

```bash
cd 02-vite-vite
npm install
npm run dev
```

Focus on:

- instant startup
- source vs build behavior
- how little configuration is required

---

## 🧠 What You’re Learning

### 🔹 Pipelines vs Servers

- Task runners transform files
- Dev servers serve source directly
- Build output is a deliberate artifact

### 🔹 Why Gulp Still Matters

- Explicit pipelines
- Visible file flow
- Understanding the _old world_ clarifies the new

### 🔹 Why Vite Feels Different

- Native ES modules
- No bundling during development
- Bundling only when it matters

### 🔹 From Pipelines to Platforms

- Source code is for humans
- Build output is for browsers and platforms
- Deployment expects predictability

---

## 📦 Clone This Repo

```bash
git clone https://github.com/ProfessorSolo/WebDevTnT-pipelines-to-platforms.git
```

---

## 🎓 Connected Learning Material

- **WebDevTnT — Build Tooling Lessons**  
  https://webdevtnt.professorsolo.com/

- **Pipelines → Platforms (Lecture + Demo Walkthroughs)**  
  Paired with this repo in class and video form

---

## 📜 License

Distributed under the **WebDevTnT Learner License 1.0**.  
See the LICENSE file for full terms.

---

## 🙌 Credits

Built by **Professor Solo**  
with assistance from **TA Watts**,  
your energetic, slightly sassy systems‑thinking sidekick.
