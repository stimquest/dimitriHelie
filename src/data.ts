import type { ServiceModule, Partner, Diploma } from './types';

export const partners: Partner[] = [
  { name: "Maison Régionale de la Performance" },
  { name: "Centre Sportif de Normandie" },
  { name: "Ligue de Voile Normandie" },
  { name: "Académie du golf d'Omaha Beach" },
  { name: "Ligue Normandie Char à Voile (FFCV)" },
  { name: "Région Normandie" },
  { name: "atyd Consulting" }
];

export const diplomas: Diploma[] = [
  {
    title: "Coach Consultant(e)",
    institution: "Linkup Coaching",
    description: "Certification Professionnelle reconnue par l'État niveau 7 (RNCP). Spécialisation en coaching individuel, d'équipe et d'organisation."
  },
  {
    title: "Expert en Préparation Mentale",
    institution: "FOCUS",
    year: "Promotion 2021/2022",
    description: "Donner du sens à la performance. Diplôme obtenu avec succès."
  },
  {
    title: "Praticien TOP",
    institution: "Optimiser mon potentiel",
    description: "Attestation de fin de formation aux Techniques d'Optimisation du Potentiel (12 OMP 03-25)."
  }
];

export const services: ServiceModule[] = [
  {
    id: "flash-mental",
    title: "Module Flash Mental",
    shortDescription: "Des modules de préparation mentale pour performer quand ça compte.",
    pitch: "La différence entre un bon niveau et une performance maîtrisée se joue souvent sur le terrain... dans la tête. Les Modules Flash Mental proposent des modules de préparation mentale concrets, structurés et immédiatement applicables.",
    whyChoose: [
      "Approche pragmatique, orientés résultats",
      "Outils applicables immédiatement en entraînement et en compétition",
      "Modules courts, ciblés et opérationnels",
      "Adaptables à toutes les disciplines à forte exigence mentale",
      "Interventions directement sur le terrain ou en structure"
    ],
    themesTitle: "Modules les plus demandés",
    themes: [
      "Gérer la pression et les moments clés",
      "Construire une confiance solide et stable",
      "Performer malgré l'erreur et l'imprévu",
      "Rester concentré du début à la fin",
      "Maîtriser ses émotions en situation compétitive",
      "Retrouver de la constance dans la performance",
      "Se préparer mentalement à une compétition ou un objectif majeur"
    ],
    infosPratiques: {
      format: [
        "Individuel ou semi-collectifs",
        "Durée modulable (1h30, demi-journée, journée)",
        "Intervention sur site ou en structure",
        "Exercices pratiques, mises en situation, outils mentaux concrets",
        "Adaptation au niveau, à la discipline et aux objectifs de la personne"
      ],
      audience: [
        "Sportifs compétiteurs ou en préparation d'échéances importantes",
        "Groupes de sportifs amateurs engagés",
        "Clubs et académies sportives",
        "Entraîneurs souhaitant renforcer l'aspect mental"
      ],
      organization: [
        "Identifier les besoins",
        "Choisir les modules adaptés",
        "Définir le format et la durée",
        "Établir un devis personnalisé"
      ],
      pricing: "Devis sur demande après échange préalable"
    },
    image: "/images/voile-visuel.jpeg"
  },
  {
    id: "ateliers",
    title: "Ateliers",
    shortDescription: "Des ateliers de préparation mentale pour performer collectivement quand ça compte.",
    pitch: "La performance collective et individuelle ne repose pas uniquement sur les compétences techniques ou l'expérience. Les Ateliers proposent des expériences collectives de préparation mentale, structurées, concrètes et immédiatement applicables.",
    whyChoose: [
      "Approche pragmatique, orientée compréhension et action",
      "Outils mentaux concrets, utilisables immédiatement",
      "Travail à la fois individuel et collectif",
      "Ateliers adaptables à différents publics et contextes",
      "Interventions en présentiel ou à distance"
    ],
    themesTitle: "Ateliers les plus demandés",
    themes: [
      "Gérer le stress et la pression collective",
      "Développer une confiance individuelle et collective durable",
      "Améliorer la concentration et la qualité de présence",
      "Mieux gérer les émotions en situation exigeante",
      "Renforcer la cohésion et la communication sous pression",
      "Installer des routines mentales efficaces",
      "Favoriser une dynamique de performance durable"
    ],
    infosPratiques: {
      format: [
        "Ateliers collectifs ou en sous-groupes",
        "Durée modulable (1h30, demi-journée, journée)",
        "Interventions en présentiel ou à distance",
        "Exercices pratiques, mises en situation, temps d'échange",
        "Contenus adaptés au public, aux objectifs et au contexte"
      ],
      audience: [
        "Entreprises et équipes professionnelles",
        "Clubs et structures sportives",
        "Établissements scolaires ou de formation",
        "Groupes privés ou organisations en contexte de pression",
        "Managers, encadrants, équipes opérationnelles"
      ],
      organization: [
        "Identifier les besoins et enjeux du groupe",
        "Définir les thématiques adaptées (personnalisable)",
        "Choisir le format et la durée",
        "Construire un atelier sur mesure"
      ],
      pricing: "Devis sur demande après échange préalable"
    },
    image: "/images/pexels-krizz59-12838.jpg"
  },
  {
    id: "conferences",
    title: "Conférences",
    shortDescription: "Comprendre le mental pour performer quand ça compte.",
    pitch: "Les Conférences proposent une approche claire, accessible et exigeante de la préparation mentale. Elles visent à faire évoluer les représentations, transmettre des clés concrètes et installer une compréhension durable des leviers mentaux de la performance.",
    whyChoose: [
      "Contenu structuré et fondé sur l'expérience du terrain",
      "Approche pédagogique, sans discours motivationnel superficiel",
      "Concepts clairs, illustrés par des situations concrètes",
      "Adaptation au public, au contexte et aux enjeux",
      "Impact durable sur les postures et les comportements"
    ],
    themesTitle: "Conférences les plus demandées",
    themes: [
      "Le mental, facteur clé de la performance durable",
      "Gérer la pression quand tout se joue",
      "La confiance : construction, fragilités et leviers",
      "Performer malgré l'erreur et l'imprévu",
      "Concentration, présence et qualité de la prise de décision",
      "Stabilité mentale dans les environnements exigeants",
      "Transformer l'échec en levier de progression"
    ],
    infosPratiques: {
      format: [
        "Conférences de 45 minutes à 1h30",
        "Format présentiel ou distanciel",
        "Public sportif, éducatif ou professionnel",
        "Ton clair, structuré et accessible",
        "Alternance d'exemples concrets, de concepts clés et de mises en perspective"
      ],
      audience: [
        "Clubs et académies sportives",
        "Structures de formation et établissements éducatifs",
        "Équipes sportives, entraîneurs et encadrants",
        "Entreprises confrontées à des environnements à forte pression",
        "Événements, séminaires, conventions"
      ],
      organization: [
        "Identifier le public et les objectifs",
        "Définir la thématique et le format (Personnalisable)",
        "Adapter le contenu au contexte",
        "Établir un devis personnalisé"
      ],
      pricing: "Devis sur demande après échange préalable"
    },
    image: "/images/pexels-olly-3764164.jpg"
  },
  {
    id: "sportifs",
    title: "Sportifs - Préparation Mentale",
    shortDescription: "Un accompagnement mental pour performer quand ça compte vraiment.",
    pitch: "Au plus haut niveau, la différence ne se joue plus uniquement sur la condition physique ou la technique. Elle se joue dans la capacité à rester lucide sous pression. J'accompagne des sportifs engagés et exigeants, souhaitant optimiser leur mental avec la même rigueur que leur préparation physique.",
    whyChoose: [
      "Approche individualisée, orientée performance réelle",
      "Travail en profondeur sur les mécanismes mentaux clés",
      "Outils concrets, directement transférables en compétition",
      "Accompagnement rigoureux, structuré et confidentiel",
      "Adapté à votre discipline, votre niveau et vos objectifs"
    ],
    themesTitle: "Axes de travail principaux",
    themes: [
      "Installer une confiance intérieure stable, indépendante du résultat",
      "Maîtriser la pression de l'enjeu et des attentes",
      "Accéder à un état de concentration optimal dans les moments clés",
      "Réguler les émotions à haute intensité",
      "Lever les freins mentaux invisibles qui limitent la performance",
      "Aborder les compétitions avec calme, clarté et détermination",
      "Performer avec fluidité, constance et précision"
    ],
    infosPratiques: {
      format: [
        "Accompagnement individuel ou collectif",
        "Séances en visio, en cabinet ou sur site",
        "Diagnostic mental initial (tests et analyse)",
        "Définition d'une stratégie personnalisée",
        "Projection du nombre de séances en fonction de la problématique"
      ],
      audience: [
        "Sportifs compétiteurs",
        "Sportifs amateurs engagés",
        "Sportifs en préparation d'objectifs majeurs",
        "Sportifs confrontés à des problématiques de pression",
        "Athlètes souhaitant structurer leur préparation mentale sur la durée"
      ],
      organization: [
        "Analyser votre situation et vos enjeux",
        "Identifier les axes de travail prioritaires",
        "Évaluer la pertinence d'un accompagnement",
        "Définir un cadre adapté à votre calendrier sportif"
      ],
      pricing: "Séance individuelle : 75 euros / Séance collective : sur devis"
    },
    image: "/images/IMG_7764.jpg"
  },
  {
    id: "jeunesse",
    title: "Jeunesse (10 à 18 ans)",
    shortDescription: "Construire un mental solide dès aujourd'hui.",
    pitch: "L'enfance et l'adolescence sont des périodes clés. La préparation mentale permet de poser des bases solides pour évoluer avec confiance, sérénité et stabilité, dans le respect du rythme et de la maturité de chacun.",
    whyChoose: [
      "Approche progressive, adaptée à l'âge et à la maturité",
      "Cadre sécurisant et respectueux",
      "Outils simples, concrets et transférables au quotidien",
      "Travail sur la confiance, les émotions et la concentration",
      "Implication des parents lorsque cela est pertinent"
    ],
    themesTitle: "Axes de travail principaux",
    themes: [
      "Développer la confiance en soi",
      "Apprendre à gérer le stress et les émotions",
      "Améliorer la concentration et l'attention",
      "Renforcer l'estime personnelle",
      "Aborder examens, compétitions ou prises de parole avec sérénité",
      "Construire des repères mentaux durables"
    ],
    infosPratiques: {
      format: [
        "Séances individuelles de préparation mentale",
        "En visio ou en cabinet",
        "Outils adaptés à l'âge et au niveau de maturité",
        "Cadre clair et sécurisant",
        "Compte rendu à chaque fin de séance pour les parents"
      ],
      audience: [
        "Enfants et adolescents de 10 à 18 ans",
        "Jeunes sportifs ou élèves confrontés au stress",
        "Jeunes manquant de confiance ou de concentration",
        "Préparation aux examens, compétitions ou échéances importantes",
        "Parents souhaitant accompagner leur enfant"
      ],
      organization: [
        "Analyser la situation du jeune",
        "Identifier les enjeux prioritaires",
        "Définir un cadre d'accompagnement adapté",
        "Répondre aux questions des parents"
      ],
      pricing: "Séance individuelle : 75 euros"
    },
    image: "/images/WhatsApp-Image-2024-09-26-a-19.49.40_da4b4fa9.jpg"
  },
  {
    id: "etudiants",
    title: "Étudiants",
    shortDescription: "Cultiver l'excellence mentale pour réussir avec justesse.",
    pitch: "Les études supérieures exigent bien plus que des compétences académiques. La préparation mentale accompagne les étudiants souhaitant optimiser leurs capacités, développer une stabilité émotionnelle et traverser leur parcours universitaire avec clarté.",
    whyChoose: [
      "Approche structurée, adaptée aux exigences académiques",
      "Outils concrets, applicables immédiatement",
      "Travail sur la confiance, la concentration et la gestion du stress",
      "Accompagnement individualisé et confidentiel",
      "Alignement entre performance académique et équilibre personnel"
    ],
    themesTitle: "Axes de travail principaux",
    themes: [
      "Renforcer une confiance solide face aux exigences académiques",
      "Gérer le stress des examens, concours et échéances importantes",
      "Développer la concentration, la mémorisation et la clarté mentale",
      "Améliorer l'organisation mentale et la gestion de la charge de travail",
      "Réguler les émotions liées à la pression et aux attentes",
      "Aborder les décisions d'orientation avec discernement",
      "Préserver un équilibre personnel durable"
    ],
    infosPratiques: {
      format: [
        "Séances individuelles de préparation mentale",
        "En visio ou en cabinet",
        "Outils adaptés au monde académique et aux profils étudiants",
        "Méthodes concrètes, transférables immédiatement",
        "Progression structurée et adaptée au rythme universitaire"
      ],
      audience: [
        "Étudiants en études supérieures",
        "Étudiants préparant examens, concours ou sélections",
        "Étudiants confrontés au stress, au manque de confiance",
        "Étudiants en questionnement d'orientation",
        "Étudiants souhaitant concilier performance et équilibre"
      ],
      organization: [
        "Analyser la situation et les enjeux",
        "Identifier les axes de travail prioritaires",
        "Définir un cadre d'accompagnement adapté",
        "Répondre aux questions éventuelles"
      ],
      pricing: "Séance individuelle : 75 euros"
    },
    image: "/images/WhatsApp-Image-2024-02-28-at-22.07.42-1.jpeg"
  },
  {
    id: "professionnels",
    title: "Professionnels",
    shortDescription: "Maîtriser son mental pour diriger avec clarté et impact.",
    pitch: "La préparation mentale devient un levier stratégique pour les professionnels confrontés à la pression, à la responsabilité et à l'intensité décisionnelle. J'accompagne dirigeants, entrepreneurs et cadres dans une démarche d'optimisation mentale.",
    whyChoose: [
      "Approche stratégique, orientée lucidité et efficacité",
      "Outils mentaux concrets, applicables immédiatement",
      "Travail en profondeur sur la posture de leadership",
      "Accompagnement confidentiel et sur mesure",
      "Alignement entre performance professionnelle et équilibre personnel"
    ],
    themesTitle: "Axes de travail principaux",
    themes: [
      "Renforcer une posture de leadership claire et stable",
      "Gérer la pression, le stress et la charge décisionnelle",
      "Développer une clarté mentale constante",
      "Optimiser la concentration et la performance cognitive",
      "Gagner en assertivité, en présence et en impact",
      "Préserver l'équilibre personnel tout en maintenant un haut niveau d'exigence"
    ],
    infosPratiques: {
      format: [
        "Accompagnement individuel",
        "Séances en visio, en cabinet ou sur site",
        "Diagnostic mental initial",
        "Définition d'une stratégie personnalisée",
        "Projection du nombre de séances en fonction des objectifs"
      ],
      audience: [
        "Dirigeants et chefs d'entreprise",
        "Entrepreneurs",
        "Cadres et managers",
        "Professions à haute responsabilité",
        "Décideurs évoluant dans des environnements complexes"
      ],
      organization: [
        "Analyser votre situation professionnelle",
        "Identifier vos enjeux prioritaires",
        "Évaluer la pertinence d'un accompagnement",
        "Définir un cadre adapté à votre agenda"
      ],
      pricing: "Devis sur demande après échange préalable"
    },
    image: "/images/379636872_1045656246459816_803858230480871231_n.jpg"
  }
];