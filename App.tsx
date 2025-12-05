import React, { useState, useEffect, useRef } from 'react';
import { ViewState, Product, QuizQuestion, QuizResult, CourseModule, SyllabusTopic, LearningMaterial } from './types';
import ESDPView from './ESDPView';
import SEO from './SEO';
import { generateQuizQuestions, generateCyberSecurityExam } from './services/geminiService';
import { LMS_MODULES } from './lmsContent';
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
  Mail,
  Shield,
  Lock,
  Terminal,
  Globe,
  Database,
  Server,
  Code
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
      <SEO
        title="Hum Foundation | Empowerment Ecosystem"
        description="Empowering women entrepreneurs and SC/ST communities through business support, skill training, and marketplace access."
      />
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

      {/* ESDP Promo Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-yellow-400 text-yellow-900 font-bold rounded-full text-xs uppercase tracking-widest">Govt. of India Initiative</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Master Entrepreneurship Skills <br /> <span className="text-yellow-400">in 6 Weeks</span></h2>
              <p className="text-xl text-indigo-100">
                Join the comprehensive ESDP program organized by Central Tool Room & Training Centre (CTTC), Kolkata.
                Full offline training at Networld Infotech, Konnagar.
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => setView(ViewState.ESDP_PROGRAM)} className="!bg-white !text-indigo-900 hover:!bg-gray-100 border-none px-8 py-3 text-lg">
                  View Program Details
                </Button>
              </div>
            </div>
            <div className="md:w-5/12 hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <ul className="space-y-4">
                  {[
                    "Ministry of MSME Supported",
                    "Government Certification",
                    "100% Practical Training",
                    "Eligibility: 10th Pass",
                    "Limited Seats Available"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                      <div className="w-8 h-8 rounded-full bg-yellow-400 text-yellow-900 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} fill="currentColor" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BusinessSupportView: React.FC = () => (
  <div className="container mx-auto px-6 py-20 animate-fade-in">
    <SEO
      title="Business Support | Hum Foundation"
      description="End-to-end support for women entrepreneurs: MSME registration, branding, funding assistance, and mentorship."
    />
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
      <SEO
        title="SC/ST Skill Training | Hum Foundation"
        description="Government-certified skill development programs for SC/ST communities: Industrial Sewing, Computer Proficiency, Handicrafts, and more."
      />
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
    { id: 102, name: "Decorative Terracotta Pot", artisan: "Riya Arts", price: 550, category: "Terracotta", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 103, name: "Terracotta Wall Hanging", artisan: "Mitti Creations", price: 850, category: "Terracotta", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 104, name: "Terracotta Jewelry Set", artisan: "Shilpa Crafts", price: 450, category: "Terracotta", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 105, name: "Kulhad Cups (Set of 6)", artisan: "Potters of Bengal", price: 300, category: "Terracotta", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },

    // Kantha Stitch
    { id: 201, name: "Kantha Stitch Silk Saree", artisan: "Malda Weavers", price: 4500, category: "Kantha Stitch", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 202, name: "Kantha Embroidered Dupatta", artisan: "Shantiniketan Artisans", price: 1200, category: "Kantha Stitch", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 203, name: "Hand-stitched Kantha Quilt", artisan: "Rural Women Co-op", price: 3500, category: "Kantha Stitch", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 204, name: "Kantha Work Tote Bag", artisan: "EcoStyle", price: 650, category: "Kantha Stitch", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },

    // Jute & Bamboo
    { id: 301, name: "Eco-friendly Jute Handbag", artisan: "Green Earth SHG", price: 450, category: "Jute & Bamboo", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 302, name: "Braided Jute Table Mat", artisan: "Golden Fiber Crafts", price: 350, category: "Jute & Bamboo", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 303, name: "Handwoven Bamboo Basket", artisan: "Tribal Cane Works", price: 550, category: "Jute & Bamboo", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 304, name: "Bamboo Cane Lamp Shade", artisan: "Forest Arts", price: 950, category: "Jute & Bamboo", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },

    // Dokra/Metal
    { id: 401, name: "Dokra Tribal Figurine", artisan: "Bankura Metal Crafts", price: 1500, category: "Dokra/Metal", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 402, name: "Brass Dokra Jewelry Box", artisan: "Ancient Arts", price: 1200, category: "Dokra/Metal", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 403, name: "Tribal Metal Pendant", artisan: "Adivasi Silpa", price: 350, category: "Dokra/Metal", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },

    // Hand Embroidery
    { id: 501, name: "Mirror Work Wall Panel", artisan: "Gujarati Artisans", price: 1800, category: "Hand Embroidery", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 502, name: "Zari Work Clutch", artisan: "Royal Threads", price: 950, category: "Hand Embroidery", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 503, name: "Hand Embroidered Cushion Cover", artisan: "Needle Magic", price: 450, category: "Hand Embroidery", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },

    // Existing Categories (Food & Beauty)
    { id: 601, name: "Organic Turmeric Powder", artisan: "Village SHG", price: 250, category: "Food", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 602, name: "Homemade Mango Pickle", artisan: "Grandma's Recipe", price: 180, category: "Food", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 701, name: "Herbal Hair Oil", artisan: "Nature Pure", price: 400, category: "Beauty", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
    { id: 702, name: "Handmade Sandalwood Soap", artisan: "Forest Essentials", price: 150, category: "Beauty", image: "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image" },
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
      <SEO
        title="Hum Marketplace | Handcrafted & Authentic"
        description="Shop authentic handmade products from women artisans: Terracotta, Kantha Stitch, Jute crafts, and more."
      />
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
              <div className="relative overflow-hidden p-6 bg-stone-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-royal-900 shadow-sm">
                  <ShoppingBag size={24} />
                </div>
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
  const [step, setStep] = useState<'HOME' | 'MODULES' | 'LEARNING' | 'REGISTRATION' | 'LOADING_EXAM' | 'EXAM' | 'CERTIFICATE'>('HOME');
  const [userName, setUserName] = useState('');
  const [currentModule, setCurrentModule] = useState<CourseModule | null>(null);
  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [warningCount, setWarningCount] = useState(0); // Anti-cheat warning count
  const [showTranslations, setShowTranslations] = useState<Record<string, boolean>>({});
  const [language, setLanguage] = useState<'en' | 'hi' | 'bn'>('en');
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  const certificateRef = useRef<HTMLDivElement>(null);

  // Auto-start ESDP Exam Effect
  useEffect(() => {
    const shouldStart = localStorage.getItem('START_ESDP_EXAM');
    if (shouldStart === 'true') {
      localStorage.removeItem('START_ESDP_EXAM');
      const esdpModule = LMS_MODULES.find(m => m.id === 'esdp-program');
      if (esdpModule) {
        setCurrentModule(esdpModule);
        setStep('LOADING_EXAM');

        // Generate exam immediately
        setTimeout(async () => {
          try {
            // ESDP specific topics - Request 20 Questions
            const generatedQuestions = await generateQuizQuestions("Entrepreneurship, Business Planning, Marketing, and Financial Management", 20);
            setQuestions(generatedQuestions);
            setAnswers({});
            setWarningCount(0); // Reset warnings
            setTimeLeft(900);
            setStep('REGISTRATION'); // Force regression to get name if missing, or we can handle it earlier.
            // Actually, for auto-start, we might not have the name.
            // Let's modify: if no name, go to REGISTRATION, else LOADING_EXAM
            setStep(userName ? 'LOADING_EXAM' : 'REGISTRATION');
          } catch (error) {
            console.error("Failed to load ESDP exam", error);
            alert("Could not load exam. Please try again.");
            setStep('HOME');
          }
        }, 1500);
      }
    }
  }, []);

  // Helper function to get content in selected language
  const getContent = (material: LearningMaterial): string => {
    if (language === 'hi' && material.contentHi) return material.contentHi;
    if (language === 'bn' && material.contentBn) return material.contentBn;
    return material.content || '';
  };

  const startLearning = (module: CourseModule) => {
    setCurrentModule(module);
    setStep('LEARNING');
    window.scrollTo(0, 0);
  };

  const initExam = async () => {
    if (!currentModule) return;
    if (!userName) {
      setStep('REGISTRATION');
      return;
    }
    setStep('LOADING_EXAM');

    // Artificial delay for "generating" questions
    // In a real app, this would call the AI API
    setTimeout(async () => {
      try {
        let generatedQuestions;
        if (currentModule.id === 'cyber-security-cert') {
          generatedQuestions = await generateCyberSecurityExam();
        } else if (currentModule.id === 'esdp-program') {
          // Generate customized business questions for ESDP - 20 Questions
          generatedQuestions = await generateQuizQuestions("Entrepreneurship, Business Planning, Marketing, and Financial Management", 20);
        } else {
          generatedQuestions = await generateQuizQuestions(currentModule.title);
        }
        setQuestions(generatedQuestions);
        setAnswers({});
        setWarningCount(0); // Reset warnings
        setTimeLeft(900); // Reset timer to 15 minutes
        setStep('EXAM');
      } catch (error) {
        console.error("Failed to load exam", error);
        alert("Could not load exam. Please try again.");
        setStep('LEARNING');
      }
    }, 1500);
  };

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'EXAM' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  // --- Anti-Cheat Mechanisms ---
  useEffect(() => {
    if (step !== 'EXAM') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWarningCount(prev => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            alert("Violation Detected: You have switched tabs too many times. The exam will now auto-submit.");
            submitExam();
            return newCount;
          }
          alert(`Warning ${newCount}/3: Please do not switch tabs during the exam. Continued violation will result in disqualification.`);
          return newCount;
        });
      }
    };

    const preventCopyPaste = (e: Event) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("contextmenu", preventCopyPaste);
    document.addEventListener("copy", preventCopyPaste);
    document.addEventListener("cut", preventCopyPaste);
    document.addEventListener("paste", preventCopyPaste);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("contextmenu", preventCopyPaste);
      document.removeEventListener("copy", preventCopyPaste);
      document.removeEventListener("cut", preventCopyPaste);
      document.removeEventListener("paste", preventCopyPaste);
    };
  }, [step]); // Re-bind if step changes to EXAM

  // Format Time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answerQuestion = (idx: number, option: string) => {
    setAnswers({ ...answers, [idx]: option });
  };

  const submitExam = () => {
    let newScore = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    const percentage = (newScore / questions.length) * 100;
    setStep('CERTIFICATE');
    if (percentage >= 60) {
      setShowConfetti(true);
    }
  };

  const downloadCertificate = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 animate-fade-in">
      <SEO
        title="Learning Certification | Hum Foundation"
        description="Take online certification exams for vocational skills and earn a verifiable certificate from Hum Foundation."
      />
      <div className="container mx-auto px-6 max-w-5xl">

        {step === 'HOME' && (
          <div>
            <SectionTitle title="Learning & Certification" subtitle="Complete modules and earn verifiable certificates." centered={false} />

            {/* Language Selector */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Learning Language / शिक्षा भाषा / শিক্ষার ভাষা</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${language === 'en'
                    ? 'bg-royal-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${language === 'hi'
                    ? 'bg-royal-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  हिंदी (Hindi)
                </button>
                <button
                  onClick={() => setLanguage('bn')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${language === 'bn'
                    ? 'bg-royal-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  বাংলা (Bengali)
                </button>
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
                  <Button onClick={() => startLearning(module)} className="whitespace-nowrap">
                    Start Learning <ChevronRight size={18} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 'LEARNING' && currentModule && (
          <div className="animate-fade-in">
            <button onClick={() => setStep('HOME')} className="text-gray-500 hover:text-royal-900 mb-6 flex items-center gap-2 text-sm font-medium">
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
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-800 mb-1">{material.title}</h4>
                            {(material.contentHi || material.contentBn) && (
                              <button
                                onClick={() => setShowTranslations(prev => ({ ...prev, [idx.toString()]: !prev[idx.toString()] }))}
                                className="text-xs text-royal-900 underline"
                              >
                                {showTranslations[idx.toString()] ? 'Hide Translation' : 'Show Translation'}
                              </button>
                            )}
                          </div>

                          {material.type === 'text' && (
                            <div>
                              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{material.content}</p>
                              {showTranslations[idx.toString()] && (
                                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                                  <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                                    {getContent(material)}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {material.type === 'video' && (
                            <div className="mt-2 bg-black rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
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
                            <a
                              href={material.title.includes('Business') ? '/Business_Plan_Template.txt' : '/Content_Calendar_2024.txt'}
                              download={material.title.replace('.pdf', '.txt')}
                              className="text-teal-700 text-sm font-medium hover:underline mt-1 inline-block flex items-center gap-1"
                            >
                              <Download size={16} /> Download {material.title.replace('.pdf', ' Template')}
                            </a>
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

        {step === 'REGISTRATION' && (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in max-w-md mx-auto">
            <SectionTitle title="Candidate Registration" subtitle="Enter your details for the certificate." />
            <div className="bg-white p-8 rounded-xl shadow-lg w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Full Name (as it should appear on Certificate)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-royal-900 mb-6"
                id="username"
                type="text"
                placeholder="e.g. Ananya Sharma"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Button
                onClick={() => {
                  if (userName.trim().length > 0) initExam();
                  else alert("Please enter your name.");
                }}
                className="w-full justify-center"
              >
                Start Assessment <ArrowRight size={16} />
              </Button>
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
              <span className={`text-sm px-3 py-1 rounded-full font-mono font-medium border ${timeLeft < 60 ? 'bg-red-100 text-red-700 border-red-200 animate-pulse' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                Time: {formatTime(timeLeft)}
              </span>
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
                          onChange={() => answerQuestion(idx, opt)}
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

        {step === 'CERTIFICATE' && (
          <div className="animate-fade-in text-center">
            {showConfetti && <div className="fixed inset-0 pointer-events-none z-50 flex justify-center items-start"><div className="confetti-piece"></div></div>}

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-12 print:hidden">
              {score >= (questions.length * 0.6) ? (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <Award size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Congratulations!</h2>
                  <p className="text-gray-600 mb-8">You passed the exam with a score of <span className="font-bold text-green-600">{Math.round((score / questions.length) * 100)}%</span></p>
                  <div className="flex justify-center gap-4">
                    <Button onClick={downloadCertificate}>Download Certificate</Button>
                    <Button variant="outline" onClick={() => setStep('HOME')}>Back to Courses</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                    <X size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Exam Failed</h2>
                  <p className="text-gray-600 mb-8">You scored {Math.round((score / questions.length) * 100)}%. You need 60% to pass.</p>
                  <Button onClick={initExam}>Retake Exam</Button>
                </>
              )}
            </div>

            {/* Certificate Template */}
            {score >= (questions.length * 0.6) && (
              <>
                <div className="bg-white p-6 md:p-12 rounded-xl shadow-2xl max-w-4xl mx-auto text-center border-8 border-double border-gold-200 relative overflow-hidden mt-12 print:block hidden" ref={certificateRef} id="certificate-container">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                  {/* Watermark */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04]">
                    <Award size={500} className="text-gray-900" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto bg-gold-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <Award className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 mb-2 uppercase tracking-wide">Certificate of Achievement</h2>
                    <p className="text-gold-600 font-medium tracking-widest uppercase mb-12">This is to certify that</p>

                    <div className="border-b-2 border-gray-300 max-w-2xl mx-auto mb-8 pb-2">
                      <h3 className="text-3xl md:text-4xl font-writing text-royal-800">{userName || "Candidate Name"}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">
                      has successfully completed the
                      {currentModule?.id === 'esdp-program' ? (
                        <span className="block text-2xl font-bold text-royal-900 mt-2 mb-2">6-Week Entrepreneurship Skill Development Programme (ESDP)</span>
                      ) : (
                        <span className="block text-2xl font-bold text-royal-900 mt-2 mb-2">{currentModule?.id === 'cyber-security-cert' ? 'Advanced Cyber Security & Ethical Hacking' : currentModule?.title}</span>
                      )}
                      Evaluation with a score of <span className="font-bold text-green-600">{Math.round((score / questions.length) * 100)}%</span>
                    </p>

                    {currentModule?.id === 'esdp-program' && (
                      <div className="flex flex-col items-center justify-center mb-8 bg-stone-50 p-4 rounded-lg border border-stone-200">
                        <p className="text-gray-500 text-sm mb-2 uppercase tracking-wide font-semibold">Supported By</p>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <Award size={32} className="mx-auto text-orange-500 mb-1" />
                            <span className="text-xs font-bold text-gray-800 block">Ministry of MSME</span>
                            <span className="text-[10px] text-gray-500">Govt. of India</span>
                          </div>
                          <div className="h-8 w-px bg-gray-300"></div>
                          <div className="text-center">
                            <Award size={32} className="mx-auto text-blue-600 mb-1" />
                            <span className="text-xs font-bold text-gray-800 block">CTTC, Kolkata</span>
                            <span className="text-[10px] text-gray-500">Training Partner</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-end max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-100">
                      <div className="text-center">
                        <div className="w-40 border-b border-gray-400 mb-2"></div>
                        <p className="font-bold text-royal-900">Rinki Ghosal</p>
                        <p className="text-xs text-gray-500 uppercase">Director, Hum Foundation</p>
                      </div>

                      <div className="hidden md:block">
                        <Award size={96} className="text-gold-500 opacity-80" />
                      </div>

                      <div className="text-center">
                        <div className="w-40 border-b border-gray-400 mb-2 font-writing text-xl text-royal-900">
                          {new Date().toLocaleDateString()}
                        </div>
                        <p className="font-bold text-royal-900">Date Issued</p>
                        <p className="text-xs text-gray-500 uppercase">Kolkata, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* On-screen Preview (Scaled Down) */}
                <div className="mt-12 opacity-50 hover:opacity-100 transition-opacity print:hidden">
                  <p className="text-center text-sm text-gray-400 mb-2 uppercase tracking-wider">Certificate Preview</p>
                  <div className="transform scale-50 origin-top border border-gray-200 shadow-sm pointer-events-none h-64 overflow-hidden relative">
                    {/* Duplicate of structure for visual preview only - simplified */}
                    <div className="bg-white p-4 text-center">
                      <h2 className="text-lg font-bold">Certificate of Achievement</h2>
                      <p>Presented to {userName}</p>
                    </div>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] flex items-center justify-center">
                      <p className="bg-white/80 px-4 py-2 rounded-full font-bold text-sm shadow-sm text-gray-600">Click Download to View Full Certificate</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Paid Training View ---

interface PaidTrainingViewProps {
  setView: (view: ViewState) => void;
}

const PaidTrainingView: React.FC<PaidTrainingViewProps> = ({ setView }) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'features'>('syllabus');

  const syllabus = [
    {
      title: "Module 1: Introduction to Cyber Security",
      topics: [
        "Fundamentals of Information Security",
        "CIA Triad (Confidentiality, Integrity, Availability)",
        "Types of Cyber Attacks & Threat Actors",
        "Legal & Ethical Aspects of Hacking"
      ]
    },
    {
      title: "Module 2: Networking & Security Basics",
      topics: [
        "OSI Model & TCP/IP Protocol Suite",
        "IP Addressing, Subnetting & Routing",
        "Ports, Protocols & Services (HTTP, FTP, SSH, DNS)",
        "Network Devices (Firewalls, Routers, Switches)"
      ]
    },
    {
      title: "Module 3: Ethical Hacking & Penetration Testing",
      topics: [
        "Phases of Hacking (Reconnaissance, Scanning, Gaining Access)",
        "Vulnerability Assessment vs. Penetration Testing",
        "System Hacking: Password Cracking & Privilege Escalation",
        "Social Engineering Attacks"
      ]
    },
    {
      title: "Module 4: Web Application Security",
      topics: [
        "OWASP Top 10 Vulnerabilities",
        "SQL Injection (SQLi) & Cross-Site Scripting (XSS)",
        "Session Hijacking & CSRF",
        "Web Server Security & Hardening"
      ]
    },
    {
      title: "Module 5: Security Monitoring & Analysis",
      topics: [
        "Introduction to SIEM (Security Information and Event Management)",
        "Log Analysis & Incident Response",
        "Network Traffic Analysis with Wireshark",
        "Intrusion Detection & Prevention Systems (IDS/IPS)"
      ]
    },
    {
      title: "Module 6: Cloud Security & Future Trends",
      topics: [
        "Cloud Computing Models (IaaS, PaaS, SaaS)",
        "Cloud Security Challenges & Best Practices",
        "IoT Security & Mobile Device Security",
        "Career Paths in Cyber Security"
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title="Cyber Security Training | Hum Foundation"
        description="Comprehensive Cyber Security training program with global certification and placement support."
      />
      {/* Hero Section */}
      <section className="relative bg-royal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-royal-900/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400 text-green-400 text-sm font-mono mb-6 bg-royal-900/50 backdrop-blur-sm">
              <Terminal size={14} />
              <span>CYBER SECURITY BOOTCAMP</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Secure Your Future in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Cyber Security</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master Ethical Hacking, Security Analysis, and Network Defense.
              Get industry-ready with 100% practical training, global certifications, and placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => openWhatsApp("Hi Hum Foundation, I am interested in the Cyber Security Paid Training Program. Please send me the brochure and enrollment details.")}
                className="bg-green-600 hover:bg-green-700 text-white border-none"
              >
                Enroll Now - ₹10,000 + GST
              </Button>
              <Button
                variant="outline"
                className="!text-white !border-white hover:!bg-white hover:!text-royal-900"
                onClick={() => {
                  const element = document.getElementById('syllabus');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Syllabus
              </Button>
              <Button
                variant="secondary"
                className="bg-white text-royal-900 hover:bg-gray-100 border-none"
                onClick={() => setView(ViewState.LMS)}
              >
                Take Certification Exam
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-700 mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-3">Global Certification</h3>
              <p className="text-gray-600">
                Earn a globally recognized certificate that validates your skills in ethical hacking and security auditing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-500">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-6">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-3">Cloud-Based Labs</h3>
              <p className="text-gray-600">
                Get hands-on experience with a TryHackMe subscription. Practice real-world scenarios in a safe environment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-3">Placement Support</h3>
              <p className="text-gray-600">
                Dedicated placement assistance with our industrial partners. We help you land your dream job in security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Comprehensive Curriculum</span>
            <h2 className="text-4xl font-serif font-bold text-royal-900 mt-2">Master the Art of Cyber Defense</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {syllabus.slice(0, 3).map((module, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-green-400 transition-colors shadow-sm hover:shadow-md">
                  <h3 className="text-xl font-bold text-royal-900 mb-4 flex items-center gap-3">
                    <span className="bg-royal-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">{idx + 1}</span>
                    {module.title}
                  </h3>
                  <ul className="space-y-2 pl-11">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {syllabus.slice(3, 6).map((module, idx) => (
                <div key={idx + 3} className="border border-gray-200 rounded-xl p-6 hover:border-green-400 transition-colors shadow-sm hover:shadow-md">
                  <h3 className="text-xl font-bold text-royal-900 mb-4 flex items-center gap-3">
                    <span className="bg-royal-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">{idx + 4}</span>
                    {module.title}
                  </h3>
                  <ul className="space-y-2 pl-11">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-royal-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Invest in Your Career</h2>
          <div className="bg-white text-royal-900 max-w-md mx-auto rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
              Limited Seats
            </div>
            <h3 className="text-2xl font-bold mb-2">Cyber Security Expert</h3>
            <p className="text-gray-500 mb-6">Complete Training Program</p>
            <div className="text-5xl font-bold text-royal-900 mb-2">₹10,000</div>
            <p className="text-gray-500 text-sm mb-8">+ GST as applicable</p>

            <ul className="text-left space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> 100% Practical Training</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> TryHackMe Labs Subscription</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> Global Certification</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> Placement Assistance</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-600" /> Lifetime Access to Materials</li>
            </ul>

            <Button
              onClick={() => openWhatsApp("Hi Hum Foundation, I want to enroll in the Cyber Security Course (₹10,000 + GST). Please guide me with payment.")}
              className="w-full justify-center bg-royal-900 text-white hover:bg-royal-800"
            >
              Secure Your Spot Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Legal Pages ---

const PrivacyPolicyView: React.FC = () => (
  <div className="bg-white py-20 animate-fade-in">
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold text-royal-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          At Hum Foundation, we are committed to protecting your privacy and ensuring the security of your personal information.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect information that you provide directly to us, including name, email, phone number, and business details when you register for our services.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Your information is used to provide our services, communicate with you, and improve our programs.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access.
        </p>
      </div>
    </div>
  </div>
);

const TermsOfServiceView: React.FC = () => (
  <div className="bg-white py-20 animate-fade-in">
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold text-royal-900 mb-8">Terms of Service</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          By using Hum Foundation's services, you agree to these terms and conditions.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Service Usage</h2>
        <p className="text-gray-700 mb-4">
          Our services are provided for lawful business purposes only. You agree to use our platform responsibly and in accordance with all applicable laws.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">User Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          You are responsible for maintaining the confidentiality of your account and for all activities under your account.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Hum Foundation shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </p>
      </div>
    </div>
  </div>
);

const SellerGuidelinesView: React.FC = () => (
  <div className="bg-white py-20 animate-fade-in">
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold text-royal-900 mb-8">Seller Guidelines</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          Welcome to the Hum Foundation Marketplace. Please review these guidelines before listing your products.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Product Quality</h2>
        <p className="text-gray-700 mb-4">
          All products must be handmade, authentic, and of high quality. We prioritize traditional craftsmanship and sustainable practices.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Pricing</h2>
        <p className="text-gray-700 mb-4">
          Set fair prices that reflect the value of your work. We encourage transparent pricing that benefits both artisans and customers.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Shipping and Delivery</h2>
        <p className="text-gray-700 mb-4">
          Ensure timely shipping and proper packaging. Communicate clearly with customers about delivery timelines.
        </p>
      </div>
    </div>
  </div>
);

const NGOTransparencyView: React.FC = () => (
  <div className="bg-white py-20 animate-fade-in">
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold text-royal-900 mb-8">NGO Transparency</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          Hum Foundation is committed to complete transparency in our operations and fund utilization.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          We empower women and marginalized communities through entrepreneurship, education, and economic independence.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Financial Transparency</h2>
        <p className="text-gray-700 mb-4">
          All donations and funds are used directly for program implementation, training, and beneficiary support. Annual reports are available upon request.
        </p>
        <h2 className="text-2xl font-bold text-royal-900 mt-6 mb-4">Impact Metrics</h2>
        <p className="text-gray-700 mb-4">
          We regularly publish impact reports showing the number of beneficiaries, businesses supported, and training programs conducted.
        </p>
      </div>
    </div>
  </div>
);

// --- Contact View ---

const ContactView: React.FC = () => (
  <div className="bg-royal-900 text-white py-20 animate-fade-in">
    <SEO
      title="Contact Us | Hum Foundation"
      description="Get in touch with Hum Foundation via WhatsApp, Email, or our Helpline."
    />
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
  const [view, setView] = useState<ViewState>(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    return (viewParam && Object.values(ViewState).includes(viewParam as ViewState))
      ? (viewParam as ViewState)
      : ViewState.HOME;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (view === ViewState.HOME) {
      params.delete('view');
    } else {
      params.set('view', view);
    }
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.pushState({}, '', newUrl);

    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [view]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view');
      if (viewParam && Object.values(ViewState).includes(viewParam as ViewState)) {
        setView(viewParam as ViewState);
      } else {
        setView(ViewState.HOME);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Start ESDP Exam from ESDP View
  const startESDPExam = () => {
    const esdpModule = LMS_MODULES.find(m => m.id === 'esdp-program');
    if (esdpModule) {
      setView(ViewState.LMS);
      // We need to wait for the view to change to LMS, then the ExamSystemView will render.
      // However, ExamSystemView manages its own state. 
      // To bridge this, we might need a context or a way to pass props to ExamSystemView.
      // OR, we can use a query param or global event.
      // Simpler approach: 
      // We need to pass state to ExamSystemView. 
      // Since we can't easily pass props through this switch statement without lifting state up completely,
      // I will implement a simple "auto-start" mechanism using a temporary `window` property or refactoring slightly.

      // Better approach: Lift `currentModule` and `step` to App? Too big refactor.
      // Let's use localStorage to signal the start of exam.
      localStorage.setItem('START_ESDP_EXAM', 'true');
    }
  };

  // Hack to handle auto-starting exam when switching to LMS view from ESDP
  // This needs to be handled inside ExamSystemView ideally.

  const renderCurrentView = () => {
    switch (view) {
      case ViewState.HOME:
        return <HomeView setView={setView} />;
      case ViewState.BUSINESS_SUPPORT:
        return <BusinessSupportView />;
      case ViewState.SCST_TRAINING:
        return <ScstTrainingView />;
      case ViewState.MARKETPLACE:
        return <MarketplaceView />;
      case ViewState.LMS:
        return <ExamSystemView />;
      case ViewState.CONTACT:
        return <ContactView />;
      case ViewState.PRIVACY_POLICY:
        return <PrivacyPolicyView />;
      case ViewState.TERMS_OF_SERVICE:
        return <TermsOfServiceView />;
      case ViewState.SELLER_GUIDELINES:
        return <SellerGuidelinesView />;
      case ViewState.NGO_TRANSPARENCY:
        return <NGOTransparencyView />;
      case ViewState.PAID_TRAINING:
        return <PaidTrainingView setView={setView} />;
      case ViewState.ESDP_PROGRAM:
        return <ESDPView onTakeExam={startESDPExam} />;
      default:
        return <HomeView setView={setView} />;
    }
  };

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
            <button onClick={() => setView(ViewState.ESDP_PROGRAM)} className={`text-sm font-medium hover:text-indigo-700 transition-colors ${view === ViewState.ESDP_PROGRAM ? 'text-indigo-700 font-bold' : 'text-gray-600'}`}>ESDP Program</button>
            <button onClick={() => setView(ViewState.PAID_TRAINING)} className={`text-sm font-medium hover:text-green-600 transition-colors ${view === ViewState.PAID_TRAINING ? 'text-green-600 font-bold' : 'text-gray-600'}`}>Cyber Security</button>
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
              <button onClick={() => setView(ViewState.ESDP_PROGRAM)} className="text-left py-2 font-medium text-gray-700">ESDP Program</button>
              <button onClick={() => setView(ViewState.PAID_TRAINING)} className="text-left py-2 font-medium text-gray-700">Cyber Security</button>
              <button onClick={() => setView(ViewState.MARKETPLACE)} className="text-left py-2 font-medium text-gray-700">Marketplace</button>
              <button onClick={() => setView(ViewState.LMS)} className="text-left py-2 font-medium text-gray-700">Certifications</button>
              <button onClick={() => setView(ViewState.CONTACT)} className="text-left py-2 font-medium text-royal-900 font-bold">Contact Us</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow print:w-full print:h-full">
        {renderCurrentView()}
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
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.BUSINESS_SUPPORT)}>Business Registration</li>
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.BUSINESS_SUPPORT)}>Micro-funding</li>
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.SCST_TRAINING)}>Skill Training</li>
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.MARKETPLACE)}>Marketplace Onboarding</li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.PRIVACY_POLICY)}>Privacy Policy</li>
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.TERMS_OF_SERVICE)}>Terms of Service</li>
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.SELLER_GUIDELINES)}>Seller Guidelines</li>
                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.NGO_TRANSPARENCY)}>NGO Transparency</li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>{CONTACT_EMAIL}</li>
                <li>{CONTACT_PHONE}</li>
                <li>Kolkata, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-royal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hum Foundation. All rights reserved.</p>
            <p>Designed for {DOMAIN}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

