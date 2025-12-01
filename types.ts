export enum ViewState {
  HOME = 'HOME',
  BUSINESS_SUPPORT = 'BUSINESS_SUPPORT',
  SCST_TRAINING = 'SCST_TRAINING',
  MARKETPLACE = 'MARKETPLACE',
  LMS = 'LMS',
  CONTACT = 'CONTACT'
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

export interface LearningMaterial {
  type: 'video' | 'pdf' | 'text';
  title: string;
  content?: string; // For text
  url?: string; // For video/pdf
}

export interface SyllabusTopic {
  title: string;
  weeks: string;
  modules: string[];
  outcomes: string[];
}