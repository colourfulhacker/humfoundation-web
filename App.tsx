import React, { useState, useEffect, useRef } from 'react';
import { ViewState, Product, QuizQuestion, QuizResult, CourseModule, SyllabusTopic } from './types';
import { generateQuizQuestions } from './services/geminiService';
import {
  ShoppingBag,
  GraduationCap,
  Briefcase,
  Users,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Download,
  Phone,
  PlayCircle,
  FileText,
  BookOpen,
  ChevronRight,
  Clock,
  Printer,
  MessageCircle,
  Mail
} from 'lucide-react';

// --- Global Constants ---
const CONTACT_PHONE = "+91 98048 01045";
const CONTACT_PHONE_RAW = "919804801045";
const CONTACT_EMAIL = "contact@humfoundation.co.in";
const DOMAIN = "humfoundation.co.in";

const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// --- Data ---

const SYLLABUS_DATA: Record<string, SyllabusTopic> = {
  "Industrial Sewing": {
    title: "Industrial Sewing & Textile Manufacturing",
    weeks: "12 Weeks",
    modules: [
      "Introduction to Industrial Sewing Machines (Single/Double Needle)",
      "Safety Precautions & Machine Maintenance",
      "Fabric Types, Thread Selection & Tension Settings",
      "Basic Stitching Techniques & Seam Types",
      "Garment Construction: Shirts & Trousers",
      "Quality Control & Finishing"
    ],
    outcomes: [
      "Certified Machine Operator",
      "Quality Assurance Junior",
      "Garment Assembly Line Specialist"
    ]
  },
  "Computer Proficiency": {
    title: "Office Administration & Digital Literacy",
    weeks: "6 Weeks",
    modules: [
      "Computer Fundamentals & OS (Windows)",
      "Typing Speed & Accuracy Building",
      "MS Office Suite (Word, Excel, PowerPoint)",
      "Internet Usage, Email Etiquette & Digital Safety",
      "Data Entry Best Practices",
      "Introduction to Digital Payment Systems"
    ],
    outcomes: [
      "Data Entry Operator",
      "Office Assistant",
      "Front Desk Coordinator"
    ]
  },
  "Handicraft Mastery": {
    title: "Traditional Arts & Global Design",
    weeks: "16 Weeks",
    modules: [
      "History of Indian Handicrafts",
      "Material Sourcing & Preparation",
      "Design Thinking & Color Theory",
      "Advanced Weaving/Painting Techniques",
      "Product Packaging for Export",
      "Pricing & Market Linkages"
    ],
    outcomes: [
      "Master Artisan",
      "Craft Entrepreneur",
      "Design Workshop Trainer"
    ]
  },
  "Agro-Processing": {
    title: "Food Preservation & Processing",
    weeks: "8 Weeks",
    modules: [
      "Food Safety & Hygiene Standards (FSSAI)",
      "Pickle & Jam Making Techniques",
      "Spice Grinding & Packaging",
      "Shelf-life Extension Methods",
      "Labeling & Branding Rules",
      "Inventory Management"
    ],
    outcomes: [
      "Food Processing Technician",
      "Quality Control Helper",
      "Home-based Food Entrepreneur"
    ]
  },
  "Electrician Training": {
    title: "Vocational Electrical Repair",
    weeks: "24 Weeks",
    modules: [
      "Basic Electronics & Circuit Theory",
      "Tools Usage & Safety Standards",
      "Domestic Wiring & Switchboard Installation",
      "Appliance Repair (Fans, Irons, Mixers)",
      "Troubleshooting & Fault Detection",
      "Solar Panel Basics"
    ],
    outcomes: [
      "Certified Electrician",
      "Maintenance Technician",
      "Appliance Service Engineer"
    ]
  },
  "Retail Management": {
    title: "Retail Sales & Customer Service",
    weeks: "12 Weeks",
    modules: [
      "Introduction to Retail Industry",
      "Effective Communication Skills",
      "Customer Handling & Conflict Resolution",
      "Visual Merchandising & Store Layout",
      "Billing, POS Systems & Inventory",
      "Sales Closing Techniques"
    ],
    outcomes: [
      "Retail Sales Associate",
      "Store Supervisor",
      "Customer Support Executive"
    ]
  }
};

const LMS_MODULES: CourseModule[] = [
  {
    id: 'm1',
    title: 'Entrepreneurship Basics',
    description: 'Legal structures, business plans, and funding.',
    duration: '4 Hours',
    level: 'Beginner',
    materials: [
      { type: 'video', title: 'Welcome to Entrepreneurship', url: 'https://www.youtube.com/embed/W75ngd0_F90' },
      { type: 'text', title: 'Chapter 1: The Entrepreneurial Mindset', content: 'Entrepreneurship is not just about starting a business; it is about solving problems. Successful entrepreneurs identify gaps in the market and create value. Key traits include resilience, adaptability, and vision.' },
      { type: 'pdf', title: 'Business Plan Template.pdf' }
    ]
  },
  {
    id: 'm2',
    title: 'Digital Marketing 101',
    description: 'Social media growth, branding, and online sales.',
    duration: '6 Hours',
    level: 'Intermediate',
    materials: [
      { type: 'video', title: 'Social Media Strategy', url: 'https://www.youtube.com/embed/h95cQiEptLq' },
      { type: 'text', title: 'Understanding Your Audience', content: 'Before you post, you must listen. Who is your customer? What do they need? Use tools like Analytics to understand demographics.' },
      { type: 'pdf', title: 'Content Calendar 2024.pdf' }
    ]
  },
  {
    id: 'm3',
    title: 'Financial Literacy',
    description: 'Bookkeeping, taxes, and managing cash flow.',
    duration: '5 Hours',
    level: 'Advanced',
    materials: [
      { type: 'video', title: 'Cash Flow Management', url: 'https://www.youtube.com/embed/p7HKvqRI_Bo' },
      { type: 'text', title: 'Basics of GST', content: 'Goods and Services Tax (GST) is a comprehensive indirect tax on manufacture, sale, and consumption of goods and services throughout India.' }
    ]
  },
];

// --- Components ---

const Button: React.FC<{
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}> = ({ onClick, variant = 'primary', children, className = '', disabled = false }) => {
  const baseStyles = "px-6 py-3 rounded-md font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-royal-900 text-white hover:bg-royal-800 shadow-lg hover:shadow-xl",
    secondary: "bg-gold-500 text-royal-900 hover:bg-gold-400 shadow-md",
    outline: "border-2 border-royal-900 text-royal-900 hover:bg-royal-900 hover:text-white",
    ghost: "bg-transparent text-royal-900 hover:bg-stone-200"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-24 bg-gold-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Sub-Views ---

const HomeView: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-royal-900">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-900 via-royal-900/90 to-royal-900/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pt-10 md:pt-0">
            <div className="inline-block px-4 py-1 border border-gold-500 text-gold-500 rounded-full text-sm tracking-widest uppercase bg-royal-900/50 backdrop-blur-sm">
              Empowerment Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Building Livelihoods, <br />
              <span className="text-gold-400 italic">Not Charity.</span>
            </h1>
            <p className="text-xl text-gray-200 font-light leading-relaxed max-w-lg">
              Hum Foundation empowers women entrepreneurs and SC/ST communities through business guidance, skill training, and a global marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => openWhatsApp("Hi Hum Foundation, I want to start a business. Please guide me.")} variant="secondary">
                Start Your Business <ArrowRight size={20} />
              </Button>
              <Button onClick={() => setView(ViewState.MARKETPLACE)} variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-royal-900">
                Visit Marketplace
              </Button>
            </div>
          </div>
          {/* Hero Decoration */}
          <div className="hidden md:block relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 border-4 border-gold-500/30 rounded-full animate-spin-slow"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gold-500 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Successful Entrepreneur"
              className="relative rounded-t-full rounded-b-lg shadow-2xl border-b-8 border-gold-500 transform hover:scale-105 transition-transform duration-500 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5,000+", label: "Women Empowered" },
              { number: "1,200+", label: "Businesses Started" },
              { number: "85%", label: "Employment Rate" },
              { number: "₹2Cr+", label: "Community Revenue" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 group">
                <h3 className="text-4xl font-serif font-bold text-royal-900 group-hover:scale-110 transition-transform duration-300">{stat.number}</h3>
                <p className="text-gray-600 uppercase tracking-wide text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Pillars of Change" subtitle="A holistic approach to economic independence." />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer border-t-4 border-royal-900 flex flex-col" onClick={() => setView(ViewState.BUSINESS_SUPPORT)}>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-royal-900 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Business Support</h3>
              <p className="text-gray-600 mb-6 flex-grow">Guidance for women to register, brand, and scale their own ventures with funding assistance.</p>
              <span className="text-royal-900 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <ArrowRight size={16} /></span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer border-t-4 border-teal-800 flex flex-col" onClick={() => setView(ViewState.SCST_TRAINING)}>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-800 group-hover:bg-teal-800 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">SC/ST Training</h3>
              <p className="text-gray-600 mb-6 flex-grow">Connecting communities with government skill schemes, vocational training, and industrial placement.</p>
              <span className="text-teal-800 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">Apply Now <ArrowRight size={16} /></span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer border-t-4 border-gold-500 flex flex-col" onClick={() => setView(ViewState.LMS)}>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Certification</h3>
              <p className="text-gray-600 mb-6 flex-grow">Advanced Learning Management System for personalized testing and instant certification.</p>
              <span className="text-yellow-700 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">Start Learning <ArrowRight size={16} /></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BusinessSupportView: React.FC = () => (
  <div className="container mx-auto px-6 py-20 animate-fade-in">
    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
      <div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-royal-900 mb-6">From Idea to Empire</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We provide end-to-end support for women entrepreneurs. Whether you are selling homemade pickles or running a tech startup, we help you navigate the legal and financial landscape.
        </p>
        <ul className="space-y-4 mb-8">
          {[
            "MSME & GST Registration Support",
            "Branding & Digital Marketing Kits",
            "Access to Micro-finance & Angel Investors",
            "One-on-One Mentorship with Industry Leaders"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
              <CheckCircle className="text-gold-500" size={20} /> {item}
            </li>
          ))}
        </ul>
        <Button onClick={() => openWhatsApp("Hi Hum Foundation, I am interested in your Business Support services. Please help me register and grow my business.")}>
          Register Your Business Interest
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gold-400 transform translate-x-4 translate-y-4 rounded-lg"></div>
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="relative rounded-lg shadow-2xl w-full object-cover h-[500px]" alt="Women meeting" />
      </div>
    </div>
  </div>
);

const SyllabusModal: React.FC<{ topic: string, onClose: () => void }> = ({ topic, onClose }) => {
  const data = SYLLABUS_DATA[topic];

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <div>
            <span className="text-teal-800 text-sm font-bold tracking-widest uppercase">Course Syllabus</span>
            <h3 className="text-2xl font-serif font-bold text-royal-900">{data.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
              <Clock size={16} className="text-teal-800" />
              Duration: <span className="font-semibold text-gray-900">{data.weeks}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
              <BookOpen size={16} className="text-teal-800" />
              Modules: <span className="font-semibold text-gray-900">{data.modules.length}</span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-gold-500" /> Curriculum Breakdown
            </h4>
            <div className="space-y-3">
              {data.modules.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-colors">
                  <div className="bg-teal-800 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Week {idx + 1}-{idx + 2}</h5>
                    <p className="text-gray-600">{mod}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-gold-500" /> Career Outcomes
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {data.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-800 rounded-full"></span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end gap-4 border-t pt-6">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button onClick={() => {
              openWhatsApp(`Hi Hum Foundation, I want to enroll in the ${data.title} training program. Please provide me with the details.`);
              onClose();
            }} className="bg-teal-800 hover:bg-teal-900 text-white">
              Enroll Now (via WhatsApp)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScstTrainingView: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <div className="bg-teal-900 text-white min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-300 tracking-widest uppercase font-semibold text-sm">Government Partnership</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">SC/ST Skill Development & Placement</h2>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Bridging the gap between talent and opportunity through government-certified training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Industrial Sewing", desc: "Machine operation and textile manufacturing skills." },
            { title: "Computer Proficiency", desc: "Basic IT skills, data entry, and digital literacy." },
            { title: "Handicraft Mastery", desc: "Advanced techniques in traditional arts for global markets." },
            { title: "Agro-Processing", desc: "Food preservation, packaging, and quality control." },
            { title: "Electrician Training", desc: "Vocational electrical repair and installation." },
            { title: "Retail Management", desc: "Sales, inventory, and customer service skills." },
          ].map((course, idx) => (
            <div key={idx} className="bg-teal-800 p-8 rounded-lg border border-teal-700 hover:border-gold-500 transition-all hover:-translate-y-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-serif text-white">{course.title}</h3>
                <span className="text-xs bg-teal-900 px-2 py-1 rounded text-teal-200 border border-teal-600">Certification Training</span>
              </div>
              <p className="text-teal-200 text-sm mb-8 flex-grow">{course.desc}</p>
              <button
                onClick={() => setSelectedTopic(course.title)}
                className="w-full py-3 bg-white/10 hover:bg-white/20 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FileText size={16} /> View Syllabus
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="secondary" onClick={() => openWhatsApp("Hi Hum Foundation, I am interested in the SC/ST Government Training Programs. Please guide me.")}>
            Apply for Training Program
          </Button>
        </div>
      </div>

      {selectedTopic && <SyllabusModal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />}
    </div>
  );
};

// --- Marketplace Components ---

const MarketplaceView: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const products: Product[] = [
    // Terracotta
    { id: 101, name: "Handcrafted Terracotta Diya Set", artisan: "Village Women SHG", price: 250, category: "Terracotta", image: "terracotta_diya_set.png" },
    { id: 102, name: "Decorative Terracotta Pot", artisan: "Riya Arts", price: 550, category: "Terracotta", image: "https://images.unsplash.com/photo-1596350338223-9c8cb5725f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 103, name: "Terracotta Wall Hanging", artisan: "Mitti Creations", price: 850, category: "Terracotta", image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 104, name: "Terracotta Jewelry Set", artisan: "Shilpa Crafts", price: 450, category: "Terracotta", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 105, name: "Kulhad Cups (Set of 6)", artisan: "Potters of Bengal", price: 300, category: "Terracotta", image: "https://images.unsplash.com/photo-1578749556935-ef88814b29c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },

    // Kantha Stitch
    { id: 201, name: "Kantha Stitch Silk Saree", artisan: "Malda Weavers", price: 4500, category: "Kantha Stitch", image: "https://images.unsplash.com/photo-1610189012906-47833822b678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 202, name: "Kantha Embroidered Dupatta", artisan: "Shantiniketan Artisans", price: 1200, category: "Kantha Stitch", image: "https://images.unsplash.com/photo-1583391733958-e04f6764493f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 203, name: "Hand-stitched Kantha Quilt", artisan: "Rural Women Co-op", price: 3500, category: "Kantha Stitch", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 204, name: "Kantha Work Tote Bag", artisan: "EcoStyle", price: 650, category: "Kantha Stitch", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },

    // Jute & Bamboo
    { id: 301, name: "Eco-friendly Jute Handbag", artisan: "Green Earth SHG", price: 450, category: "Jute & Bamboo", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 302, name: "Braided Jute Table Mat", artisan: "Golden Fiber Crafts", price: 350, category: "Jute & Bamboo", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 303, name: "Handwoven Bamboo Basket", artisan: "Tribal Cane Works", price: 550, category: "Jute & Bamboo", image: "https://images.unsplash.com/photo-1597858603688-66236b281f6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 304, name: "Bamboo Cane Lamp Shade", artisan: "Forest Arts", price: 950, category: "Jute & Bamboo", image: "https://images.unsplash.com/photo-1513506003011-3b03c80165bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },

    // Dokra/Metal
    { id: 401, name: "Dokra Tribal Figurine", artisan: "Bankura Metal Crafts", price: 1500, category: "Dokra/Metal", image: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 402, name: "Brass Dokra Jewelry Box", artisan: "Ancient Arts", price: 1200, category: "Dokra/Metal", image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 403, name: "Tribal Metal Pendant", artisan: "Adivasi Silpa", price: 350, category: "Dokra/Metal", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },

    // Hand Embroidery
    { id: 501, name: "Mirror Work Wall Panel", artisan: "Gujarati Artisans", price: 1800, category: "Hand Embroidery", image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 502, name: "Zari Work Clutch", artisan: "Royal Threads", price: 950, category: "Hand Embroidery", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 503, name: "Hand Embroidered Cushion Cover", artisan: "Needle Magic", price: 450, category: "Hand Embroidery", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },

    // Existing Categories (Food & Beauty)
    { id: 601, name: "Organic Turmeric Powder", artisan: "Village SHG", price: 250, category: "Food", image: "https://images.unsplash.com/photo-1615485500704-8e99099928b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 602, name: "Homemade Mango Pickle", artisan: "Grandma's Recipe", price: 180, category: "Food", image: "https://images.unsplash.com/photo-1589135233689-d53f4506dc63?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 701, name: "Herbal Hair Oil", artisan: "Nature Pure", price: 400, category: "Beauty", image: "https://images.unsplash.com/photo-1626442674393-272e532b2a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 702, name: "Handmade Sandalwood Soap", artisan: "Forest Essentials", price: 150, category: "Beauty", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  const categories = ["All", "Terracotta", "Kantha Stitch", "Jute & Bamboo", "Dokra/Metal", "Hand Embroidery", "Food", "Beauty"];

  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const itemsList = cart.map((p, i) => `${i + 1}. ${p.name} - ₹${p.price}`).join('\n');
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    const message = `Hi Hum Foundation, I would like to order the following items from the Marketplace:\n\n${itemsList}\n\nTotal: ₹${total}\n\nPlease confirm my order.`;
    openWhatsApp(message);
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-royal-900">Hum Marketplace</h2>
            <p className="text-gray-600 mt-2">Direct from the artisan to your home.</p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="relative">
              <button
                onClick={checkoutViaWhatsApp}
                className="p-3 bg-white rounded-full shadow-md text-royal-900 transition-transform hover:scale-105 group relative"
              >
                <ShoppingBag size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {cart.length}
                  </span>
                )}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-royal-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Checkout via WhatsApp
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all border ${activeCategory === cat
                ? "bg-royal-900 text-white border-royal-900 shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative overflow-hidden h-64">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-white text-royal-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-gold-500 hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-wide px-2 py-1 bg-gold-50 rounded">{product.category}</span>
                  <span className="font-serif font-bold text-xl text-royal-900">₹{product.price}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm italic">By {product.artisan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- LMS & Exam Components ---

const ExamSystemView: React.FC = () => {
  // Navigation states
  const [step, setStep] = useState<'DASHBOARD' | 'LEARNING' | 'LOADING_EXAM' | 'EXAM' | 'RESULT'>('DASHBOARD');

  // Data states
  const [currentModule, setCurrentModule] = useState<CourseModule | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [candidateName, setCandidateName] = useState("");

  const startLearning = (module: CourseModule) => {
    if (!candidateName.trim()) {
      alert("Please enter your name to proceed.");
      return;
    }
    setCurrentModule(module);
    setStep('LEARNING');
  };

  const initExam = async () => {
    if (!currentModule) return;
    setStep('LOADING_EXAM');
    const qs = await generateQuizQuestions(currentModule.title);
    setQuestions(qs);
    setAnswers({});
    setStep('EXAM');
  };

  const submitExam = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) score++;
    });

    const passed = score >= Math.ceil(questions.length * 0.6); // 60% passing
    const dateStr = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    const certId = `HF-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000)}`;

    setResult({
      score,
      total: questions.length,
      passed,
      topic: currentModule?.title || "Training",
      candidateName,
      date: dateStr,
      certificateId: certId
    });
    setStep('RESULT');
  };

  const printCertificate = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 animate-fade-in">
      <div className="container mx-auto px-6 max-w-5xl">

        {step === 'DASHBOARD' && (
          <div>
            <SectionTitle title="Learning & Certification" subtitle="Complete modules and earn verifiable certificates." centered={false} />

            <div className="bg-white p-8 rounded-xl shadow-md mb-12 border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Student Profile</h3>
              <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name (for Certificate)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-royal-900 outline-none transition-shadow"
                  placeholder="e.g., Anjali Sharma"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-6">
              {LMS_MODULES.map(module => (
                <div key={module.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-royal-900 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{module.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded font-semibold ${module.level === 'Beginner' ? 'bg-green-100 text-green-800' : module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{module.level}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                    <div className="flex gap-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      <span className="flex items-center gap-1"><Clock size={14} /> {module.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen size={14} /> {module.materials?.length || 3} Lessons</span>
                    </div>
                  </div>
                  <Button onClick={() => startLearning(module)} disabled={!candidateName} className="whitespace-nowrap">
                    Start Learning <ChevronRight size={18} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 'LEARNING' && currentModule && (
          <div className="animate-fade-in">
            <button onClick={() => setStep('DASHBOARD')} className="text-gray-500 hover:text-royal-900 mb-6 flex items-center gap-2 text-sm font-medium">
              <ArrowRight className="rotate-180" size={16} /> Back to Dashboard
            </button>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-royal-900 p-8 text-white">
                <h2 className="text-3xl font-serif font-bold mb-2">{currentModule.title}</h2>
                <p className="text-royal-100">Module Dashboard</p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="text-gold-500" /> Study Materials
                </h3>

                <div className="space-y-6 mb-12">
                  {currentModule.materials?.map((material, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-royal-900 flex-shrink-0">
                          {material.type === 'video' ? <PlayCircle size={20} /> : material.type === 'pdf' ? <Download size={20} /> : <FileText size={20} />}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-800 mb-1">{material.title}</h4>
                          {material.type === 'text' && <p className="text-sm text-gray-600 leading-relaxed">{material.content}</p>}
                          {material.type === 'video' && (
                            <div className="mt-2 aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                              <iframe
                                width="100%"
                                height="100%"
                                src={material.url}
                                title={material.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          )}
                          {material.type === 'pdf' && (
                            <a href="#" className="text-teal-700 text-sm font-medium hover:underline mt-1 inline-block">Download Reference Material</a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-stone-50 p-6 rounded-lg border border-gold-200 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Ready for Certification?</h4>
                  <p className="text-gray-600 text-sm mb-6">You need to score at least 60% to earn your certificate.</p>
                  <Button onClick={initExam} className="w-full sm:w-auto">
                    Take Certification Exam
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 'LOADING_EXAM' && (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-16 h-16 border-4 border-royal-900 border-t-gold-500 rounded-full animate-spin mb-6"></div>
            <h3 className="text-xl font-serif font-bold text-gray-800">Generating Assessment...</h3>
            <p className="text-gray-500 mt-2">Preparing secure questions for {currentModule?.title}</p>
          </div>
        )}

        {step === 'EXAM' && (
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-royal-900">{currentModule?.title}</h3>
                <p className="text-sm text-gray-500">Final Assessment</p>
              </div>
              <span className="text-sm bg-red-50 text-red-700 px-3 py-1 rounded-full font-mono font-medium border border-red-100">Time: 14:22</span>
            </div>

            <div className="space-y-10">
              {questions.map((q, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    <span className="text-royal-900/40 font-bold mr-3 text-2xl font-serif">{idx + 1}.</span> {q.question}
                  </p>
                  <div className="space-y-3 pl-8">
                    {q.options.map(opt => (
                      <label key={opt} className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${answers[idx] === opt ? 'bg-royal-50 border-royal-900 shadow-sm' : 'border-gray-200 hover:bg-gray-50'}`}>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${answers[idx] === opt ? 'border-royal-900 bg-royal-900' : 'border-gray-400'}`}>
                          {answers[idx] === opt && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <input
                          type="radio"
                          name={`q-${idx}`}
                          className="hidden"
                          value={opt}
                          onChange={() => setAnswers({ ...answers, [idx]: opt })}
                          checked={answers[idx] === opt}
                        />
                        <span className={`ml-3 ${answers[idx] === opt ? 'text-royal-900 font-medium' : 'text-gray-700'}`}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-between items-center border-t pt-8">
              <span className="text-sm text-gray-500 italic">{Object.keys(answers).length} of {questions.length} answered</span>
              <Button onClick={submitExam} disabled={Object.keys(answers).length !== questions.length}>
                Submit Assessment
              </Button>
            </div>
          </div>
        )}

        {step === 'RESULT' && result && (
          <div className="text-center animate-fade-in">
            {/* Screen View */}
            <div className="mb-12 print:hidden">
              {result.passed ? (
                <div className="w-24 h-24 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <Award size={56} />
                </div>
              ) : (
                <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <X size={56} />
                </div>
              )}
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">
                {result.passed ? "Assessment Passed!" : "Please Try Again"}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                You scored <span className="font-bold text-royal-900">{result.score}/{result.total}</span> ({Math.round((result.score / result.total) * 100)}%)
              </p>

              {result.passed ? (
                <div className="flex justify-center gap-4">
                  <Button onClick={printCertificate} variant="secondary">
                    <Printer size={18} /> Download Certificate
                  </Button>
                  <Button onClick={() => setStep('DASHBOARD')} variant="outline">Back to Courses</Button>
                </div>
              ) : (
                <Button onClick={() => initExam()}>Retake Exam</Button>
              )}
            </div>

            {/* Certificate View (Visible on Screen & Print) */}
            {result.passed && (
              <div className="hidden print:flex print:visible relative mx-auto" id="certificate-container">
                <div className="w-[1123px] h-[794px] bg-white p-2 relative shadow-2xl mx-auto text-left print:shadow-none">
                  {/* Border Frame */}
                  <div className="h-full w-full border-[20px] border-royal-900 relative p-2">
                    <div className="h-full w-full border-[4px] border-gold-500 relative flex flex-col p-12 bg-certificate-pattern">

                      {/* Corner Decorations */}
                      <div className="absolute top-0 left-0 w-32 h-32 border-t-[4px] border-l-[4px] border-royal-900 m-2"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 border-t-[4px] border-r-[4px] border-royal-900 m-2"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-[4px] border-l-[4px] border-royal-900 m-2"></div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-[4px] border-r-[4px] border-royal-900 m-2"></div>

                      {/* Header */}
                      <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-royal-900 text-gold-500 flex items-center justify-center font-serif font-bold text-2xl rounded-tr-xl rounded-bl-xl">H</div>
                          <h1 className="text-4xl font-serif font-bold text-royal-900 tracking-wider">HUM FOUNDATION</h1>
                        </div>
                        <h2 className="text-6xl font-serif font-bold text-gold-600 uppercase tracking-widest mb-2">Certificate</h2>
                        <p className="text-xl text-gray-500 uppercase tracking-[0.2em]">Of Completion</p>
                      </div>

                      {/* Content */}
                      <div className="text-center flex-grow flex flex-col justify-center">
                        <p className="text-gray-600 text-lg italic mb-4">This acknowledges that</p>
                        <h3 className="text-5xl font-serif font-bold text-royal-900 mb-2">{result.candidateName}</h3>
                        <div className="w-2/3 h-[2px] bg-gray-300 mx-auto mb-8"></div>

                        <p className="text-gray-600 text-lg italic mb-4">Has successfully fulfilled all requirements for the curriculum</p>
                        <h3 className="text-3xl font-bold text-teal-900 mb-8">{result.topic}</h3>

                        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                          This certification demonstrates proficiency in the prescribed syllabus and successful clearance of the Hum Foundation Standardized Assessment.
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-end mt-12 px-12">
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-800 mb-2">{result.date}</p>
                          <div className="w-48 border-t border-gray-400 pt-2">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Date of Issue</p>
                          </div>
                        </div>

                        <div className="text-center">
                          {/* Seal */}
                          <div className="w-32 h-32 relative mx-auto mb-2">
                            <div className="absolute inset-0 border-4 border-gold-500 rounded-full flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-[10px] uppercase tracking-widest text-royal-900 font-bold">Official Seal</div>
                                <Star className="w-8 h-8 text-gold-500 mx-auto my-1" fill="currentColor" />
                                <div className="text-[8px] text-gray-500">HF-CERTIFIED</div>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 font-mono">{result.certificateId}</p>
                        </div>

                        <div className="text-center">
                          <div className="font-serif italic text-3xl text-royal-900 mb-2">Dr. R. K. Singh</div>
                          <div className="w-48 border-t border-gray-400 pt-2">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Director, Hum Foundation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

// --- Contact View ---

const ContactView: React.FC = () => (
  <div className="bg-royal-900 text-white py-20 animate-fade-in">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-serif font-bold mb-8">Start Your Journey Today</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-royal-800 p-8 rounded-lg flex flex-col items-center min-w-[250px] shadow-lg border border-royal-700">
          <Phone className="mb-4 text-gold-500" size={32} />
          <h3 className="text-xl font-bold mb-2">Helpline</h3>
          <a href={`tel:${CONTACT_PHONE}`} className="text-royal-200 hover:text-white transition-colors text-lg font-medium">{CONTACT_PHONE}</a>
          <p className="text-sm text-royal-300 mt-2">Mon - Sat, 9am - 6pm</p>
        </div>
        <div className="bg-royal-800 p-8 rounded-lg flex flex-col items-center min-w-[250px] shadow-lg border border-royal-700">
          <div className="mb-4 text-gold-500 font-bold text-2xl border-2 border-gold-500 rounded-full w-8 h-8 flex items-center justify-center">W</div>
          <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
          <p className="text-royal-200">Chat Support Available</p>
          <Button variant="secondary" className="mt-4 py-2 text-sm w-full" onClick={() => openWhatsApp("Hi Hum Foundation, I have a query.")}>Chat Now</Button>
        </div>
        <div className="bg-royal-800 p-8 rounded-lg flex flex-col items-center min-w-[250px] shadow-lg border border-royal-700">
          <Mail className="mb-4 text-gold-500" size={32} />
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-royal-200 hover:text-white transition-colors">{CONTACT_EMAIL}</a>
        </div>
      </div>
    </div>
  </div>
)

// --- Main Layout ---

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 print:hidden">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView(ViewState.HOME)}>
            <div className="w-10 h-10 bg-royal-900 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-gold-500 font-bold font-serif text-xl transition-transform group-hover:scale-110">H</div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-royal-900 leading-none">HUM</h1>
              <p className="text-[0.6rem] uppercase tracking-widest text-gold-600 font-semibold">Foundation</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setView(ViewState.BUSINESS_SUPPORT)} className={`text-sm font-medium hover:text-royal-900 transition-colors ${view === ViewState.BUSINESS_SUPPORT ? 'text-royal-900 font-bold' : 'text-gray-600'}`}>Start Business</button>
            <button onClick={() => setView(ViewState.SCST_TRAINING)} className={`text-sm font-medium hover:text-teal-800 transition-colors ${view === ViewState.SCST_TRAINING ? 'text-teal-800 font-bold' : 'text-gray-600'}`}>Training</button>
            <button onClick={() => setView(ViewState.MARKETPLACE)} className={`text-sm font-medium hover:text-royal-900 transition-colors ${view === ViewState.MARKETPLACE ? 'text-royal-900 font-bold' : 'text-gray-600'}`}>Marketplace</button>
            <button onClick={() => setView(ViewState.LMS)} className={`text-sm font-medium hover:text-royal-900 transition-colors ${view === ViewState.LMS ? 'text-royal-900 font-bold' : 'text-gray-600'}`}>Certifications</button>
            <Button onClick={() => setView(ViewState.CONTACT)} variant="primary" className="py-2 px-4 text-sm">Join Us</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-royal-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              <button onClick={() => setView(ViewState.BUSINESS_SUPPORT)} className="text-left py-2 font-medium text-gray-700">Start Business</button>
              <button onClick={() => setView(ViewState.SCST_TRAINING)} className="text-left py-2 font-medium text-gray-700">SC/ST Training</button>
              <button onClick={() => setView(ViewState.MARKETPLACE)} className="text-left py-2 font-medium text-gray-700">Marketplace</button>
              <button onClick={() => setView(ViewState.LMS)} className="text-left py-2 font-medium text-gray-700">Certifications</button>
              <button onClick={() => setView(ViewState.CONTACT)} className="text-left py-2 font-medium text-royal-900 font-bold">Contact Us</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow print:w-full print:h-full">
        {view === ViewState.HOME && <HomeView setView={setView} />}
        {view === ViewState.BUSINESS_SUPPORT && <BusinessSupportView />}
        {view === ViewState.SCST_TRAINING && <ScstTrainingView />}
        {view === ViewState.MARKETPLACE && <MarketplaceView />}
        {view === ViewState.LMS && <ExamSystemView />}
        {view === ViewState.CONTACT && <ContactView />}
      </main>

      {/* Footer */}
      <footer className="bg-royal-900 text-white pt-16 pb-8 print:hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-tr-lg rounded-bl-lg flex items-center justify-center text-royal-900 font-bold font-serif text-lg">H</div>
                <span className="text-2xl font-serif font-bold">HUM</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering women and communities through entrepreneurship, education, and economic independence.
              </p>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>Business Registration</li>
                <li>Micro-funding</li>
                <li>Skill Training</li>
                <li>Marketplace Onboarding</li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Seller Guidelines</li>
                <li>NGO Transparency</li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>{CONTACT_EMAIL}</li>
                <li>{CONTACT_PHONE}</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-royal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Hum Foundation. All rights reserved.</p>
            <p>Designed for {DOMAIN}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;