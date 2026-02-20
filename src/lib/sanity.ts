import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

// ─────────────────────────────────────────────────────────────────────────────
// Ce client s'exécute UNIQUEMENT au moment du build (côté serveur Astro).
// Il n'est jamais inclus dans le bundle JS envoyé au navigateur.
// ─────────────────────────────────────────────────────────────────────────────
export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID ?? '0iqdyim9',
  dataset: import.meta.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01', // date fixe — ne jamais utiliser 'latest'
  useCdn: true,             // CDN en lecture seule, parfait pour le build statique
  // token uniquement si le dataset est privé :
  ...(import.meta.env.SANITY_TOKEN ? { token: import.meta.env.SANITY_TOKEN } : {}),
})

// ─────────────────────────────────────────────────────────────────────────────
// Builder d'URL d'image — applique le recadrage (hotspot/crop) défini dans Sanity
// ─────────────────────────────────────────────────────────────────────────────
const builder = createImageUrlBuilder(sanityClient)

export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  _type: 'image'
}

export function urlFor(image: SanityImage | { asset: { url: string } }) {
  const asset = image.asset
  if ('url' in asset && typeof asset.url === 'string') {
    // Fallback URL directe — proxy chaînable pour rester compatible avec .fit().width().url()
    const u = asset.url
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const passthrough: any = { url: () => u, fit: () => passthrough, width: () => passthrough, height: () => passthrough, auto: () => passthrough }
    return passthrough
  }
  return builder.image(image as SanityImage)
}
