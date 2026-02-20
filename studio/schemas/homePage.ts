import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: "Page d'accueil",
  type: 'document',

  groups: [
    { name: 'hero',     title: '🏠 Hero' },
    { name: 'about',    title: '👤 À propos' },
    { name: 'services', title: '🗂️ Section Services' },
  ],

  fields: [
    // ── HERO ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Badge (petit texte au-dessus du titre)',
      type: 'string',
      group: 'hero',
      description: 'Ex: "Performance & Bien-être"',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Titre — ligne 1 (texte normal)',
      type: 'string',
      group: 'hero',
      description: 'Ex: "Libérez votre"',
    }),
    defineField({
      name: 'heroTitleGradient',
      title: 'Titre — ligne 2 (texte en dégradé)',
      type: 'string',
      group: 'hero',
      description: 'Ex: "plein potentiel."',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre / description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroCta1Text',
      title: 'Bouton 1 — texte',
      type: 'string',
      group: 'hero',
      description: 'Ex: "Prendre un RDV"',
    }),
    defineField({
      name: 'heroCta1Url',
      title: 'Bouton 1 — lien (Calendly)',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'heroCta2Text',
      title: 'Bouton 2 — texte',
      type: 'string',
      group: 'hero',
      description: 'Ex: "Découvrir mes services"',
    }),

    // ── À PROPOS ──────────────────────────────────────────────────────────────
    defineField({
      name: 'aboutEyebrow',
      title: 'Surtitre (petit texte au-dessus)',
      type: 'string',
      group: 'about',
      description: 'Ex: "Mon parcours"',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Titre — partie normale',
      type: 'string',
      group: 'about',
      description: 'Ex: "De l\'ingénieur R&D à la"',
    }),
    defineField({
      name: 'aboutTitleGradient',
      title: 'Titre — partie en dégradé',
      type: 'string',
      group: 'about',
      description: 'Ex: "performance humaine."',
    }),
    defineField({
      name: 'aboutQuote',
      title: 'Citation mise en avant',
      type: 'text',
      rows: 2,
      group: 'about',
    }),
    defineField({
      name: 'aboutBody',
      title: 'Texte de présentation',
      type: 'array',
      group: 'about',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }], marks: { decorators: [{ title: 'Gras', value: 'strong' }, { title: 'Italique', value: 'em' }] } }],
      description: 'Paragraphes du texte de présentation. Appuyez sur Entrée pour un nouveau paragraphe.',
    }),

    // ── SECTION SERVICES ──────────────────────────────────────────────────────
    defineField({
      name: 'servicesBannerBadge',
      title: 'Bannière — badge',
      type: 'string',
      group: 'services',
      description: 'Ex: "Offre d\'accompagnement"',
    }),
    defineField({
      name: 'servicesBannerTitle',
      title: 'Bannière — titre',
      type: 'string',
      group: 'services',
      description: 'Ex: "Des solutions adaptées à vos enjeux de performance"',
    }),
    defineField({
      name: 'servicesBannerSubtitle',
      title: 'Bannière — sous-titre',
      type: 'text',
      rows: 2,
      group: 'services',
    }),
    defineField({
      name: 'publicSectionTitle',
      title: 'Section "par public" — titre',
      type: 'string',
      group: 'services',
      description: 'Ex: "Accompagnement par public"',
    }),
    defineField({
      name: 'publicSectionSubtitle',
      title: 'Section "par public" — sous-titre',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'formatsSectionTitle',
      title: 'Section "formats" — titre',
      type: 'string',
      group: 'services',
      description: 'Ex: "Formats d\'intervention"',
    }),
    defineField({
      name: 'formatsSectionSubtitle',
      title: 'Section "formats" — sous-titre',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'reviewsSectionTitle',
      title: 'Témoignages — titre de section',
      type: 'string',
      group: 'services',
      description: 'Ex: "Témoignages de mes coachés"',
    }),
    defineField({
      name: 'partnersSectionTitle',
      title: 'Partenaires — titre de section',
      type: 'string',
      group: 'services',
      description: 'Ex: "Ils me font confiance"',
    }),
  ],

  preview: {
    prepare: () => ({ title: "Page d'accueil" }),
  },
})
