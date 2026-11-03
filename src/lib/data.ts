export const profile = {
  name: "Suvajit Sahoo",
  role: "Software Engineer · Full Stack Developer",
  location: "West Bengal, India",
  email: "suvajitsahoo2004@gmail.com",
  phone: "+91-9933449779",
  github: "https://github.com/suvajit04",
  portfolio: "https://suvajitportfolio.netlify.app",
  resume: "/documents/Suvajit_Sahoo_Resume.pdf",
  researchReport: "/documents/HisNet_Final_Year_Project_Report.pdf",
  summary:
    "Computer Science graduate focused on backend engineering, full-stack applications, REST APIs, and reliable service workflows. I also have an academic research background in Vision Transformers and computational pathology.",
};

export const skillGroups = [
  {
    name: "Frontend",
    description: "Interfaces built for clarity, speed, and responsive experiences.",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI", "Single-Page Applications"],
  },
  {
    name: "Backend",
    description: "API development, service logic, and asynchronous workflows.",
    skills: ["Node.js", "Express.js", "TypeScript", "Python", "Flask", "NestJS", "REST API Design", "Zod"],
  },
  {
    name: "Database & ORM",
    description: "Relational and document databases, schema design, and data access.",
    skills: ["MySQL", "MariaDB", "MongoDB", "SQLite", "Prisma ORM", "Sequelize", "Schema Design", "CRUD"],
  },
  {
    name: "AI & Machine Learning",
    description: "Academic work with transformer-based image classification and data analysis.",
    skills: ["Vision Transformers (ViT)", "CNN", "Deep Learning", "PyTorch", "TensorFlow", "Data Analysis"],
  },
  {
    name: "DevOps & Tools",
    description: "Development tooling and asynchronous processing infrastructure.",
    skills: ["Git", "GitHub", "Docker", "Netlify", "Redis", "BullMQ", "Winston"],
  },
  {
    name: "Core CS",
    description: "Foundational engineering practices used throughout development.",
    skills: ["Data Structures & Algorithms", "OOP", "Authentication", "Debugging", "Testing"],
  },
];

export const experience = {
  title: "Software Development Engineer Intern",
  company: "IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED",
  period: "August 2026 – Present",
  location: "India",
  points: [
    "Developed and enhanced backend microservices for candidate management, user administration, and slot booking using Node.js, Express.js, TypeScript, Sequelize, Prisma, and MySQL.",
    "Implemented automated candidate follow-up workflows using BullMQ, Redis, and scheduled jobs for booking reminders and abandoned-form email/WhatsApp notifications.",
    "Integrated asynchronous notification processing between microservices and user-creation workflows with credential email notifications.",
    "Improved APIs for partial-name search, profile retrieval, CSV exports, request validation, and database operations.",
    "Contributed to admin-panel authentication and user-management features; debugged API, migration, queue-processing, and integration issues through functional testing.",
  ],
  stack: ["Node.js", "Express.js", "TypeScript", "Sequelize", "Prisma", "MySQL", "Redis", "BullMQ"],
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hisnet",
    number: "01",
    title: "HisNet",
    subtitle: "Vision Transformer · Computational Pathology",
    category: "AI / Research",
    description:
      "A Vision Transformer-based academic research project for classifying osteosarcoma histopathology image patches into viable tumor, necrotic tumor, and non-tumor classes.",
    stack: ["Python", "TensorFlow", "Vision Transformer", "MHSA", "MLP", "Deep Learning"],
    highlights: ["Three-class tissue patch classification", "12 Transformer encoder layers", "5,116 image patches in the reported dataset", "95.43% independent test accuracy reported in the project report"],
    featured: true,
  },
  {
    slug: "task-management",
    number: "02",
    title: "Internal Engineering Task Management System",
    subtitle: "Backend foundation · REST APIs",
    category: "Backend",
    description:
      "Backend foundation for an internal engineering task-management platform with versioned REST routing, role-aware data models, validation, and structured request logging.",
    stack: ["TypeScript", "Express.js", "Prisma", "MariaDB", "Zod", "Winston"],
    highlights: ["Versioned REST API routing", "Users and roles modeled with Prisma", "Zod request validation", "Centralized errors and request correlation IDs"],
    github: "https://github.com/suvajit04/Internal-Engineering-Task-Management-System",
    featured: true,
  },
  {
    slug: "medpulse",
    number: "03",
    title: "MedPulse",
    subtitle: "Medical shop management system",
    category: "Full Stack",
    description:
      "A MERN-based medical shop management system covering daily pharmacy workflows such as point-of-sale billing, inventory, expiry tracking, prescriptions, customers, and suppliers.",
    stack: ["React.js", "Node.js", "MongoDB", "REST API"],
    highlights: ["Billing and point-of-sale workflows", "Inventory and expiry tracking", "Prescription and customer records", "AI demand-forecasting feature concept"],
    featured: true,
  },
  {
    slug: "poy-calculator",
    number: "04",
    title: "POY Utility Calculators",
    subtitle: "Practical calculation utilities",
    category: "Frontend",
    description:
      "A responsive single-page utility calculator for mechanical and practical calculation workflows used in workshop, maintenance, and manufacturing contexts.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    highlights: ["Interactive inputs and instant outputs", "Reusable calculation logic", "Responsive single-page interface", "Modular UI structure"],
    demo: "https://poy-calculator.netlify.app",
    featured: true,
  },
];

export const education = [
  { title: "B.Tech – Computer Science & Engineering", institution: "Academy of Technology (MAKAUT), West Bengal", period: "Graduated August 2026", detail: "Bachelor of Technology" },
  { title: "Higher Secondary – WBCHSE", institution: "Mugberia Gangadhar High School", period: "2022", detail: "85%" },
  { title: "Secondary – WBBSE", institution: "Mugberia Gangadhar High School", period: "2020", detail: "81%" },
];

export const certification = {
  title: "Wipro TalentNext – Data Science Training",
  period: "July – October 2025",
  details: ["Data analysis and visualization", "Machine learning fundamentals", "Python, SQL, and data pipelines", "Git-based collaborative Agile workflows"],
};

export const hisnet = {
  title: "HisNet: ViT-Based Automated Grading of Osteosarcoma",
  guide: "Prof. Supantha Das",
  institution: "Academy of Technology · MAKAUT",
  teamSize: "5 project members",
  dataset: [
    { label: "Patients", value: "50" },
    { label: "Whole-slide images", value: "942" },
    { label: "Image patches", value: "5,116" },
    { label: "Training patches", value: "3,580" },
    { label: "Validation / test patches", value: "1,546" },
    { label: "Patch resolution", value: "128 × 128" },
  ],
  classes: [
    { label: "Viable Tumor", short: "VT", value: 1629 },
    { label: "Necrotic Tumor", short: "NEC", value: 1231 },
    { label: "Non-Tumor", short: "NT", value: 2256 },
  ],
  metrics: [
    { label: "Training accuracy", value: 90.41 },
    { label: "Validation accuracy", value: 86.96 },
    { label: "Independent test accuracy", value: 95.43 },
  ],
  architecture: [
    "Whole-slide images",
    "Preprocessing & augmentation",
    "Patch extraction",
    "Patch embedding + positional encoding",
    "12 Transformer encoder layers",
    "MHSA + MLP feature learning",
    "Feature extraction",
    "Three-class prediction",
  ],
  limitations: [
    "Moderate dataset size may affect generalization.",
    "The samples originate from a single medical center.",
    "Vision Transformer models require substantial computational resources.",
    "The project report does not describe real-world clinical validation.",
    "The dataset spans 1995–2015 and may not reflect current imaging protocols.",
  ],
};
