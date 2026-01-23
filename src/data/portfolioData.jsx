import { 
  Globe, Terminal, Palette, Database, Server, Smartphone, PenTool, 
  User, Zap, Layout, Code, Briefcase, Mail, Home 
} from 'lucide-react';

import Datamigra from '../assets/Migra/Datamigra.png';
import Selectalm from '../assets/Migra/Selectalm.png';
import SelectOpe from '../assets/Migra/SelectOpe.png';

export const navLinks = [
  { name: 'Inicio', id: 'inicio', icon: <Home size={18} /> },
  { name: 'Sobre Mí', id: 'sobre-mi', icon: <User size={18} /> },
  { name: 'Servicios', id: 'servicios', icon: <Zap size={18} /> },
  { name: 'Proyectos', id: 'proyectos', icon: <Layout size={18} /> },
  { name: 'Habilidades', id: 'habilidades', icon: <Code size={18} /> },
  { name: 'Experiencia', id: 'experiencia', icon: <Briefcase size={18} /> },
  { name: 'Contacto', id: 'contacto', icon: <Mail size={18} /> },
];

export const services = [
  {
    title: "Desarrollo Frontend",
    icon: <Globe size={32} className="text-blue-400" />,
    description: "Creación de interfaces modernas y responsivas. Transformo diseños en código funcional usando React y Tailwind CSS.",
    price: "Desde $XXX"
  },
  {
    title: "Landing Pages",
    icon: <Layout size={32} className="text-purple-400" />,
    description: "Páginas de aterrizaje optimizadas para mostrar tu producto o servicio y captar clientes potenciales.",
    price: "Desde $XXX"
  },
  {
    title: "Mantenimiento Web",
    icon: <Zap size={32} className="text-yellow-400" />,
    description: "Actualización de contenido, corrección de errores visuales y mejoras de rendimiento para tu sitio.",
    price: "Por Hora / Proyecto"
  }
];

export const experience = [
  {
    role: "Junior Web Developer",
    company: "Tu Empresa Actual",
    period: "Actualidad", 
    description: "Desarrollo de nuevas funcionalidades y mantenimiento de aplicaciones web. Colaboración activa con el equipo senior, aprendiendo mejores prácticas y metodologías ágiles."
  },
  {
    role: "Practicante de Desarrollo",
    company: "Empresa de Prácticas",
    period: "3 Meses", 
    description: "Primer contacto con el desarrollo profesional. Apoyo en la corrección de bugs, maquetación de interfaces y participación en las reuniones diarias del equipo."
  }
];

export const projects = [
  {
    title: "Sistema de Migración de Datos (HANA → SQL)",
    category: "Proyecto Empresarial",
    description: "Reingeniería de un sistema de migración de datos originalmente desarrollado en PHP y ejecutado de forma local. El proyecto fue rediseñado y reconstruido en Python con un frontend en Vue.js, permitiendo centralizar el proceso, integrar la migración de datos desde SAP HANA hacia SQL Server y facilitar la generación de reportes y archivos PDF.",
    tags: ["Python", "Vue.js", "SAP HANA", "SQL Server", "Migración de Datos", "Integración de Datos", "Reportes PDF"],
    isPrivate: true,
    github: "#",
    images: [
      Datamigra,
      Selectalm,
      SelectOpe
    ]
  },
  {
    title: "App de Delivery",
    category: "Proyecto de Prácticas",
    description: "Apoyo en la creación de vistas para la aplicación móvil de repartidores. Uso de componentes reutilizables.",
    tags: ["React Native", "Firebase"],
    isPrivate: true,
    github: "#",
    images: [
      "https://placehold.co/600x400/0f172a/FFF?text=App+Vista+Mapa",
      "https://placehold.co/600x400/1e293b/FFF?text=Perfil+Usuario"
    ]
  },
  {
    title: "Portafolio Personal",
    category: "Proyecto Personal",
    description: "Diseño y desarrollo de este portafolio para mostrar mis habilidades y proyectos. Totalmente responsive.",
    tags: ["React", "Tailwind", "Lucide"],
    isPrivate: false,
    link: "#",
    github: "#",
    images: [
      "https://placehold.co/600x400/334155/FFF?text=Mi+Portafolio",
      "https://placehold.co/600x400/475569/FFF?text=Seccion+Proyectos"
    ]
  }
];

export const skills = [
  { 
    name: "Frontend", 
    icon: <Globe className="text-blue-400" size={24} />, 
    items: [
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ] 
  },
  { 
    name: "Backend (Básico)", 
    icon: <Terminal className="text-green-400" size={24} />, 
    items: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: <Server size={24} className="text-slate-400"/> },
      { name: "API REST", icon: <Globe size={24} className="text-blue-300"/> },
    ] 
  },
  { 
    name: "Herramientas", 
    icon: <Palette className="text-pink-400" size={24} />, 
    items: [
      { name: "Git / GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ] 
  },
  { 
    name: "Base de Datos", 
    icon: <Database className="text-yellow-400" size={24} />, 
    items: [
      { name: "SQL", icon: <Database size={24} className="text-slate-400"/> },
      { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ] 
  },
];

export const allCertificates = [
  { 
    name: "Curso de Desarrollo Web Completo", 
    issuer: "Udemy / Plataforma", 
    year: "2023",
    link: "#",
    image: "https://placehold.co/800x600/1e293b/FFF?text=Certificado+Web+Dev",
    type: "Curso Online"
  },
  { 
    name: "Introducción a React", 
    issuer: "Plataforma de Cursos", 
    year: "2023",
    link: "#",
    image: "https://placehold.co/800x600/1e293b/FFF?text=React+Basics",
    type: "Curso Online"
  },
  { 
    name: "JavaScript Moderno", 
    issuer: "freeCodeCamp", 
    year: "2023",
    link: "https://www.freecodecamp.org",
    image: "https://placehold.co/800x600/1e293b/FFF?text=JS+Algorithms+Certificate",
    type: "Certificación"
  }
];

export const testimonials = [
  {
    text: "Muy dedicado y atento a los detalles. A pesar de ser joven en la industria, entregó un trabajo de calidad profesional.",
    author: "Cliente Satisfecho",
    role: "Emprendedor",
    rating: 5
  },
  {
    text: "Excelente comunicación. Me ayudó a poner mi negocio en internet con una página simple pero efectiva.",
    author: "Dueño de Negocio Local",
    role: "Comercio",
    rating: 5
  }
];