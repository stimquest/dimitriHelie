import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'diploma',
  title: 'Diplôme / Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du diplôme',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Année / Promotion',
      type: 'string',
      description: 'Optionnel. Ex: "Promotion 2021/2022"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Scan / photo du diplôme',
      type: 'image',
      options: { hotspot: true },
      description: 'Image JPG ou PNG du diplôme, affichée dans une modale au clic.',
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
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
    select: { title: 'title', subtitle: 'institution' },
  },
})
