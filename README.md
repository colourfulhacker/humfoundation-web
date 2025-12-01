# 🌟 Hum Foundation

**Empowering Rural India Through Technology, Education & Economic Opportunity**

[![Live Site](https://img.shields.io/badge/Live-humfoundation.co.in-blue)](https://www.humfoundation.co.in/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Key Features Deep Dive](#key-features-deep-dive)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

**Hum Foundation** is a comprehensive digital platform designed to bridge the gap between rural India and economic opportunities. We provide:

- 🎓 **Free Multilingual Education** (English, Hindi, Bengali)
- 💼 **Business Support Services** for entrepreneurs
- 🛍️ **Artisan Marketplace** connecting rural artisans to global markets
- 📜 **Professional Certifications** recognized across industries
- 🤝 **SC/ST Skill Development** in partnership with government programs

**Mission**: To empower 1 million rural entrepreneurs by 2030 through accessible education, funding, and market access.

---

## ✨ Features

### 🎓 Learning & Certification System (LMS)
- **3 Comprehensive Courses**:
  - Entrepreneurship Basics (Beginner)
  - Digital Marketing 101 (Intermediate)
  - Financial Literacy (Advanced)
- **Multilingual Support**: English, हिंदी (Hindi), বাংলা (Bengali)
- **AI-Powered Exams**: Dynamic question generation using Google Gemini AI
- **Professional Certificates**: Downloadable certificates signed by Founder & Chairman
- **Interactive Learning**: Text lessons, PDF templates, and reference materials

### 🛍️ Artisan Marketplace
- **22+ Handcrafted Products** across 8 categories:
  - Terracotta, Kantha Stitch, Jute & Bamboo, Dokra/Metal
  - Hand Embroidery, Food, Beauty, and more
- **Direct-to-Consumer**: Connect artisans directly with buyers
- **WhatsApp Integration**: Seamless order placement
- **Category Filtering**: Easy product discovery

### 💼 Business Support Services
- **Business Registration Assistance**
- **Micro-funding Guidance** (₹10K - ₹5L)
- **Skill Training Programs**
- **Marketplace Onboarding** for sellers

### 🏛️ SC/ST Government Training
- **6 Certification Programs**:
  - Industrial Sewing, Computer Proficiency, Handicraft Mastery
  - Agro-Processing, Electrician Training, Retail Management
- **Government Partnership** for placement support

### 📄 Legal & Compliance
- Privacy Policy
- Terms of Service
- Seller Guidelines
- NGO Transparency Reports

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

### AI & Services
- **Google Gemini AI** (`@google/genai`) - Quiz generation
- **Gemini 1.5 Flash** model for fast, accurate question generation

### Deployment
- **Vercel** - Auto-deployment from GitHub
- **Custom Domain**: [humfoundation.co.in](https://www.humfoundation.co.in/)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and npm
- **Git**
- **Google Gemini API Key** (for quiz generation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/colourfulhacker/humfoundation-web.git
   cd humfoundation-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   echo "VITE_GEMINI_API_KEY=your_gemini_api_key_here" > .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Gemini API Key (Required for quiz generation)
VITE_GEMINI_API_KEY=your_api_key_here
```

**Getting a Gemini API Key**:
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and paste into `.env.local`

> **Note**: `.env.local` is gitignored for security. For production deployment on Vercel, add the environment variable in the Vercel dashboard.

---

## 📁 Project Structure

```
humfoundation-web/
├── public/                          # Static assets
│   ├── Business_Plan_Template.txt   # LMS downloadable
│   └── Content_Calendar_2024.txt    # LMS downloadable
├── services/
│   └── geminiService.ts             # AI quiz generation
├── App.tsx                          # Main application component
├── types.ts                         # TypeScript type definitions
├── index.css                        # Global styles & Tailwind
├── main.tsx                         # Application entry point
├── .env.local                       # Environment variables (not in git)
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── README.md                        # This file
```

---

## 🎯 Key Features Deep Dive

### 🌐 Multilingual Learning System

The LMS supports **3 languages** with seamless switching:

```typescript
// Language selector on dashboard
<button onClick={() => setLanguage('en')}>English</button>
<button onClick={() => setLanguage('hi')}>हिंदी</button>
<button onClick={() => setLanguage('bn')}>বাংলা</button>

// Content automatically switches
{language === 'hi' ? material.contentHi : 
 language === 'bn' ? material.contentBn : 
 material.content}
```

**All 9 lessons** across all 3 modules are fully translated with culturally relevant examples.

### 🤖 AI-Powered Exam System

Exams use **Google Gemini 1.5 Flash** to generate course-specific questions:

```typescript
// Dynamic question generation
const questions = await generateQuizQuestions(currentModule.title);

// Passing criteria: 60%
const passed = score >= Math.ceil(questions.length * 0.6);
```

**Features**:
- ✅ 5 questions per exam
- ✅ Multiple choice format
- ✅ Instant grading
- ✅ Certificate generation on pass
- ✅ Retake option on fail

### 📜 Professional Certificates

Certificates include:
- Student name
- Course title
- Completion date
- Unique certificate ID (format: `HF-XXXXXX-XXX`)
- Official seal
- Signed by **Rinki Ghosal, Founder and Chairman**

**Download**: Print-optimized PDF via browser print function

---

## 🌍 Deployment

### Vercel (Recommended)

This project is configured for **automatic deployment** on Vercel:

1. **Push to GitHub** → Vercel auto-deploys
2. **Environment Variables**: Add `VITE_GEMINI_API_KEY` in Vercel dashboard
3. **Custom Domain**: Configured at [humfoundation.co.in](https://www.humfoundation.co.in/)

**Deployment URL**: [https://www.humfoundation.co.in/](https://www.humfoundation.co.in/)

### Manual Deployment

```bash
# Build
npm run build

# Deploy dist/ folder to any static hosting
# (Netlify, GitHub Pages, AWS S3, etc.)
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style (TypeScript + React best practices)
- Add translations for new content (EN, HI, BN)
- Test on multiple devices before submitting
- Update README if adding new features

---

## 📊 Project Stats

- **9 Lessons** across 3 courses
- **3 Languages** (English, Hindi, Bengali)
- **22+ Products** in marketplace
- **6 Government Training Programs**
- **100% TypeScript** for type safety
- **Mobile-First** responsive design

---

## 📞 Contact

**Hum Foundation**
- **Website**: [humfoundation.co.in](https://www.humfoundation.co.in/)
- **Email**: Contact via website form
- **WhatsApp**: Available for business inquiries

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** for powering our intelligent exam system
- **Vercel** for seamless deployment
- **Rural artisans** who inspire our marketplace
- **Open source community** for amazing tools and libraries

---

<div align="center">

**Made with ❤️ for Rural India**

[🌐 Visit Website](https://www.humfoundation.co.in/) • [📧 Contact Us](https://www.humfoundation.co.in/#contact) • [🛍️ Shop Marketplace](https://www.humfoundation.co.in/#marketplace)

</div>
