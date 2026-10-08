# 🚀 Yuvasri — Modern Personal Developer Portfolio

A modern, professional, creative, and interactive personal developer portfolio website built for **Yuvasri**, an Information Technology student (IFET College of Engineering, 3rd Year, CGPA: 8.86) and Full Stack Developer.

Built with **React.js (JSX)** and **Modern CSS3**, this portfolio features a sleek dark aesthetic with glassmorphism and neon accents (Electric Violet, Neon Cyan, and Emerald Green), an interactive light mode toggle, 5 live deployed projects, and a copy-to-clipboard email trigger.

---

## ✨ Features & Highlights

- **⚡ Fast & Modern Architecture:** Built with React 18 functional components, hooks, and standard React tooling.
- **🎨 Sleek Dark Theme + Glassmorphism:** Deep navy canvas (`#0a0b14`) with glassmorphic cards (`backdrop-filter: blur(16px)`), neon borders, and glowing aura effects.
- **🌓 Dark / Light Mode Switcher:** One-click toggle with seamless theme switching and `localStorage` persistence.
- **💻 Interactive Developer Console:** Terminal card on the Hero section with tabbed source views (`Developer.js`, `Skills.json`, `Status.sh`) and status indicators.
- **🔥 5 Live Deployed Projects on Vercel:**
  1. [Expense Tracker](https://expense-tracker-amber-eta-37.vercel.app/) — Dynamic income/expense logging with real-time balance calculations.
  2. [Simple Calculator](https://simple-calc-ten-alpha.vercel.app/) — Keypad and keyboard-supported arithmetic evaluations.
  3. [Password Generator](https://password-generator-five-tawny-32.vercel.app/) — Secure password creator with length slider and character toggles.
  4. [Notes App](https://notes-app-iota-woad.vercel.app/) — Clean note-taking and thought organization tool.
  5. [Stopwatch](https://stop-watch-phi-gules.vercel.app/) — High-precision millisecond timer with start, pause, and reset.
- **🔍 In-Page Project Preview Modal:** Test and view full feature breakdowns and live previews of each app directly inside the portfolio without leaving the page.
- **💼 Industry Internship Section:** Highlights web development experience at *Industrial Design and Animations*.
- **🎓 Academic Rank Holder Highlight:** Showcases B.Tech Information Technology curriculum at *IFET College of Engineering* with **8.86 CGPA**.
- **📜 Verified Certifications & Achievements:**
  - *CCNA: Introduction to Networks (Cisco)*
  - *Artificial Intelligence for All*
  - *UTSAV*
  - *4 to 5 Hackathons Participated*
  - *Technical Debugging Competitions*
  - *Embedded Systems & ARM Processor Workshop*
  - *Prompt Engineering Workshop*
- **📋 One-Click Copy Email:** Dedicated copy button with instant toast notification feedback for `yuvasriradhakrishnan5@gmail.com`.
- **📱 100% Responsive Design:** Beautifully adapted for mobile phones, tablets, laptops, and ultra-wide displays.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Tooling:** React Scripts (`react-scripts`)
- **Styling:** Modular CSS3 with Custom Properties, Flexbox, Grid, and Animations
- **Icons:** [lucide-react](https://lucide.dev/)
- **Hosting / Deployments:** Vercel & GitHub Pages compatible

---

## 📂 Project Structure

```
yuvasri-portfolio/
├── public/
│   ├── index.html              # HTML5 boilerplate, page meta & root container
│   ├── favicon.svg             # Application favicon
│   ├── resume.pdf              # Downloadable resume
│   └── images/                 # Project illustration assets
├── package.json                # Project dependencies and run scripts
└── src/
    ├── index.js                # React root entry point
    ├── App.js                  # Main layout orchestrator & theme management
    ├── App.css                 # Master stylesheet: glassmorphism, themes & responsive layouts
    ├── index.css               # Base resets and global styling
    ├── data/
    │   └── portfolioData.js    # Single source of truth containing 100% authentic profile data
    └── components/
        ├── Navbar.js           # Glassmorphic header with navigation & theme switch
        ├── Hero.js             # Creative hero section with interactive code terminal
        ├── About.js            # Narrative bio, stats, and career objective
        ├── Skills.js           # Filterable technical skills grid
        ├── Projects.js         # Project gallery for the 5 live Vercel deployments
        ├── ProjectModal.js     # In-page preview modal with live app iframe
        ├── Experience.js       # Web Developer Internship at Industrial Design & Animations
        ├── Education.js        # B.Tech IT at IFET College of Engineering (8.86 CGPA)
        ├── Certifications.js   # Cisco CCNA, AI for All, and UTSAV certifications
        ├── Achievements.js     # Academic rank holder, hackathons, and workshops
        ├── Resume.js           # Digital resume snapshot with print/save capabilities
        ├── Contact.js          # Copy-to-clipboard email, social cards & interactive form
        ├── Footer.js           # Quick links, social buttons, and copyright
        ├── Toast.js            # Floating notification toast
        ├── ScrollProgress.js   # Top scroll depth progress indicator
        └── ScrollToTop.js      # Floating back-to-top button
```

---

## 🚀 Getting Started Locally

### 1. Navigate to the project directory
```bash
cd yuvasri-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
The compiled and optimized assets will be generated inside the `build/` directory.

---

## 🌐 Deploying to GitHub

1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yuvasri personal developer portfolio"
   ```
2. Add your GitHub remote:
   ```bash
   git remote add origin https://github.com/yuvasri5-maker/yuvasri-portfolio.git
   git branch -M main
   git push -u origin main
   ```

---

## 👤 Author

**Yuvasri**  
- **Email:** [yuvasriradhakrishnan5@gmail.com](mailto:yuvasriradhakrishnan5@gmail.com)  
- **GitHub:** [@yuvasri5-maker](https://github.com/yuvasri5-maker)  
- **LinkedIn:** [Yuvasri Radhakrishnan](https://www.linkedin.com/in/yuvasri-radhakrishnan-2b2757365/)  
- **College:** IFET College of Engineering (B.Tech IT, 3rd Year)
