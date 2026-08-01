import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  sigmainfi,
  shopify,
  sigmasrn,
  portfoli,
  tripguide,
  threejs,
  aspdotneticon,
  csharp,
  dotnetcore,
  sqlserver,
  azure,
  aitools,
  crystalreports,
  WOQEMLOGO,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const personalInfo = {
  name: "SRIKANTH",
  fullName: "Srikanth Gaddale",
  title: "Full Stack .NET Developer",
  experienceYears: "6+",
  email: "kumarsrikanth050595@gmail.com",
  phone: "+91 8867670054",
  location: "Bengaluru, Karnataka | Native: Raichur – 584101",
  githubPortfolio: "https://modelshri.github.io/Srikanth",
  languages: ["English", "Hindi", "Kannada", "Marathi", "Telugu"],
  summary: `Results-driven Full Stack .NET Developer with 6+ years of experience in designing, developing, deploying, and maintaining enterprise web applications using ASP.NET Core MVC, ASP.NET Web Forms, C#, React.js, Node.js, JavaScript, SQL Server, Entity Framework, REST APIs, Microsoft Azure, and Crystal Reports. Experienced in cloud deployment, Azure App Services, and modern web application hosting alongside IIS, Vercel, cPanel, and VPS environments. Skilled in AI-powered tools (ChatGPT, Claude AI, Cursor AI, GitHub Copilot) to accelerate coding, debugging, and productivity.`
};

const services = [
  {
    title: "Full Stack .NET Developer",
    desc: "ASP.NET Core MVC, Web API, C#, Entity Framework, ADO.NET",
    icon: aspdotneticon,
  },
  {
    title: "React.js & Frontend Engineer",
    desc: "React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive UI",
    icon: web,
  },
  {
    title: "Node.js & Express API Backend",
    desc: "Node.js, Express.js, RESTful APIs, SignalR, Microservices",
    icon: backend,
  },
  {
    title: "Database Architect (SQL Server)",
    desc: "MS SQL Server, SSMS, Stored Procedures, Performance Tuning",
    icon: sqlserver,
  },
  {
    title: "Cloud & DevOps Specialist",
    desc: "Microsoft Azure, IIS, Vercel, cPanel, VPS Hosting, App Manager",
    icon: azure,
  },
  {
    title: "Enterprise Solutions Architect",
    desc: "HMIS, SMIS, Call Audit, Billing, Laboratory, Radiology, Crystal Reports",
    icon: creator,
  },
  {
    title: "AI-Powered Software Engineer",
    desc: "ChatGPT, Claude AI, Cursor AI, GitHub Copilot, AI Debugging",
    icon: aitools,
  },
];

const technologies = [
  {
    name: "C#",
    category: "Backend",
    icon: csharp,
  },
  {
    name: "ASP.NET Core",
    category: "Backend",
    icon: dotnetcore,
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: reactjs,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: nodejs,
  },
  {
    name: "SQL Server",
    category: "Database",
    icon: sqlserver,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Languages",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: tailwind,
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    icon: azure,
  },
  {
    name: "Crystal Reports",
    category: "Reporting",
    icon: crystalreports,
  },
  {
    name: "AI Dev Tools",
    category: "AI & Productivity",
    icon: aitools,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: html,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: css,
  },
  {
    name: "Git",
    category: "DevOps",
    icon: git,
  },
  {
    name: "Three.js",
    category: "Frontend",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Full Stack .NET Developer",
    company_name: "INFINITRO Tech Pvt Ltd",
    icon: sigmainfi,
    iconBg: "#1E1B4B",
    date: "April 2022 - PRESENT",
    location: "Bengaluru, Karnataka",
    points: [
      "Designed and developed Enterprise Hospital Management Information System (HMIS) using ASP.NET Core MVC, C#, SQL Server, and Entity Framework.",
      "Architected secure authentication and Role-Based Access Control (RBAC) across 10+ core modules including Billing, Pharmacy, Laboratory, Radiology, Blood Bank, HRMS, Inventory, and Certificate Management.",
      "Developed a full-stack Call Audit Management System using React.js, Node.js (Express.js), AG Grid, and Vercel featuring audio recording playback streaming, bulk Excel call records upload, and auditor analytics.",
      "Created custom Crystal Reports for billing invoices, laboratory test results, radiology reports, certificates, and financial receipts.",
      "Developed responsive client websites (Clark Construction, Harvard Learning, PMIS, Invoice Mailer) with React.js & ASP.NET Core / Node.js backends.",
      "Optimized SQL Server queries, stored procedures, and database execution plans to achieve up to 40% performance speedup.",
      "Deployed and maintained production applications on IIS, Microsoft Azure App Services, Vercel, cPanel, and VPS environments with 24/7 production support."
    ],
  },
  {
    title: "Web Developer",
    company_name: "WOQEM International",
    icon: WOQEMLOGO,
    iconBg: "#0F172A",
    date: "January 2021 - March 2022",
    location: "Bengaluru, Karnataka",
    points: [
      "Developed and maintained responsive, user-friendly web interfaces using HTML5, CSS3, JavaScript (ES6+), and Bootstrap.",
      "Integrated RESTful APIs to dynamically fetch and present real-time data, enhancing user interaction and experience.",
      "Optimized frontend asset delivery and rendering performance, significantly reducing page load times across desktop and mobile devices.",
      "Ensured pixel-perfect cross-browser compatibility and responsive layout adaptability across all target screen sizes.",
      "Collaborated closely with backend developers to cleanly integrate client-side UIs with server-side business logic."
    ],
  },
];

const projects = [
  {
    name: "Enterprise HMIS Platform",
    description:
      "A comprehensive Hospital Management Information System (HMIS) engineered to streamline healthcare operations. Features 10+ modules: Billing, Pharmacy, Laboratory, Radiology, Blood Bank, Clinical, HRMS, Inventory, and Certificate Management. Integrates Crystal Reports, SQL stored procedures, and secure RBAC access.",
    tags: [
      { name: "ASP.NET Core MVC", color: "orange-text-gradient" },
      { name: "C# / Entity Framework", color: "blue-text-gradient" },
      { name: "SQL Server (SSMS)", color: "green-text-gradient" },
      { name: "Crystal Reports", color: "pink-text-gradient" },
      { name: "IIS Deployment", color: "blue-text-gradient" },
    ],
    image: sigmasrn,
    source_code_link: "https://modelshri.github.io/Srikanth",
  },
  {
    name: "Call Audit Management System",
    description:
      "Full-stack call auditing and scoring platform built for customer support operations. Features Super Admin, Admin, and User dashboards, Excel call logs bulk uploader, Audio API call streaming player, AG Grid filtering/sorting/pagination, and automated auditor timestamp tracking.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js / Express", color: "green-text-gradient" },
      { name: "AG Grid", color: "orange-text-gradient" },
      { name: "Audio Streaming", color: "pink-text-gradient" },
      { name: "Vercel", color: "blue-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://modelshri.github.io/Srikanth",
  },
  {
    name: "React.js & Node.js Business Portals",
    description:
      "A collection of production client web applications and corporate portals including Clark Construction Website, Harvard Learning Platform, PMIS (Project Management Info System) Website, and Invoice Mailer Web Application with integrated contact forms and payment gateways.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js / Express", color: "green-text-gradient" },
      { name: "ASP.NET Web API", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: portfoli,
    source_code_link: "https://modelshri.github.io/Srikanth",
  },
  {
    name: "Radiology & Laboratory Reporting System",
    description:
      "Automated clinical reporting module built for medical labs and radiology centers. Allows technicians and doctors to generate diagnostic test reports, export PDF certificates via Crystal Reports, and query patient data via REST APIs.",
    tags: [
      { name: "ASP.NET Web API", color: "orange-text-gradient" },
      { name: "Crystal Reports", color: "pink-text-gradient" },
      { name: "SQL Stored Procedures", color: "green-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
    ],
    image: sigmasrn,
    source_code_link: "https://modelshri.github.io/Srikanth",
  },
  {
    name: "3D Interactive Portfolio Website",
    description:
      "An interactive 3D web application showcasing full-stack capabilities with smooth Framer Motion animations, Three.js 3D floating canvas objects, custom shader effects, and modern responsive design.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Three.js / Canvas", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: portfoli,
    source_code_link: "https://modelshri.github.io/Srikanth",
  },
];

const education = [
  {
    degree: "Bachelor of Science (Computer Science)",
    institution: "Tumkur University, Karnataka",
    score: "CGPA: 8.0",
    period: "Graduated with Distinction",
    details: "Specialized in Computer Science, Software Engineering, Database Systems, and Algorithms.",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Government Polytechnic College, Devadurga",
    score: "71%",
    period: "Technical Foundation",
    details: "Strong problem-solving, engineering analysis, mathematics, and operational logic background.",
  },
];

const achievements = [
  {
    title: "10+ HMIS Enterprise Modules",
    detail: "Delivered clinical, billing, pharmacy, lab, radiology, blood bank, HRMS, inventory & certificate modules for hospital operations.",
  },
  {
    title: "Production Web Applications",
    detail: "Architected, deployed, and supported scalable web systems on IIS, Azure, Vercel, cPanel & VPS hosting environments.",
  },
  {
    title: "SQL & Query Performance Tuning",
    detail: "Optimized complex SQL queries, views, and stored procedures to boost performance by over 40%.",
  },
  {
    title: "AI-Accelerated Engineering",
    detail: "Leveraged ChatGPT, Claude AI, Cursor AI, and GitHub Copilot to double development speed and code quality.",
  },
];

const testimonials = [
  {
    testimonial:
      "Srikanth is an exceptional Full Stack .NET developer. His work on our HMIS platform and Call Audit system was delivered with outstanding code quality, high performance, and great security.",
    name: "Ganesh Murugan",
    designation: "CEO",
    company: "INFINITRO TECHNOLOGIES PVT. LTD",
  },
  {
    testimonial:
      "Srikanth's attention to detail, front-end optimization skills, and clear communication made our web development projects a complete success.",
    name: "Rita Mahajan",
    designation: "Director",
    company: "WOQEM INTERNATIONAL",
  },
  {
    testimonial:
      "Working alongside Srikanth on complex enterprise applications is inspiring. He solves hard database and API problems quickly and writes maintainable, clean code.",
    name: "Ravi Kumar",
    designation: "Senior Engineer",
    company: "INFINITRO TECHNOLOGIES PVT. LTD",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  education,
  achievements,
  testimonials,
};