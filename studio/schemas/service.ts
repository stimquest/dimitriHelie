import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceId',
      title: 'Identifiant (slug)',
      type: 'slug',
      description: 'Ex: flash-mental, ateliers, conferences. Ne pas modifier après création.',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      description: '1 = premier affiché',
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Description courte',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pitch',
      title: 'Pitch (paragraphe accrocheur)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'whyChoose',
      title: 'Pourquoi choisir ce service',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des arguments. Cliquez + pour ajouter.',
    }),
    defineField({
      name: 'themesTitle',
      title: 'Titre de la section thèmes',
      type: 'string',
      description: 'Ex: "Modules les plus demandés" ou "Axes de travail principaux"',
    }),
    defineField({
      name: 'themes',
      title: 'Thèmes / Axes de travail',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'infosPratiques',
      title: 'Infos Pratiques',
      type: 'object',
      fields: [
        defineField({
          name: 'format',
          title: 'Format',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'audience',
          title: 'Pour qui ?',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'organization',
          title: 'Organisation / Étapes',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'pricing',
          title: 'Tarification',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'image', subtitle: 'shortDescription' },
  },
})
