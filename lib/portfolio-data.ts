export const profile = {
  name: "Abdelkhalk Essaid",
  title: "Software Engineer | Full-Stack & Data Science",
  intro:
    "I design and build full-stack applications that combine modern web development, backend systems, databases, machine learning, and automation.",
  positioning:
    "Open to software engineering, backend, data science, and machine-learning opportunities.",
  email: "abdelkhalkessaid1@gmail.com",
  github: "https://github.com/khalouki",
  linkedin: "https://www.linkedin.com/in/abdelkhalk-essaid/",
  cv: "./ESSAID_ABDELKHALEK_CV.pdf",
  image: "/pro.avif",
};

export type Project = {
  title: string;
  summary: string;
  contribution: string;
  highlights: string[];
  technologies: string[];
  github: string;
  details?: {
    context: string;
    problem: string;
    solution: string;
    architecture: string[][];
    challenges: string[];
    machineLearning: string;
    limitations: string;
    future: string[];
  };
};

export const projects: Project[] = [
  {
    title: "Virtual FabLab — Intelligent Manufacturing Supervision Platform",
    summary:
      "Full-stack platform for managing and supervising a virtual fabrication laboratory with machine reservations, administration dashboards, interactive simulation, simulated IoT telemetry, and anomaly analysis.",
    contribution:
      "Built the academic final-year project across frontend, backend APIs, data persistence, simulated telemetry, and the machine-learning anomaly analysis flow.",
    highlights: [
      "Role-based authentication with JWT-protected API endpoints for administrators and students",
      "Machine management, reservation workflow, notifications, and administrative dashboards",
      "Interactive simulation for 3D printers and CNC machines with G-code and NC file visualization",
      "Simulated MQTT telemetry, telemetry history, health scoring, monitoring, and anomaly alerts",
      "Isolation Forest anomaly detection integrated into the supervision workflow",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Three Fiber",
      "Drei",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "SQLite",
      "JWT",
      "MQTT",
      "Mosquitto",
      "scikit-learn",
      "Isolation Forest",
      "Pandas",
    ],
    github: "https://github.com/khalouki/Stage_ENSA",
    details: {
      context:
        "Final-year project at ENSA Beni Mellal focused on validating the architecture of a web-based supervision platform for a virtual fabrication lab.",
      problem:
        "A FabLab needs clear visibility into machine availability, reservations, operating state, telemetry history, and abnormal behavior without scattering the workflow across disconnected tools.",
      solution:
        "The platform connects a Next.js interface to a FastAPI backend, stores operational data in SQLite, consumes simulated MQTT telemetry, and applies anomaly detection to support monitoring decisions.",
      architecture: [
        ["User", "Next.js frontend", "FastAPI REST API", "SQLite database"],
        [
          "MQTT simulator",
          "Mosquitto broker",
          "FastAPI telemetry service",
          "Database and monitoring dashboard",
          "Isolation Forest anomaly analysis",
        ],
      ],
      challenges: [
        "Synchronizing frontend machine states with backend data",
        "Handling role-based access and JWT authentication",
        "Processing and storing MQTT telemetry",
        "Integrating anomaly detection into a web application",
        "Visualizing G-code and machine movements",
        "Maintaining modular frontend and backend architecture",
      ],
      machineLearning:
        "The ML module uses Isolation Forest to identify unusual patterns in simulated machine telemetry and surface anomaly alerts for academic demonstration.",
      limitations:
        "Telemetry is simulated for architectural validation and academic demonstration. The system is not presented as connected to real industrial machines or production-scale infrastructure.",
      future: [
        "Connect the telemetry pipeline to real lab equipment when hardware is available",
        "Add richer audit logs and exportable maintenance reports",
        "Evaluate additional anomaly models with labeled historical data",
      ],
    },
  },
  {
    title: "Equipment Visit Management — OCP Internship Project",
    summary:
      "Desktop and mobile solution for organizing equipment visit workflows at Laverie Daoui, supporting field agents and administrators.",
    contribution:
      "Developed application features for visit tracking, equipment status visibility, and admin-facing management during an internship.",
    highlights: [
      "Separated mobile workflows for field agents from desktop administration tasks",
      "Used REST APIs and a MySQL database to coordinate equipment visit data",
      "Focused on practical industrial equipment management needs",
    ],
    technologies: ["Java", "JavaFX", "Android Studio", "REST APIs", "MySQL", "PHP"],
    github: "https://github.com/khalouki/OCP_STAGE",
  },
  {
    title: "Car Parts E-Commerce Application",
    summary:
      "Full-stack e-commerce application for browsing and managing automotive parts with a React frontend and Flask backend.",
    contribution:
      "Built frontend and backend features around product data, API integration, and MySQL persistence.",
    highlights: [
      "React client connected to Flask API endpoints",
      "MySQL-backed product and application data",
      "Practical full-stack structure for an online catalog workflow",
    ],
    technologies: ["React", "Flask", "Python", "MySQL"],
    github: "https://github.com/khalouki/React_Flask_E-commerce_website",
  },
  {
    title: "Faculty Schedule Management App",
    summary:
      "Web application for managing faculty schedules with server-rendered Flask views and database-backed scheduling data.",
    contribution:
      "Implemented schedule management flows using Python, Flask templates, and MySQL.",
    highlights: [
      "Designed around academic scheduling needs",
      "Used Flask and Jinja templates for server-rendered UI",
      "Stored schedule data in MySQL",
    ],
    technologies: ["Python", "Flask", "Jinja2", "MySQL"],
    github: "https://github.com/khalouki/Python-Faculty-Schedule-App",
  },
  {
    title: "Spam Detection Classifier",
    summary:
      "Machine-learning project for classifying spam and ham messages through text preprocessing, model training, and evaluation.",
    contribution:
      "Prepared text data, trained classification models, and evaluated results as a focused NLP learning project.",
    highlights: [
      "NLP preprocessing pipeline for message data",
      "Classification workflow with scikit-learn",
      "Model evaluation for spam detection behavior",
    ],
    technologies: ["Python", "scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/khalouki/Spam_Ham_Detection_Mini_Projet",
  },
];

export const skillCategories = [
  {
    name: "Languages",
    evidence: "Used across full-stack, backend, data, and academic projects.",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "PHP"],
  },
  {
    name: "Frontend",
    evidence: "Applied in portfolio work, web applications, and the Virtual FabLab interface.",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Backend and APIs",
    evidence: "Used for REST APIs, authentication, database access, and application workflows.",
    skills: ["FastAPI", "Spring Boot", "Flask", "REST APIs", "JWT authentication", "Laravel"],
  },
  {
    name: "Data Science and Machine Learning",
    evidence: "Applied in anomaly detection, NLP classification, preprocessing, and model integration.",
    skills: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
      "Anomaly detection",
      "Data preprocessing",
      "Model integration",
    ],
  },
  {
    name: "Databases and Messaging",
    evidence: "Used to persist application data and simulate telemetry-driven systems.",
    skills: ["SQLite", "MySQL", "MongoDB", "MQTT", "Mosquitto"],
  },
  {
    name: "Tools and Engineering",
    evidence: "Used for version control, development environments, API testing, and Linux workflows.",
    skills: ["Git", "GitHub", "Linux", "Postman", "Docker"],
  },
];

export const timeline = [
  {
    type: "Education",
    title: "Master's Degree",
    organization: "Faculte Polydisciplinaire de Beni Mellal (FPBM)",
    period: "2024 - Present",
    description:
      "Data Science and Information Systems Security, with work spanning software engineering, machine learning, and secure information systems.",
  },
  {
    type: "Experience",
    title: "Final-Year Internship",
    organization: "ENSA Beni Mellal",
    period: "Final-year project",
    description:
      "Built Virtual FabLab, a full-stack supervision platform combining backend APIs, machine workflows, simulated telemetry, and anomaly analysis.",
  },
  {
    type: "Education",
    title: "Licence",
    organization: "Faculte Polydisciplinaire de Beni Mellal (FPBM)",
    period: "2024",
    description: "Data Science and Information Systems Security.",
  },
  {
    type: "Experience",
    title: "Software Development Internship",
    organization: "OCP Group, Laverie Daoui, Khouribga",
    period: "March 2023 - May 2023",
    description:
      "Developed desktop and mobile application features for equipment visit management and operational status tracking.",
  },
  {
    type: "Education",
    title: "DUT",
    organization: "Ecole Superieure de Technologie (EST)",
    period: "2023",
    description: "Software Engineering.",
  },
  {
    type: "Experience",
    title: "Web Development Internship",
    organization: "Factory Gear, Tanger",
    period: "August 2022 - September 2022",
    description:
      "Created a static website presenting maintenance, automation, and robotics services.",
  },
];
