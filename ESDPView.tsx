import React from 'react';
import SEO from './SEO';
import { MapPin, Calendar, CheckCircle, Phone, Facebook, Award, BookOpen, Users, ArrowRight } from 'lucide-react';

// Add prop interface
interface ESDPViewProps {
    onTakeExam?: () => void;
}

const ESDPView: React.FC<ESDPViewProps> = ({ onTakeExam }) => {
    const handleWhatsApp = () => {
        const message = "Hello, I am interested in the 6-Week ESDP Entrepreneurship Program. Please guide me with the registration process.";
        window.open(`https://wa.me/919804801045?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleFacebook = () => {
        window.open('https://www.facebook.com/profile.php?id=100065046040768', '_blank');
    };

    return (
        <div className="animate-fade-in pb-20">
            <SEO
                title="ESDP 6-Week Entreprenuership Program | Hum Foundation"
                description="Join the 6-Week ESDP Entrepreneurship Skill Development Programme certified by Ministry of MSME & CTTC Kolkata."
            />
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 mt-4 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-500/30 border border-indigo-400/30 text-indigo-100 uppercase tracking-wide">
                            Govt. of India Initiative
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
                        Entrepreneurship Skill Development Programme <span className="text-yellow-400">(ESDP)</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive <span className="font-bold text-white">6-Week</span> certificate program organized by <span className="font-semibold text-white">Central Tool Room & Training Centre (CTTC), Kolkata</span> & Supported by <span className="font-semibold text-white">Ministry of MSME, Govt. of India</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        {onTakeExam ? (
                            <button
                                onClick={onTakeExam}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-900 transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                            >
                                <Award className="w-5 h-5 mr-2" />
                                Take Certification Exam
                            </button>
                        ) : (
                            <button
                                onClick={handleWhatsApp}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-900 transition-all duration-200 bg-white rounded-full hover:bg-indigo-50 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Book Your Seat
                            </button>
                        )}

                        <button
                            onClick={handleFacebook}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border-2 border-white rounded-full hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        >
                            <Facebook className="w-5 h-5 mr-2" />
                            Visit Our Page
                        </button>
                    </div>
                </div>
            </div>

            {/* Key Highlights Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            <Award className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Government Certified</h3>
                        <p className="text-gray-600">
                            Receive a prestigious certificate from CTTC, Kolkata, Ministry of MSME, enhancing your career prospects.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Training</h3>
                        <p className="text-gray-600">
                            6 weeks of intensive offline training covering essential entrepreneurship skills and practical knowledge.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Eligibility & Support</h3>
                        <p className="text-gray-600">
                            Open to 10th Pass students. Full support from our NGO training centre to guide you through the process.
                        </p>
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Program Details */}
                    <div className="space-y-8">
                        {/* Program Overview */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-indigo-600 mr-2" />
                                    Program Overview
                                </h2>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-1">Duration & Timing</h4>
                                        <p className="text-gray-900 font-medium">Six Weeks</p>
                                        <p className="text-gray-600 text-sm">4 Sessions per day</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-1">Participants</h4>
                                        <p className="text-gray-900 font-medium">25-30 Persons per batch</p>
                                        <p className="text-gray-600 text-sm">Age 18 and above</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">Purpose</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        To conduct special entrepreneurship development programmes for new livelihood and rural enterprise creation.
                                        Aims to empower youth with skills for self-employment.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">Structure</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Product-cum-process oriented activity-based programme. Includes hands-on practice, demonstration, and practical training.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">Course Examples</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Agro-based Products", "Herbal Cosmetics", "Fashion Garments", "Food Processing", "Mechanical Engineering", "Information Technology"].map((item, i) => (
                                            <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                                {item}
                                            </span>
                                        ))}
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            + More
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-4 mt-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <MapPin className="w-5 h-5 text-indigo-500" />
                                        </div>
                                        <div className="ml-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Training Venue</h4>
                                            <address className="text-gray-600 text-sm not-italic mt-1">
                                                <strong className="block text-gray-800">Networld Infotech</strong>
                                                Nabagram, Konnagar, West Bengal
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Join Section */}
                        <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
                            <h3 className="text-xl font-bold text-indigo-900 mb-4">Why functionality matters?</h3>
                            <ul className="space-y-3">
                                {[
                                    "Government recognized certification",
                                    "Expert guidance from industry professionals",
                                    "Hands-on practical training",
                                    "Networking opportunities with peers",
                                    "Support for starting your own venture"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start text-indigo-800">
                                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: CTA & Map Placeholder or Image */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

                            <h3 className="text-2xl font-bold mb-4 relative z-10">Restricted Seats Available!</h3>
                            <p className="text-indigo-200 mb-8 relative z-10">
                                Admission is on a first-come, first-serve basis. Secure your spot in this exclusive government-supported program today.
                            </p>

                            <div className="space-y-4 relative z-10">
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                                >
                                    <Phone className="w-6 h-6 mr-2" />
                                    Chat on WhatsApp (+91 98048 01045)
                                </button>

                                <p className="text-sm text-indigo-300 mt-4">
                                    Click above to inquire directly with our team.
                                </p>
                            </div>
                        </div>

                        {/* Additional Info Box */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                                Note
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                This program is part of our NGO's initiative to empower youth through skill development. All training is conducted offline at our Konnagar centre to ensure maximum practical exposure.
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <button
                                    onClick={handleFacebook}
                                    className="text-indigo-600 font-semibold flex items-center hover:text-indigo-800 transition-colors"
                                >
                                    View more on Facebook <ArrowRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ESDPView;
