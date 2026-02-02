// Types for Portfolio Data

export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  location?: string;
  description: string;
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  contact: ContactInfo;
  languages: Skill[];
  hardSkills: Skill[];
  softSkills: Skill[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
}
