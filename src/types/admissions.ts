export type RiasecType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RiasecCategory {
  id: RiasecType;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  accentClass: string;
  badgeBg: string;
  badgeText: string;
  personalityTraits: string[];
  recommendedMajors: string[];
  suitableCareers: string[];
  subjects2027: string[];
}

export interface QuizQuestion {
  id: number;
  category: RiasecType;
  question: string;
  context: string;
}

export interface QuizResult {
  scores: Record<RiasecType, number>;
  primaryType: RiasecType;
  secondaryType: RiasecType;
  tertiaryType: RiasecType;
  code: string;
  completedAt: string;
  selectedSubjects: string[];
  targetScoreRange: string;
}

export interface MajorProgram {
  code: string;
  name: string;
  subjectCombinations: string[];
  benchmarkScore: string;
  employmentOutlook: string;
}

export interface University {
  id: string;
  code: string;
  name: string;
  shortName: string;
  region: 'angiang_cantho' | 'hcm' | 'other';
  regionLabel: string;
  type: 'public' | 'private';
  typeLabel: string;
  city: string;
  address: string;
  website: string;
  tuitionPerYear: string;
  benchmarkRange: string;
  benchmarkMin: number;
  featuredMajors: string[];
  admissionMethods2027: string[];
  riasecMatches: RiasecType[];
  highlights: string[];
  dormitoryInfo: string;
  programs: MajorProgram[];
  contactPhone: string;
}

export type ActivePage = 'home' | 'quiz' | 'results' | 'universities' | 'guide' | 'compare';
