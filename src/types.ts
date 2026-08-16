export type PillarId = 'mente' | 'energia' | 'cuerpo' | 'relaciones';

export interface GlossaryTerm {
  slug: string;
  title: string;
  chinese: string;
  pinyin: string;
  pronunciation: string;
  shortDefinition: string;
  fullContent: string[];
  pillarId: PillarId;
  pillarName: string;
  relatedTerms: string[]; // slugs
  quote?: {
    text: string;
    source: string;
  };
  practicalApplication: string;
  isMemberGated?: boolean; // For Phase 3 architecture scaffolding
}

export interface Practice {
  id: string;
  title: string;
  duration: string;
  level: 'Iniciación' | 'Intermedio' | 'Profundo';
  description: string;
  steps: string[];
  keyBenefit: string;
}

export interface Pillar {
  id: PillarId;
  slug: string;
  brandName: string;
  subName: string;
  tagline: string;
  element: string;
  focus: string;
  colorAccent: string;
  iconType: 'temple-mind' | 'temple-energy' | 'temple-body' | 'temple-relations';
  description: string;
  targetAudience: string[];
  corePrinciples: string[];
  practices: Practice[];
  leadMagnet: {
    title: string;
    format: string;
    description: string;
    ctaLabel: string;
    resourceName: string;
  };
  recommendedGlossarySlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  author: string;
  pillarId: PillarId;
  excerpt: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'callout' | 'list';
    text?: string;
    items?: string[];
    author?: string;
  }[];
  relatedGlossarySlugs: string[];
}

export interface ChallengeDay {
  day: number;
  title: string;
  theme: string;
  pillar: PillarId;
  duration: string;
  mindAspect: string;
  bodyAspect: string;
  practicalAction: string;
  quote: string;
}

export interface EmailSequenceItem {
  step: number;
  delay: string;
  subject: string;
  purpose: string;
  previewText: string;
  bodyParagraphs: string[];
  giftOrAction: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  source: string; // 'reto-7-dias' | 'pillar-mente' | 'quiz' | 'exit-intent' | etc.
  pillarInterest?: PillarId;
  timestamp: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    text: string;
    subtext: string;
    pillarScores: Record<PillarId, number>;
  }[];
}

export interface QuizResult {
  dominantPillar: PillarId;
  title: string;
  diagnosis: string;
  recommendation: string;
  suggestedPractice: string;
  suggestedGlossaryTerms: string[];
}

// Scaffolding for Phases 2, 3, 4
export interface ScaffoldedCourse {
  id: string;
  title: string;
  subtitle: string;
  level: 'Iniciación (Fluir Consciente)' | 'Avanzado (Dao Chang Consciente)';
  modulesCount: number;
  durationHours: number;
  hotmartCheckoutUrl?: string;
  status: 'scaffolded_phase2' | 'active';
  description: string;
  syllabus: string[];
}

export interface ScaffoldedMembershipTier {
  id: string;
  name: string;
  tagline: string;
  status: 'scaffolded_phase3';
  features: string[];
}

export interface ScaffoldedConsultation {
  id: string;
  title: string;
  duration: string;
  status: 'scaffolded_phase3';
  description: string;
  includes: string[];
}

export interface ScaffoldedAffiliateItem {
  id: string;
  title: string;
  category: 'Herramienta de Meditación' | 'Té & Hierbas' | 'Literatura Taoísta';
  reasonWhy: string;
  affiliateUrl: string;
  status: 'scaffolded_phase4';
}
