import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Témoignages',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rôle / Titre',
      type: 'string',
      description: 'Ex: "Athlète Haut Niveau", "Manager", "Dirigeant"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Témoignage',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      description: '1 = premier affiché',
      validation: Rule => Rule.required().integer().positive(),
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
    select: { title: 'name', subtitle: 'role' },
  },
})
