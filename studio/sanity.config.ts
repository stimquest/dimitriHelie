import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// ─────────────────────────────────────────────────────────────────────────────
// Remplacez VOTRE_PROJECT_ID par le projectId généré lors de la création
// du projet sur sanity.io/manage
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  name: 'default',
  title: 'Dimitri Helie — Contenu',

  projectId: '0iqdyim9',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem().title('Articles de blog').schemaType('blogPost').child(S.documentTypeList('blogPost')),
            S.listItem().title('Services').schemaType('service').child(S.documentTypeList('service')),
            S.listItem().title('Partenaires').schemaType('partner').child(S.documentTypeList('partner')),
            S.listItem().title('Diplômes & Certifications').schemaType('diploma').child(S.documentTypeList('diploma')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
