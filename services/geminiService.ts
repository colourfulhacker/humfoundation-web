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

export const generateCyberSecurityExam = async (): Promise<QuizQuestion[]> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Create a rigorous, professional-grade Cyber Security Certification Exam with 20 multiple-choice questions.
    
    The questions must be SCENARIO-BASED and test PRACTICAL APPLICATION, not just definitions.
    Cover these topics:
    1. Network Defense & Architecture (Firewalls, DMZ, IDS/IPS)
    2. Ethical Hacking Phases (Recon, Scanning, Exploitation)
    3. Web App Security (OWASP Top 10, SQLi, XSS)
    4. Incident Response & Log Analysis
    5. Cloud Security & Compliance

    Difficulty Level: Intermediate to Advanced.
    Target Audience: Aspiring Security Analysts and Penetration Testers.

    Return the result strictly as a JSON array of objects with 'question', 'options' (array of 4 strings), and 'correctAnswer' properties.`;

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
    throw new Error("Exam generation failed.");
  } catch (error) {
    console.error("System Error:", error);
    return getFallbackCyberSecurityQuestions();
  }
};

const getFallbackCyberSecurityQuestions = (): QuizQuestion[] => {
  return [
    {
      question: "A security analyst notices a large number of SYN packets coming from a single IP address but no ACK packets are being sent back. What type of attack is likely occurring?",
      options: ["SQL Injection", "SYN Flood (DoS)", "Phishing", "Man-in-the-Middle"],
      correctAnswer: "SYN Flood (DoS)"
    },
    {
      question: "Which of the following is the most effective way to prevent SQL Injection attacks in a web application?",
      options: ["Using strong passwords", "Input validation and Parameterized Queries", "Installing a firewall", "Using HTTPS"],
      correctAnswer: "Input validation and Parameterized Queries"
    },
    {
      question: "During a penetration test, you find a file containing hashed passwords. Which tool would be best suited to attempt to crack these hashes?",
      options: ["Wireshark", "Nmap", "John the Ripper", "Metasploit"],
      correctAnswer: "John the Ripper"
    },
    {
      question: "You are designing a secure network architecture. Where should you place the public-facing web server?",
      options: ["Internal Network", "DMZ (Demilitarized Zone)", "Management VLAN", "Directly on the Internet without a firewall"],
      correctAnswer: "DMZ (Demilitarized Zone)"
    },
    {
      question: "An employee receives an email appearing to be from the CEO asking for an urgent wire transfer. The email address is slightly misspelled. What type of social engineering attack is this?",
      options: ["Vishing", "Spear Phishing", "Dumpster Diving", "Tailgating"],
      correctAnswer: "Spear Phishing"
    }
  ];
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