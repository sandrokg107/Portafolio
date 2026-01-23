# 📋 Documentación del Proyecto - Portafolio Profesional

> Portafolio web moderno y responsive con formulario de contacto inteligente

---

## 📑 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías](#-tecnologías)
- [Características Implementadas](#-características-implementadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Funcionalidades Destacadas](#-funcionalidades-destacadas)
- [Variables de Entorno](#-variables-de-entorno)

---

## 🎯 Descripción

Portafolio web profesional desarrollado con **React** y **Vite**, diseñado con **Tailwind CSS** para mostrar proyectos, habilidades, experiencia y certificaciones. Incluye un sistema de contacto inteligente con **respuesta automática** mediante EmailJS.

---

## 🚀 Tecnologías

### Core

| Tecnología           | Versión | Uso                     |
| -------------------- | ------- | ----------------------- |
| **React**            | 19.2.0  | Framework principal     |
| **Vite**             | 7.2.4   | Build tool y dev server |
| **React Router DOM** | 7.11.0  | Navegación SPA          |

### Styling

| Tecnología       | Versión | Uso                         |
| ---------------- | ------- | --------------------------- |
| **Tailwind CSS** | 3.4.17  | Framework CSS utility-first |
| **PostCSS**      | 8.5.6   | Procesador CSS              |
| **Autoprefixer** | 10.4.23 | Compatibilidad CSS          |

### Integrations

| Tecnología       | Versión | Uso                           |
| ---------------- | ------- | ----------------------------- |
| **EmailJS**      | 4.4.1   | Sistema de emails sin backend |
| **Lucide React** | 0.562.0 | Iconos modernos               |

### Development

| Herramienta              | Versión | Uso                    |
| ------------------------ | ------- | ---------------------- |
| **ESLint**               | 9.39.1  | Linting de código      |
| **@vitejs/plugin-react** | 5.1.1   | Plugin React para Vite |

---

## ✨ Características Implementadas

### 🎨 Interfaz de Usuario

- ✅ Diseño responsive mobile-first
- ✅ Tema oscuro profesional (slate/blue)
- ✅ Animaciones fluidas y transiciones
- ✅ Navegación suave entre secciones
- ✅ Carrusel de proyectos interactivo
- ✅ Modal de certificados ampliables
- ✅ Página dedicada de certificaciones

### 📧 Sistema de Contacto

- ✅ Formulario inteligente con validación
- ✅ **Envío de emails sin backend** (EmailJS)
- ✅ **Respuesta automática al cliente**
- ✅ Notificaciones en tiempo real al administrador
- ✅ Estados de carga (submitting/success/error)
- ✅ Spinner animado durante envío
- ✅ Mensajes de error amigables
- ✅ Limpieza automática del formulario

### 🔐 Seguridad y Buenas Prácticas

- ✅ Variables de entorno (.env)
- ✅ Credenciales no expuestas en código
- ✅ .gitignore configurado correctamente
- ✅ Plantillas editables sin tocar código
- ✅ Validación de campos requeridos

### 📱 Secciones

- ✅ Hero con presentación impactante
- ✅ Sobre Mí
- ✅ Servicios ofrecidos
- ✅ Experiencia laboral
- ✅ Habilidades técnicas
- ✅ Proyectos destacados
- ✅ Testimonios de clientes
- ✅ Formulario de contacto
- ✅ Footer con redes sociales

---

## 📁 Estructura del Proyecto

```
mi-portafolio/
│
├── public/                      # Archivos estáticos
│
├── src/
│   ├── assets/                  # Imágenes y recursos
│   │   └── Migra/
│   │
│   ├── components/
│   │   ├── common/              # Componentes reutilizables
│   │   │   ├── CertificateModal.jsx
│   │   │   └── ProjectCarousel.jsx
│   │   │
│   │   ├── layout/              # Estructura de la página
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── sections/            # Secciones del portafolio
│   │       ├── About.jsx
│   │       ├── Contact.jsx      # ⚡ Con EmailJS integrado
│   │       ├── Experience.jsx
│   │       ├── Hero.jsx
│   │       ├── Projects.jsx
│   │       ├── Services.jsx
│   │       ├── Skills.jsx
│   │       └── Testimonials.jsx
│   │
│   ├── data/
│   │   └── portfolioData.jsx    # Datos centralizados
│   │
│   ├── pages/
│   │   ├── AllCertificates.jsx  # Página de certificados
│   │   └── Home.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx        # Configuración de rutas
│   │
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
│
├── .env                         # ⚠️ Variables de entorno (NO SUBIR)
├── .env.example                 # Plantilla de .env
├── .gitignore                   # Archivos ignorados
├── eslint.config.js             # Configuración ESLint
├── index.html                   # HTML base
├── package.json                 # Dependencias
├── postcss.config.js            # Configuración PostCSS
├── tailwind.config.js           # Configuración Tailwind
├── vite.config.js               # Configuración Vite
├── CONFIGURACION_EMAILJS.md     # 📧 Guía de EmailJS
└── DOCUMENTATION.md             # 📋 Este archivo
```

---

## 📦 Instalación

### Prerrequisitos

- Node.js >= 16.0.0
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd mi-portafolio

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de EmailJS

# 4. Iniciar servidor de desarrollo
npm run dev
```

---

## ⚙️ Configuración

### 1. EmailJS (Sistema de Contacto)

**Resumen rápido:**

1. Crear cuenta en [emailjs.com](https://www.emailjs.com/)
2. Conectar tu Gmail
3. Crear 2 plantillas:
   - **Plantilla 1:** Para recibir mensajes (a ti)
   - **Plantilla 2:** Respuesta automática (al cliente)
4. Copiar credenciales al archivo `.env`

### 2. Personalización

**Datos del portafolio:**

- Editar [src/data/portfolioData.jsx](src/data/portfolioData.jsx)
- Cambiar proyectos, habilidades, experiencia, etc.

**Estilos:**

- Modificar [tailwind.config.js](tailwind.config.js) para colores y temas
- Ajustar [src/index.css](src/index.css) para estilos globales

---

## 🎬 Scripts Disponibles

```bash
# Desarrollo - Inicia servidor local en http://localhost:5173
npm run dev

# Producción - Genera build optimizado en /dist
npm run build

# Preview - Previsualiza el build de producción
npm run preview

# Linting - Analiza código con ESLint
npm run lint
```

---

## 🌟 Funcionalidades Destacadas

### 📧 Sistema de Contacto Inteligente

#### Flujo de Funcionamiento:

```
Usuario llena formulario
        ↓
Hace clic en "Solicitar Cotización"
        ↓
Estado: "Enviando..." (spinner animado)
        ↓
EmailJS procesa el envío
        ↓
    ┌───┴───┐
    ↓       ↓
Email a Ti  Email al Cliente
(datos)     (respuesta automática)
    └───┬───┘
        ↓
Estado: "¡Mensaje Enviado!" (verde)
        ↓
Formulario se limpia automáticamente
```

#### Características Técnicas:

```jsx
// Envío dual simultáneo
const handleContactSubmit = async (e) => {
  // 1. Email al administrador
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);

  // 2. Respuesta automática al cliente
  await emailjs.send(SERVICE_ID, AUTO_REPLY_ID, formData);
};
```

**Ventajas:**

- ✅ Sin servidor backend necesario
- ✅ Respuesta instantánea al cliente
- ✅ Plantillas editables en tiempo real
- ✅ 200 emails/mes gratis

---

### 🎨 Componentes Reutilizables

#### CertificateModal

Modal para visualizar certificados en tamaño completo con overlay oscuro.

#### ProjectCarousel

Carrusel táctil y con flechas para navegar entre proyectos.

---

## 🔐 Variables de Entorno

Archivo: `.env`

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=tu_auto_reply_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

**⚠️ IMPORTANTE:**

- Nunca subas el archivo `.env` a GitHub
- Usa `.env.example` como referencia
- Las variables deben empezar con `VITE_` para ser accesibles en Vite

---

## 📊 Dependencias Completas

### Production Dependencies

```json
{
  "@emailjs/browser": "^4.4.1",
  "lucide-react": "^0.562.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.11.0"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.39.1",
  "@types/react": "^19.2.5",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^5.1.1",
  "autoprefixer": "^10.4.23",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "globals": "^16.5.0",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.17",
  "vite": "^7.2.4"
}
```

---

## 🚀 Deploy

### Opciones Recomendadas:

#### 1. **Vercel** (Recomendada)

```bash
npm install -g vercel
vercel
```

- Deploy automático desde GitHub
- HTTPS gratis
- Variables de entorno en dashboard

#### 2. **Netlify**

```bash
npm run build
# Subir carpeta /dist a Netlify
```

#### 3. **GitHub Pages**

```bash
npm run build
# Configurar gh-pages
```

**⚠️ Recordar:** Configurar variables de entorno en el servicio de deploy.

---

## 🐛 Troubleshooting

### Problema: "Failed to send email"

**Solución:**

- Verifica credenciales en `.env`
- Reinicia servidor: `Ctrl+C` → `npm run dev`

### Problema: No llegan los emails

**Solución:**

- Revisa spam
- Verifica plantillas en EmailJS dashboard
- Confirma que el `to_email` esté correcto

### Problema: Error de CORS

**Solución:**

- EmailJS no requiere configuración CORS
- Verifica que la Public Key sea correcta

---

## 📄 Licencia

Este proyecto es privado y de uso personal.

---

## 👤 Autor

**Tu Nombre**

- Portfolio: [www.tuportafolio.com](https://www.tuportafolio.com)
- Email: tu-email@gmail.com
- LinkedIn: [linkedin.com/in/tunombre](https://linkedin.com/in/tunombre)

---

## 🙏 Agradecimientos

- [EmailJS](https://www.emailjs.com/) - Sistema de emails sin backend
- [Lucide](https://lucide.dev/) - Iconos modernos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

---

## 📝 Changelog

### v1.0.0 - 2026-01-23

- ✅ Implementación inicial del portafolio
- ✅ Integración de EmailJS con respuesta automática
- ✅ Sistema de routing con React Router
- ✅ Diseño responsive completo
- ✅ Sección de certificados con modal
- ✅ Carrusel de proyectos
- ✅ Formulario de contacto inteligente

---

<div align="center">

**Desarrollado con ❤️ usando React + Vite + Tailwind CSS**

</div>
