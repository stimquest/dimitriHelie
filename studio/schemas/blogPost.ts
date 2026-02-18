import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Article de Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Généré automatiquement depuis le titre. Ex: preparation-mentale-sportifs',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, ''),
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de publication',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Sport', value: 'Sport' },
          { title: 'Performance', value: 'Performance' },
          { title: 'Développement personnel', value: 'Développement personnel' },
          { title: 'Coaching', value: 'Coaching' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Dimitri Helie',
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      description: 'Court résumé affiché dans la liste des articles (1-2 phrases).',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Paragraphe', value: 'normal' },
            { title: 'Titre H2', value: 'h2' },
            { title: 'Titre H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Gras', value: 'strong' },
              { title: 'Italique', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                ],
              },
            ],
          },
          lists: [
            { title: 'Liste à puces', value: 'bullet' },
            { title: 'Liste numérotée', value: 'number' },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Date (récent en premier)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'image' },
  },
})
