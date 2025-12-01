import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion } from "../types";

// Initialize AI directly as per guidelines. 
// Assume import.meta.env.VITE_GEMINI_API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const generateQuizQuestions = async (topic: string): Promise<QuizQuestion[]> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Create a professional certification exam with 5 multiple-choice questions on the subject: "${topic}". 
    The target audience is women entrepreneurs and vocational students in India. 
    Ensure the questions test practical application, safety standards (if applicable), and core business/skill concepts.
    Return the result strictly as a JSON array.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswer"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as QuizQuestion[];
    }
    throw new Error("Assessment generation failed.");
  } catch (error) {
    console.error("System Error:", error);
    return getFallbackQuestions(topic);
  }
};

const getFallbackQuestions = (topic: string): QuizQuestion[] => {
  return [
    {
      question: "What is the primary objective of a Business Plan?",
      options: ["To decorate the office", "To outline strategy and financial projections", "To buy stationary", "To hire a cleaning crew"],
      correctAnswer: "To outline strategy and financial projections"
    },
    {
      question: "Which government ID is mandatory for most business registrations in India?",
      options: ["Library Card", "Gym Membership", "Aadhar Card", "Cinema Ticket"],
      correctAnswer: "Aadhar Card"
    },
    {
      question: "In digital marketing, what does SEO stand for?",
      options: ["Search Engine Optimization", "Super Extra Ordinary", "Sales Every October", "System Error Output"],
      correctAnswer: "Search Engine Optimization"
    },
    {
      question: "What is the standard voltage for domestic electrical supply in India?",
      options: ["110V", "230V", "440V", "12V"],
      correctAnswer: "230V"
    },
    {
      question: "Why is quality control important in manufacturing?",
      options: ["To waste time", "To ensure product consistency and safety", "To increase costs", "To slow down production"],
      correctAnswer: "To ensure product consistency and safety"
    }
  ];
}