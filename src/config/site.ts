export interface ExternalLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subline: string;
  description: string;
  url: string;
  links: {
    github?: string;
    demoVideo?: string;
    projectDoc?: string;
  };
  author: string;
}

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || '';
const demoVideoUrl = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || '';
const projectDocUrl = process.env.NEXT_PUBLIC_PROJECT_DOC_URL || '';
const deployedUrl = process.env.NEXT_PUBLIC_DEPLOYED_URL || 'https://aura.app';

export const siteConfig: SiteConfig = {
  name: 'AURA',
  shortName: 'AURA',
  tagline: 'Care for every part of you.',
  subline: 'AURA turns everyday concerns about your skin, hair, scalp, and body into a short routine you can actually follow.',
  description: 'AURA is a friendly whole-body cosmetic-care assistant that builds short routines from one concern and a few simple answers.',
  url: deployedUrl,
  links: {
    github: githubUrl || undefined,
    demoVideo: demoVideoUrl || undefined,
    projectDoc: projectDocUrl || undefined,
  },
  author: 'ChatGPT Codex India Hackathon 2026',
};

export const TRUST_LINE = 'Cosmetic self-care guidance only. AURA does not diagnose medical conditions.';

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Build Routine', href: '/routine' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Saved', href: '/saved' },
  { label: 'Safety', href: '/safety' },
  { label: 'About', href: '/about' },
] as const;

export const footerNavGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Build Routine', href: '/routine' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Saved Routines', href: '/saved' },
      { label: 'Safety', href: '/safety' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'About', href: '/about' },
      ...(siteConfig.links.github ? [{ label: 'GitHub Repository', href: siteConfig.links.github }] : []),
      ...(siteConfig.links.demoVideo ? [{ label: 'Demo Video', href: siteConfig.links.demoVideo }] : []),
      ...(siteConfig.links.projectDoc ? [{ label: 'Project Document', href: siteConfig.links.projectDoc }] : []),
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cosmetic-care disclaimer', href: '/safety' },
    ],
  },
] as const;
