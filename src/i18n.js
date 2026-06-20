import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //Navbar
        Home: "Home",
        About: "About",
        Skills: "Skills",
        Projects: "Projects",
        Experience: "Experience",
        Education: "Education",
        Contact: "Contact",

        name: "Hi, I'm Hari Krishna",
        header:
          " A passionate software engineer building modern, efficient, and high-performance web applications, bridging software with robotics and automation.",
        workbtn: "   View My Work",
        resumebtn: "View Resume",

        //About me
        aboutme: "About me",
        aboutmepara:
          "I am a Software Engineer with 2 years of professional experience in software development, specializing in React.js, Node.js, Python, and modern web technologies. Currently pursuing a Master's in Robotics and Autonomous Systems at the University of Lübeck, Germany, I am passionate about building scalable software, optimizing performance, and solving real-world problems through technology. With a strong foundation in software engineering and a growing interest in robotics, artificial intelligence, and autonomous systems, I am actively seeking a Werkstudent opportunity in Germany where I can contribute my technical expertise, gain hands-on industry experience, and further develop my skills in innovative and technology-driven environments.",

        //skills
        skills: "skills",

        projects:"Projects",

        //Experience
        experience: "Experience",

        //experience1
        roleFreelancer: "Freelancer",
        company1: "ESPA International Private Limited | Chennai | 03/2026 - 05/2026",
        bullet1:
          "Implemented user login history tracking (username, role, role ID, login & logout time).",
        bullet2:
          "Developed a room availability module displaying room number and real-time status.",
        bullet3:
          "Created a live attendance dashboard integrated with the ESSL biometric API for real-time employee attendance tracking.",
        bullet4:
          "Implemented a daily sales dashboard showing customer name, date, and payment method used (Cash, UPI, Membership, Bank Transfer, Promotion, Card Machine, Guest).",

        //experience2
        roleSoftwareEngineer: "Software Engineer",
        company2: "STW E-commerce Private Limited | Chennai | 06/2024 - 02/2026",
        bullet5:
          "Played a key role in migrating an e-commerce website using Next.js and React.js, improving performance, security, and stability through bug fixes and package upgrades.",
        bullet6:
          "Furthermore, I worked on the card functionality, which displays product price details, whether the product is BAU or BAI, product origin, and product ratings.",
        bullet7:
          "My involvement in these initiatives has given me a strong technical foundation, the ability to solve problems, and the flexibility to quickly adjust to new difficulties.",

        //experience3
        roleTraineeSoftwareEngineer: "Trainee Software Engineer",
        company3: "STW E-commerce Private Limited | Chennai | 03/2024 - 05/2024",
        bullet8:
          "My internship at Shop The World has allowed me to obtain practical expertise with a range of cutting-edge technologies as a software engineer. ",
        bullet9:
          "I created five dynamic and responsive pages using Vue.js and Vuetify during my internship, which helped to construct a comprehensive content management system. ",
        bullet10:
          "One of these pages is a feedback page, where customers' reviews are displayed on the frontend. This feature enhances user engagement and provides valuable insights into customer satisfaction.",
        bullet11:
          "This project improved my knowledge of contemporary web frameworks and effective state management in addition to honing my frontend development abilities.",

        //education
        Educationheading: "Education",
        education1: "Higher Secondary School",
        education2: "Bachelor of Engineering",
        education3: "Masters in Science",

        university1: "Santiniketan Matriculation Higher Secondary School",
        university2: "S.A. Engineering College",
        university3: "University of Lübeck",

        course1: "Computer Science Stream (Class: First)",
        course2: "Computer Science and Engineering (Grade: 1.9)",
        course3: "Robotics and Autonomous Systems",

        //Projects section heading
        headingproject: "Projects",

        // Project titles & descriptions
        erpTitle: "ERP Application",
        erpDesc:
          "Modern ERP system for billing, inventory tracking, and analytics insights.",
        mediaTitle: "Media / Photography Website",
        mediaDesc:
          "Professional showcase website for media and photography projects.",

        // ERP – Dashboard (image 1)
        erppoint1:
          "Designed and developed a secure user creation form with full validation support.",
        erppoint2:
          "Implemented backend APIs for handling user registration and role-based access control.",
        erppoint3:
          "Enhanced onboarding process with optimized UI and smooth database-driven workflows.",

        // ERP – Service Bill (image 2)
        erppoint4:
          "Added autofill functionality to fetch and populate customer details based on mobile number input.",
        erppoint5:
          "Developed backend services to generate invoices and calculate taxes automatically.",
        erppoint6:
          "Connected billing system with inventory to update stock levels in real-time.",
        erppoint7:
          "Implemented discounts, multiple payment methods, and invoice tracking for businesses.",

        // ERP – Inventory (image 3)
        erppoint8:
          "Designed an intuitive dashboard to manage stock, add items, and track availability.",
        erppoint9:
          "Implemented backend logic for single and bulk stock uploads and database synchronization.",
        erppoint10:
          "Integrated inventory system with billing to ensure accurate real-time product updates.",
        erppoint11:
          "Added low-stock alerts and reporting features for proactive inventory management.",

        // ERP – Room Available (image 4)
        erppoint12:
          "Implemented real-time room availability tracking with dynamic status updates.",
        erppoint13:
          "Automatically updates room status to 'In Progress' when a customer books and the therapist starts the checklist.",
        erppoint14:
          "Displays room as 'Available' if no booking or checklist activity is recorded.",
        erppoint15:
          "Integrated service workflow where room remains unavailable until service completion.",
        erppoint16:
          "Enabled housekeeping module to update room status after cleaning through secure login.",
        erppoint17:
          "Room status changes back to 'Available' only after housekeeping confirms cleaning completion.",

        // ERP – Create User (image 5)
        erppoint18:
          "Designed and developed a secure user creation form with full validation support.",
        erppoint19:
          "Implemented backend APIs for handling user registration and role-based access control.",
        erppoint20:
          "Enhanced onboarding process with optimized UI and smooth database-driven workflows.",

        // ERP – Report (image 6)
        erppoint21:
          "Built a reporting module allowing users to filter data by custom date range.",
        erppoint22:
          "Developed backend logic to generate reports with analytics and sales insights.",
        erppoint23:
          "Implemented export functionality for reports in Excel format.",

        // Media – Home (image 1)
        mediapoint1:
          "Designed and developed a responsive landing page showcasing featured photography work effectively.",
        mediapoint2:
          "Implemented modern UI layout with clean HTML structure and CSS styling techniques.",
        mediapoint3:
          "Integrated navigation menu to allow smooth access to different sections of website.",
        mediapoint4:
          "Built with a focus on simplicity, usability, and modern photography website aesthetics.",

        // Media – Gallery (image 2)
        mediapoint5:
          "Created a gallery page displaying photography images with grid-based HTML and CSS.",
        mediapoint6:
          "Added animated counters to showcase statistics like total photos, clients, and projects.",
        mediapoint7:
          "Implemented hover effects for interactive and visually appealing user experience.",
        mediapoint8:
          "Focused on responsive design for mobile, tablet, and desktop screen sizes.",

        // Media – About (image 3)
        mediapoint9:
          "Built a professional about page introducing photographer's background, skills, and services.",
        mediapoint10:
          "Structured content with semantic HTML tags for accessibility and SEO-friendly design.",
        mediapoint11:
          "Styled using CSS to maintain consistent branding, typography, and color palette.",
        mediapoint12:
          "Highlighted personal story, vision, and passion for photography through clean layout.",

        // Media – Blog/Footer (image 4)
        mediapoint13:
          "Developed blog section with posts layout to share photography insights and experiences.",
        mediapoint14:
          "Added footer with essential links, copyright information, and contact details.",
        mediapoint15:
          "Styled blog and footer using CSS for a cohesive professional appearance.",

        //contact
        ContactHeading: "Contact",
        Yourname: "Your name",
        Youremail: " Your email",
        Yourmessage: "Drop your text here",
        Sendmessage: "Send message",

        // Shared UI
        Back: "Back",
        Visit: "Visit",
        viewProject: "View Project",
      },
    },

    de: {
      translation: {
        //Navbar
        Home: "Startseite",
        About: "Über mich",
        Skills: "Fähigkeiten",
        Projects: "Projekte",
        Experience: "Berufserfahrung",
        Education: "Ausbildung",
        Contact: "Kontakt",

        name: "Hallo, ich bin Hari Krishna",
        header:
          "Ein leidenschaftlicher Softwareentwickler, der moderne, effiziente und leistungsstarke Webanwendungen entwickelt und dabei Software mit Robotik und Automatisierung verbindet.",
        workbtn: "Meine Arbeit",
        resumebtn: "Lebenslauf anzeigen",

        //About me
        aboutme: "Über mich",
        aboutmepara:
          "Als Softwareentwickler mit zweijähriger Berufserfahrung und Schwerpunkt auf React.js, Node.js, Python sowie modernen Webtechnologien absolviere ich derzeit ein Masterstudium im Bereich Robotik und Autonome Systeme an der Universität zu Lübeck. Ich begeistere mich für die Entwicklung skalierbarer Software, die Optimierung der Performance sowie die technologische Lösung praxisrelevanter Probleme. Mit einer fundierten Basis in der Softwareentwicklung und einem wachsenden Interesse an Robotik, künstlicher Intelligenz und autonomen Systemen suche ich aktiv nach einer Werkstudententätigkeit in Deutschland. Dabei möchte ich meine technische Expertise einbringen, praktische Erfahrungen in der Branche sammeln und meine Fähigkeiten in einem innovativen, technologieorientierten Umfeld weiterentwickeln.",

        //skills
        skills: "Fähigkeiten",

        projects:"Projekte",

        // experience
        experience: "Berufserfahrung",

        // experience1
        roleFreelancer: "Freiberufler",
        company1: "ESPA International Private Limited | Chennai | 03/2026 - 05/2026",
        bullet1:
          "Implementierung der Benutzeranmeldehistorie (Benutzername, Rolle, Rollen-ID, An- und Abmeldezeitpunkt).",
        bullet2:
          " Entwicklung eines Moduls zur Raumverfügbarkeitsanzeige mit Zimmernummer und Echtzeitstatus.",
        bullet3:
          "Erstellung eines Live-Anwesenheits-Dashboards mit Integration der ESSL Biometrie-API zur Echtzeit-Anwesenheitserfassung der Mitarbeiter.",
        bullet4:
          "Implementierung eines täglichen Verkaufs-Dashboards mit Anzeige von Kundennamen, Datum und Zahlungsmethode (Barzahlung, UPI, Mitgliedschaft, Banküberweisung, Aktionszahlung, Kartenzahlung, Gastzahlung).",

        //experience2
        roleSoftwareEngineer: "Softwareentwickler",
        company2: "STW E-commerce Private Limited | Chennai | 06/2024 - 02/2026",
        bullet5:
          "Spielte eine Schlüsselrolle bei der Migration einer E-Commerce-Website mit Next.js und React.js und verbesserte Leistung, Sicherheit und Stabilität durch Fehlerbehebungen und Paketaktualisierungen.",
        bullet6:
          "Darüber hinaus habe ich an der Kartenfunktionalität gearbeitet, die Produktdetails, die Produktpreisinformationen, ob es sich um ein BAU- oder BAI-Produkt handelt, die Produktherkunft und Produktbewertungen anzeigt.",
        bullet7:
          "Meine Beteiligung an diesen Initiativen hat mir ein solides technisches Fundament, die Fähigkeit zur Problemlösung und die Flexibilität gegeben, mich schnell an neue Schwierigkeiten anzupassen.",

        // experience3
        roleTraineeSoftwareEngineer: "Trainee Softwareentwickler",
        company3: "STW E-commerce Private Limited | Chennai | 03/2024 - 05/2024",
        bullet8:
          "Mein Praktikum bei Shop The World ermöglichte es mir, als Softwareentwickler praktische Erfahrung mit einer Reihe modernster Technologien zu sammeln.",
        bullet9:
          "Während meines Praktikums entwickelte ich fünf dynamische und responsive Seiten mit Vue.js und Vuetify, die zum Aufbau eines umfassenden Content-Management-Systems beitrugen.",
        bullet10:
          "Eine dieser Seiten ist eine Feedback-Seite, auf der Kundenbewertungen im Frontend angezeigt werden. Diese Funktion fördert die Nutzerinteraktion und liefert wertvolle Einblicke in die Kundenzufriedenheit.",
        bullet11:
          "Dieses Projekt erweiterte mein Wissen über moderne Web-Frameworks und effektives State-Management und verfeinerte meine Frontend-Entwicklungsfähigkeiten.",

        //education
        Educationheading: "Ausbildung",
        education1: "Abitur",
        education2: "Bachelor of Engineering",
        education3: "Master in Science",

        university1: "Santiniketan Matriculation Higher Secondary School",
        university2: "S.A. Engineering College",
        university3: "Universität zu Lübeck",

        course1: "Informatik (Class: First)",
        course2: "Informatik und Ingenieurwesen (Grade: 1.9)",
        course3: "Robotik und Autonome Systeme",

        //Projects section heading
        headingproject: "Projekte",

        // Project titles & descriptions
        erpTitle: "ERP-Anwendung",
        erpDesc:
          "Modernes ERP-System für Abrechnung, Bestandsverfolgung und Analyseergebnisse.",
        mediaTitle: "Medien- / Fotografiewebsite",
        mediaDesc:
          "Professionelle Präsentationswebsite für Medien- und Fotografieprojekte.",

        // ERP – Dashboard (image 1)
        erppoint1:
          "Entwicklung eines sicheren Benutzererstellungsformulars mit umfassender Validierungsunterstützung.",
        erppoint2:
          "Implementierung von Backend-APIs für die Benutzerregistrierung und rollenbasierte Zugriffskontrolle.",
        erppoint3:
          "Optimierung des Onboarding-Prozesses durch eine verbesserte Benutzeroberfläche und reibungslose datenbankgestützte Workflows.",

        // ERP – Service Bill (image 2)
        erppoint4:
          "Die Autofill-Funktion wurde hinzugefügt, um Kundendaten anhand der eingegebenen Mobilnummer abzurufen und automatisch einzufügen.",
        erppoint5:
          "Backend-Services wurden entwickelt, um Rechnungen automatisch zu erstellen und Steuern zu berechnen.",
        erppoint6:
          "Das Abrechnungssystem wurde mit dem Warenwirtschaftssystem verknüpft, um Lagerbestände in Echtzeit zu aktualisieren.",
        erppoint7:
          "Rabatte, verschiedene Zahlungsmethoden und die Rechnungsverfolgung für Unternehmen wurden implementiert.",

        // ERP – Inventory (image 3)
        erppoint8:
          "Ich habe ein intuitives Dashboard zur Bestandsverwaltung, zum Hinzufügen von Artikeln und zur Verfügbarkeitsverfolgung entwickelt.",
        erppoint9:
          "Die Backend-Logik für Einzel- und Massen-Uploads von Beständen sowie die Datenbanksynchronisierung wurde implementiert.",
        erppoint10:
          "Das Warenwirtschaftssystem wurde mit der Abrechnung integriert, um präzise Produktaktualisierungen in Echtzeit zu gewährleisten.",
        erppoint11:
          "Warnmeldungen bei niedrigem Lagerbestand und Berichtsfunktionen für ein proaktives Bestandsmanagement wurden hinzugefügt.",

        // ERP – Room Available (image 4)
        erppoint12:
          "Implementierung einer Echtzeit-Raumverfügbarkeitsverfolgung mit dynamischen Statusaktualisierungen.",
        erppoint13:
          "Der Raumstatus wird automatisch auf 'In Bearbeitung' gesetzt, sobald ein Kunde bucht und der Therapeut die Checkliste startet.",
        erppoint14:
          "Zeigt den Raum als 'Verfügbar' an, wenn keine Buchung oder Checklistenaktivität erfasst ist.",
        erppoint15:
          "Integrierter Service-Workflow, bei dem der Raum bis zur Fertigstellung des Services als nicht verfügbar gilt.",
        erppoint16:
          "Das Housekeeping-Modul wurde aktiviert, um den Raumstatus nach der Reinigung über einen sicheren Login zu aktualisieren.",
        erppoint17:
          "Der Raumstatus wechselt erst dann zurück auf 'Verfügbar', wenn das Housekeeping die abgeschlossene Reinigung bestätigt.",

        // ERP – Create User (image 5)
        erppoint18:
          "Entwicklung eines sicheren Benutzererstellungsformulars mit umfassender Validierungsunterstützung.",
        erppoint19:
          "Implementierung von Backend-APIs für die Benutzerregistrierung und rollenbasierte Zugriffskontrolle.",
        erppoint20:
          "Optimierung des Onboarding-Prozesses durch eine verbesserte Benutzeroberfläche und reibungslose datenbankgestützte Workflows.",

        // ERP – Report (image 6)
        erppoint21:
          "Ich habe ein Berichtsmodul entwickelt, mit dem Benutzer Daten nach einem benutzerdefinierten Datumsbereich filtern können.",
        erppoint22:
          "Ich habe die Backend-Logik zur Generierung von Berichten mit Analysen und Vertriebseinblicken entwickelt.",
        erppoint23:
          "Ich habe eine Exportfunktion für Berichte im Excel-Format implementiert.",

        // Media – Home (image 1)
        mediapoint1:
          "Gestaltung und Entwicklung einer responsiven Startseite, die ausgewählte Fotoarbeiten wirkungsvoll präsentiert.",
        mediapoint2:
          "Implementierung eines modernen UI-Layouts mit klarer HTML-Struktur und CSS-Styling-Techniken.",
        mediapoint3:
          "Integriertes Navigationsmenü für einen reibungslosen Zugang zu verschiedenen Bereichen der Website.",
        mediapoint4:
          "Entwickelt mit Fokus auf Einfachheit, Benutzerfreundlichkeit und moderner Fotowebsite-Ästhetik.",

        // Media – Gallery (image 2)
        mediapoint5:
          "Erstellung einer Galerieseite, auf der Fotos in einem rasterförmigen HTML- und CSS-Layout präsentiert werden.",
        mediapoint6:
          "Animierte Zähler hinzugefügt, um Statistiken wie Gesamtzahl der Fotos, Kunden und Projekte darzustellen.",
        mediapoint7:
          "Hover-Effekte für ein interaktives und optisch ansprechendes Nutzererlebnis implementiert.",
        mediapoint8:
          "Fokus auf responsives Design für mobile Geräte, Tablets und Desktop-Bildschirmgrößen.",

        // Media – About (image 3)
        mediapoint9:
          "Erstellung einer professionellen Über-mich-Seite mit Hintergrund, Fähigkeiten und Dienstleistungen des Fotografen.",
        mediapoint10:
          "Inhalte mit semantischen HTML-Tags für Barrierefreiheit und SEO-freundliches Design strukturiert.",
        mediapoint11:
          "Mit CSS gestaltet, um ein einheitliches Branding, Typografie und Farbpalette beizubehalten.",
        mediapoint12:
          "Persönliche Geschichte, Vision und Leidenschaft für die Fotografie durch ein übersichtliches Layout hervorgehoben.",

        // Media – Blog/Footer (image 4)
        mediapoint13:
          "Blog-Bereich mit Beitrags-Layout entwickelt, um Einblicke und Erfahrungen zur Fotografie zu teilen.",
        mediapoint14:
          "Footer mit wichtigen Links, Copyright-Informationen und Kontaktdaten hinzugefügt.",
        mediapoint15:
          "Blog und Footer mit CSS für ein einheitliches, professionelles Erscheinungsbild gestaltet.",

        //contact
        ContactHeading: "Kontakt",
        Yourname: "Ihr Name",
        Youremail: "Ihre E-Mail",
        Yourmessage: "Geben Sie hier Ihren Text ein",
        Sendmessage: "Nachricht senden",

        // Shared UI
        Back: "Zurück",
        Visit: "Besuchen",
        viewProject: "Projekt ansehen",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
