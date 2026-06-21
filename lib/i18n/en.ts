import type {
  Profile,
  NavItem,
  Education,
  Experience,
  Achievement,
  SkillCategory,
  Project,
  Article,
  Contact,
} from "@/lib/data";

/** English content bundle — single source for the EN locale. */

export const profile: Profile = {
  name: "Mario Aprilnino Prasetyo",
  role: "Backend Engineer",
  status: "Available for work",
  tagline:
    "software engineer passionate about designing scalable systems and building reliable products.",
  cvUrl: "/mario-aprilnino-cv.pdf",
  location: "Semarang, Indonesia",
};

export const navItems: NavItem[] = [
  { id: "home", label: "Overview", icon: "home", color: "#007aff" },
  { id: "experience", label: "Experience", icon: "briefcase", color: "#5e5ce6" },
  { id: "skills", label: "Skills", icon: "sparkles", color: "#bf5af2" },
  { id: "projects", label: "Projects", icon: "folder", color: "#ff9500" },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science (GPA: 3.96)",
    institution: "Universitas Dian Nuswantoro",
    detail: "GPA: 3.96",
    period: "Sep 2022 - Mar 2026",
  },
  {
    institution: "Loyola Senior High School",
  },
];

export const experiences: Experience[] = [
  {
    company: "PT. Macaroon Pte. Ltd. · YouApp AI",
    role: "Lead Backend Engineer",
    period: "Mar 2026 - present",
    current: true,
    description:
      "Lead backend engineering for the YouApp AI platform: architecture, delivery, and technical direction across services.",
    highlights: [
      "Lead the design and development of scalable, high-performance backend systems supporting core business applications.",
      "Provide technical leadership, including architecture decisions, code reviews, and enforcement of best practices.",
      "Collaborate with cross-functional teams to deliver reliable, secure, and efficient end-to-end solutions.",
      "Mentor engineers and drive continuous improvement in development processes, tools, and system performance.",
    ],
    tech: ["Golang", "NestJS", "MongoDB", "PostgreSQL", "RabbitMQ", "Firebase"],
  },
  {
    company: "PT. Macaroon Pte. Ltd. · YouApp AI",
    role: "Backend Engineer",
    period: "Aug 2025 - Feb 2026",
    description:
      "Developed backend services for the YouApp AI platform — multi-currency transactions, payment gateways, and fintech features.",
    highlights: [
      "Engineered backend services handling 18,000+ users, ensuring high availability and scalable data management across the platform.",
      "Implemented a multi-currency transaction system supporting global exchange rates with real-time currency conversion.",
      "Integrated multiple payment gateways to support diverse payment methods and streamline transaction processing.",
      "Developed fintech features including virtual & physical Visa card management, third-party financial integrations, and crypto transaction handling.",
    ],
    tech: ["Golang", "NestJS", "MongoDB", "PostgreSQL", "RabbitMQ", "Firebase"],
  },
  {
    company: "PT Monago IO",
    role: "Backend Developer",
    period: "Nov 2024 - Jul 2025",
    description:
      "Built decision support systems and chatbot integrations using FastAPI, NestJS, MongoDB, and LangChain.",
    highlights: [
      "Built decision support systems using FastAPI, NestJS, and MongoDB to create fast, lightweight, and scalable backend applications.",
      "Integrated RAG/LLM chatbots with LangChain, ChromaDB, and Redis Stack for dynamic, context-aware solutions connected to diverse data sources.",
    ],
    tech: ["FastAPI", "NestJS", "MongoDB", "Langchain", "ChromaDB", "Redis"],
  },
  {
    company: "Bengkel Koding, Dian Nuswantoro University",
    role: "Backend Developer",
    period: "Aug 2024 - present",
    current: true,
    description:
      "Developed REST APIs, optimized databases, and deployed machine learning models.",
    highlights: [
      "Developed and optimized RESTful APIs using Laravel and FastAPI, integrating PostgreSQL, MySQL, and MongoDB for robust, scalable architectures.",
      "Deployed Large Language Models (LLMs) and TensorFlow models as production APIs.",
    ],
    tech: ["Laravel", "FastAPI", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Aug 2023 - present",
    current: true,
    description: "Developed web and mobile apps tailored to client needs.",
    highlights: [
      "Develop and maintain full-stack applications for web and mobile platforms.",
      "Collaborate with clients and team members to ensure project alignment and quality standards.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hi-Technology Competition",
    place: "1st Place",
    event: "Software Competition 2025",
    date: "Apr 2025",
  },
  {
    title: "ITC 2025",
    place: "1st Place",
    event: "Website Development Competition",
    date: "Jan 2025",
  },
  {
    title: "Hi-Technology Competition",
    place: "2nd Place",
    event: "Software Competition 2024",
    date: "Apr 2024",
  },
  {
    title: "ITC 2024",
    place: "2nd Place",
    event: "Website Development Competition",
    date: "Jan 2024",
  },
  {
    title: "Programming Competition",
    place: "3rd Place",
    event: "Built Accounting Journal app using Laravel + Vue",
    date: "Oct 2023",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Backend",
    items: [
      { name: "NestJS", logo: "nestjs.svg" },
      { name: "Golang", logo: "golang.svg" },
      { name: "ExpressJS", logo: "expressjs.svg" },
      { name: "FastAPI", logo: "fastapi.svg" },
      { name: "Laravel", logo: "laravel.svg" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", logo: "react.svg" },
      { name: "NextJS", logo: "nextjs.svg" },
      { name: "Vue", logo: "vue.svg" },
      { name: "TailwindCSS", logo: "tailwindcss.svg" },
    ],
  },
  {
    name: "Database",
    items: [
      { name: "MongoDB", logo: "mongodb.svg" },
      { name: "PostgreSQL", logo: "postgresql.svg" },
      { name: "MySQL", logo: "mysql.svg" },
      { name: "Firebase", logo: "firebase.svg" },
      { name: "ChromaDB", logo: "chroma.svg" },
    ],
  },
  {
    name: "AI & Messaging",
    items: [
      { name: "Langchain", logo: "langchain.svg" },
      { name: "RabbitMQ", logo: "rmq.png" },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "MyFusionPay",
    role: "Backend Web3 Developer",
    description:
      "FusionPay is a non-custodial Web3 connector that simplifies cross-border payments, smart wallet access, and real-world crypto utility with no accounts or complexity.",
    tech: ["Golang", "PostgreSQL", "Redis", "OneSignal"],
    integrations: [
      "Web3: Simplex, Superex, Particle Network",
      "Payments: Aleta Visa Card",
      "Blockchain: Etherscan, Alchemy",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.myfusionpay.app&hl=en",
    appStore:
      "https://apps.apple.com/my/app/fusionpay-digital-wallet/id6756575260",
  },
  {
    name: "YouApp: Trips & Experiences",
    role: "Backend Developer",
    description:
      "YouApp is a trusted experiences platform that lets you discover, book, and join real local activities hosted by verified and certified locals for meaningful, authentic travel and lifestyle experiences.",
    tech: [
      "NestJS",
      "MongoDB",
      "Socket.IO",
      "RabbitMQ",
      "Redis",
      "Firebase",
      "Stripe",
      "Betterpay",
      "Google Maps API",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.youapp.you_app&hl=en",
    appStore:
      "https://apps.apple.com/id/app/youapp-trips-experiences/id6444595490",
  },
  {
    name: "Maharbote Social",
    role: "Backend Developer",
    description:
      "A global social media app with real-time chat that combines authentic Myanmar Maharbote and modern AI to connect Myanmar communities worldwide through meaningful friendships, communities, and real-life events.",
    tech: ["NestJS", "PostgreSQL", "Socket.IO", "Firebase", "Google Maps API"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.maharbote.ai&hl=id",
    appStore: "https://apps.apple.com/us/app/maharbote-social/id6753066582",
  },
  {
    name: "BeSTI Chatbot",
    role: "Backend Developer",
    description:
      "BeSTI Chatbot is a chatbot that can answer questions about the STI (Sarjana Teknik Informatika) program at Udinus.",
    tech: ["FastAPI", "MongoDB", "Gemini", "Langchain", "ChromaDB"],
  },
  {
    name: "STI Apps Udinus",
    role: "Backend Developer",
    description:
      "STI Apps is a web application for the STI (Sarjana Teknik Informatika) program at Udinus.",
    tech: ["Laravel", "NextJS", "TailwindCSS", "MySQL"],
    url: "https://sti.dinus.id/",
  },
  {
    name: "Reservasi Udinus",
    role: "DevOps",
    description:
      "Reservasi Udinus is a web application for the Udinus (Dian Nuswantoro University) program at Udinus.",
    tech: ["Laravel", "NextJS", "TailwindCSS", "PostgreSQL"],
    url: "https://reservasi.bengkelkoding.dinus.id/",
  },
  {
    name: "Konteks",
    role: "Backend Developer",
    description: "Konteks B2B supply chain web application with AI integration.",
    tech: ["NestJS", "MongoDB", "OpenAI", "Langchain", "ChromaDB"],
    url: "https://konteks.biz/",
  },
  {
    name: "Monago",
    role: "Backend Developer",
    description:
      "Monago accelerates your business with secure synthetic data and AI-powered predictions, helping you gain insights and make smarter decisions.",
    tech: [
      "FastAPI",
      "MongoDB",
      "OpenAI",
      "Langchain",
      "Deepseek-chat",
      "Redis Stack",
      "ChromaDB",
    ],
    url: "https://monago.io/",
  },
  {
    name: "BSP Tracking",
    role: "Fullstack Developer",
    description:
      "BSP Tracking is a Vehicle Delivery Management System developed by PT BSP Semarang. It includes a web-based application for monitoring vehicle deliveries and a mobile application used by drivers to submit delivery reports.",
    tech: [
      "Laravel",
      "Vue",
      "InertiaJS",
      "TailwindCSS",
      "Firebase",
      "MySQL",
    ],
  },
  {
    name: "Senikita",
    role: "Backend Developer",
    description:
      "Senikita is a marketplace that provides a platform for Indonesian regional arts and culture.",
    tech: [
      "Laravel",
      "React",
      "TailwindCSS",
      "MySQL",
      "TensorflowJS",
      "Xendit",
    ],
    url: "https://senikita-fe.vercel.app/",
  },
  {
    name: "Widya",
    role: "Backend Developer",
    description:
      "Widya is a learning platform that provides educational content and resources for students and educators.",
    tech: [
      "Laravel",
      "Next JS",
      "TailwindCSS",
      "MySQL",
      "TensorflowJS",
      "Xendit",
    ],
    url: "https://widya-senikita.vercel.app/",
  },
  {
    name: "Sirekam Poltekes Yogyakarta",
    role: "Backend Developer",
    description:
      "Sirekam is an application used for managing student activity credit units at Poltekkes Yogyakarta. It facilitates the tracking and management of student extracurricular activities for academic credit purposes.",
    tech: ["Laravel", "TailwindCSS", "MySQL"],
    url: "https://sirekampolkesyogya.my.id/",
  },
  {
    name: "Dinacom DNCC",
    role: "Fullstack Developer",
    description:
      "This website is specifically designed to facilitate participant registration and manage documentation related to the DINACOM competition organized by DNCC.",
    tech: ["Laravel", "Alpine", "Flowbite", "TailwindCSS", "MySQL"],
  },
  {
    name: "Devlearn",
    role: "Fullstack Developer",
    description:
      "Devlearn is a learning platform for students to create and sell programming-related video content, offering a space to share knowledge and earn from their expertise.",
    tech: ["Laravel", "TailwindCSS", "MySQL"],
  },
  {
    name: "StudyNest",
    role: "Backend Developer",
    description:
      "StudyNest is a learning companion platform designed to enhance the learning experience by utilizing proven effective techniques.",
    tech: ["Laravel", "Alpine", "TailwindCSS", "MySQL"],
  },
  {
    name: "Jurnalin",
    role: "Fullstack Developer",
    description:
      "Jurnalin is an advanced accounting app that simplifies managing financial records for companies. It makes it easy to record, track, and analyze all ledger transactions — from daily entries to generating reports and ensuring compliance.",
    tech: ["Laravel", "Vue", "InertiaJS", "TailwindCSS", "MySQL"],
  },
  {
    name: "Getasan Apps",
    role: "Fullstack Developer",
    description:
      "Getasan Apps is an application used by the Getasan District in Semarang Regency to receive reports from residents.",
    tech: ["Flutter", "BLOC", "Golang", "MySQL"],
  },
  {
    name: "Kompas Clone",
    role: "Mobile Developer",
    description:
      "Flutter Slicing UI Mobile Application Kompas News Clone. This project is for learning purposes only.",
    tech: ["Flutter"],
  },
];

export const articles: Article[] = [
  {
    title: "Mastering Context in Go: The Backbone of Resilient Microservices",
    category: "backend",
    readTime: "12 min read",
    date: "Dec 21, 2025",
    description:
      "A comprehensive guide on leveraging the built-in 'context' package to enforce service boundaries, manage timeouts, implement cancellation, and propagate request-scoped values across complex distributed systems.",
  },
  {
    title: "Architecting for Testability: Implementing Clean Architecture in Go Services",
    category: "backend",
    readTime: "12 min read",
    date: "Dec 21, 2025",
    description:
      "Adopt Clean Architecture principles to decouple business logic from frameworks, ensuring maintainability, testability, and long-term project viability in complex Go applications.",
  },
  {
    title: "Tuning the Go Runtime: Deep Dive into Memory Management and GC Optimization",
    category: "backend",
    readTime: "10 min read",
    date: "Dec 21, 2025",
    description:
      "A high-level exploration of the Go scheduler and garbage collector to minimize latency, reduce memory footprint, and ensure predictable performance in production systems.",
  },
  {
    title:
      "Maximizing Concurrency: Building High-Throughput Microservices with Go Goroutines",
    category: "backend",
    readTime: "8 min read",
    date: "Dec 21, 2025",
    description:
      "Dive deep into Go's concurrency model to design and implement highly efficient, low-latency microservices capable of handling massive parallel loads.",
  },
  {
    title: "Master React 19: Build Cutting-Edge Web Apps",
    category: "react",
    readTime: "5 min read",
    date: "Jan 15, 2024",
    description:
      "Dive into React 19's latest features and learn to craft dynamic, AI-enhanced components for modern web applications.",
  },
  {
    title: "Revolutionize Styling with Tailwind CSS 4.0",
    category: "css",
    readTime: "8 min read",
    date: "Jan 10, 2024",
    description:
      "Unlock the full potential of Tailwind CSS 4.0 to create stunning, responsive designs with unmatched speed and flexibility.",
  },
  {
    title: "Craft High-Performance APIs with Node.js and Express",
    category: "backend",
    readTime: "12 min read",
    date: "Jan 5, 2024",
    description:
      "Build scalable, AI-ready RESTful APIs using Node.js and Express to power next-gen applications.",
  },
  {
    title: "Vue.js 3 vs React 19: The Ultimate Framework Showdown",
    category: "frontend",
    readTime: "10 min read",
    date: "Dec 28, 2023",
    description:
      "Explore Vue.js 3 and React 19 head-to-head to choose the perfect framework for your next-gen web project.",
  },
  {
    title: "Supercharge Your Backend with Express.js APIs",
    category: "backend",
    readTime: "4 min read",
    date: "Jan 18, 2024",
    description:
      "Learn to build lightning-fast, scalable RESTful APIs with Express.js to drive modern web and mobile apps.",
  },
  {
    title: "FastAPI: Build Blazing-Fast Python APIs for 2025",
    category: "backend",
    readTime: "6 min read",
    date: "Feb 1, 2024",
    description:
      "Discover FastAPI's power to create high-performance, AI-integrated Python APIs with automatic documentation.",
  },
  {
    title: "Go for Speed: Building Scalable APIs with Golang",
    category: "backend",
    readTime: "5 min read",
    date: "Feb 10, 2024",
    description:
      "Harness Go's simplicity and speed to create high-performance APIs for cloud-native applications.",
  },
  {
    title: "NestJS: Architect Scalable Backends with TypeScript",
    category: "backend",
    readTime: "6 min read",
    date: "Mar 1, 2024",
    description:
      "Leverage NestJS and TypeScript to build modular, enterprise-grade APIs for modern cloud ecosystems.",
  },
];

export const contact: Contact = {
  heading: "Contact me for collaboration",
  body: "Reach out to me for any collaboration or project. I am always open to new opportunities and projects. Let's work together and create something awesome!",
  ctaLabel: "Start a project",
  email: "#",
  social: [
    { label: "GitHub", href: "https://github.com/marioapn3", icon: "github", color: "#24292f" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mario-aprilnino/", icon: "linkedin", color: "#0a66c2" },
    { label: "Instagram", href: "https://www.instagram.com/mario.apn/", icon: "instagram", color: "#d62976" },
    { label: "WhatsApp", href: "https://wa.me/6281247430546", icon: "whatsapp", color: "#25d366" },
    { label: "Telegram", href: "https://t.me/marioaprilnino", icon: "send", color: "#26a5e4" },
  ],
  footer: `© ${new Date().getFullYear()} ${profile.name}`,
};
