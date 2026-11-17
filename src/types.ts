export type Language = 'vi' | 'en';
export type LocalizedText = string | { vi: string; en: string };

export interface ExperienceItem {
  id: string;
  role: { vi: string; en: string };
  company: { vi: string; en: string };
  time: { vi: string; en: string };
  isCurrent?: boolean;
  tag: string;
  descriptions: {
    vi: string[];
    en: string[];
  };
}

export interface AchievementItem {
  id: string;
  title: { vi: string; en: string };
  organization: { vi: string; en: string };
  year: string;
  icon: string;
  category: { vi: string; en: string };
  isNew?: boolean;
  documentImage?: string;
  details?: { vi: string; en: string };
}

export interface SkillCategory {
  id: string;
  title: { vi: string; en: string };
  skills: {
    name: LocalizedText;
    level: string; // e.g. "Advanced", "Proficient", "Practical"
    highlight?: boolean;
  }[];
}

export interface FocusArea {
  id: string;
  title: { vi: string; en: string };
  tag: { vi: string; en: string };
  organization: LocalizedText;
  period: LocalizedText;
  summary: { vi: string; en: string };
  highlights: { vi: string[]; en: string[] };
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  isNew?: boolean;
  isGoogle?: boolean;
  isFeatured?: boolean;
  title: { vi: string; en: string };
  issuer: string;
  category: { vi: string; en: string };
  year: string;
  badge: string;
  badgeEn?: string;
  image?: string;
  completedDate?: { vi: string; en: string };
  skills?: string[];
  description?: { vi: string; en: string };
}
