import React from 'react'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

interface Props {
  value: PortableTextBlock[]
}

// Les styles visuels (taille, couleurs, espacement) sont gérés par les
// classes Tailwind `prose` sur l'élément <article> parent dans [slug].astro.
// Ce composant se contente de mapper les blocs Sanity vers les bons éléments HTML.
const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
    h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul>{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

const PortableTextContent: React.FC<Props> = ({ value }) => {
  if (!value || value.length === 0) return null
  return <PortableText value={value} components={components as any} />
}

export default PortableTextContent
