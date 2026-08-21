import api_icon from "./api_icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import arrow_icon from "./arrow-icon.png";
import be_icon from "./be_icon.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import code_icon_dark from "./code-icon-dark.png";
import code_icon from "./code-icon.png";
import download_icon from "./download-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import edu_icon from "./edu-icon.png";
import fe_icon from "./fe_icon.png";
import figma from "./figma.png";
import firebase from "./firebase.png";
import fs_icon from "./fs_icon.png";
import git from "./git.png";
import github from "./github.png";
import graphics_icon from "./graphics-icon.png";
import hand_icon from "./hand-icon.png";
import handsOn from "./handsOn.png";
import header_bg_color from "./header-bg-color.png";
import logo from "./logo.png";
import logoNiloy from "./logoNiloy.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import mobile_icon from "./mobile-icon.png";
import mongodb from "./mongodb.png";
import moon_icon from "./moon_icon.png";
import ndemy1 from "./ndemy1.png";
import newcare from "./newcare.png";
import niloyinventory from "./niloyinventory.png";
import nobot from "./nobot.png";
import nqr from "./nqr.png";
import nrl from "./nrl.png";
import profile_img from "./profile-img.png";
import profileNiloy from "./profileNiloy.png";
import profileNiloyTP from "./profileNiloyTP.png";
import project_icon_dark from "./project-icon-dark.png";
import project_icon from "./project-icon.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_white from "./right-arrow-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import sun_icon from "./sun_icon.png";
import ui_icon from "./ui-icon.png";
import user_image from "./user-image.png";
import userImageNiloyMD from "./userImageNiloyMD.png";
import userImageNiloySM from "./userImageNiloySM.png";
import vscode from "./vscode.png";
import web_icon from "./web-icon.png";

export const assets = {
  newcare,
  github,
  ndemy1,
  niloyinventory,
  nqr,
  nrl,
  nobot,
  fe_icon,
  be_icon,
  api_icon,
  fs_icon,
  user_image,
  userImageNiloySM,
  userImageNiloyMD,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  ndemy1,
  figma,
  git,
  logoNiloy,
  profileNiloy,
  profileNiloyTP,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  handsOn,
};

export const workData = [
  {
    id: "handson",
    title: "Event Management - HandsOn",
    description: "Full-Stack Web App",
    category: "Full-Stack",
    bgImage: assets.handsOn,
    url: "https://handsoncom.vercel.app/",
    github: "https://github.com/niloydiu/roBenDevHandsOn.git",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST API"],
    longDescription:
      "Comprehensive event management and hands-on learning platform enabling users to organize workshops, track attendance, and manage event schedules in real time.",
    highlights: [
      "Engineered responsive dashboards with state synchronization",
      "Implemented secure RESTful endpoints for attendee registration",
      "Optimized image loading and mobile viewport touch interactions",
    ],
  },
  {
    id: "newcare",
    title: "NewCare - Healthcare Portal",
    description: "Full-Stack Web App",
    category: "Full-Stack",
    bgImage: assets.newcare,
    url: "https://newcare.vercel.app/",
    github: "https://github.com/niloydiu/newcare",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    longDescription:
      "Healthcare appointment booking and patient record portal featuring doctor schedule discovery, instant appointment booking, and medical history management.",
    highlights: [
      "Created dynamic doctor availability time-slot filtering",
      "Implemented protected user & doctor authentication workflows",
      "Structured normalized MongoDB schemas for patient-doctor appointments",
    ],
  },
  {
    id: "ndemy",
    title: "LMS - Ndemy",
    description: "Learning Management System",
    category: "Full-Stack",
    bgImage: assets.ndemy1,
    url: "https://ndemy-frontend.vercel.app/",
    github: "https://github.com/niloydiu/edemy",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Context API"],
    longDescription:
      "Feature-rich Learning Management System with course catalogs, video lesson progression, student enrollment, and instructor course management.",
    highlights: [
      "Built modular video lecture player with progress tracking",
      "Designed multi-role access control for instructors and learners",
      "Implemented course search with category filters and pagination",
    ],
  },
  {
    id: "nobot",
    title: "Nobot - AI Assistant",
    description: "AI Web Application",
    category: "AI & Utilities",
    bgImage: assets.nobot,
    url: "https://nobot.vercel.app/",
    github: "https://github.com/niloydiu/Nobot",
    techStack: ["React.js", "Tailwind CSS", "AI API Integration", "Streaming Responses", "Markdown"],
    longDescription:
      "Interactive AI chatbot assistant featuring streaming text responses, conversation history memory, Markdown code syntax highlighting, and responsive message bubble styling.",
    highlights: [
      "Implemented real-time token streaming for zero perceived latency",
      "Integrated Markdown renderer with copyable code blocks",
      "Engineered responsive conversational UI with auto-scroll management",
    ],
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Business Web App",
    category: "Full-Stack",
    bgImage: assets.niloyinventory,
    url: "https://niloyinventory.vercel.app/login",
    github: "https://github.com/niloydiu/inventory.git",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Role-Based Auth"],
    longDescription:
      "Enterprise-grade inventory and stock management system with real-time stock level alerts, invoice generation, transaction histories, and supplier records.",
    highlights: [
      "Built real-time stock decrement transactions with atomic MongoDB updates",
      "Created low-stock alert notifications and analytics summaries",
      "Implemented JWT session management with secure cookie storage",
    ],
  },
  {
    id: "nqr",
    title: "QR Code Studio",
    description: "Frontend Utility",
    category: "Frontend & Tools",
    bgImage: assets.nqr,
    url: "https://nqr.vercel.app/",
    github: "https://github.com/niloydiu/nqr",
    techStack: ["React.js", "Tailwind CSS", "Canvas API", "SVG Export"],
    longDescription:
      "High-speed client-side QR code generator with real-time payload encoding, custom styling (colors, shapes), and lossless SVG/PNG instant export.",
    highlights: [
      "Pure client-side zero-latency vector rendering",
      "Custom color picker and precision error correction levels",
      "One-click clipboard copy and high-DPI image download",
    ],
  },
  {
    id: "nrl",
    title: "NRL - URL Shortener",
    description: "Web Tool",
    category: "Frontend & Tools",
    bgImage: assets.nrl,
    url: "https://nrl-zeta.vercel.app/",
    github: "https://github.com/niloydiu/url",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Nanoid"],
    longDescription:
      "Blazing fast link shortener service with customized slug generation, instant QR code creation for links, and redirect click tracking.",
    highlights: [
      "Sub-millisecond redirect lookups using indexed MongoDB hashes",
      "Real-time client-side URL validation and error states",
      "Instant link clipboard sharing and mobile QR preview",
    ],
  },
];

export const serviceData = [
  {
    // icon: assets.web_icon,
    icon: assets.fe_icon,
    title: "Frontend Services",
    description:
      "React/Next.js interfaces: dynamic, responsive web experiences, user-centric design.",
    link: "",
  },
  {
    // icon: assets.mobile_icon,
    icon: assets.be_icon,
    title: "Backend Services",
    description:
      "Node.js/Express servers: scalable, robust solutions, MongoDB database integration.",
    link: "",
  },
  {
    // icon: assets.ui_icon,
    icon: assets.api_icon,
    title: "API Development",
    description:
      "Express APIs: secure, efficient data exchange, seamless application connectivity.",
    link: "",
  },
  {
    // icon: assets.graphics_icon,
    icon: assets.fs_icon,
    title: "Full-Stack Web App",
    description:
      "MERN/Next.js apps: complete solutions, end-to-end development, seamless functionality.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Frontend",
    description: "React.js, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: assets.be_icon,
    iconDark: assets.be_icon,
    title: "Backend",
    description: "Node.js, Express.js, Nest.js (Learning)",
  },
  {
    icon: assets.api_icon,
    iconDark: assets.api_icon,
    title: "Database",
    description: "MongoDB, PostgreSQL (Learning)",
  },
];

export const toolsData = [
  assets.vscode,
  assets.mongodb,
  assets.git,
  assets.github,
  assets.figma,
];

export const socialLinks = [
  { name: "github", url: "https://github.com/niloydiu" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/niloykumarmohonta000/",
  },
  { name: "twitter", url: "https://x.com/niloykmohonta" },
  { name: "facebook", url: "https://www.facebook.com/niloykumarmohonta000" },
];
