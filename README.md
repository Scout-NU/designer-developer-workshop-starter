# Designer-Developer Workshop

Build a portfolio hero section from a Figma design using React and Tailwind CSS.

---

## Setup (First Time Only)

If you already have Node.js and VS Code installed, skip to [Quick Start](#quick-start).

### 1. Install VS Code (Code Editor)

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Click the download button for your operating system
3. Open the downloaded file and follow the installation steps
4. Launch VS Code

### 2. Install Node.js

#### Mac

**Option A: Direct Download**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (the one on the left)
3. Open the downloaded `.pkg` file
4. Follow the installer steps

**Option B: Using Homebrew (if you have it)**
```bash
brew install node
```

#### Windows

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (the one on the left)
3. Open the downloaded `.msi` file
4. Follow the installer steps (keep all defaults checked)
5. Restart your computer

### 3. Verify Installation

Open a terminal (Mac: Terminal app, Windows: Command Prompt or PowerShell) and run:

```bash
node --version
```

You should see something like `v20.x.x`. If you see an error, try restarting your terminal or computer.

---

## Prerequisites

- Node.js installed (v18 or higher)
- VS Code installed
- Your Figma design ready

## Quick Start

1. **Clone this repo**
   ```bash
   git clone <repo-url>
   cd Designer-Developer-Workshop-Starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Go to [http://localhost:3000](http://localhost:3000)

5. **Start coding!**
   
   Edit `app/page.tsx` to build your hero section.

## Project Structure

```
app/
├── page.tsx          ← YOUR WORKSPACE (edit this!)
├── completed/
│   └── page.tsx      ← Reference solution
├── globals.css       ← Global styles
└── layout.tsx        ← Page wrapper (don't edit)
public/
└── (your images go here)
```

## See the Completed Version

Visit [http://localhost:3000/completed](http://localhost:3000/completed) to see the finished hero section.

---

## Tutorial

Ready to build? Follow our step-by-step guide:

**[Start the Tutorial →](./TUTORIAL.md)**
