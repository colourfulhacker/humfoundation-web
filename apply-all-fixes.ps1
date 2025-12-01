# Comprehensive fix script for App.tsx
# This script will:
# 1. Add legal page components
# 2. Update footer links to navigate to pages instead of WhatsApp
# 3. Replace all marketplace product images with placeholders

$file = "App.tsx"
$content = Get-Content $file -Raw

# First, let's add the legal page components before the ContactView component
# Find the ContactView component and add legal pages before it

$legalPagesCode = @"
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

"@

# Insert legal pages before ContactView
$contactViewPattern = "// --- Contact View ---"
$content = $content -replace $contactViewPattern, ($legalPagesCode + "`r`n" + $contactViewPattern)

# Update footer Legal links to navigate instead of WhatsApp
$content = $content -replace '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick=\{\(\) => openWhatsApp\("Hi, I''d like to know about your privacy policy."\)\}>Privacy Policy</li>', '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.PRIVACY_POLICY)}>Privacy Policy</li>'
$content = $content -replace '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick=\{\(\) => openWhatsApp\("Hi, I''d like to know about your terms of service."\)\}>Terms of Service</li>', '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.TERMS_OF_SERVICE)}>Terms of Service</li>'
$content = $content -replace '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick=\{\(\) => openWhatsApp\("Hi, I''d like to know about seller guidelines for the marketplace."\)\}>Seller Guidelines</li>', '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.SELLER_GUIDELINES)}>Seller Guidelines</li>'
$content = $content -replace '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick=\{\(\) => openWhatsApp\("Hi, I''d like to know about NGO transparency and annual reports."\)\}>NGO Transparency</li>', '<li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => setView(ViewState.NGO_TRANSPARENCY)}>NGO Transparency</li>'

# Add routing for new views in the main App component
# Find the line with {view === ViewState.CONTACT && <ContactView />}
# and add the new routes before it
$routingAddition = @"
        {view === ViewState.PRIVACY_POLICY && <PrivacyPolicyView />}
        {view === ViewState.TERMS_OF_SERVICE && <TermsOfServiceView />}
        {view === ViewState.SELLER_GUIDELINES && <SellerGuidelinesView />}
        {view === ViewState.NGO_TRANSPARENCY && <NGOTransparencyView />}
"@

$content = $content -replace '(\s+)\{view === ViewState.CONTACT && <ContactView />\}', ($routingAddition + '$1{view === ViewState.CONTACT && <ContactView />}')

# Replace all marketplace product images with placeholders
$content = $content -replace "image: 'https://[^']+/photo-[^']+\?[^']*'", "image: 'https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Product+Image'"

Set-Content $file $content
Write-Host "All fixes applied successfully!"
