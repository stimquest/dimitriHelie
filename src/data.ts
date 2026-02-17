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

// Données des articles de blog (utilisées par src/pages/blog/[slug].astro)
// NOTE: définies dans un module TS pour rester accessibles au scope module (getStaticPaths)
export const blogPosts = {
	"preparation-mentale-sportifs": {
		title: "La préparation mentale pour les sportifs : les clés de la performance",
		excerpt:
			"Découvrez comment la préparation mentale peut transformer votre approche de la compétition et vous aider à atteindre vos objectifs.",
		date: "2024-01-15",
		image: "/images/IMG_7764.jpg",
		category: "Sport",
		author: "Dimitri Helie",
		content: `
			<p>La préparation mentale est devenue un élément incontournable pour tout sportif souhaitant atteindre son plein potentiel. Au-delà de l'entraînement physique et technique, c'est le mental qui fait souvent la différence au moment crucial.</p>
			
			<h2>Pourquoi la préparation mentale est essentielle ?</h2>
			<p>Que vous soyez un athlète de haut niveau ou un sportif amateur passionné, votre mental influence directement vos performances. La capacité à rester concentré sous pression, à gérer le stress de la compétition et à maintenir une confiance inébranlable sont des compétences qui s'apprennent et se développent.</p>
			
			<h2>Les piliers de la préparation mentale</h2>
			<h3>1. La gestion du stress et des émotions</h3>
			<p>Apprendre à reconnaître et à canaliser ses émotions est la première étape. Le stress n'est pas votre ennemi - c'est un signal que vous pouvez apprendre à utiliser à votre avantage.</p>
			
			<h3>2. La concentration et l'attention</h3>
			<p>Développer sa capacité à rester focalisé sur l'essentiel, à ignorer les distractions et à maintenir une attention optimale tout au long de la performance.</p>
			
			<h3>3. La confiance en soi</h3>
			<p>Construire une confiance solide, basée sur des fondations réelles et non sur des illusions. Une confiance qui résiste aux échecs et aux doutes.</p>
			
			<h3>4. La motivation et les objectifs</h3>
			<p>Définir des objectifs clairs et mobilisateurs, et maintenir une motivation durable tout au long de votre parcours.</p>
			
			<h2>Comment intégrer la préparation mentale ?</h2>
			<p>La préparation mentale se travaille au quotidien, pas seulement avant les compétitions. C'est un processus progressif qui demande régularité et engagement. Voici quelques conseils pour commencer :</p>
			
			<ul>
				<li>Accordez 10 à 15 minutes par jour à des exercices de préparation mentale</li>
				<li>Tenez un journal de vos performances et de vos états d'esprit</li>
				<li>Travaillez avec un professionnel pour personnaliser votre approche</li>
				<li>Intégrez ces pratiques dans votre routine d'entraînement</li>
			</ul>
			
			<p>La préparation mentale n'est pas un luxe réservé aux élites - c'est un outil accessible à tous ceux qui souhaitent progresser et se dépasser.</p>
		`
	},
	"gerer-stress-performance": {
		title: "Comment gérer le stress pour optimiser sa performance",
		excerpt:
			"Le stress n'est pas toujours votre ennemi. Apprenez à le canaliser pour en faire un allié de votre performance.",
		date: "2024-01-08",
		image: "/images/pexels-olly-3764164.jpg",
		category: "Performance",
		author: "Dimitri Helie",
		content: `
			<p>Le stress est souvent perçu comme un obstacle à la performance. Pourtant, lorsqu'il est bien compris et bien géré, il peut devenir un véritable allié. La clé réside dans notre capacité à le reconnaître, l'accepter et le canaliser.</p>
			
			<h2>Comprendre le stress</h2>
			<p>Le stress est une réponse naturelle de notre organisme face à un défi. Il prépare notre corps et notre esprit à l'action. Le problème n'est pas le stress lui-même, mais notre relation avec lui.</p>
			
			<h2>Le bon stress vs le mauvais stress</h2>
			<p>Il existe une forme positive de stress, l'eustress, qui nous motive et nous aide à nous dépasser. Et une forme négative, le distress, qui nous paralyse et nous épuise. L'objectif n'est pas d'éliminer le stress, mais de le maintenir dans la zone optimale.</p>
			
			<h2>Techniques de gestion du stress</h2>
			<h3>La respiration</h3>
			<p>Une respiration calme et profonde active le système parasympathique, réduisant naturellement l'anxiété. Pratiquez la cohérence cardiaque : 5 secondes d'inspiration, 5 secondes d'expiration.</p>
			
			<h3>La visualisation</h3>
			<p>Imaginez-vous en train de réussir, de gérer efficacement les situations stressantes. Votre cerveau ne fait pas la différence entre une expérience vécue et une expérience imaginée.</p>
			
			<h3>Le dialogue interne</h3>
			<p>Remplacez les pensées négatives par des affirmations constructives. "Je suis prêt" plutôt que "Je vais échouer".</p>
			
			<h2>Mettre en pratique</h2>
			<p>La prochaine fois que vous ressentez du stress avant une échéance importante, rappelez-vous : ce stress est là pour vous aider. Accueillez-le, remerciez-le, et utilisez cette énergie pour vous concentrer sur l'action.</p>
		`
	},
	"confiance-en-soi-athletes": {
		title: "Construire une confiance solide : le pilier de la réussite",
		excerpt:
			"La confiance en soi ne s'improvise pas. Voici les étapes clés pour développer une confiance durable et résiliente.",
		date: "2023-12-20",
		image: "/images/voile-visuel.jpeg",
		category: "Développement personnel",
		author: "Dimitri Helie",
		content: `
			<p>La confiance en soi est souvent citée comme l'un des facteurs clés de la réussite. Mais qu'est-ce que la confiance vraiment ? Et comment la construire de manière solide et durable ?</p>
			
			<h2>Qu'est-ce que la confiance en soi ?</h2>
			<p>La confiance en soi n'est pas une arrogance ni une illusion. C'est une connaissance réaliste de ses capacités, combinée à la conviction que l'on peut faire face aux défis qui se présentent.</p>
			
			<h2>Les fondations de la confiance</h2>
			<h3>1. La connaissance de soi</h3>
			<p>Connaître ses forces, ses faiblesses, ses valeurs et ses limites. Une confiance authentique repose sur une vision claire et honnête de soi-même.</p>
			
			<h3>2. L'expérience accumulée</h3>
			<p>Chaque succès, même mineur, renforce la confiance. Célébrez vos victoires et tirez des leçons de vos échecs sans vous laisser définir par eux.</p>
			
			<h3>3. La préparation</h3>
			<p>La confiance vient aussi de la préparation. Plus vous êtes préparé, plus vous vous sentez capable de faire face à l'imprévu.</p>
			
			<h3>4. L'entourage</h3>
			<p>Entourez-vous de personnes qui vous soutiennent et vous challengent positivement. Évitez ceux qui sapent votre confiance.</p>
			
			<h2>Exercices pratiques</h2>
			<ul>
				<li>Tenez un "journal des victoires" : notez chaque jour 3 choses que vous avez bien faites</li>
				<li>Fixez-vous des objectifs progressifs et atteignables</li>
				<li>Pratiquez l'auto-compassion : traitez-vous comme vous traiteriez votre meilleur ami</li>
				<li>Visualisez vos succès passés avant un défi important</li>
			</ul>
			
			<h2>La confiance, un muscle à entraîner</h2>
			<p>La confiance n'est pas un don, c'est une compétence qui se travaille. Chaque jour offre des opportunités de la renforcer. Commencez petit, soyez patient, et voyez votre confiance grandir progressivement.</p>
		`
	}
} as const;