export const projects = [
  {
    title: "Plataforma interna de gestión operativa",
    description:
      "Suite orientada a centralizar procesos internos, seguimiento de solicitudes y visualización de información crítica en una sola interfaz. Mi trabajo combinó construcción de vistas, conexión con servicios y evolución continua del producto.",
    highlights: [
      "Diseño de componentes reutilizables para acelerar nuevas pantallas.",
      "Integración con servicios backend y manejo de estados complejos.",
      "Mejoras en navegación, legibilidad de datos y consistencia visual.",
    ],
    stack: ["React", "MUI", "JavaScript", "APIs REST", "Oracle"],
    demoUrl: "#contact",
    codeUrl: "#about",
    preview: {
      label: "dashboard.operaciones",
      gradient:
        "linear-gradient(135deg, rgba(234, 247, 255, 1) 0%, rgba(219, 239, 255, 1) 26%, rgba(220, 252, 231, 1) 100%)",
      metrics: [
        { label: "Módulos", value: "08" },
        { label: "Usuarios", value: "1.2k" },
        { label: "Tiempo", value: "-32%" },
      ],
      bars: [86, 54, 74, 47, 92, 68, 58, 76, 51, 44, 83, 62],
      lines: [
        { color: "rgba(248,113,113,0.95)", offset: 22 },
        { color: "rgba(125,211,252,0.95)", offset: 39 },
        { color: "rgba(74,222,128,0.95)", offset: 57 },
      ],
    },
  },
  {
    title: "Portal transaccional con foco en experiencia de usuario",
    description:
      "Implementación y ajuste de funcionalidades para flujos con múltiples reglas de negocio, priorizando claridad, feedback visual y estabilidad. La propuesta buscó reducir fricción y facilitar tareas recurrentes del usuario.",
    highlights: [
      "Refactor de pantallas críticas para hacerlas más intuitivas y mantenibles.",
      "Validaciones de formularios y estados visuales alineados con UX.",
      "Coordinación entre frontend y backend para nuevas capacidades.",
    ],
    stack: ["React", "Framer Motion", "MUI", "Spring Boot", "SQL"],
    demoUrl: "#contact",
    codeUrl: "#about",
    preview: {
      label: "portal.usuarios",
      gradient:
        "linear-gradient(135deg, rgba(255, 244, 230, 1) 0%, rgba(255, 237, 213, 1) 35%, rgba(254, 226, 226, 1) 100%)",
      metrics: [
        { label: "Flujos", value: "14" },
        { label: "Errores", value: "-41%" },
        { label: "UX", value: "A11y" },
      ],
      bars: [38, 59, 44, 88, 61, 79, 53, 66, 45, 72, 57, 84],
      lines: [
        { color: "rgba(251,146,60,0.95)", offset: 18 },
        { color: "rgba(244,114,182,0.95)", offset: 41 },
        { color: "rgba(96,165,250,0.95)", offset: 61 },
      ],
    },
  },
  {
    title: "Evolución de ecosistema web corporativo",
    description:
      "Participación en mantenimiento evolutivo, ajustes de rendimiento y desarrollo de nuevas secciones para una plataforma empresarial, equilibrando continuidad operativa con mejoras perceptibles para el usuario.",
    highlights: [
      "Optimización de tiempos de carga y simplificación de vistas saturadas.",
      "Desarrollo de componentes consistentes para nuevos requerimientos.",
      "Soporte a integraciones y adecuaciones funcionales en producción.",
    ],
    stack: ["Java", "Spring Boot", "HTML/CSS", "JavaScript", "Git"],
    demoUrl: "#contact",
    codeUrl: "#about",
    preview: {
      label: "suite.corporativa",
      gradient:
        "linear-gradient(135deg, rgba(240, 249, 255, 1) 0%, rgba(224, 242, 254, 1) 24%, rgba(233, 213, 255, 1) 100%)",
      metrics: [
        { label: "Release", value: "24/7" },
        { label: "Soporte", value: "QA" },
        { label: "Entrega", value: "+CI" },
      ],
      bars: [71, 49, 61, 56, 83, 69, 36, 77, 59, 64, 52, 73],
      lines: [
        { color: "rgba(129,140,248,0.95)", offset: 20 },
        { color: "rgba(34,197,94,0.95)", offset: 43 },
        { color: "rgba(244,114,182,0.95)", offset: 58 },
      ],
    },
  },
];
