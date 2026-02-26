import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { schemaTypes } from './schemas'

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
            // Singleton — page d'accueil (un seul document, accès direct)
            S.listItem()
              .title("Page d'accueil")
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
                  .title("Page d'accueil")
              ),

            S.divider(),

            S.listItem().title('Services').schemaType('service').child(S.documentTypeList('service')),
            S.listItem().title('Témoignages').schemaType('review').child(S.documentTypeList('review')),
            S.listItem().title('Articles de blog').schemaType('blogPost').child(S.documentTypeList('blogPost')),
            S.listItem().title('Partenaires').schemaType('partner').child(S.documentTypeList('partner')),
            S.listItem().title('Diplômes & Certifications').schemaType('diploma').child(S.documentTypeList('diploma')),
          ]),
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
