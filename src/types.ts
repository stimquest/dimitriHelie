export interface ServiceModule {
  id: string;
  title: string;
  shortDescription: string;
  pitch: string;
  whyChoose: string[];
  themesTitle?: string;
  themes: string[];
  infosPratiques: {
    format: string[];
    audience: string[];
    organization: string[];
    pricing: string;
  };
  icon: string | null;
  image: string | null;
}

export interface Partner {
  name: string;
  logoUrl: string | null;
}

export interface Diploma {
  title: string;
  institution: string;
  year?: string;
  description: string;
}

export interface Review {
  name: string;
  role: string;
  text: string;
}

export interface HomePage {
  // Hero
  heroBadge: string | null;
  heroTitle: string | null;
  heroTitleGradient: string | null;
  heroSubtitle: string | null;
  heroCta1Text: string | null;
  heroCta1Url: string | null;
  heroCta2Text: string | null;
  // About
  aboutEyebrow: string | null;
  aboutTitle: string | null;
  aboutTitleGradient: string | null;
  aboutQuote: string | null;
  aboutBody: unknown[] | null; // Portable Text blocks
  // Services section
  servicesBannerBadge: string | null;
  servicesBannerTitle: string | null;
  servicesBannerSubtitle: string | null;
  publicSectionTitle: string | null;
  publicSectionSubtitle: string | null;
  formatsSectionTitle: string | null;
  formatsSectionSubtitle: string | null;
  reviewsSectionTitle: string | null;
  partnersSectionTitle: string | null;
}
