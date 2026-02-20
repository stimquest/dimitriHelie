import { sanityClient, urlFor, type SanityImage } from './sanity'
import type { ServiceModule, Partner, Diploma, Review, HomePage } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_QUERY = `
  *[_type == "service"] | order(order asc) {
    "id": serviceId.current,
    title,
    shortDescription,
    pitch,
    whyChoose,
    themesTitle,
    themes,
    infosPratiques,
    icon,
    image
  }
`

interface ServiceRaw {
  id: string
  title: string
  shortDescription: string
  pitch: string
  whyChoose: string[]
  themesTitle: string
  themes: string[]
  infosPratiques: ServiceModule['infosPratiques']
  icon?: string
  image: SanityImage | null
}

export async function fetchServices(): Promise<ServiceModule[]> {
  const raw: ServiceRaw[] = await sanityClient.fetch(SERVICE_QUERY)
  return raw.map(s => ({
    ...s,
    icon: s.icon ?? null,
    image: s.image ? urlFor(s.image).url() : null
  }))
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOG
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogListItem {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  image: string | null
}

export interface BlogPost extends BlogListItem {
  content: unknown[] // Portable Text blocks
}

const BLOG_LIST_QUERY = `
  *[_type == "blogPost"] | order(date desc) {
    "slug": slug.current,
    title,
    excerpt,
    date,
    category,
    author,
    image
  }
`

const BLOG_SLUGS_QUERY = `
  *[_type == "blogPost"] { "slug": slug.current }
`

const BLOG_POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    excerpt,
    date,
    category,
    author,
    image,
    content
  }
`

interface BlogRaw {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  image: SanityImage | null
}

export async function fetchBlogList(): Promise<BlogListItem[]> {
  const raw: BlogRaw[] = await sanityClient.fetch(BLOG_LIST_QUERY)
  return raw.map(b => ({
    ...b,
    image: b.image ? urlFor(b.image).url() : null
  }))
}

export async function fetchBlogSlugs(): Promise<string[]> {
  const results: Array<{ slug: string }> = await sanityClient.fetch(BLOG_SLUGS_QUERY)
  return results.map(r => r.slug)
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const raw: BlogRaw & { content: unknown[] } | null = await sanityClient.fetch(BLOG_POST_QUERY, { slug })
  if (!raw) return null
  return {
    ...raw,
    image: raw.image ? urlFor(raw.image).url() : null
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PARTNERS
// ─────────────────────────────────────────────────────────────────────────────

const PARTNER_QUERY = `
  *[_type == "partner"] | order(order asc) {
    name,
    logo
  }
`

interface PartnerRaw {
  name: string
  logo: SanityImage | null
}

export async function fetchPartners(): Promise<Partner[]> {
  const raw: PartnerRaw[] = await sanityClient.fetch(PARTNER_QUERY)
  return raw.map(p => ({
    name: p.name,
    logoUrl: p.logo ? urlFor(p.logo).url() : null
  }))
}

// ─────────────────────────────────────────────────────────────────────────────
// DIPLOMAS
// ─────────────────────────────────────────────────────────────────────────────

const DIPLOMA_QUERY = `
  *[_type == "diploma"] | order(order asc) {
    title,
    institution,
    year,
    description,
    image
  }
`

interface DiplomaRaw {
  title: string
  institution: string
  year?: string
  description: string
  image: SanityImage | null
}

export async function fetchDiplomas(): Promise<Diploma[]> {
  const raw: DiplomaRaw[] = await sanityClient.fetch(DIPLOMA_QUERY)
  return raw.map(d => ({
    ...d,
    image: d.image ? urlFor(d.image).url() : null,
  }))
}

// ─────────────────────────────────────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────────────────────────────────────

const REVIEW_QUERY = `
  *[_type == "review"] | order(order asc) {
    name,
    role,
    text
  }
`

export async function fetchReviews(): Promise<Review[]> {
  return sanityClient.fetch(REVIEW_QUERY)
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME PAGE (singleton)
// ─────────────────────────────────────────────────────────────────────────────

const HOME_PAGE_QUERY = `
  *[_type == "homePage" && _id == "homePage"][0] {
    heroImage,
    heroBadge,
    heroTitle,
    heroTitleGradient,
    heroSubtitle,
    heroCta1Text,
    heroCta1Url,
    heroCta2Text,
    aboutImage,
    aboutEyebrow,
    aboutTitle,
    aboutTitleGradient,
    aboutQuote,
    aboutBody,
    servicesBannerBadge,
    servicesBannerTitle,
    servicesBannerSubtitle,
    publicSectionTitle,
    publicSectionSubtitle,
    formatsSectionTitle,
    formatsSectionSubtitle,
    reviewsSectionTitle,
    partnersSectionTitle,
    footerCtaTitle,
    footerCtaTitleGradient,
    footerCtaSubtitle,
    footerScheduleText,
    footerAddress,
    footerMapUrl,
    footerLinkedinUrl,
    footerFacebookUrl,
    footerCalendlyUrl,
    footerCalendlyButtonText
  }
`

interface HomePageRaw extends Omit<HomePage, 'heroImage' | 'aboutImage'> {
  heroImage: SanityImage | null
  aboutImage: SanityImage | null
}

export async function fetchHomePage(): Promise<HomePage | null> {
  const raw: HomePageRaw | null = await sanityClient.fetch(HOME_PAGE_QUERY)
  if (!raw) return null
  return {
    ...raw,
    heroImage:  raw.heroImage  ? urlFor(raw.heroImage).url()  : null,
    aboutImage: raw.aboutImage ? urlFor(raw.aboutImage).url() : null,
  }
}
