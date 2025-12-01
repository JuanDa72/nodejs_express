// src/seeders/data.js

export const dataPorCarrera = [
  
    // --- Objeto de Carrera 1: Ingeniería de Sistemas ---
    {
      // Datos de la carrera
      carrera: {
        nombre: "Ingeniería de Sistemas y Computación",
        codigo_plan: "2A74",
        creditos_totales: 165
      },
      // Array de sus materias
      materias: [
        // Semestre 1
        { nombre: "Fundamentos de mecánica", codigo: "1000019", creditos: 3, semestre: 1, tipo: "Fundamentación" },
        { nombre: "Cálculo diferencial", codigo: "1000004", creditos: 4, semestre: 1, tipo: "Fundamentación" },
        { nombre: "Programación de computadores", codigo: "2016703", creditos: 3, semestre: 1, tipo: "Profesional" },
        { nombre: "Pensamiento sistémico", codigo: "2016702", creditos: 3, semestre: 1, tipo: "Profesional" },
        // Semestre 2
        { nombre: "Fundamentos de electricidad y magnetismo", codigo: "1000013", creditos: 3, semestre: 2, tipo: "Fundamentación" },
        { nombre: "Cálculo integral", codigo: "1000005", creditos: 4, semestre: 2, tipo: "Fundamentación" },
        { nombre: "Algebra lineal", codigo: "1000003", creditos: 4, semestre: 2, tipo: "Fundamentación" },
        { nombre: "Programación orientada a objetos", codigo: "2016704", creditos: 3, semestre: 2, tipo: "Profesional" },
        // Semestre 3
        { nombre: "Probabilidad y estadística fundamental", codigo: "1000012", creditos: 3, semestre: 3, tipo: "Fundamentación" },
        { nombre: "Cálculo en varias variables", codigo: "1000006", creditos: 4, semestre: 3, tipo: "Fundamentación" },
        { nombre: "Matemáticas discretas I", codigo: "2015249", creditos: 3, semestre: 3, tipo: "Fundamentación" },
        { nombre: "Bases de datos", codigo: "2016353", creditos: 3, semestre: 3, tipo: "Profesional" },
        { nombre: "Elementos de computadores", codigo: "2016698", creditos: 3, semestre: 3, tipo: "Profesional" },
        // Semestre 4
        { nombre: "Ingeniería económica", codigo: "2015703", creditos: 3, semestre: 4, tipo: "Profesional" },
        { nombre: "Matemáticas discretas II", codigo: "2015250", creditos: 3, semestre: 4, tipo: "Fundamentación" },
        { nombre: "Estructuras de datos", codigo: "2016375", creditos: 3, semestre: 4, tipo: "Profesional" },
        { nombre: "Arquitectura de computadores", codigo: "2016351", creditos: 3, semestre: 4, tipo: "Profesional" },
        // Semestre 5
        { nombre: "Modelos y simulación", codigo: "2025871", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "Gerencia y gestión de proyectos", codigo: "2015702", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "Redes de computadores", codigo: "2016710", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "Ingeniería de software I", codigo: "2016708", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "Introducción a la teoría de la computación", codigo: "2016714", creditos: 3, semestre: 5, tipo: "Profesional" },
        // Semestre 6
        { nombre: "Optimización", codigo: "2025872", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "Sistemas de información", codigo: "2016712", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "Métodos Numéricos", codigo: "1000009", creditos: 3, semestre: 6, tipo: "Fundamentación" },
        { nombre: "Ingeniería de software II", codigo: "2016709", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "Algoritmos", codigo: "2016342", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "Sistemas operativos", codigo: "2016707", creditos: 3, semestre: 6, tipo: "Profesional" },
        // Semestre 7
        { nombre: "Taller de proyectos interdisciplinarios", codigo: "2024045", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "Infraestructura y gobierno de TIC", codigo: "2016706", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "Introducción a los sistemas inteligentes", codigo: "2016716", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "Arquitectura de software", codigo: "2016711", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "Computación visual", codigo: "2016699", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "Lenguajes de programación", codigo: "2016715", creditos: 3, semestre: 7, tipo: "Profesional" },
        // Semestre 8
        { nombre: "Computación paralela y distribuida", codigo: "2016701", creditos: 3, semestre: 8, tipo: "Profesional" },
        // Semestre 10
        { nombre: "TRABAJO DE GRADO", codigo: "2016713", creditos: 6, semestre: 10, tipo: "Profesional" }
      ]
    },
  
    // --- Objeto de Carrera 2: Ingeniería Mecatrónica ---
    {
      // Datos de la carrera
      carrera: {
        nombre: "Ingeniería Mecatrónica",
        codigo_plan: "MECATRONICA-BOG", // Código inventado para el seeder
        creditos_totales: 179
      },
      // Array de sus materias
      materias: [
        // Semestre 1
        { nombre: "CALCULO DIFERENCIAL", codigo: "1000004", creditos: 4, semestre: 1, tipo: "Fundamentación" },
        { nombre: "PROGRAMACIÓN DE COMPUTADORES", codigo: "2015734", creditos: 3, semestre: 1, tipo: "Fundamentación" },
        { nombre: "TALLER DE INGENIERIA", codigo: "2016408", creditos: 2, semestre: 1, tipo: "Profesional" },
        { nombre: "DIBUJO BÁSICO", codigo: "2015717", creditos: 3, semestre: 1, tipo: "Fundamentación" },
        // Semestre 2
        { nombre: "CÁLCULO INTEGRAL", codigo: "1000005", creditos: 4, semestre: 2, tipo: "Fundamentación" },
        { nombre: "ALGEBRA LINEAL", codigo: "1000003", creditos: 4, semestre: 2, tipo: "Fundamentación" },
        { nombre: "FUNDAMENTOS DE MECÁNICA", codigo: "2015720", creditos: 4, semestre: 2, tipo: "Fundamentación" },
        { nombre: "TECNOLOGÍA MECÁNICA BÁSICA", codigo: "2017239", creditos: 3, semestre: 2, tipo: "Profesional" },
        // Semestre 3
        { nombre: "CALCULO VARIAS VARIABLES", codigo: "1000006", creditos: 4, semestre: 3, tipo: "Fundamentación" },
        { nombre: "PROBABILIDAD Y ESTADÍSTICA FUNDAMENTAL", codigo: "1000012", creditos: 3, semestre: 3, tipo: "Fundamentación" },
        { nombre: "FUNDAMENTOS DE ELECTRICIDAD Y MAGNETISMO", codigo: "2015721", creditos: 4, semestre: 3, tipo: "Fundamentación" },
        { nombre: "CIRCUITOS ELECTRÓNICOS I", codigo: "2016398", creditos: 3, semestre: 3, tipo: "Profesional" },
        { nombre: "PRINCIPIOS DE ESTÁTICA", codigo: "2016400", creditos: 3, semestre: 3, tipo: "Profesional" },
        { nombre: "PRINCIPIOS DE QUÍMICA", codigo: "1000021", creditos: 3, semestre: 3, tipo: "Fundamentación" },
        // Semestre 4
        { nombre: "ECUACIONES DIFERENCIALES", codigo: "1000007", creditos: 4, semestre: 4, tipo: "Fundamentación" },
        { nombre: "PROGRAMACIÓN ORIENTADA A OBJETOS", codigo: "2015735", creditos: 3, semestre: 4, tipo: "Profesional" },
        { nombre: "ELECTRÓNICA ANÁLOGA", codigo: "2016401", creditos: 3, semestre: 4, tipo: "Profesional" },
        { nombre: "PRINCIPIOS DE DINÁMICA", codigo: "2017211", creditos: 3, semestre: 4, tipo: "Profesional" },
        // Semestre 5
        { nombre: "VARIABLE COMPLEJA Y MÉTODOS NUMÉRICOS", codigo: "2016188", creditos: 3, semestre: 5, tipo: "Fundamentación" },
        { nombre: "PROGRAMACIÓN, ESTRUCTURAS DE DATOS Y ALGORITMOS", codigo: "2016403", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "ELECTRÓNICA DE POTENCIA", codigo: "2016402", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "RESISTENCIA DE MATERIALES", codigo: "2017217", creditos: 3, semestre: 5, tipo: "Profesional" },
        { nombre: "CIENCIA E INGENIERÍA DE MATERIALES", codigo: "2017225", creditos: 3, semestre: 5, tipo: "Profesional" },
        // Semestre 6
        { nombre: "INGENIERÍA ECONÓMICA", codigo: "2015703", creditos: 3, semestre: 6, tipo: "Fundamentación" },
        { nombre: "SEÑALES Y SISTEMAS", codigo: "2016404", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "ELECTRÓNICA DIGITAL", codigo: "2016405", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "TALLER DE PROYECTOS INTERDISCIPLINARIOS", codigo: "2024045", creditos: 3, semestre: 6, tipo: "Profesional" },
        { nombre: "DISEÑO MECATRÓNICO", codigo: "2017242", creditos: 3, semestre: 6, tipo: "Profesional" },
        // Semestre 7
        { nombre: "CONTROL", codigo: "2016406", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "SENSORES Y ACTUADORES", codigo: "2016407", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "REDES DE COMPUTADORES", codigo: "2015709", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "INGENIERÍA NEUMÁTICA E HIDRÁULICA", codigo: "2017240", creditos: 3, semestre: 7, tipo: "Profesional" },
        { nombre: "SERVOMECANISMOS", codigo: "2017244", creditos: 3, semestre: 7, tipo: "Profesional" },
        // Semestre 8
        { nombre: "PROCESAMIENTO DIGITAL DE SEÑALES", codigo: "2016370", creditos: 3, semestre: 8, tipo: "Profesional" },
        { nombre: "CONTROL DIGITAL", codigo: "2016399", creditos: 3, semestre: 8, tipo: "Profesional" },
        { nombre: "COMUNICACIONES INDUSTRIALES Y ROBÓTICA", codigo: "2016410", creditos: 3, semestre: 8, tipo: "Profesional" },
        // Semestre 10
        { nombre: "TRABAJO DE GRADO", codigo: "2017245", creditos: 12, semestre: 10, tipo: "Profesional" }
      ]
    },
  
    // --- Objeto de Carrera 3: Ingeniería Industrial ---
    {
        // Datos de la carrera
        carrera: {
          nombre: "Ingeniería Industrial",
          codigo_plan: "INDUSTRIAL-BOG", // Código inventado para el seeder 
          creditos_totales: 168
        },
        // Array de sus materias
        materias: [
          // Semestre 1
          { nombre: "Cálculo diferencial", codigo: "1000004", creditos: 4, semestre: 1, tipo: "Fundamentación" },
          { nombre: "Sociología especial industrial y del trabajo", codigo: "2015811", creditos: 3, semestre: 1, tipo: "Fundamentación" },
          { nombre: "Introducción a la ingeniería industrial", codigo: "2026805", creditos: 3, semestre: 1, tipo: "Profesional" },
          { nombre: "Programación de computadores", codigo: "2015734", creditos: 3, semestre: 1, tipo: "Fundamentación" },
          
          // Semestre 2
          { nombre: "Cálculo integral", codigo: "1000005", creditos: 4, semestre: 2, tipo: "Fundamentación" },
          { nombre: "Algebra lineal", codigo: "1000003", creditos: 4, semestre: 2, tipo: "Fundamentación" },
          { nombre: "Taller de invención y creatividad", codigo: "2016615", creditos: 3, semestre: 2, tipo: "Profesional" },
          { nombre: "Programación orientada a objetos", codigo: "2016375", creditos: 3, semestre: 2, tipo: "Profesional" },
    
          // Semestre 3
          { nombre: "Cálculo en varias variables", codigo: "1000006", creditos: 4, semestre: 3, tipo: "Fundamentación" },
          { nombre: "Fundamentos de mecánica", codigo: "1000019", creditos: 4, semestre: 3, tipo: "Fundamentación" },
          { nombre: "Economía General", codigo: "2016592", creditos: 3, semestre: 3, tipo: "Fundamentación" },
          { nombre: "Taller de herramientas y problemas en Ing. Industrial", codigo: "2026488", creditos: 3, semestre: 3, tipo: "Profesional" },
          { nombre: "Probabilidad fundamental", codigo: "2027877", creditos: 4, semestre: 3, tipo: "Fundamentación" },
    
          // Semestre 4
          { nombre: "Ecuaciones diferenciales", codigo: "1000007", creditos: 4, semestre: 4, tipo: "Fundamentación" },
          { nombre: "Fundamentos de electricidad y magnetismo", codigo: "1000017", creditos: 4, semestre: 4, tipo: "Fundamentación" },
          { nombre: "Fundamentos de Administración", codigo: "2016007", creditos: 4, semestre: 4, tipo: "Profesional" },
          { nombre: "Taller de ciencia y tecnología de materiales", codigo: "2025993", creditos: 4, semestre: 4, tipo: "Profesional" },
    
          // Semestre 5
          { nombre: "Modelos y Simulación", codigo: "2025970", creditos: 3, semestre: 5, tipo: "Profesional" },
          { nombre: "Optimización", codigo: "2025971", creditos: 3, semestre: 5, tipo: "Profesional" },
          { nombre: "Ingeniería económica y análisis de riesgo", codigo: "2025986", creditos: 3, semestre: 5, tipo: "Profesional" },
          { nombre: "Taller de procesos químicos y biotecnológicos", codigo: "2016619", creditos: 3, semestre: 5, tipo: "Profesional" },
          { nombre: "Taller de procesos metalmecánicos", codigo: "2016618", creditos: 3, semestre: 5, tipo: "Profesional" },
          { nombre: "Inferencia estadística fundamental", codigo: "2027878", creditos: 4, semestre: 5, tipo: "Fundamentación" },
    
          // Semestre 6
          { nombre: "Modelos estocásticos para procesos de manufactura", codigo: "2025987", creditos: 3, semestre: 6, tipo: "Profesional" },
          { nombre: "Gerencia y gestión de proyectos", codigo: "2015702", creditos: 3, semestre: 6, tipo: "Profesional" },
          { nombre: "Finanzas", codigo: "2016741", creditos: 3, semestre: 6, tipo: "Profesional" },
          { nombre: "Taller de ergonomía e ingeniería de métodos", codigo: "2016613", creditos: 4, semestre: 6, tipo: "Profesional" },
          { nombre: "Control y gestión de calidad", codigo: "2016589", creditos: 3, semestre: 6, tipo: "Profesional" },
    
          // Semestre 7
          { nombre: "Taller de simulación de procesos", codigo: "2025988", creditos: 3, semestre: 7, tipo: "Profesional" },
          { nombre: "Sistemas de Información", codigo: "2025982", creditos: 3, semestre: 7, tipo: "Profesional" },
          { nombre: "Seguridad industrial", codigo: "2016609", creditos: 3, semestre: 7, tipo: "Profesional" },
          { nombre: "Taller de ingeniería de la producción", codigo: "2016614", creditos: 4, semestre: 7, tipo: "Profesional" },
          { nombre: "Taller de metodología de la investigación", codigo: "2016616", creditos: 3, semestre: 7, tipo: "Profesional" },
    
          // Semestre 8
          { nombre: "Logística", codigo: "2016605", creditos: 3, semestre: 8, tipo: "Profesional" },
          { nombre: "Gestión Tecnológica", codigo: "2016600", creditos: 3, semestre: 8, tipo: "Profesional" },
          { nombre: "Gerencia de recursos Humanos", codigo: "2015701", creditos: 3, semestre: 8, tipo: "Profesional" },
          { nombre: "Taller de diseño de plantas", codigo: "2016612", creditos: 4, semestre: 8, tipo: "Profesional" },
    
          // Semestre 10
          { nombre: "Trabajo de Grado", codigo: "2025990", creditos: 6, semestre: 10, tipo: "Profesional" }
        ]
      }
  
  ];