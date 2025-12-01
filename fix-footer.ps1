# PowerShell script to fix footer links
$file = "App.tsx"
$content = Get-Content $file -Raw

# Fix Services links
$content = $content -replace '                <li>Business Registration</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I want to register my business with Hum Foundation. Please guide me.")}>Business Registration</li>'
$content = $content -replace '                <li>Micro-funding</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I''m interested in micro-funding options. Please provide more information.")}>Micro-funding</li>'
$content = $content -replace '                <li>Skill Training</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I want to enroll in skill training programs. Please share details.")}>Skill Training</li>'
$content = $content -replace '                <li>Marketplace Onboarding</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I want to sell my products on your marketplace. Please help me with onboarding.")}>Marketplace Onboarding</li>'

# Fix Legal links  
$content = $content -replace '                <li>Privacy Policy</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I''d like to know about your privacy policy.")}>Privacy Policy</li>'
$content = $content -replace '                <li>Terms of Service</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I''d like to know about your terms of service.")}>Terms of Service</li>'
$content = $content -replace '                <li>Seller Guidelines</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I''d like to know about seller guidelines for the marketplace.")}>Seller Guidelines</li>'
$content = $content -replace '                <li>NGO Transparency</li>', '                <li className="hover:text-gold-400 cursor-pointer transition-colors" onClick={() => openWhatsApp("Hi, I''d like to know about NGO transparency and annual reports.")}>NGO Transparency</li>'

# Update video URLs
$content = $content -replace "url: 'https://www.youtube.com/embed/W75ngd0_F90'", "url: 'https://www.youtube.com/embed/rD_mD8r-iX4'"
$content = $content -replace "url: 'https://www.youtube.com/embed/h95cQiEptLq'", "url: 'https://www.youtube.com/embed/nU-IIXTCBjo'"
$content = $content -replace "url: 'https://www.youtube.com/embed/p7HKvqRI_Bo'", "url: 'https://www.youtube.com/embed/sR-qL7QdVZQ'"

Set-Content $file $content
Write-Host "Fixed footer links and video URLs"
