import {
  Globe,
  Terminal,
  Palette,
  Database,
  Server,
  Smartphone,
  PenTool,
  User,
  Zap,
  Layout,
  Code,
  Briefcase,
  Mail,
  Home,
} from 'lucide-react';

import Datamigra from '../assets/Migra/Datamigra.png';
import Selectalm from '../assets/Migra/Selectalm.png';
import SelectOpe from '../assets/Migra/SelectOpe.png';
import ScrumFundamentalsPdf from '../assets/Cerficados/ScrumFundamentalsCertified-SandroCésarDomínguezAlbornoz-1153284.pdf';
import LoginFin from '../assets/Finanzas/LoginFIn.png';
import RegisterFin from '../assets/Finanzas/RegisterFin.png';
import DasboardFin from '../assets/Finanzas/DashboardFin.png';
import DeudaFin from '../assets/Finanzas/DeudaFin.png';
import PresuouestoFin from '../assets/Finanzas/PresupuestoFin.png';
import Reporte1Fin from '../assets/Finanzas/Reporttes1Fin.png';
import Reporte2Fin from '../assets/Finanzas/Reportes2Fin.png';
import TransaccionFin from '../assets/Finanzas/TransaccionFin.png';

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
    title: 'Desarrollo Frontend',
    icon: <Globe size={32} className="text-blue-400" />,
    description:
      'Creación de interfaces modernas, responsivas y optimizadas. Desarrollo aplicaciones con React y Tailwind CSS enfocadas en rendimiento y experiencia de usuario.',
    price: 'Desde $XXX',
  },
  {
    title: 'Desarrollo Backend',
    icon: <Server size={32} className="text-green-400" />,
    description:
      'Desarrollo de lógica de negocio, APIs e integración de sistemas usando Python y .NET (C#). Optimización, manejo de datos y mejora de rendimiento.',
    price: 'Desde $XXX',
  },
  // {
  //   title: 'Landing Pages',
  //   icon: <Layout size={32} className="text-purple-400" />,
  //   description:
  //     'Páginas de aterrizaje optimizadas para mostrar tu producto o servicio y captar clientes potenciales.',
  //   price: 'Desde $XXX',
  // },
  {
    title: 'Mantenimiento Web',
    icon: <Zap size={32} className="text-yellow-400" />,
    description:
      'Actualización de contenido, corrección de errores visuales y mejoras de rendimiento para tu sitio.',
    price: 'Por Hora / Proyecto',
  },
];

export const experience = [
  {
    role: 'Auxiliar de Programación Web',
    company: 'Cobefar S.A.C',
    period: 'Presente',
    description:
      'Modernización de sistemas críticos: realicé la reingeniería de un sistema de reportes, migrando de PHP/XAMPP a una arquitectura moderna con Python (backend) y Vue.js (frontend). Optimización de datos: automaticé migración de SAP HANA a SQL Server logrando +80% velocidad en generación de reportes PDF. Soporte técnico continuo y mantenimiento de aplicaciones corporativas en C#, JavaScript y HTML, asegurando resolución rápida de incidencias y continuidad operativa. Participación en reuniones con usuarios para brindar capacitaciones funcionales y levantar requerimientos para mejoras del sistema.',
  },
  {
    role: 'Practicante de Desarrollo Web',
    company: 'Promolider org S.A.C',
    period: '3 Meses',
    description:
      'Participación en desarrollo full stack con Python y Vue.js. Soporte en integración y mantenimiento de módulos Python para extracción de datos, integración con OpenAI API para generación de contenido con IA, y visualización de gráficos. Desarrollo frontend en Vue.js enfocado en mejora de experiencia de usuario. Implementación de RapiApi para extracción de datos desde Amazon, evitando limitaciones de scraping.',
  },
];

export const projects = [
  {
    title: 'Sistema de Migración de Datos (HANA → SQL)',
    category: 'Proyecto Empresarial',
    description:
      'Reingeniería de un sistema de migración de datos originalmente desarrollado en PHP y ejecutado de forma local. El proyecto fue rediseñado y reconstruido en Python con un frontend en Vue.js, permitiendo centralizar el proceso, integrar la migración de datos desde SAP HANA hacia SQL Server y facilitar la generación de reportes y archivos PDF.',
    tags: [
      'Python',
      'Vue.js',
      'SAP HANA',
      'SQL Server',
      'Migración de Datos',
      'Integración de Datos',
      'Reportes PDF',
    ],
    isPrivate: true,
    github: '#',
    images: [Datamigra, Selectalm, SelectOpe],
  },
  {
    title: 'App Financiera - Lumina',
    category: 'Proyecto Personal',
    description:
      'Aplicación desarrollada con el objetivo de mejorar la gestión de mis finanzas personales mientras refuerzo mis habilidades en desarrollo full stack. En este proyecto trabajé en la creación de vistas dinámicas y componentes reutilizables, integrando tecnologías como React, Tailwind, Python y PostgreSQL. Además, el desarrollo me permitió aplicar buenas prácticas y consolidar conocimientos adquiridos durante mi aprendizaje.',
    tags: ['React', 'Tailwind', 'PostgreSQL', 'Python'],
    isPrivate: false,
    link: 'https://finanzas-front-pi.vercel.app',
    github: '#',
    images: [
      LoginFin,
      RegisterFin,
      DasboardFin,
      DeudaFin,
      PresuouestoFin,
      Reporte1Fin,
      Reporte2Fin,
      TransaccionFin,
    ],
  },
];

export const skills = [
  {
    name: 'Frontend',
    icon: <Globe className="text-blue-400" size={24} />,
    items: [
      {
        name: 'React',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'HTML5',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'Tailwind',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Vue.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
    ],
  },
  {
    name: 'Backend (Básico)',
    icon: <Terminal className="text-green-400" size={24} />,
    items: [
      {
        name: 'Node.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      { name: 'Express', icon: <Server size={24} className="text-slate-400" /> },
      { name: 'API REST', icon: <Globe size={24} className="text-blue-300" /> },
      {
        name: 'C#',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'Python',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: '.NET',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      },
      {
        name: 'FastAPI',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      },
      {
        name: 'Django',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/django/django-plain.svg',
      },
    ],
  },
  {
    name: 'Herramientas',
    icon: <Palette className="text-pink-400" size={24} />,
    items: [
      {
        name: 'Git / GitHub',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Figma',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'VS Code',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'SAP HANA Studio',
        img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sap.svg',
      },
    ],
  },
  {
    name: 'Base de Datos',
    icon: <Database className="text-yellow-400" size={24} />,
    items: [
      { name: 'SQL', icon: <Database size={24} className="text-slate-400" /> },
      {
        name: 'Firebase',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      { name: 'SAP HANA', img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sap.svg' },
    ],
  },
];

export const allCertificates = [
  {
    name: 'Curso Python - Agrupación y Agregación de Datos con Pandas',
    issuer: 'Udemy / Plataforma',
    year: '2025',
    link: '#',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-67b80e42-9df9-4143-932e-e60eaea84091.jpg',
    type: 'Curso Online',
  },
  {
    name: 'C# desde 0: Inicia tu carrera como programador',
    issuer: 'Udemy / Plataforma',
    year: '2026',
    link: '#',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-6286ab76-f53c-43c5-9c3a-29aa6817262a.jpg',
    type: 'Curso Online',
  },
  {
    name: 'Bootcamp Agentes IA: Crea Chatbots Inteligentes',
    issuer: 'Udemy / Plataforma',
    year: '2025',
    link: 'https://www.freecodecamp.org',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-0770a39c-ca9c-4cd4-b409-6924b41a9643.jpg',
    type: 'Certificación',
  },
  {
    name: 'Scrum Fundamentas',
    issuer: 'ScrumStudy0',
    year: '2026',
    link: '#',
    image: ScrumFundamentalsPdf,
    type: 'Certificación',
  },
  {
    name: 'Bootcamp Agentes IA: Crea Chatbots Inteligentes',
    issuer: 'Udemy / Plataforma',
    year: '2025',
    link: 'https://www.freecodecamp.org',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-0770a39c-ca9c-4cd4-b409-6924b41a9643.jpg',
    type: 'Certificación',
  },
  {
    name: 'Bootcamp Agentes IA: Crea Chatbots Inteligentes',
    issuer: 'Udemy / Plataforma',
    year: '2025',
    link: 'https://www.freecodecamp.org',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-0770a39c-ca9c-4cd4-b409-6924b41a9643.jpg',
    type: 'Certificación',
  },
  {
    name: 'Bootcamp Agentes IA: Crea Chatbots Inteligentes',
    issuer: 'Udemy / Plataforma',
    year: '2025',
    link: 'https://www.freecodecamp.org',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-0770a39c-ca9c-4cd4-b409-6924b41a9643.jpg',
    type: 'Certificación',
  },
];

export const testimonials = [
  {
    text: 'Muy dedicado y atento a los detalles. Entregó una solución estable y bien documentada.',
    author: 'Cliente Satisfecho',
    role: 'Cliente',
    type: 'cliente',
    project: 'Landing corporativa',
    referenceLabel: 'Consultar referencia',
    referenceLink: '#',
    rating: 5,
  },
  {
    text: 'Trabajar con él fue muy fluido. Siempre propuso mejoras útiles para el equipo y el producto.',
    author: 'Compañero de Equipo',
    role: 'Colaborador',
    type: 'colaborador',
    project: 'Sistema interno de migración',
    referenceLabel: 'Ver perfil profesional',
    referenceLink: '#',
    rating: 5,
  },
];
