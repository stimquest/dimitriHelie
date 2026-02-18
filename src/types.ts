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
