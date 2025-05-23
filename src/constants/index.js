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
  WOQEMLOGO,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Application Developer",
    icon: web,
  },
  {
    title: "ASP DOT NET Developer",
    icon: aspdotneticon,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Graphic Designers",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "WOQEM",
    icon: WOQEMLOGO,
    iconBg: "#383E56",
    date: "January 2022 - March 2023",
    points: [
      "Developed and maintained user interfaces using HTML, CSS, and JavaScript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Infinitro Technologies Pvt. Ltd",
    icon: sigmainfi,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Designed and implemented web applications using ASP.NET Web Forms, C#, SQL Server, and Crystal Report .",
      "Developed both front-end and back-end components, ensuring end-to-end application functionality.",
      "Continuously monitored, optimized, and improved application performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Ganesh Murugan",
    designation: "CEO",
    company: "INFINITRO TECHNOLOGIES PVT. LTD",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Rita Mahajan",
    designation: "Shareholder",
    company: "WOQM INTERNATIONAL",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ravi Kumar",
    designation: "Employee",
    company: "INFINITRO TECHNOLOGIES PVT. LTD",
    // image: "",
  },
];

const projects = [
  {
    name: "Hospital Management System (HMS)",
    description:
      "A web-based application built with ASP.NET Web Forms to streamline hospital operations, including patient records, appointments, doctor scheduling, billing, inventory, and reporting. It features SQL Server integration, Crystal Reports, and a responsive Bootstrap interface.",
    tags: [
      {
        name: "ASP.NET Web Forms",
        color:  "orange-text-gradient" ,
      },
      {
        name: "SQL (SSMS)",
        color: "green-text-gradient",
      },
      {
        name: "Crysyal Reports",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstap",
        color: "pink-text-gradient",
      },
    ],
    image: sigmasrn,
    
  },
  {
    name: "3D Portfolio Website",
    description:
      "An interactive 3D portfolio website developed using React JS, featuring smooth animations, responsive design, and immersive 3D elements. Designed to showcase projects, skills, and experience in a visually compelling way, it offers an engaging user experience and modern UI optimized for both desktop and mobile.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "3d Models",
        color: "pink-text-gradient",
      },
    ],
    image: portfoli,
    
  },
  
];

export { services, technologies, experiences, testimonials, projects };