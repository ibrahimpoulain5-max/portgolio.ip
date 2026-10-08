/* ============================================================
   DATA.JS — TOUT LE CONTENU DU SITE EST ICI
   Modifie ce fichier uniquement : le HTML ne bouge pas.
   Remplace chaque "À compléter" par tes vraies informations.
   ============================================================ */

const SITE = {

  /* ---------- IDENTITÉ ---------- */
  profile: {
    firstName: "Ibrahim",          // ← Ton prénom
    lastName: "POULAIN",              // ← Ton nom
    initials: "IP",               // ← Initiales (logo)
    status: "Étudiant en informatique",
    domain: "Développement · Réseaux · Cybersécurité",
    tagline: "Je conçois des applications fiables, j'administre des infrastructures et je pense sécurité dès la première ligne de code.",
    location: "Toulouse, France",      // ← Ta ville
    email: "ibrahimpoulain5@gmail.com ",  // ← Ton email
    available: "Recherche un stage"   // ← Badge de statut
  },

  /* ---------- RÉSEAUX ---------- */
  links: {
    github:   "",                 // ← ex: "https://github.com/tonpseudo"
    linkedin: "",                 // ← ex: "https://linkedin.com/in/tonpseudo"
    portfolio:"",                 // ← site perso / Dev.to / autre
    phone:    ""                  // ← ex: "+33 6 00 00 00 00"
  },

  /* ---------- À PROPOS ---------- */
  about: {
    intro: [
      "Étudiant en informatique, je construis des projets concrets qui couvrent tout le cycle du développement : conception, codage, déploiement et sécurisation.",
      "Mon intérêt principal se porte sur le développement web et logiciel, complété par une solide culture réseau et Linux qui me permet de comprendre l'ensemble de la chaîne technique.",
      "Je cherche actuellement un stage pour mettre en pratique mes compétences dans une équipe exigeante et apprendre auprès de professionnels."
    ],
    facts: [
      { label: "Statut",        value: "Étudiant" },
      { label: "Disponibilité", value: "Stage" },
      { label: "Langue",        value: "Français (natif)" },
      { label: "Localisation",  value: "Toulouse, France" }
    ],
    goals: [
      "Approfondir le développement d'applications robustes et maintenables.",
      "Monter en compétence sur la sécurité des systèmes et des réseaux.",
      "Contribuer à des projets réels en équipe lors d'un stage."
    ]
  },


  /* ---------- COMPÉTENCES ----------
     Retire ou ajoute librement des items. */
  skills: [
    { category: "Développement",   icon: "code",     items: ["C", "C++", "Java", "POO", "Algorithmique"] },
    { category: "Web",             icon: "web",      items: ["HTML5", "CSS3", "JavaScript", "Responsive", "Git"] },
    { category: "Python",          icon: "python",   items: ["Python", "Scripts d'automatisation", "Analyse de données"] },
    { category: "Linux",           icon: "terminal", items: ["Bash", "Administration", "Services", "Système de fichiers"] },
    { category: "Réseaux",         icon: "network",  items: ["TCP/IP", "DNS", "DHCP", "Routage", "Sous-réseaux"] },
    { category: "Cybersécurité",   icon: "shield",   items: ["Bonnes pratiques", "Analyse de vulnérabilités", "Sécurisation système"] },
    { category: "Hardware",        icon: "cpu",      items: ["Assemblage", "Dépannage", "Architecture"] },
    { category: "Outils / Logiciels", icon: "tool",  items: ["VS Code", "Wireshark", "VirtualBox", "Office"] }
  ],

  /* ---------- PROJETS ----------
     status : "Terminé" | "En cours" | "Recherche"
     image  : chemin relatif ("assets/projects/1.jpg") ou "" → aperçu généré
     github / url : "" masque le bouton */
  projects: [
    {
      name: "Nom du projet 1",
      description: "Objectif du projet, ton rôle, ce que tu as réellement implémenté. Une ou deux phrases suffisent.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "", github: "", url: "",
      status: "Terminé"
    },
    {
      name: "Nom du projet 2",
      description: "Projet réseau ou système : pare-feu, configuration, supervision, script d'administration…",
      tech: ["Linux", "Bash", "Réseau"],
      image: "", github: "", url: "",
      status: "En cours"
    },
    {
      name: "Nom du projet 3",
      description: "Projet Python ou cybersécurité : outil d'analyse, automatisation, prototype…",
      tech: ["Python", "Sécurité"],
      image: "", github: "", url: "",
      status: "En cours"
    }
  ],

  /* ---------- PARCOURS / TIMELINE ----------
     type : "Formation" | "Stage" | "Expérience" | "Certification" | "Projet" */
  timeline: [
    { date: "20XX — 20XX", type: "Formation",    title: "Intitulé de ton diplôme",       place: "Établissement", description: "Formation et matières principales." },
    { date: "20XX — 20XX", type: "Formation",    title: "Intitulé du diplôme précédent", place: "Établissement", description: "Baccalauréat ou autre diplôme — mention si pertinente." },
    { date: "20XX",        type: "Stage",        title: "Poste occupé (si déjà fait)",   place: "Entreprise",    description: "Missions réelles réalisées pendant le stage." },
    { date: "20XX",        type: "Certification",title: "Nom de la certification",       place: "Organisme",     description: "Certification obtenue (réseau, sécurité, langage…)." }
  ],

  /* ---------- CV ---------- */
  cv: {
    file: "assets/cv.pdf",   // ← place ton CV ici sous ce nom
    education: [
      { period: "20XX — 20XX", title: "Diplôme en cours",  place: "École / Université" },
      { period: "20XX — 20XX", title: "Diplôme précédent", place: "Lycée / Établissement" }
    ],
    experience: [
      { period: "20XX", title: "Stage / Mission",      place: "Entreprise", detail: "Résumé des missions." },
      { period: "20XX", title: "Projet professionnel", place: "Contexte",   detail: "Résumé." }
    ],
    languages: [
      { name: "Français", level: "Langue maternelle",   value: 100 },
      { name: "Anglais",  level: "Technique / courant", value: 65 }
    ],
    certifications: [
      { name: "Nom de la certification", issuer: "Organisme", year: "20XX" }
    ],
    interests: ["Développement web", "Réseaux", "Cybersécurité", "Linux", "Hardware"]
  },

  /* ---------- CONTACT ---------- */
  contact: {
    message: "Un stage, une alternance ou une simple question ? Écris-moi, je réponds généralement sous 24 h.",
    /* Formulaire : mets l'URL de ton service (Formspree, Netlify Forms…).
       Laisse "" pour que le formulaire ouvre directement ton client mail. */
    formEndpoint: ""
  }
};

