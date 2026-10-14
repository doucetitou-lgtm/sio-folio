/**
 * Fichier de personnalisation du portfolio.
 * Modifiez uniquement ce fichier pour adapter le contenu à votre profil.
 */

export const profile = {
  firstName: 'Camille',
  lastName: 'Martin',
  option: 'SLAM' as 'SLAM' | 'SISR',
  school: 'Lycée Jean Moulin',
  session: 'Session 2027',
  tagline:
    'Je conçois des applications web et métier fiables, sécurisées et centrées sur les utilisateurs. Objectif : intégrer une licence professionnelle en développement puis évoluer vers un poste de développeur full-stack.',
  about:
    "Étudiant(e) en deuxième année de BTS SIO, option SLAM, je me passionne pour le développement d'applications et la qualité logicielle. Rigoureux(se) et curieux(se), j'aime comprendre les besoins métier pour proposer des solutions simples et maintenables. Mes stages m'ont permis de travailler en équipe agile sur des projets réels, du recueil des besoins jusqu'à la mise en production.",
  location: 'Lyon, France',
  email: 'camille.martin@exemple.fr',
  linkedin: 'https://www.linkedin.com/in/camille-martin',
  github: 'https://github.com/camille-martin',
  cvUrl: '/cv.pdf',
  highlights: [
    { value: '2', label: 'stages en entreprise' },
    { value: '8+', label: 'projets réalisés' },
    { value: '3', label: 'certifications' },
  ],
}

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#competences', label: 'Compétences (E5)' },
  { href: '#veille', label: 'Veille' },
  { href: '#contact', label: 'Contact' },
]

export type TimelineItem = {
  period: string
  title: string
  organization: string
  type: 'formation' | 'stage' | 'experience'
  description: string
}

export const timeline: TimelineItem[] = [
  {
    period: '2025 — 2027',
    title: 'BTS SIO — option SLAM',
    organization: 'Lycée Jean Moulin, Lyon',
    type: 'formation',
    description:
      'Développement d’applications, bases de données, cybersécurité des services informatiques et gestion de projet.',
  },
  {
    period: 'Janv. — Fév. 2027',
    title: 'Stage de 2e année — Développeur web',
    organization: 'NovaTech Solutions',
    type: 'stage',
    description:
      'Développement d’un module de gestion des congés en Laravel / Vue.js, intégré à l’intranet de l’entreprise.',
  },
  {
    period: 'Mai — Juin 2026',
    title: 'Stage de 1re année — Support & développement',
    organization: 'Mairie de Villeurbanne — DSI',
    type: 'stage',
    description:
      'Refonte d’une application interne de gestion de parc et traitement des tickets d’assistance via GLPI.',
  },
  {
    period: 'Été 2025',
    title: 'Job d’été — Assistant informatique',
    organization: 'Association Numérique Pour Tous',
    type: 'experience',
    description:
      'Accompagnement des usagers, installation de postes et animation d’ateliers d’initiation au numérique.',
  },
  {
    period: '2022 — 2025',
    title: 'Baccalauréat STI2D — spécialité SIN',
    organization: 'Lycée Ampère, Lyon',
    type: 'formation',
    description: 'Mention Bien. Projet de fin d’année : station météo connectée (Arduino + application web).',
  },
]

/** Les 6 compétences du bloc 1 évaluées à l’épreuve E5 (référentiel BTS SIO). */
export const competencies = [
  { id: 'C1', short: 'Patrimoine', label: 'Gérer le patrimoine informatique' },
  {
    id: 'C2',
    short: 'Incidents',
    label: 'Répondre aux incidents et aux demandes d’assistance et d’évolution',
  },
  { id: 'C3', short: 'Présence en ligne', label: 'Développer la présence en ligne de l’organisation' },
  { id: 'C4', short: 'Mode projet', label: 'Travailler en mode projet' },
  {
    id: 'C5',
    short: 'Mise à dispo.',
    label: 'Mettre à disposition des utilisateurs un service informatique',
  },
  { id: 'C6', short: 'Dév. pro.', label: 'Organiser son développement professionnel' },
] as const

export type CompetencyId = (typeof competencies)[number]['id']

export type ProjectCategory = 'Stages' | 'AP/TP' | 'Projets personnels'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  context: string
  description: string
  details: string[]
  technologies: string[]
  competencies: CompetencyId[]
  codeUrl?: string
  demoUrl?: string
  proofUrl?: string
}

export const projectCategories: ProjectCategory[] = ['Stages', 'AP/TP', 'Projets personnels']

export const projects: Project[] = [
  {
    id: 'gestion-conges',
    title: 'Module de gestion des congés',
    category: 'Stages',
    context: 'Stage 2e année — NovaTech Solutions',
    description:
      'Application intranet permettant aux salariés de poser leurs congés et aux managers de les valider.',
    details: [
      'Analyse des besoins avec les RH et rédaction des user stories',
      'Développement d’une API REST Laravel et d’une interface Vue.js',
      'Gestion des rôles et des droits d’accès (salarié, manager, RH)',
      'Tests unitaires PHPUnit et déploiement sur l’environnement de recette',
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Git'],
    competencies: ['C3', 'C4', 'C5'],
    codeUrl: 'https://github.com/camille-martin/gestion-conges',
    proofUrl: '/preuves/gestion-conges.pdf',
  },
  {
    id: 'parc-glpi',
    title: 'Refonte de l’outil de gestion de parc',
    category: 'Stages',
    context: 'Stage 1re année — Mairie de Villeurbanne',
    description:
      'Modernisation d’une application interne de suivi du matériel et traitement des demandes d’assistance.',
    details: [
      'Inventaire du parc et synchronisation avec GLPI',
      'Traitement et documentation de tickets d’incidents',
      'Développement de tableaux de bord de suivi du matériel',
    ],
    technologies: ['PHP', 'GLPI', 'MariaDB', 'Bootstrap'],
    competencies: ['C1', 'C2', 'C5'],
    proofUrl: '/preuves/parc-glpi.pdf',
  },
  {
    id: 'gsb-frais',
    title: 'GSB — Gestion des frais',
    category: 'AP/TP',
    context: 'Atelier de professionnalisation — 1re année',
    description:
      'Application web de saisie et de suivi des notes de frais des visiteurs médicaux du laboratoire GSB.',
    details: [
      'Modélisation de la base de données (MCD / MLD)',
      'Architecture MVC en PHP et requêtes préparées PDO',
      'Sécurisation de l’authentification et hachage des mots de passe',
    ],
    technologies: ['PHP', 'MVC', 'MySQL', 'UML'],
    competencies: ['C3', 'C4', 'C5'],
    codeUrl: 'https://github.com/camille-martin/gsb-frais',
    demoUrl: 'https://gsb-frais.exemple.fr',
    proofUrl: '/preuves/gsb-frais.pdf',
  },
  {
    id: 'mediatek',
    title: 'MediaTek86 — Application lourde',
    category: 'AP/TP',
    context: 'Atelier de professionnalisation — 2e année',
    description:
      'Application de bureau C# pour la gestion des documents et des abonnements d’un réseau de médiathèques.',
    details: [
      'Développement en C# / .NET avec le pattern MVC',
      'Accès aux données via une API REST et gestion des erreurs',
      'Rédaction de la documentation technique et utilisateur',
    ],
    technologies: ['C#', '.NET', 'API REST', 'MySQL'],
    competencies: ['C2', 'C4', 'C5'],
    codeUrl: 'https://github.com/camille-martin/mediatek86',
    proofUrl: '/preuves/mediatek86.pdf',
  },
  {
    id: 'portfolio',
    title: 'E-Portfolio professionnel',
    category: 'Projets personnels',
    context: 'Projet personnel',
    description:
      'Conception et déploiement de ce portfolio responsive avec thème clair/sombre et tableau de synthèse E5.',
    details: [
      'Maquettage et charte graphique accessible',
      'Développement React / Next.js et Tailwind CSS',
      'Déploiement continu sur Vercel depuis GitHub',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    competencies: ['C3', 'C6'],
    codeUrl: 'https://github.com/camille-martin/portfolio',
    demoUrl: 'https://camille-martin.vercel.app',
  },
  {
    id: 'bot-discord',
    title: 'Bot Discord de veille',
    category: 'Projets personnels',
    context: 'Projet personnel',
    description:
      'Bot qui agrège automatiquement les flux RSS de ma veille technologique et les publie sur un serveur.',
    details: [
      'Lecture et filtrage de flux RSS par mots-clés',
      'Planification des publications et hébergement sur un VPS',
      'Journalisation et supervision des erreurs',
    ],
    technologies: ['Node.js', 'TypeScript', 'Discord.js', 'Docker'],
    competencies: ['C1', 'C6'],
    codeUrl: 'https://github.com/camille-martin/bot-veille',
  },
]

export const veille = {
  topic: 'L’intelligence artificielle au service du développement logiciel',
  summary:
    'Comment les assistants de code basés sur l’IA transforment-ils le métier de développeur, et quels enjeux posent-ils en termes de qualité, de sécurité et de propriété intellectuelle ?',
  methodology: [
    { step: 'Collecter', text: 'Abonnement à des flux RSS, newsletters et alertes Google ciblées.' },
    { step: 'Trier', text: 'Agrégation dans Feedly et classement par thématique et fiabilité.' },
    { step: 'Analyser', text: 'Lecture critique, recoupement des sources et prise de notes dans Notion.' },
    { step: 'Partager', text: 'Synthèse mensuelle publiée sur ce portfolio et sur LinkedIn.' },
  ],
  sources: [
    { name: 'Le Monde Informatique', type: 'Presse spécialisée' },
    { name: 'The GitHub Blog', type: 'Blog éditeur' },
    { name: 'ANSSI — Publications', type: 'Institutionnel' },
    { name: 'Grafikart', type: 'Vidéo / tutoriels' },
    { name: 'Hacker News', type: 'Agrégateur' },
    { name: 'CNIL — Actualités', type: 'Institutionnel' },
  ],
}

export const certifications = [
  {
    name: 'PIX — Compétences numériques',
    issuer: 'PIX',
    date: '2026',
    score: '620 pix',
    url: 'https://pix.fr',
  },
  {
    name: 'MOOC SecNumacadémie',
    issuer: 'ANSSI',
    date: '2026',
    score: 'Validé',
    url: 'https://secnumacademie.gouv.fr',
  },
  {
    name: 'Atelier RGPD',
    issuer: 'CNIL',
    date: '2025',
    score: 'Validé',
    url: 'https://atelier-rgpd.cnil.fr',
  },
  {
    name: 'CCNA 1 — Introduction aux réseaux',
    issuer: 'Cisco NetAcad',
    date: 'En cours',
    score: '—',
    url: 'https://www.netacad.com',
  },
]
