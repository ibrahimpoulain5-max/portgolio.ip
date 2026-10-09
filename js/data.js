/* ============================================================
   DATA.JS — Contenu du portfolio.
   Garde uniquement les informations qui correspondent à ton parcours.
   ============================================================ */

const SITE = {
  profile: {
    firstName: "Ibrahim",
    lastName: "POULAIN",
    initials: "IP",
    status: "Élève au lycée Simone de Beauvoir",
    domain: "Formation CIEL · informatique · réseaux · électronique",
    tagline: "Le numérique me passionne et je m’y intéresse aussi chez moi à travers des projets personnels. En première CIEL, j’approfondis mes connaissances en informatique, réseaux, cybersécurité et électronique.",
    location: "Toulouse, France",
    email: "ibrahimpoulain5@gmail.com",
    available: "En apprentissage"
  },

  links: {
    github: "",
    linkedin: "",
    portfolio: "",
    phone: "07 69 63 95 46"
  },

  about: {
    intro: [
      "Je suis élève au lycée Simone de Beauvoir, à Gragnague, en première CIEL (Cybersécurité, Informatique et réseaux, Électronique), après une seconde MTNE. Le numérique me passionne et je m’y intéresse aussi chez moi à travers des projets personnels.",
      "J’ai également effectué un stage chez ACTIA AUTOMOTIVE, une expérience très enrichissante et agréable. Je souhaite continuer à développer mes compétences et à présenter ici mes réalisations."
    ],
    facts: [
      { label: "Âge", value: "16 ans" },
      { label: "Statut", value: "Lycéen" },
      { label: "Formation", value: "CIEL" },
      { label: "Localisation", value: "Toulouse, France" }
    ],
    goals: [
      {
        text: "Approfondir Python en réalisant des scripts et des projets personnels.",
        source: "https://docs.python.org/fr/3/tutorial/index.html",
        sourceLabel: "Tutoriel officiel Python"
      },
      {
        text: "Continuer à créer et améliorer mes bots Telegram et Discord.",
        source: "https://core.telegram.org/bots/api",
        sourceLabel: "Documentation Telegram Bot API"
      },
      {
        text: "Apprendre à protéger les comptes et les données avec des mots de passe robustes et uniques.",
        source: "https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe",
        sourceLabel: "Conseils de la CNIL"
      },
      {
        text: "Découvrir et appliquer les bonnes pratiques d’hygiène informatique recommandées par l’ANSSI.",
        source: "https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique",
        sourceLabel: "Guide d’hygiène informatique de l’ANSSI"
      }
    ]
  },

  skills: [
    { category: "Informatique", icon: "code", items: ["Découverte des bases", "En cours d’apprentissage"] },
    { category: "Réseaux", icon: "network", items: ["Premières notions en cours"] },
    { category: "Cybersécurité", icon: "shield", items: ["Sensibilisation et bonnes pratiques"] },
    { category: "Électronique", icon: "cpu", items: ["Découverte dans le cadre de la formation"] },
    { category: "Outils", icon: "tool", items: ["Outils utilisés en cours"] }
  ],

  projects: [
    {
      name: "Bot Telegram Multitool",
      description: "Bot Telegram réunissant des outils OSINT, des outils pour Discord et la création de fiches d’identité.",
      image: "assets/project-multitool.svg",
      tech: ["Telegram", "OSINT", "Outils Discord", "Fiche d’identité"]
    },
    {
      name: "Multitool Python en CLI",
      description: "Version en ligne de commande du Multitool, avec les mêmes fonctionnalités : outils OSINT, outils pour Discord et création de fiches d’identité.",
      image: "assets/project-python-cli.svg",
      tech: ["Python", "CLI", "OSINT", "Outils Discord", "Fiche d’identité"]
    },
    {
      name: "Bot Telegram islamique",
      description: "Bot dédié à la pratique quotidienne : consultation des horaires de prière, lecture ou écoute du Coran et notifications à l’heure de la prière.",
      image: "assets/project-prayer-bot.svg",
      tech: ["Telegram", "Horaires de prière", "Coran", "Notifications"]
    }
  ],

  timeline: [
    {
      date: "Collège",
      type: "Scolarité",
      title: "Collège Simone Veil",
      place: "Parcours scolaire",
      description: "Scolarité au collège."
    },
    {
      date: "Actuellement",
      type: "Formation",
      title: "Lycée Simone de Beauvoir",
      place: "Gragnague",
      description: "Après une seconde MTNE, je suis actuellement en première CIEL."
    },
    {
      date: "Stage",
      type: "Expérience",
      title: "Stage chez ACTIA AUTOMOTIVE",
      place: "ACTIA AUTOMOTIVE",
      description: "Une expérience très enrichissante et agréable."
    }
  ],

  cv: {
    file: "assets/cv.pdf",
    education: [
      { period: "Actuellement", title: "Première CIEL (après une seconde MTNE)", place: "Lycée Simone de Beauvoir, Gragnague" }
    ],
    experience: [
      {
        period: "Stage",
        title: "Stage",
        place: "ACTIA AUTOMOTIVE",
        detail: "Une expérience très enrichissante et agréable."
      }
    ],
    languages: [
      { name: "Français", level: "Langue maternelle · courant" },
      { name: "Anglais", level: "B1" }
    ],
    certifications: [],
    interests: [
      "Informatique",
      "Réseaux",
      "Cybersécurité",
      "Électronique",
      "Programmation Python",
      "Bots Telegram et Discord"
    ]
  },

  contact: {
    message: "Pour me contacter, vous pouvez m’écrire par email. Le formulaire ouvre votre application de messagerie.",
    formEndpoint: ""
  }
};
