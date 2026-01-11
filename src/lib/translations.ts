export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      education: "Educación",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola!",
      name: "Soy",
      title: "Desarrollador Full Stack e Ingeniero",
      description:
        "Ingeniero en Ciencias de la Computación apasionado por crear aplicaciones web escalables y resolver problemas complejos. Me encanta conceptualizar y dar vida a productos visualmente impresionantes.",
      downloadResume: "Descargar CV",
    },
    projects: {
      title: "Proyectos Destacados",
      code: "Código",
      liveDemo: "Demo en Vivo",
      descriptions: {
        pizza: {
          title: "Sistema Distribuido para Producción de Pizza I4.0",
          description:
            "Diseño y validación de una arquitectura flexible y distribuida para Industria 4.0. Combina arquitecturas orientadas a eventos y microservicios para garantizar modularidad y procesamiento en tiempo real. Validado mediante un banco de pruebas de producción de pizza contenerizado y verificado formalmente usando UPPAAL.",
        },
        reuse: {
          title:
            "Asistente de Reutilización: Guía Automatizada para Programación de Usuario Final",
          description:
            "Desarrollo y evaluación de un sistema de guía automatizado para OpenRoberta que ayuda a los usuarios finales a reutilizar código. El sistema usa resaltado visual y refactorización de un clic para transformar secuencias duplicadas en bloques personalizados reutilizables. El estudio de usuario demostró una tasa de adopción del 100% y altas puntuaciones de usabilidad.",
        },
        impostor: {
          title: "Impostor",
          description:
            "Juego multijugador en tiempo real de deducción social. Los jugadores se unen a salas, reciben palabras secretas y deben identificar al impostor entre ellos. Cuenta con sincronización de estado del juego en vivo y votación interactiva.",
        },
        aiMuseum: {
          title: "Clasificador de Imágenes IA para Museo",
          description:
            "Aplicación fullstack que clasifica imágenes en categorías culturales usando un modelo de IA personalizado. Frontend responsive con Next.js permite captura de imágenes en tiempo real, carrusel interactivo y descripciones de audio para accesibilidad. Backend de alto rendimiento con FastAPI y TensorFlow sirve un modelo Keras optimizado para inferencia rápida.",
        },
        discordBot: {
          title: "Bot de Música y Utilidades de Discord",
          description:
            "Un bot de Discord rico en características desarrollado en TypeScript. Las capacidades incluyen reproducción de música, integración de canales de voz y comandos de utilidad para mejorar la gestión del servidor y la interacción del usuario.",
        },
        taskManager: {
          title: "Aplicación de Gestión de Tareas Full Stack",
          description:
            "Aplicación fullstack de gestión de tareas con autenticación AWS Cognito, frontend con NextJS, backend NestJS y funciones serverless Lambda para procesar tareas completadas. Incluye validación Zod, Material-UI, MongoDB y arquitectura orientada a microservicios.",
        },
      },
    },
    skills: {
      title: "Habilidades Técnicas",
    },
    education: {
      title: "Educación",
      degrees: [
        {
          degree: "Maestría en Ciencias en Ingeniería-Ingeniería de Software",
          institution: "University of Southern Denmark, SDU. Dinamarca",
          period: "2025 - Presente",
          description:
            "Especialización: Desarrollo de Software de Nueva Generación.",
          courses: [
            "Desarrollo de Software para Usuarios Finales",
            "Arquitectura y Análisis Avanzado de Software",
            "Desarrollo de Software Basado en Modelos",
            "Tecnologías de Software para Internet de las Cosas",
          ],
        },
        {
          degree: "Ingeniería en Ciencias de la Computación",
          institution: "Escuela Superior Politécnica del Litoral. Ecuador",
          period: "2017 - 2023",
          description: "",
        },
      ],
    },
    experience: {
      title: "Experiencia Laboral",
      positions: [
        {
          title: "Asistente Estudiantil",
          company: "Syddansk Universitet - University of Southern Denmark",
          period: "2025 - Presente",
          tasks: [
            "Arquitecté y migré un IDE basado en web para RobotDsl, integrando Ace Editor para el frontend, Flask (Python) para el motor de ejecución y un servidor de lenguaje Xtext (Java) para el análisis semántico.",
            "Diseñé un pipeline de compilación personalizado que traduce modelos abstractos DSL en especificaciones Gherkin, ejecutándolas mediante Behave (BDD) para generar comandos de control en tiempo real para el cliente web.",
            "Implementé integración LSP (Language Server Protocol) para proporcionar características de nivel de escritorio en el navegador, incluyendo resaltado de sintaxis en tiempo real, validación semántica e IntelliSense (autocompletado).",
          ],
        },
        {
          title: "Especialista de Software / Desarrollador Full Stack Senior",
          company: "Telconet LATAM",
          period: "2023 - 2025",
          tasks: [
            "Lideré el desarrollo de aplicaciones web escalables para gestión de KPIs usando NextJS, Typescript, FastAPI, Redis, Docker, AWS, PostgreSQL, Exasol.",
            "Implementé web scraping para la descarga de reportes de Tableau, optimizando el proceso y reduciendo la intervención manual en un 90% usando Python, Selenium, Prefect 2.0.",
            "Mentoricé desarrolladores junior y mejoré el rendimiento del sistema en un 40%.",
          ],
        },
        {
          title: "Desarrollador Full Stack",
          company: "Laboratorios ASIMED",
          period: "2021 - 2023",
          tasks: [
            "Desarrollé una aplicación web de gestión de reportes médicos usando GraphQL, Hasura, Sveltekit, Fastify, Typescript y arquitectura hexagonal, disminuyendo el tiempo de generación de reportes en un 50%.",
            "Integré el SDK de Meta Conversions API para transmitir eventos de conversión del lado del servidor, aumentando la precisión de atribución de marketing en un 25% mientras se mantiene la conformidad con las restricciones de privacidad.",
            "Mantuve y optimicé aplicaciones existentes, asegurando alto rendimiento y capacidad de respuesta.",
          ],
        },
        {
          title: "Pasante en Rendimiento de Reservorios (Software)",
          company: "Schlumberger",
          period: "2020 - 2021",
          tasks: [
            "Automaticé pipelines de extracción de datos con Python y Pandas, reduciendo errores de entrada manual en un 25%.",
          ],
        },
        {
          title: "Desarrollador Full Stack",
          company: "Hangaroa",
          period: "2019 - 2020",
          tasks: [
            "Construí un portal de emparejamiento de empleos (Angular, Django, MySQL) sirviendo a más de 100 usuarios mensuales.",
            "Optimicé consultas para reducir los tiempos de carga en un 30%.",
            "Implementé seguridad RBAC y OAuth2.",
          ],
        },
      ],
    },
    contact: {
      title: "Contáctame",
      subtitle:
        "¿Necesitas un héroe? Mi superpoder es hacer realidad tu proyecto.",
      location: "Ubicación",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo Electrónico",
      emailPlaceholder: "Tu correo electrónico",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Éxito!",
      success: "¡Mensaje enviado exitosamente!",
      errorTitle: "¡Error!",
      error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi!",
      name: "I'm",
      title: "Full Stack Developer & Engineer",
      description:
        "Computer Science Engineer passionate about creating scalable web applications and solving complex problems. I take great pleasure in conceptualizing and bringing to life visually stunning products.",
      downloadResume: "Download Resume",
    },
    projects: {
      title: "Projects",
      code: "Code",
      liveDemo: "Live Demo",
      descriptions: {
        pizza: {
          title: "Distributed System for I4.0 Pizza Production",
          description:
            "Design and validation of a flexible, distributed architecture for Industry 4.0. Combines Event-Driven and Microservice-Oriented architectures to ensure modularity and real-time processing. Validated through a containerized pizza production testbed and formally verified using UPPAAL.",
        },
        reuse: {
          title: "Reuse Assistant: Automated Guidance for End-User Programming",
          description:
            "Development and evaluation of an automated guidance system for OpenRoberta that helps end-users reuse code. The system uses visual highlighting and one-click refactoring to transform duplicate sequences into reusable custom blocks. User study demonstrated 100% adoption rate and high usability scores.",
        },
        impostor: {
          title: "Impostor",
          description:
            "Real-time multiplayer social deduction game. Players join rooms, receive secret words, and must identify the impostor among them. Features live game state synchronization and interactive voting.",
        },
        aiMuseum: {
          title: "AI Image Classifier for Museum",
          description:
            "Full-stack application that classifies images into cultural categories using a custom AI model. Responsive Next.js frontend enables real-time image capture, interactive carousel, and audio descriptions for accessibility. High-performance FastAPI and TensorFlow backend serves an optimized Keras model for fast inference.",
        },
        discordBot: {
          title: "Discord Music & Utility Bot",
          description:
            "A feature-rich Discord bot developed in TypeScript. Capabilities include music playback, voice channel integration, and utility commands to enhance server management and user interaction.",
        },
        taskManager: {
          title: "Full Stack Task Management Application",
          description:
            "Full-stack task management application with AWS Cognito authentication, NextJS frontend, NestJS backend, and Lambda serverless functions for completed task processing. Features Zod validation, Material-UI, MongoDB, and microservice-oriented architecture.",
        },
      },
    },
    skills: {
      title: "Technical Skills",
    },
    education: {
      title: "Education",
      degrees: [
        {
          degree: "Master of Science in Engineering-Software Engineering",
          institution: "University of Southern Denmark, SDU. Denmark",
          period: "2025 - Present",
          description: "Specialization: Next Generation Software Development.",
          courses: [
            "End-User Development",
            "Advanced Software Architecture and Analysis",
            "Model-based Software Development",
            "Software Technologies for Internet of Things",
          ],
        },
        {
          degree: "Computer Science Engineering",
          institution: "Escuela Superior Politécnica del Litoral. Ecuador",
          period: "2017 - 2023",
          description: "",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      positions: [
        {
          title: "Student Assistant",
          company: "Syddansk Universitet - University of Southern Denmark",
          period: "2025 - Present",
          tasks: [
            "Architected and migrated a web-based IDE for RobotDsl, integrating Ace Editor for the frontend, Flask (Python) for the execution engine, and an Xtext (Java) Language Server for semantic analysis.",
            "Engineered a custom compilation pipeline that translates abstract DSL models into Gherkin specifications, executing them via Behave (BDD) to generate real-time control commands for the web client.",
            "Implemented LSP (Language Server Protocol) integration to provide desktop-grade features in the browser, including real-time syntax highlighting, semantic validation and IntelliSense (auto-completion).",
          ],
        },
        {
          title: "Software Specialist / Senior Full Stack Developer",
          company: "Telconet LATAM",
          period: "2023 - 2025",
          tasks: [
            "Led development of scalable web applications for KPI management using NextJS, Typescript, FastAPI, Redis, Docker, AWS, PostgreSQL, Exasol.",
            "Implemented web scraping for downloading Tableau reports, streamlining process and reducing manual intervention by 90% using Python, Selenium, Prefect 2.0.",
            "Mentored junior developers and improved system performance by 40%.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Laboratorios ASIMED",
          period: "2021 - 2023",
          tasks: [
            "Developed a medical report management web app using GraphQL, Hasura, Sveltekit, Fastify, Typescript and hexagonal architecture, decreasing report generation time by 50%.",
            "Integrated the Meta Conversions API SDK to stream server-side conversion events, boosting marketing-attribution accuracy by 25% while remaining compliant with privacy constraints.",
            "Maintained and optimized existing applications, ensuring high performance and responsiveness.",
          ],
        },
        {
          title: "Reservoir Performance Intern (Software)",
          company: "Schlumberger",
          period: "2020 - 2021",
          tasks: [
            "Automated data extraction pipelines with Python & Pandas, reducing manual entry errors by 25%.",
          ],
        },
        {
          title: "Full Stack Developer",
          company: "Hangaroa",
          period: "2019 - 2020",
          tasks: [
            "Built a job matching portal (Angular, Django, MySQL) serving 100+ monthly users.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Do you need a hero? My superpower is to make your project a reality.",
      location: "Location",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "Your email",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Success!",
      success: "Message sent successfully!",
      errorTitle: "Error!",
      error: "Error sending message. Please try again.",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
  it: {
    nav: {
      about: "Chi sono",
      projects: "Progetti",
      education: "Istruzione",
      skills: "Competenze",
      experience: "Esperienza",
      contact: "Contatti",
    },
    hero: {
      greeting: "Ciao!",
      name: "Sono",
      title: "Sviluppatore Full Stack e Ingegnere",
      description:
        "Ingegnere informatico appassionato di creare applicazioni web scalabili e risolvere problemi complessi. Mi piace concettualizzare e dare vita a prodotti visivamente straordinari.",
      downloadResume: "Scarica CV",
    },
    projects: {
      title: "Progetti in Evidenza",
      code: "Codice",
      liveDemo: "Demo dal Vivo",
      descriptions: {
        pizza: {
          title: "Sistema Distribuito per la Produzione di Pizza I4.0",
          description:
            "Progettazione e validazione di un'architettura flessibile e distribuita per l'Industria 4.0. Combina architetture orientate agli eventi e ai microservizi per garantire modularità e elaborazione in tempo reale. Validata attraverso un banco di prova di produzione di pizza containerizzato e verificata formalmente utilizzando UPPAAL.",
        },
        reuse: {
          title:
            "Assistente di Riutilizzo: Guida Automatizzata per la Programmazione End-User",
          description:
            "Sviluppo e valutazione di un sistema di guida automatizzato per OpenRoberta che aiuta gli utenti finali a riutilizzare il codice. Il sistema utilizza evidenziazione visiva e refactoring con un clic per trasformare sequenze duplicate in blocchi personalizzati riutilizzabili. Lo studio utente ha dimostrato un tasso di adozione del 100% e punteggi di usabilità elevati.",
        },
        impostor: {
          title: "Impostor",
          description:
            "Gioco multiplayer in tempo reale di deduzione sociale. I giocatori si uniscono alle stanze, ricevono parole segrete e devono identificare l'impostore tra loro. Include sincronizzazione dello stato del gioco dal vivo e votazione interattiva.",
        },
        aiMuseum: {
          title: "Classificatore di Immagini AI per Museo",
          description:
            "Applicazione fullstack che classifica le immagini in categorie culturali utilizzando un modello AI personalizzato. Frontend responsive con Next.js consente acquisizione di immagini in tempo reale, carosello interattivo e descrizioni audio per l'accessibilità. Backend ad alte prestazioni con FastAPI e TensorFlow serve un modello Keras ottimizzato per inferenza rapida.",
        },
        discordBot: {
          title: "Bot Discord per Musica e Utilità",
          description:
            "Un bot Discord ricco di funzionalità sviluppato in TypeScript. Le capacità includono riproduzione musicale, integrazione di canali vocali e comandi di utilità per migliorare la gestione del server e l'interazione dell'utente.",
        },
        taskManager: {
          title: "Applicazione Full Stack di Gestione Attività",
          description:
            "Applicazione fullstack di gestione attività con autenticazione AWS Cognito, frontend con NextJS, backend NestJS e funzioni serverless Lambda per l'elaborazione delle attività completate. Include validazione Zod, Material-UI, MongoDB e architettura orientata ai microservizi.",
        },
      },
    },
    skills: {
      title: "Competenze Tecniche",
    },
    education: {
      title: "Istruzione",
      degrees: [
        {
          degree: "Laurea Magistrale in Ingegneria-Ingegneria del Software",
          institution: "University of Southern Denmark, SDU. Danimarca",
          period: "2025 - Presente",
          description:
            "Specializzazione: Sviluppo Software di Nuova Generazione.",
          courses: [
            "Sviluppo Software per Utenti Finali",
            "Architettura e Analisi Avanzata del Software",
            "Sviluppo Software Basato su Modelli",
            "Tecnologie Software per Internet delle Cose",
          ],
        },
        {
          degree: "Laurea in Scienze Informatiche",
          institution: "Escuela Superior Politécnica del Litoral. Ecuador",
          period: "2017 - 2023",
          description: "",
        },
      ],
    },
    experience: {
      title: "Esperienza Lavorativa",
      positions: [
        {
          title: "Assistente Studente",
          company: "Syddansk Universitet - University of Southern Denmark",
          period: "2025 - Presente",
          tasks: [
            "Architettato e migrato un IDE basato su web per RobotDsl, integrando Ace Editor per il frontend, Flask (Python) per il motore di esecuzione e un Xtext (Java) Language Server per l'analisi semantica.",
            "Progettato una pipeline di compilazione personalizzata che traduce modelli astratti DSL in specifiche Gherkin, eseguendole tramite Behave (BDD) per generare comandi di controllo in tempo reale per il client web.",
            "Implementata l'integrazione LSP (Language Server Protocol) per fornire funzionalità di livello desktop nel browser, inclusi evidenziazione della sintassi in tempo reale, validazione semantica e IntelliSense (completamento automatico).",
          ],
        },
        {
          title: "Specialista Software / Sviluppatore Full Stack Senior",
          company: "Telconet LATAM",
          period: "2023 - 2025",
          tasks: [
            "Guidato lo sviluppo di applicazioni web scalabili per la gestione dei KPI utilizzando NextJS, Typescript, FastAPI, Redis, Docker, AWS, PostgreSQL, Exasol.",
            "Implementato web scraping per il download di report Tableau, ottimizzando il processo e riducendo l'intervento manuale del 90% utilizzando Python, Selenium, Prefect 2.0.",
            "Mentorato sviluppatori junior e migliorato le prestazioni del sistema del 40%.",
          ],
        },
        {
          title: "Sviluppatore Full Stack",
          company: "Laboratorios ASIMED",
          period: "2021 - 2023",
          tasks: [
            "Sviluppato un'applicazione web di gestione dei report medici utilizzando GraphQL, Hasura, Sveltekit, Fastify, Typescript e architettura esagonale, diminuendo il tempo di generazione dei report del 50%.",
            "Integrato l'SDK Meta Conversions API per trasmettere eventi di conversione lato server, aumentando la precisione dell'attribuzione di marketing del 25% rimanendo conforme ai vincoli di privacy.",
            "Mantenuto e ottimizzato applicazioni esistenti, garantendo alte prestazioni e reattività.",
          ],
        },
        {
          title: "Stagista Prestazioni Giacimenti (Software)",
          company: "Schlumberger",
          period: "2020 - 2021",
          tasks: [
            "Automatizzate pipeline di estrazione dati con Python e Pandas, riducendo gli errori di immissione manuale del 25%.",
          ],
        },
        {
          title: "Sviluppatore Full Stack",
          company: "Hangaroa",
          period: "2019 - 2020",
          tasks: [
            "Costruito un portale di abbinamento lavori (Angular, Django, MySQL) servendo oltre 100 utenti mensili.",
            "Ottimizzate le query per ridurre i tempi di caricamento del 30%.",
            "Implementata sicurezza RBAC e OAuth2.",
          ],
        },
      ],
    },
    contact: {
      title: "Contattami",
      subtitle:
        "Hai bisogno di un eroe? Il mio superpotere è trasformare il tuo progetto in realtà.",
      location: "Posizione",
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "La tua email",
      message: "Messaggio",
      messagePlaceholder: "Parlami del tuo progetto...",
      send: "Invia Messaggio",
      sending: "Invio in corso...",
      successTitle: "Successo!",
      success: "Messaggio inviato con successo!",
      errorTitle: "Errore!",
      error: "Errore nell'invio del messaggio. Riprova.",
    },
    footer: {
      rights: "Tutti i diritti riservati",
    },
  },
} as const;

export type Language = "es" | "en" | "it";
export type TranslationKeys = (typeof translations)[Language];
