/**
 * ====================================================================
 * PORTFOLIO MASTER DATA - YUVASRI
 * ====================================================================
 * 100% Authentic Profile Data for Yuvasri
 */

export const personalInfo = {
  name: "Yuvasri",
  role: "Information Technology Student & Full Stack Developer",
  status: "Seeking Full Stack Developer Internship",
  location: "Panruti, Tamil Nadu, India",
  email: "yuvasriradhakrishnan5@gmail.com",
  github: "https://github.com/yuvasri5-maker",
  linkedin: "https://www.linkedin.com/in/yuvasri-radhakrishnan-2b2757365/",
  
  headlineBio: "Passionate Information Technology student and Full Stack Developer dedicated to engineering creative, responsive, and user-friendly web applications.",
  
  aboutBio: [
    "I am a passionate and motivated Information Technology student at IFET College of Engineering (3rd Year, 8.86 CGPA) with a strong interest in web development and modern technologies.",
    "I enjoy building creative, user-friendly, and responsive web applications using technologies like HTML, CSS, JavaScript, and React.js. My technical foundation spans procedural programming in C, object-oriented software design in C++ and Java, versatile problem solving with Python, and full-stack development with Node.js, Express.js, MongoDB, and MySQL.",
    "I am always eager to learn new skills, explore innovative ideas, and turn creative concepts into practical digital solutions. Currently, I am seeking an internship as a Full Stack Developer where I can contribute to meaningful real-world projects and grow alongside experienced software engineers."
  ],

  careerObjective: "Seeking an internship as a Full Stack Developer to build impactful digital applications, write clean and maintainable code, and contribute effectively to innovative engineering teams.",

  languagesKnown: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Tamil", level: "Native / Fluent" }
  ],

  interests: [
    "Problem Solving",
    "Full Stack Web Development",
    "UI/UX Design & Responsiveness",
    "Clean Code & Performance"
  ],

  stats: [
    { label: "Academic CGPA", value: "8.86", suffix: "Rank Holder" },
    { label: "Live Projects", value: "5", suffix: "Deployed on Vercel" },
    { label: "Hackathons", value: "4", suffix: "Participated" },
    { label: "Internship", value: "1", suffix: "Web Developer" }
  ]
};

export const skillsData = [
  // Programming Languages
  { name: "C", category: "Programming", level: "Proficient", icon: "Cpu", desc: "Procedural fundamentals, memory management, pointers, and algorithmic logic." },
  { name: "C++", category: "Programming", level: "Proficient", icon: "Cpu", desc: "Object-oriented programming, standard template library (STL), and modular design." },
  { name: "Java", category: "Programming", level: "Intermediate", icon: "Coffee", desc: "Core OOP principles, inheritance, polymorphism, and application logic." },
  { name: "Python", category: "Programming", level: "Proficient", icon: "Terminal", desc: "Scripting, algorithmic problem solving, logic automation, and data handling." },

  // Frontend Technologies
  { name: "HTML5", category: "Frontend", level: "Proficient", icon: "Code2", desc: "Semantic markup, web accessibility standards, clean DOM hierarchy, and SEO basics." },
  { name: "CSS3", category: "Frontend", level: "Proficient", icon: "Palette", desc: "Flexbox, CSS Grid, keyframe animations, glassmorphism, and responsive layouts." },
  { name: "JavaScript", category: "Frontend", level: "Proficient", icon: "Zap", desc: "ES6+ modern syntax, asynchronous fetch, event manipulation, and DOM operations." },
  { name: "React.js", category: "Frontend", level: "Proficient", icon: "Layers", desc: "Functional components, hooks (useState, useEffect), state flow, and SPA architecture." },

  // Backend Technologies
  { name: "Node.js", category: "Backend", level: "Intermediate", icon: "Globe", desc: "Asynchronous JavaScript runtime, event-driven architecture, and REST API development." },
  { name: "Express.js", category: "Backend", level: "Intermediate", icon: "Layers", desc: "RESTful API routing, middleware integration, and backend service handlers." },

  // Database Technologies
  { name: "MongoDB", category: "Databases", level: "Intermediate", icon: "Database", desc: "NoSQL document storage, flexible BSON schemas, collections, and CRUD queries." },
  { name: "MySQL", category: "Databases", level: "Intermediate", icon: "Database", desc: "Relational database modeling, SQL queries, relational tables, and data integrity." },

  // Tools & Software
  { name: "Git", category: "Tools", level: "Proficient", icon: "Code2", desc: "Distributed version control, branching strategies, and commit history tracking." },
  { name: "GitHub", category: "Tools", level: "Proficient", icon: "Github", desc: "Remote repository hosting, version collaboration, and project deployments." },
  { name: "VS Code", category: "Tools", level: "Advanced", icon: "Sliders", desc: "Configured developer environment, debugging tools, extensions, and code refactoring." }
];

export const skillCategories = ["All", "Programming", "Frontend", "Backend", "Databases", "Tools"];

export const projectsData = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "React.js",
    shortDesc: "Stores user expenses and automatically calculates the remaining balance according to total income in real time.",
    fullDesc: "A responsive personal finance tracking application engineered with React.js and modern CSS. It empowers users to monitor their income, record individual expenditures, categorize costs, and instantly evaluate their financial balance with real-time dynamic calculations.",
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "State Management", "Vercel"],
    features: [
      "Real-time balance calculation comparing income against total expenses",
      "Interactive expense and income entry logging with instantaneous state updates",
      "Visual breakdown cards for Current Balance, Total Income, and Total Expense",
      "Clean responsive layout compatible across desktop and mobile devices",
      "Fast, zero-latency user experience deployed live on Vercel"
    ],
    liveUrl: "https://expense-tracker-three-delta-41.vercel.app/",
    githubUrl: "https://github.com/yuvasri5-maker/Expense-tracker",
    statusBadge: "Live on Vercel",
    featured: true
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    category: "React.js",
    shortDesc: "Performs mathematical arithmetic operations with intuitive on-screen keypad and keyboard input support.",
    fullDesc: "A sleek, functional calculator web application built using React functional components. Features instant arithmetic evaluation, clear error handling for mathematical boundary conditions, and dual input support through both click controls and physical keyboard strokes.",
    technologies: ["React.js", "JavaScript", "CSS3", "Keyboard Events", "Vercel"],
    features: [
      "Standard arithmetic calculations: addition, subtraction, multiplication, and division",
      "Keyboard typing support alongside on-screen responsive buttons",
      "Immediate calculation updates with clear expression display",
      "All Clear (AC) and backspace error-prevention controls",
      "Glassmorphic dark styling with tactile hover feedback"
    ],
    liveUrl: "https://simple-calculator-beryl-iota.vercel.app/",
    githubUrl: "https://github.com/yuvasri5-maker/Simple-calculator",
    statusBadge: "Live on Vercel",
    featured: true
  },
  {
    id: "password-generator",
    title: "Password Generator",
    category: "React.js",
    shortDesc: "Suggests strong, customized, and secure passwords based on user-defined length and character requirements.",
    fullDesc: "An interactive digital security utility application designed to generate cryptographically safe passwords. Users can fine-tune password length using a responsive range slider and toggle specific character parameters such as uppercase, lowercase, numbers, and symbols, with a one-click clipboard copying feature.",
    technologies: ["React.js", "JavaScript", "CSS3", "Navigator Clipboard API", "Vercel"],
    features: [
      "Customizable criteria: uppercase letters, lowercase letters, numbers, and special symbols",
      "Dynamic slider to set custom password length effortlessly",
      "One-click copy-to-clipboard functionality with instant user feedback",
      "Visual password strength indication to promote strong cyber hygiene",
      "Clean, minimalist, and responsive user interface"
    ],
    liveUrl: "https://password-generator-nu-six-75.vercel.app/",
    githubUrl: "https://github.com/yuvasri5-maker/Password-generator",
    statusBadge: "Live on Vercel",
    featured: true
  },
  {
    id: "notes-app",
    title: "Notes App",
    category: "React.js",
    shortDesc: "A clean productivity tool used to capture important points, organize thoughts, and record quick reminders.",
    fullDesc: "A practical note-taking web application engineered with React.js and CSS. Built to provide users with an uncluttered space to capture important thoughts, organize study points, manage daily reminders, and review saved notes in a neat grid layout.",
    technologies: ["React.js", "JavaScript", "CSS3", "Component Architecture", "Vercel"],
    features: [
      "Quick note creation interface with title and body text fields",
      "Clean card grid layout for easy readability and rapid scanning",
      "Intuitive delete and management controls for individual notes",
      "Responsive layout optimized for smartphones, tablets, and laptops",
      "Lightweight, snappy performance deployed on Vercel"
    ],
    liveUrl: "https://notes-app-drab-ten.vercel.app/",
    githubUrl: "https://github.com/yuvasri5-maker/Notes-app",
    statusBadge: "Live on Vercel",
    featured: true
  },
  {
    id: "stopwatch",
    title: "Stopwatch",
    category: "React.js",
    shortDesc: "A high-precision digital stopwatch with start, pause, stop, and reset timer capabilities.",
    fullDesc: "A reactive timer application engineered using React hooks (useState, useEffect, useRef). Provides precise millisecond interval tracking with clean controls to start the clock, pause mid-duration, resume seamlessly, and reset the counter to zero.",
    technologies: ["React.js", "JavaScript", "CSS3", "Timers & Hooks", "Vercel"],
    features: [
      "High-precision millisecond, second, and minute counter",
      "Intuitive control buttons: Start, Pause, Resume, and Reset",
      "Clean digital typography with high-contrast glowing time digits",
      "Smooth state transitions without memory leaks",
      "Fully responsive and mobile-friendly layout"
    ],
    liveUrl: "https://stop-watch-ebon-chi.vercel.app/",
    githubUrl: "https://github.com/yuvasri5-maker/Stop-watch",
    statusBadge: "Live on Vercel",
    featured: true
  }
];

export const projectCategories = ["All", "React.js"];

export const experienceData = [
  {
    role: "Web Developer Intern",
    company: "Industrial Design and Animations",
    type: "Internship",
    period: "Internship Experience",
    location: "Tamil Nadu, India",
    description: "Worked as a Web Developer intern gaining valuable hands-on experience in real-world web application development and responsive user interface design.",
    responsibilities: [
      "Built and styled modern, responsive web pages adhering to modern design specifications.",
      "Utilized HTML, CSS, JavaScript, and modern web principles to create fluid user experiences.",
      "Collaborated on front-end features, optimizing interface components for diverse screen resolutions.",
      "Deepened practical understanding of front-end structure, clean code organization, and collaborative workflows."
    ],
    skills: ["Web Development", "HTML5", "CSS3", "JavaScript", "UI/UX Implementation", "Responsive Design"]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) - Information Technology",
    institution: "IFET College of Engineering",
    affiliation: "Affiliated to Anna University",
    duration: "2024 - 2028 (3rd Year)",
    score: "CGPA: 8.86",
    badge: "Academic Rank Holder",
    location: "Tamil Nadu, India",
    description: "Pursuing undergraduate degree in Information Technology with consistent academic excellence, achieving an 8.86 CGPA and earning distinction as an Academic Rank Holder in the department.",
    coursework: [],
    highlights: [
      "Academic Rank Holder in the Department of Information Technology with an 8.86 CGPA",
      "Active participant in technical debugging competitions and collegiate hackathons",
      "Focused on Full Stack development, modern JavaScript frameworks, and practical digital solutions"
    ]
  },
{
    degree: "HSLC (Higher Secondary) - Computer Science",
    institution: "Sri.P.Muthaiyar Higher Secondary School",
    affiliation: "Tamil Nadu State Board",
    duration: "2024",
    score: "83.2%",
    badge: "Computer Science Stream",
    location: "Tamil Nadu, India",
    coursework: [],
    highlights: [
      "Scored 83.2% with Computer Science as a core subject"
    ]
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Sri.P.Muthaiyar Higher Secondary School",
    affiliation: "Tamil Nadu State Board",
    duration: "2022",
    score: "87%",
    badge: "Secondary Education",
    location: "Tamil Nadu, India",
    coursework: [],
    highlights: [
      "Scored 87% in SSLC (10th Standard) examinations"
    ]
  }
];

export const certificationsData = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    badge: "Networking & Protocols",
    desc: "In-depth understanding of network architectures, IP addressing schemes, subnetting, Ethernet technologies, network security fundamentals, and routing protocols."
  },
  {
    title: "Artificial Intelligence for All",
    issuer: "AI Certification Program",
    badge: "Artificial Intelligence",
    desc: "Comprehensive foundation in artificial intelligence paradigms, machine learning concepts, AI ethics, and data-driven problem solving in modern software."
  },
  {
    title: "UTSAV",
    issuer: "Technical / Institutional Recognition",
    badge: "Merit & Technical Participation",
    desc: "Certification recognizing active technical involvement, innovation, and problem-solving excellence in competitive collegiate programs."
  }
];

export const achievementsData = [
  {
    title: "Academic Rank Holder",
    category: "Academic Distinction",
    organization: "IFET College of Engineering",
    metric: "CGPA 8.86",
    icon: "Award",
    description: "Maintained outstanding academic consistency, achieving an 8.86 CGPA to rank among the top academic performers in the Information Technology department."
  },
  {
    title: "Participated in 4 to 5 Hackathons",
    category: "Hackathons & Innovation",
    organization: "Collegiate & Technical Hackathons",
    metric: "4-5 Hackathons",
    icon: "Code2",
    description: "Participated in 4 to 5 competitive hackathons, collaborating under tight deadlines to prototype, develop, and present working digital solutions."
  },
  {
    title: "Technical Debugging Events",
    category: "Competitions",
    organization: "Technical Symposiums & Contests",
    metric: "Error Solving",
    icon: "Bug",
    description: "Actively competed in code debugging competitions, analyzing complex programs to identify, isolate, and resolve syntax, logic, and runtime errors."
  },
  {
    title: "Workshop: Embedded System & ARM Processor",
    category: "Hands-on Workshops",
    organization: "Technical Workshop",
    metric: "Hardware & Architecture",
    icon: "Cpu",
    description: "Participated in an intensive hands-on technical workshop covering embedded systems design, microcontroller interfaces, and ARM processor architecture."
  },
  {
    title: "Workshop: Prompt Engineering",
    category: "Emerging Tech Workshop",
    organization: "Modern AI Workshop",
    metric: "Generative AI",
    icon: "Sparkles",
    description: "Trained on prompt engineering frameworks, LLM optimization strategies, and leveraging AI tools to accelerate software engineering productivity."
  }
];

export const terminalSnippets = {
  "Developer.js": `/**
 * @profile Yuvasri
 * @role Information Technology Student & Full Stack Developer
 * @institution IFET College of Engineering (CGPA: 8.86)
 * @status Seeking Full Stack Developer Internship
 */
const yuvasri = {
  name: "Yuvasri",
  status: "Seeking Full Stack Developer Internship",
  academicCGPA: 8.86,
  academicHonors: "Academic Rank Holder",
  location: "Panruti, Tamil Nadu, India",
  coreSkills: ["C", "C++", "Java", "Python", "React.js", "Node.js", "MongoDB", "MySQL"],
  liveProjects: 5, // All 5 deployed on Vercel
  internship: "Web Developer Intern @ Industrial Design and Animations",
  passion: "Problem Solving & Modern Web Applications",
  sayHello: () => "Welcome to my portfolio! Let's build something remarkable. 🚀"
};

console.log(yuvasri.sayHello());`,

  "Skills.json": `{
  "languages": ["C", "C++", "Java", "Python"],
  "frontend": ["HTML5", "CSS3", "JavaScript", "React.js"],
  "backend": ["Node.js", "Express.js"],
  "databases": ["MongoDB", "MySQL"],
  "tools": ["Git", "GitHub", "VS Code"],
  "mindset": "Problem solver, continuous learner, clean code advocate"
}`,

  "Contact.sh": `#!/bin/bash
echo "=== CONTACT YUVASRI ==="
echo "Email: yuvasriradhakrishnan5@gmail.com"
echo "GitHub: https://github.com/yuvasri5-maker"
echo "LinkedIn: https://www.linkedin.com/in/yuvasri-radhakrishnan-2b2757365/"
echo "Location: Panruti, Tamil Nadu, India"
echo "Role: Open to Full Stack Developer Internship Opportunities"`
};
