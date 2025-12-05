export enum ViewState {
  HOME = 'HOME',
  BUSINESS_SUPPORT = 'BUSINESS_SUPPORT',
  SCST_TRAINING = 'SCST_TRAINING',
  MARKETPLACE = 'MARKETPLACE',
  LMS = 'LMS',
  CONTACT = 'CONTACT',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE',
  SELLER_GUIDELINES = 'SELLER_GUIDELINES',
  NGO_TRANSPARENCY = 'NGO_TRANSPARENCY',
  PAID_TRAINING = 'PAID_TRAINING',
  ESDP_PROGRAM = 'ESDP_PROGRAM'
}

export interface Product {
  id: number;
  name: string;
  artisan: string;
  price: number;
  category: string;
  image: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string; // The exact string of the correct option
}

export interface QuizResult {
  score: number;
  total: number;
  passed: boolean;
  topic: string;
  candidateName: string;
  date: string;
  certificateId: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  materials?: LearningMaterial[];
}

export type Language = 'en' | 'hi' | 'bn';

export interface LearningMaterial {
  type: 'video' | 'text' | 'pdf';
  title: string;
  content?: string; // For text
  contentHi?: string;  // Hindi translation
  contentBn?: string;  // Bengali translation
  url?: string; // For video/pdf
}

export interface SyllabusTopic {
  title: string;
  weeks: string;
  modules: string[];
  outcomes: string[];
}