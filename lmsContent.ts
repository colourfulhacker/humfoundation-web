import { CourseModule } from './types';

export const LMS_MODULES: CourseModule[] = [
   {
      id: 'm1',
      title: 'Entrepreneurship Basics',
      description: 'Legal structures, business plans, and funding.',
      duration: '4 Hours',
      level: 'Beginner',
      materials: [
         {
            type: 'text',
            title: 'Lesson 1: Welcome to Entrepreneurship',
            content: `**Introduction to Entrepreneurship**

Entrepreneurship is the journey of creating and building a business from an idea. It's about identifying opportunities, taking calculated risks, and creating value for customers.

**What Makes an Entrepreneur?**

1. **Vision**: Seeing opportunities where others see problems. Entrepreneurs look at everyday challenges and think "How can I solve this?"

2. **Resilience**: The ability to bounce back from failures and setbacks. Most successful businesses failed multiple times before succeeding.

3. **Adaptability**: Adjusting strategies based on market feedback. What works today might not work tomorrow.

4. **Passion**: Genuine enthusiasm for solving customer problems. This passion keeps you going during tough times.

5. **Resourcefulness**: Making the most of limited resources. Entrepreneurs find creative solutions with what they have.

**The Entrepreneurial Journey**

Starting a business involves several stages:
- **Ideation**: Identifying a problem worth solving
- **Validation**: Testing if people will pay for your solution
- **Planning**: Creating a roadmap for your business
- **Execution**: Building and launching your product/service
- **Growth**: Scaling your business sustainably

**Key Mindset Shifts**

- From employee to owner: You're responsible for everything
- From fixed salary to variable income: Embrace uncertainty
- From following instructions to making decisions: You're the boss
- From 9-to-5 to 24/7: Your business is always on your mind

**Remember**: Every successful business started with someone who believed in their idea and took action. The difference between dreamers and entrepreneurs is execution.`,
            contentHi: `**उद्यमिता का परिचय**

उद्यमिता एक विचार से व्यवसाय बनाने और विकसित करने की यात्रा है। यह अवसरों की पहचान करने, गणना किए गए जोखिम लेने और ग्राहकों के लिए मूल्य बनाने के बारे में है।

**एक उद्यमी क्या बनाता है?**

1. **दृष्टि**: जहां दूसरे समस्याएं देखते हैं वहां अवसर देखना। उद्यमी रोजमर्रा की चुनौतियों को देखते हैं और सोचते हैं "मैं इसे कैसे हल कर सकता हूं?"

2. **लचीलापन**: असफलताओं और झटकों से वापस उछलने की क्षमता। अधिकांश सफल व्यवसाय सफल होने से पहले कई बार विफल हुए।

3. **अनुकूलनशीलता**: बाजार की प्रतिक्रिया के आधार पर रणनीतियों को समायोजित करना। जो आज काम करता है वह कल काम नहीं कर सकता।

4. **जुनून**: ग्राहक समस्याओं को हल करने के लिए वास्तविक उत्साह। यह जुनून आपको कठिन समय में आगे बढ़ाता है।

5. **संसाधनशीलता**: सीमित संसाधनों का अधिकतम उपयोग करना। उद्यमी जो उनके पास है उसके साथ रचनात्मक समाधान खोजते हैं।

**उद्यमशीलता यात्रा**

व्यवसाय शुरू करने में कई चरण शामिल हैं:
- **विचार**: हल करने योग्य समस्या की पहचान करना
- **सत्यापन**: परीक्षण करना कि क्या लोग आपके समाधान के लिए भुगतान करेंगे
- **योजना**: अपने व्यवसाय के लिए एक रोडमैप बनाना
- **निष्पादन**: अपने उत्पाद/सेवा का निर्माण और लॉन्च करना
- **विकास**: अपने व्यवसाय को स्थायी रूप से बढ़ाना

**मुख्य मानसिकता परिवर्तन**

- कर्मचारी से मालिक तक: आप सब कुछ के लिए जिम्मेदार हैं
- निश्चित वेतन से परिवर्तनीय आय तक: अनिश्चितता को अपनाएं
- निर्देशों का पालन करने से निर्णय लेने तक: आप मालिक हैं
- 9-से-5 से 24/7 तक: आपका व्यवसाय हमेशा आपके दिमाग में है

**याद रखें**: हर सफल व्यवसाय किसी ऐसे व्यक्ति के साथ शुरू हुआ जो अपने विचार में विश्वास करता था और कार्रवाई करता था। सपने देखने वालों और उद्यमियों के बीच का अंतर निष्पादन है।`,
            contentBn: `**উদ্যোক্তার পরিচয**

উদ্যোক্তা হল একটি ধারণা থেকে ব্যবসা তৈরি এবং গড়ে তোলার যাত্রা। এটি সুযোগ চিহ্নিত করা, গণনাকৃত ঝুঁকি নেওয়া এবং গ্রাহকদের জন্য মূল্য তৈরি করার বিষয়ে।

**একজন উদ্যোক্তা কী তৈরি করে?**

1. **দৃষ্টি**: যেখানে অন্যরা সমস্যা দেখে সেখানে সুযোগ দেখা। উদ্যোক্তারা দৈনন্দিন চ্যালেঞ্জগুলি দেখেন এবং ভাবেন "আমি এটি কীভাবে সমাধান করতে পারি?"

2. **স্থিতিস্থাপকতা**: ব্যর্থতা এবং বিপর্যয় থেকে ফিরে আসার ক্ষমতা। বেশিরভাগ সফল ব্যবসা সফল হওয়ার আগে একাধিকবার ব্যর্থ হয়েছে।

3. **অভিযোজনযোগ্যতা**: বাজারের প্রতিক্রিয়ার উপর ভিত্তি করে কৌশল সামঞ্জস্য করা। আজ যা কাজ করে তা আগামীকাল কাজ নাও করতে পারে।

4. **আবেগ**: গ্রাহক সমস্যা সমাধানের জন্য প্রকৃত উত্সাহ। এই আবেগ কঠিন সময়ে আপনাকে এগিয়ে রাখে।

5. **সম্পদশীলতা**: সীমিত সম্পদের সর্বাধিক ব্যবহার করা। উদ্যোক্তারা তাদের কাছে যা আছে তা দিয়ে সৃজনশীল সমাধান খুঁজে পান।

**উদ্যোক্তা যাত্রা**

একটি ব্যবসা শুরু করার সাথে বেশ কয়েকটি পর্যায় জড়িত:
- **ধারণা**: সমাধানের যোগ্য একটি সমস্যা চিহ্নিত করা
- **বৈধতা**: পরীক্ষা করা যে লোকেরা আপনার সমাধানের জন্য অর্থ প্রদান করবে কিনা
- **পরিকল্পনা**: আপনার ব্যবসার জন্য একটি রোডম্যাপ তৈরি করা
- **সম্পাদন**: আপনার পণ্য/পরিষেবা তৈরি এবং লঞ্চ করা
- **বৃদ্ধি**: আপনার ব্যবসাকে টেকসইভাবে স্কেল করা

**মূল মানসিকতা পরিবর্তন**

- কর্মচারী থেকে মালিক: আপনি সবকিছুর জন্য দায়ী
- নির্দিষ্ট বেতন থেকে পরিবর্তনশীল আয়: অনিশ্চয়তা গ্রহণ করুন
- নির্দেশাবলী অনুসরণ করা থেকে সিদ্ধান্ত নেওয়া: আপনি বস
- 9-থেকে-5 থেকে 24/7: আপনার ব্যবসা সর্বদা আপনার মনে থাকে

**মনে রাখবেন**: প্রতিটি সফল ব্যবসা এমন কারো সাথে শুরু হয়েছিল যিনি তাদের ধারণায় বিশ্বাস করেছিলেন এবং পদক্ষেপ নিয়েছিলেন। স্বপ্নদর্শী এবং উদ্যোক্তাদের মধ্যে পার্থক্য হল সম্পাদন।`
         },
         {
            type: 'text',
            title: 'Lesson 2: The Entrepreneurial Mindset',
            content: `**Developing the Right Mindset**

Success in entrepreneurship starts with the right mindset. It's not just about skills or capital - it's about how you think and approach challenges.

**Growth vs. Fixed Mindset**

**Fixed Mindset**: "I'm not good at sales" or "I can't do marketing"
**Growth Mindset**: "I haven't mastered sales yet, but I can learn"

Entrepreneurs with a growth mindset:
- View failures as learning opportunities
- Seek feedback constantly
- Stay curious about customer needs
- Continuously improve their skills

**Key Entrepreneurial Traits**

1. **Problem-Solving Orientation**
   - Don't just identify problems - solve them
   - Think "How can I make this better?"
   - Look for root causes, not symptoms

2. **Customer-Centric Thinking**
   - Your business exists to serve customers
   - Listen more than you talk
   - Obsess over customer pain points
   - Measure success by customer satisfaction

3. **Calculated Risk-Taking**
   - Not reckless gambling, but informed decisions
   - Assess: What's the worst that can happen?
   - Start small, test, then scale
   - Have a backup plan

4. **Persistence and Grit**
   - Most businesses fail in the first year
   - Success comes to those who don't quit
   - Celebrate small wins to stay motivated
   - Remember why you started

5. **Continuous Learning**
   - Read books, attend workshops, find mentors
   - Learn from competitors and other industries
   - Stay updated on market trends
   - Invest in yourself

**Overcoming Fear**

Common entrepreneurial fears:
- Fear of failure: Remember, failure is feedback
- Fear of judgment: Critics don't pay your bills
- Fear of uncertainty: Create systems to reduce chaos
- Fear of responsibility: Start small and grow gradually

**Daily Habits of Successful Entrepreneurs**

- Start the day with a clear priority list
- Spend time on high-impact activities
- Network and build relationships
- Review and reflect on what worked/didn't work
- Take care of physical and mental health

**Action Steps**

1. Write down your biggest fear about starting a business
2. List 3 ways you can mitigate that fear
3. Identify one skill you need to develop this month
4. Find one mentor or entrepreneur to learn from`,
            contentHi: `**सही मानसिकता विकसित करना**

उद्यमिता में सफलता सही मानसिकता से शुरू होती है। यह केवल कौशल या पूंजी के बारे में नहीं है - यह इस बारे में है कि आप कैसे सोचते हैं और चुनौतियों का सामना करते हैं।

**विकास बनाम निश्चित मानसिकता**

**निश्चित मानसिकता**: "मैं बिक्री में अच्छा नहीं हूं" या "मैं मार्केटिंग नहीं कर सकता"
**विकास मानसिकता**: "मैंने अभी तक बिक्री में महारत हासिल नहीं की है, लेकिन मैं सीख सकता हूं"

विकास मानसिकता वाले उद्यमी:
- असफलताओं को सीखने के अवसर के रूप में देखें
- लगातार प्रतिक्रिया मांगें
- ग्राहक की जरूरतों के बारे में जिज्ञासु रहें
- लगातार अपने कौशल में सुधार करें

**मुख्य उद्यमशीलता लक्षण**

1. **समस्या-समाधान अभिविन्यास**
   - केवल समस्याओं की पहचान न करें - उन्हें हल करें
   - सोचें "मैं इसे बेहतर कैसे बना सकता हूं?"
   - लक्षणों के बजाय मूल कारणों की तलाश करें

2. **ग्राहक-केंद्रित सोच**
   - आपका व्यवसाय ग्राहकों की सेवा के लिए मौजूद है
   - बोलने से ज्यादा सुनें
   - ग्राहक दर्द बिंदुओं पर जुनूनी हों
   - ग्राहक संतुष्टि से सफलता को मापें

3. **गणना किए गए जोखिम लेना**
   - लापरवाह जुआ नहीं, बल्कि सूचित निर्णय
   - आकलन करें: सबसे बुरा क्या हो सकता है?
   - छोटे से शुरू करें, परीक्षण करें, फिर स्केल करें
   - एक बैकअप योजना रखें

4. **दृढ़ता और साहस**
   - अधिकांश व्यवसाय पहले वर्ष में विफल हो जाते हैं
   - सफलता उन लोगों के पास आती है जो हार नहीं मानते
   - प्रेरित रहने के लिए छोटी जीत का जश्न मनाएं
   - याद रखें कि आपने क्यों शुरू किया

5. **निरंतर सीखना**
   - किताबें पढ़ें, कार्यशालाओं में भाग लें, सलाहकार खोजें
   - प्रतिस्पर्धियों और अन्य उद्योगों से सीखें
   - बाजार के रुझानों पर अपडेट रहें
   - खुद में निवेश करें

**डर पर काबू पाना**

सामान्य उद्यमशीलता भय:
- असफलता का डर: याद रखें, असफलता प्रतिक्रिया है
- निर्णय का डर: आलोचक आपके बिलों का भुगतान नहीं करते
- अनिश्चितता का डर: अराजकता को कम करने के लिए सिस्टम बनाएं
- जिम्मेदारी का डर: छोटे से शुरू करें और धीरे-धीरे बढ़ें

**सफल उद्यमियों की दैनिक आदतें**

- एक स्पष्ट प्राथमिकता सूची के साथ दिन शुरू करें
- उच्च-प्रभाव गतिविधियों पर समय बिताएं
- नेटवर्क और संबंध बनाएं
- समीक्षा करें और प्रतिबिंबित करें कि क्या काम किया/नहीं किया
- शारीरिक और मानसिक स्वास्थ्य का ध्यान रखें

**कार्रवाई के कदम**

1. व्यवसाय शुरू करने के बारे में अपने सबसे बड़े डर को लिखें
2. 3 तरीके सूचीबद्ध करें जिनसे आप उस डर को कम कर सकते हैं
3. एक कौशल की पहचान करें जिसे आपको इस महीने विकसित करने की आवश्यकता है
4. सीखने के लिए एक सलाहकार या उद्यमी खोजें`,
            contentBn: `**সঠিক মানসিকতা বিকাশ**

উদ্যোক্তায় সাফল্য সঠিক মানসিকতা দিয়ে শুরু হয়। এটি শুধুমাত্র দক্ষতা বা মূলধন সম্পর্কে নয় - এটি আপনি কীভাবে চিন্তা করেন এবং চ্যালেঞ্জগুলির সাথে যোগাযোগ করেন সে সম্পর্কে।

**বৃদ্ধি বনাম নির্দিষ্ট মানসিকতা**

**নির্দিষ্ট মানসিকতা**: "আমি বিক্রয়ে ভাল নই" বা "আমি মার্কেটিং করতে পারি না"
**বৃদ্ধি মানসিকতা**: "আমি এখনও বিক্রয়ে দক্ষতা অর্জন করিনি, তবে আমি শিখতে পারি"

বৃদ্ধি মানসিকতা সহ উদ্যোক্তারা:
- ব্যর্থতাগুলিকে শেখার সুযোগ হিসাবে দেখুন
- ক্রমাগত প্রতিক্রিয়া সন্ধান করুন
- গ্রাহকের চাহিদা সম্পর্কে কৌতূহলী থাকুন
- ক্রমাগত তাদের দক্ষতা উন্নত করুন

**মূল উদ্যোক্তা বৈশিষ্ট্য**

1. **সমস্যা-সমাধান অভিমুখীকরণ**
   - শুধু সমস্যা চিহ্নিত করবেন না - সেগুলি সমাধান করুন
   - ভাবুন "আমি এটি কীভাবে আরও ভাল করতে পারি?"
   - লক্ষণগুলির পরিবর্তে মূল কারণগুলি সন্ধান করুন

2. **গ্রাহক-কেন্দ্রিক চিন্তাভাবনা**
   - আপনার ব্যবসা গ্রাহকদের সেবা করার জন্য বিদ্যমান
   - কথা বলার চেয়ে বেশি শুনুন
   - গ্রাহক ব্যথা পয়েন্টগুলিতে আচ্ছন্ন হন
   - গ্রাহক সন্তুষ্টি দ্বারা সাফল্য পরিমাপ করুন

3. **গণনাকৃত ঝুঁকি নেওয়া**
   - বেপরোয়া জুয়া নয়, তবে অবহিত সিদ্ধান্ত
   - মূল্যায়ন করুন: সবচেয়ে খারাপ কী ঘটতে পারে?
   - ছোট শুরু করুন, পরীক্ষা করুন, তারপর স্কেল করুন
   - একটি ব্যাকআপ পরিকল্পনা রাখুন

4. **অধ্যবসায় এবং সাহস**
   - বেশিরভাগ ব্যবসা প্রথম বছরে ব্যর্থ হয়
   - যারা হাল ছাড়েন না তাদের কাছে সাফল্য আসে
   - অনুপ্রাণিত থাকার জন্য ছোট জয় উদযাপন করুন
   - মনে রাখবেন আপনি কেন শুরু করেছিলেন

5. **ক্রমাগত শেখা**
   - বই পড়ুন, কর্মশালায় যোগ দিন, পরামর্শদাতা খুঁজুন
   - প্রতিযোগী এবং অন্যান্য শিল্প থেকে শিখুন
   - বাজার প্রবণতা সম্পর্কে আপডেট থাকুন
   - নিজের মধ্যে বিনিয়োগ করুন

**ভয় কাটিয়ে ওঠা**

সাধারণ উদ্যোক্তা ভয়:
- ব্যর্থতার ভয়: মনে রাখবেন, ব্যর্থতা হল প্রতিক্রিয়া
- বিচারের ভয়: সমালোচকরা আপনার বিল পরিশোধ করেন না
- অনিশ্চয়তার ভয়: বিশৃঙ্খলা কমাতে সিস্টেম তৈরি করুন
- দায়িত্বের ভয়: ছোট শুরু করুন এবং ধীরে ধীরে বৃদ্ধি করুন

**সফল উদ্যোক্তাদের দৈনিক অভ্যাস**

- একটি স্পষ্ট অগ্রাধিকার তালিকা দিয়ে দিন শুরু করুন
- উচ্চ-প্রভাব কার্যক্রমে সময় ব্যয় করুন
- নেটওয়ার্ক এবং সম্পর্ক তৈরি করুন
- পর্যালোচনা করুন এবং প্রতিফলিত করুন কী কাজ করেছে/করেনি
- শারীরিক এবং মানসিক স্বাস্থ্যের যত্ন নিন

**কর্ম পদক্ষেপ**

1. ব্যবসা শুরু করার বিষয়ে আপনার সবচেয়ে বড় ভয় লিখুন
2. 3টি উপায় তালিকাভুক্ত করুন যা দিয়ে আপনি সেই ভয় কমাতে পারেন
3. একটি দক্ষতা চিহ্নিত করুন যা আপনাকে এই মাসে বিকাশ করতে হবে
4. শেখার জন্য একজন পরামর্শদাতা বা উদ্যোক্তা খুঁজুন`
         },
         // Continue with more lessons...
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
         {
            type: 'text',
            title: 'Lesson 1: Social Media Strategy Fundamentals',
            content: 'Social media is not about posting randomly - it requires strategy. Start by: (1) Defining your target audience - age, location, interests, pain points, (2) Choosing the right platforms - Instagram for visual products, LinkedIn for B2B, Facebook for community building, (3) Creating a content calendar - plan posts in advance, maintain consistency, (4) Engaging authentically - respond to comments, ask questions, share behind-the-scenes content. Remember: Quality over quantity. One meaningful post per day beats five mediocre ones.',
            contentHi: 'सोशल मीडिया यादृच्छिक रूप से पोस्ट करने के बारे में नहीं है - इसके लिए रणनीति की आवश्यकता है। शुरू करें: (1) अपने लक्षित दर्शकों को परिभाषित करें - आयु, स्थान, रुचियां, दर्द बिंदु, (2) सही प्लेटफॉर्म चुनें - दृश्य उत्पादों के लिए Instagram, B2B के लिए LinkedIn, समुदाय निर्माण के लिए Facebook, (3) सामग्री कैलेंडर बनाएं - पोस्ट की पहले से योजना बनाएं, स्थिरता बनाए रखें, (4) प्रामाणिक रूप से संलग्न हों - टिप्पणियों का जवाब दें, प्रश्न पूछें, पर्दे के पीछे की सामग्री साझा करें। याद रखें: मात्रा से अधिक गुणवत्ता। प्रति दिन एक सार्थक पोस्ट पांच औसत दर्जे की पोस्ट को हरा देती है।',
            contentBn: 'সোশ্যাল মিডিয়া এলোমেলোভাবে পোস্ট করার বিষয়ে নয় - এর জন্য কৌশল প্রয়োজন। শুরু করুন: (1) আপনার লক্ষ্য দর্শক সংজ্ঞায়িত করুন - বয়স, অবস্থান, আগ্রহ, ব্যথা পয়েন্ট, (2) সঠিক প্ল্যাটফর্ম নির্বাচন করুন - ভিজ্যুয়াল পণ্যের জন্য Instagram, B2B এর জন্য LinkedIn, সম্প্রদায় নির্মাণের জন্য Facebook, (3) একটি বিষয়বস্তু ক্যালেন্ডার তৈরি করুন - আগে থেকে পোস্টের পরিকল্পনা করুন, ধারাবাহিকতা বজায় রাখুন, (4) সত্যিকারভাবে জড়িত হন - মন্তব্যের উত্তর দিন, প্রশ্ন জিজ্ঞাসা করুন, পর্দার পিছনের বিষয়বস্তু শেয়ার করুন। মনে রাখবেন: পরিমাণের চেয়ে গুণমান। প্রতিদিন একটি অর্থপূর্ণ পোস্ট পাঁচটি মাঝারি পোস্টকে হারায়।'
         },
         {
            type: 'text',
            title: 'Lesson 2: Understanding Your Audience',
            content: 'Before you post, you must listen. Who is your customer? What do they need? Use tools like Analytics to understand demographics. Study your competitors - what works for them? What gaps can you fill? Create customer personas: give them names, ages, professions, goals, and challenges. This makes your marketing more targeted and effective. Use Instagram Insights, Facebook Analytics, and Google Analytics to track: post reach, engagement rate, best posting times, and audience demographics.',
            contentHi: 'पोस्ट करने से पहले, आपको सुनना चाहिए। आपका ग्राहक कौन है? उन्हें क्या चाहिए? जनसांख्यिकी को समझने के लिए Analytics जैसे उपकरणों का उपयोग करें। अपने प्रतिस्पर्धियों का अध्ययन करें - उनके लिए क्या काम करता है? आप कौन से अंतराल भर सकते हैं? ग्राहक व्यक्तित्व बनाएं: उन्हें नाम, आयु, पेशे, लक्ष्य और चुनौतियां दें। यह आपकी मार्केटिंग को अधिक लक्षित और प्रभावी बनाता है। ट्रैक करने के लिए Instagram Insights, Facebook Analytics और Google Analytics का उपयोग करें: पोस्ट पहुंच, सगाई दर, सर्वोत्तम पोस्टिंग समय और दर्शक जनसांख्यिकी।',
            contentBn: 'পোস্ট করার আগে, আপনাকে অবশ্যই শুনতে হবে। আপনার গ্রাহক কে? তাদের কী প্রয়োজন? জনসংখ্যা বুঝতে Analytics এর মতো সরঞ্জাম ব্যবহার করুন। আপনার প্রতিযোগীদের অধ্যয়ন করুন - তাদের জন্য কী কাজ করে? আপনি কোন ফাঁক পূরণ করতে পারেন? গ্রাহক ব্যক্তিত্ব তৈরি করুন: তাদের নাম, বয়স, পেশা, লক্ষ্য এবং চ্যালেঞ্জ দিন। এটি আপনার মার্কেটিংকে আরও লক্ষ্যবস্তু এবং কার্যকর করে তোলে। ট্র্যাক করতে Instagram Insights, Facebook Analytics এবং Google Analytics ব্যবহার করুন: পোস্ট পৌঁছানো, এনগেজমেন্ট রেট, সেরা পোস্টিং সময় এবং দর্শক জনসংখ্যা।'
         },
         {
            type: 'text',
            title: 'Lesson 3: Content Creation & Branding',
            content: 'Your brand is your promise to customers. Build it through: (1) Consistent visual identity - colors, fonts, logo usage, (2) Authentic voice - speak like your ideal customer would appreciate, (3) Value-driven content - educate, entertain, or inspire (not just sell), (4) Storytelling - share your journey, customer success stories, behind-the-scenes moments. Content types that work: educational carousels, customer testimonials, product demonstrations, industry tips, motivational quotes with your branding. Post consistently but never sacrifice quality for quantity.',
            contentHi: 'आपका ब्रांड ग्राहकों के लिए आपका वादा है। इसके माध्यम से इसे बनाएं: (1) सुसंगत दृश्य पहचान - रंग, फ़ॉन्ट, लोगो उपयोग, (2) प्रामाणिक आवाज - अपने आदर्श ग्राहक की तरह बोलें, (3) मूल्य-संचालित सामग्री - शिक्षित करें, मनोरंजन करें, या प्रेरित करें (केवल बेचें नहीं), (4) कहानी कहना - अपनी यात्रा, ग्राहक सफलता की कहानियां, पर्दे के पीछे के क्षण साझा करें। सामग्री प्रकार जो काम करते हैं: शैक्षिक कैरोसेल, ग्राहक प्रशंसापत्र, उत्पाद प्रदर्शन, उद्योग युक्तियां, आपके ब्रांडिंग के साथ प्रेरक उद्धरण। लगातार पोस्ट करें लेकिन मात्रा के लिए कभी भी गुणवत्ता का त्याग न करें।',
            contentBn: 'আপনার ব্র্যান্ড গ্রাহকদের কাছে আপনার প্রতিশ্রুতি। এর মাধ্যমে এটি তৈরি করুন: (1) সামঞ্জস্যপূর্ণ ভিজ্যুয়াল পরিচয় - রঙ, ফন্ট, লোগো ব্যবহার, (2) প্রামাণিক কণ্ঠস্বর - আপনার আদর্শ গ্রাহক যেমন প্রশংসা করবেন তেমন কথা বলুন, (3) মূল্য-চালিত বিষয়বস্তু - শিক্ষিত করুন, বিনোদন দিন বা অনুপ্রাণিত করুন (শুধু বিক্রি নয়), (4) গল্প বলা - আপনার যাত্রা, গ্রাহক সাফল্যের গল্প, পর্দার পিছনের মুহূর্তগুলি শেয়ার করুন। বিষয়বস্তুর ধরন যা কাজ করে: শিক্ষামূলক ক্যারোসেল, গ্রাহক প্রশংসাপত্র, পণ্য প্রদর্শন, শিল্প টিপস, আপনার ব্র্যান্ডিং সহ অনুপ্রেরণামূলক উদ্ধৃতি। ধারাবাহিকভাবে পোস্ট করুন কিন্তু পরিমাণের জন্য কখনই গুণমান ত্যাগ করবেন না।'
         },
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
         {
            type: 'text',
            title: 'Lesson 1: Cash Flow Management Essentials',
            content: 'Cash flow is the lifeblood of your business. Many profitable businesses fail due to poor cash flow management. Key principles: (1) Track every rupee - use apps like Zoho Books or simple Excel sheets, (2) Separate personal and business finances - open a business bank account, (3) Maintain a cash reserve - aim for 3-6 months of operating expenses, (4) Invoice promptly - send invoices immediately after delivery, (5) Follow up on payments - polite reminders after 7, 14, and 21 days. Calculate your cash runway: Current Cash ÷ Monthly Burn Rate = Months of Runway. Monitor this weekly.',
            contentHi: 'नकदी प्रवाह आपके व्यवसाय की जीवनरेखा है। कई लाभदायक व्यवसाय खराब नकदी प्रवाह प्रबंधन के कारण विफल हो जाते हैं। मुख्य सिद्धांत: (1) हर रुपये को ट्रैक करें - Zoho Books जैसे ऐप्स या सरल Excel शीट का उपयोग करें, (2) व्यक्तिगत और व्यावसायिक वित्त को अलग करें - एक व्यावसायिक बैंक खाता खोलें, (3) नकद आरक्षित बनाए रखें - 3-6 महीने के परिचालन खर्चों का लक्ष्य रखें, (4) तुरंत चालान भेजें - डिलीवरी के तुरंत बाद चालान भेजें, (5) भुगतान पर फॉलो अप करें - 7, 14 और 21 दिनों के बाद विनम्र अनुस्मारक। अपनी नकदी रनवे की गणना करें: वर्तमान नकदी ÷ मासिक बर्न रेट = रनवे के महीने। इसे साप्ताहिक रूप से मॉनिटर करें।',
            contentBn: 'নগদ প্রবাহ আপনার ব্যবসার জীবনরেখা। অনেক লাভজনক ব্যবসা দুর্বল নগদ প্রবাহ ব্যবস্থাপনার কারণে ব্যর্থ হয়। মূল নীতিগুলি: (1) প্রতিটি টাকা ট্র্যাক করুন - Zoho Books এর মতো অ্যাপ বা সাধারণ Excel শীট ব্যবহার করুন, (2) ব্যক্তিগত এবং ব্যবসায়িক অর্থ আলাদা করুন - একটি ব্যবসায়িক ব্যাংক অ্যাকাউন্ট খুলুন, (3) নগদ রিজার্ভ বজায় রাখুন - 3-6 মাসের অপারেটিং খরচের লক্ষ্য রাখুন, (4) অবিলম্বে চালান পাঠান - ডেলিভারির পরে অবিলম্বে চালান পাঠান, (5) পেমেন্টে ফলো আপ করুন - 7, 14 এবং 21 দিন পরে ভদ্র অনুস্মারক। আপনার নগদ রানওয়ে গণনা করুন: বর্তমান নগদ ÷ মাসিক বার্ন রেট = রানওয়ের মাস। এটি সাপ্তাহিক পর্যবেক্ষণ করুন।'
         },
         {
            type: 'text',
            title: 'Lesson 2: Basics of GST',
            content: 'Goods and Services Tax (GST) is a comprehensive indirect tax on manufacture, sale, and consumption of goods and services throughout India. Key points for small businesses: (1) Registration required if annual turnover exceeds ₹40 lakhs (₹20 lakhs for services), (2) GST rates: 5%, 12%, 18%, 28% depending on product/service category, (3) File returns monthly (GSTR-1, GSTR-3B) or quarterly (for small businesses), (4) Maintain proper invoices with GST number, (5) Claim Input Tax Credit (ITC) on business purchases. Use GST portal (gst.gov.in) for registration and filing. Consider hiring a CA for compliance if turnover is significant.',
            contentHi: 'वस्तु और सेवा कर (GST) पूरे भारत में वस्तुओं और सेवाओं के निर्माण, बिक्री और उपभोग पर एक व्यापक अप्रत्यक्ष कर है। छोटे व्यवसायों के लिए मुख्य बिंदु: (1) यदि वार्षिक कारोबार ₹40 लाख (सेवाओं के लिए ₹20 लाख) से अधिक है तो पंजीकरण आवश्यक है, (2) GST दरें: उत्पाद/सेवा श्रेणी के आधार पर 5%, 12%, 18%, 28%, (3) मासिक (GSTR-1, GSTR-3B) या त्रैमासिक (छोटे व्यवसायों के लिए) रिटर्न दाखिल करें, (4) GST नंबर के साथ उचित चालान बनाए रखें, (5) व्यावसायिक खरीद पर इनपुट टैक्स क्रेडिट (ITC) का दावा करें। पंजीकरण और फाइलिंग के लिए GST पोर्टल (gst.gov.in) का उपयोग करें। यदि कारोबार महत्वपूर्ण है तो अनुपालन के लिए CA को नियुक्त करने पर विचार करें।',
            contentBn: 'পণ্য ও পরিষেবা কর (GST) সমগ্র ভারত জুড়ে পণ্য এবং পরিষেবার উত্পাদন, বিক্রয় এবং ব্যবহারের উপর একটি ব্যাপক পরোক্ষ কর। ছোট ব্যবসার জন্য মূল পয়েন্ট: (1) বার্ষিক টার্নওভার ₹40 লক্ষ (পরিষেবার জন্য ₹20 লক্ষ) অতিক্রম করলে নিবন্ধন প্রয়োজন, (2) GST হার: পণ্য/পরিষেবা বিভাগের উপর নির্ভর করে 5%, 12%, 18%, 28%, (3) মাসিক (GSTR-1, GSTR-3B) বা ত্রৈমাসিক (ছোট ব্যবসার জন্য) রিটার্ন ফাইল করুন, (4) GST নম্বর সহ সঠিক চালান বজায় রাখুন, (5) ব্যবসায়িক ক্রয়ের উপর ইনপুট ট্যাক্স ক্রেডিট (ITC) দাবি করুন। নিবন্ধন এবং ফাইলিংয়ের জন্য GST পোর্টাল (gst.gov.in) ব্যবহার করুন। টার্নওভার উল্লেখযোগ্য হলে সম্মতির জন্য একজন CA নিয়োগ বিবেচনা করুন।'
         },
         {
            type: 'text',
            title: 'Lesson 3: Basic Bookkeeping',
            content: 'Good bookkeeping prevents financial chaos. Essential practices: (1) Record all transactions daily - sales, purchases, expenses, (2) Categorize expenses - rent, utilities, marketing, salaries, raw materials, (3) Reconcile bank statements monthly - match your records with bank records, (4) Track receivables and payables - who owes you money, whom do you owe, (5) Generate monthly reports - Profit & Loss Statement, Balance Sheet. Use accounting software like Tally, Zoho Books, or QuickBooks. Even a simple Excel sheet works if maintained diligently. Review your numbers weekly to spot trends and issues early.',
            contentHi: 'अच्छी बहीखाता वित्तीय अराजकता को रोकती है। आवश्यक प्रथाएं: (1) सभी लेनदेन दैनिक रिकॉर्ड करें - बिक्री, खरीद, खर्च, (2) खर्चों को वर्गीकृत करें - किराया, उपयोगिताओं, मार्केटिंग, वेतन, कच्चा माल, (3) मासिक बैंक स्टेटमेंट का मिलान करें - अपने रिकॉर्ड को बैंक रिकॉर्ड से मिलाएं, (4) प्राप्य और देय को ट्रैक करें - कौन आपको पैसे देता है, आप किसे देते हैं, (5) मासिक रिपोर्ट उत्पन्न करें - लाभ और हानि विवरण, बैलेंस शीट। Tally, Zoho Books या QuickBooks जैसे लेखा सॉफ्टवेयर का उपयोग करें। यदि लगन से बनाए रखा जाए तो एक सरल Excel शीट भी काम करती है। रुझानों और मुद्दों को जल्दी पहचानने के लिए अपने नंबरों की साप्ताहिक समीक्षा करें।',
            contentBn: 'ভাল হিসাবরক্ষণ আর্থিক বিশৃঙ্খলা প্রতিরোধ করে। প্রয়োজনীয় অনুশীলন: (1) সমস্ত লেনদেন দৈনিক রেকর্ড করুন - বিক্রয়, ক্রয়, খরচ, (2) খরচ শ্রেণীবদ্ধ করুন - ভাড়া, ইউটিলিটি, মার্কেটিং, বেতন, কাঁচামাল, (3) মাসিক ব্যাংক স্টেটমেন্ট মিলান করুন - আপনার রেকর্ডগুলি ব্যাংক রেকর্ডের সাথে মিলান করুন, (4) প্রাপ্য এবং প্রদেয় ট্র্যাক করুন - কে আপনাকে টাকা দেয়, আপনি কাকে দেন, (5) মাসিক রিপোর্ট তৈরি করুন - লাভ ও ক্ষতি বিবৃতি, ব্যালেন্স শীট। Tally, Zoho Books বা QuickBooks এর মতো অ্যাকাউন্টিং সফ্টওয়্যার ব্যবহার করুন। যদি পরিশ্রমের সাথে বজায় রাখা হয় তবে একটি সাধারণ Excel শীটও কাজ করে। প্রবণতা এবং সমস্যাগুলি তাড়াতাড়ি সনাক্ত করতে সাপ্তাহিক আপনার সংখ্যা পর্যালোচনা করুন।'
         }
      ]
   },
   {
      id: 'cyber-security-cert',
      title: 'Cyber Security & Ethical Hacking',
      description: 'Advanced certification in Network Defense, Ethical Hacking, and Security Analysis.',
      duration: '6 Months',
      level: 'Advanced',
      materials: [
         {
            type: 'text',
            title: 'Program Syllabus & Exam Guide',
            content: `**Cyber Security Certification Program**

This comprehensive program covers the essential skills required for a career in Cyber Security.

**Module 1: Introduction to Cyber Security**
- Fundamentals of Information Security
- CIA Triad (Confidentiality, Integrity, Availability)
- Types of Cyber Attacks & Threat Actors
- Legal & Ethical Aspects of Hacking

**Module 2: Networking & Security Basics**
- OSI Model & TCP/IP Protocol Suite
- IP Addressing, Subnetting & Routing
- Ports, Protocols & Services (HTTP, FTP, SSH, DNS)
- Network Devices (Firewalls, Routers, Switches)

**Module 3: Ethical Hacking & Penetration Testing**
- Phases of Hacking (Reconnaissance, Scanning, Gaining Access)
- Vulnerability Assessment vs. Penetration Testing
- System Hacking: Password Cracking & Privilege Escalation
- Social Engineering Attacks

**Module 4: Web Application Security**
- OWASP Top 10 Vulnerabilities
- SQL Injection (SQLi) & Cross-Site Scripting (XSS)
- Session Hijacking & CSRF
- Web Server Security & Hardening

**Module 5: Security Monitoring & Analysis**
- Introduction to SIEM
- Log Analysis & Incident Response
- Network Traffic Analysis with Wireshark
- Intrusion Detection & Prevention Systems (IDS/IPS)

**Module 6: Cloud Security & Future Trends**
- Cloud Computing Models (IaaS, PaaS, SaaS)
- Cloud Security Challenges & Best Practices
- IoT Security & Mobile Device Security

**Certification Exam Information**
- **Format**: 20 Scenario-based Multiple Choice Questions
- **Passing Score**: 70%
- **Time Limit**: 45 Minutes
- **Certificate**: Globally valid certificate upon passing.

**Note**: This is a rigorous exam designed to test your practical understanding. Please ensure you have completed the training before attempting.`,
            contentHi: `**साइबर सुरक्षा प्रमाणन कार्यक्रम**

यह व्यापक कार्यक्रम साइबर सुरक्षा में करियर के लिए आवश्यक आवश्यक कौशल को शामिल करता है।

**मॉड्यूल 1: साइबर सुरक्षा का परिचय**
- सूचना सुरक्षा के मूल सिद्धांत
- सीआईए ट्रायड (गोपनीयता, अखंडता, उपलब्धता)
- साइबर हमलों और खतरे के अभिनेताओं के प्रकार
- हैकिंग के कानूनी और नैतिक पहलू

**मॉड्यूल 2: नेटवर्किंग और सुरक्षा मूल बातें**
- ओएसआई मॉडल और टीसीपी/आईपी प्रोटोकॉल सूट
- आईपी एड्रेसिंग, सबनेटिंग और रूटिंग
- पोर्ट, प्रोटोकॉल और सेवाएं (HTTP, FTP, SSH, DNS)
- नेटवर्क डिवाइस (फायरवॉल, राउटर, स्विच)

**मॉड्यूल 3: एथिकल हैकिंग और पेनेट्रेशन टेस्टिंग**
- हैकिंग के चरण (टोही, स्कैनिंग, पहुंच प्राप्त करना)
- भेद्यता मूल्यांकन बनाम पेनेट्रेशन टेस्टिंग
- सिस्टम हैकिंग: पासवर्ड क्रैकिंग और विशेषाधिकार वृद्धि
- सोशल इंजीनियरिंग हमले

**मॉड्यूल 4: वेब एप्लिकेशन सुरक्षा**
- OWASP शीर्ष 10 कमजोरियां
- SQL इंजेक्शन (SQLi) और क्रॉस-साइट स्क्रिप्टिंग (XSS)
- सत्र अपहरण और CSRF
- वेब सर्वर सुरक्षा और सख्त करना

**मॉड्यूल 5: सुरक्षा निगरानी और विश्लेषण**
- SIEM का परिचय
- लॉग विश्लेषण और घटना प्रतिक्रिया
- वायरशार्क के साथ नेटवर्क ट्रैफ़िक विश्लेषण
- घुसपैठ का पता लगाने और रोकथाम प्रणाली (IDS/IPS)

**मॉड्यूल 6: क्लाउड सुरक्षा और भविष्य के रुझान**
- क्लाउड कंप्यूटिंग मॉडल (IaaS, PaaS, SaaS)
- क्लाउड सुरक्षा चुनौतियां और सर्वोत्तम प्रथाएं
- IoT सुरक्षा और मोबाइल डिवाइस सुरक्षा

**परीक्षा जानकारी**
- **प्रारूप**: 20 परिदृश्य-आधारित बहुविकल्पीय प्रश्न
- **उत्तीर्ण अंक**: 70%
- **समय सीमा**: 45 मिनट
- **प्रमाणपत्र**: उत्तीर्ण होने पर विश्व स्तर पर मान्य प्रमाण पत्र।`,
            contentBn: `**সাইবার নিরাপত্তা সার্টিফিকেশন প্রোগ্রাম**

এই ব্যাপক প্রোগ্রামটি সাইবার নিরাপত্তায় ক্যারিয়ারের জন্য প্রয়োজনীয় দক্ষতাগুলি কভার করে।

**মডিউল 1: সাইবার নিরাপত্তার ভূমিকা**
- তথ্য নিরাপত্তার মৌলিক বিষয়
- সিআইএ ট্রায়াড (গোপনীয়তা, সততা, প্রাপ্যতা)
- সাইবার আক্রমণ এবং হুমকি অভিনেতাদের প্রকার
- হ্যাকিংয়ের আইনি ও নৈতিক দিক

**মডিউল 2: নেটওয়ার্কিং এবং নিরাপত্তা বেসিক**
- ওএসআই মডেল এবং টিসিপি/আইপি প্রোটোকল স্যুট
- আইপি অ্যাড্রেসিং, সাবনেটিং এবং রাউটিং
- পোর্ট, প্রোটোকল এবং পরিষেবা (HTTP, FTP, SSH, DNS)
- নেটওয়ার্ক ডিভাইস (ফায়ারওয়াল, রাউটার, সুইচ)

**মডিউল 3: এথিক্যাল হ্যাকিং এবং পেনিট্রেশন টেস্টিং**
- হ্যাকিংয়ের পর্যায় (রেকনেসান্স, স্ক্যানিং, অ্যাক্সেস লাভ)
- দুর্বলতা মূল্যায়ন বনাম পেনিট্রেশন টেস্টিং
- সিস্টেম হ্যাকিং: পাসওয়ার্ড ক্র্যাকিং এবং প্রিভিলেজ এসকেলেশন
- সোশ্যাল ইঞ্জিনিয়ারিং অ্যাটাক

**মডিউল 4: ওয়েব অ্যাপ্লিকেশন নিরাপত্তা**
- OWASP শীর্ষ 10 দুর্বলতা
- এসকিউএল ইনজেকশন (SQLi) এবং ক্রস-সাইট স্ক্রিপ্টিং (XSS)
- সেশন হাইjacking এবং CSRF
- ওয়েব সার্ভার নিরাপত্তা এবং হার্ডেনিং

**মডিউল 5: নিরাপত্তা পর্যবেক্ষণ এবং বিশ্লেষণ**
- SIEM এর ভূমিকা
- লগ বিশ্লেষণ এবং ঘটনা প্রতিক্রিয়া
- ওয়্যারশার্কের সাথে নেটওয়ার্ক ট্রাফিক বিশ্লেষণ
- অনুপ্রবেশ সনাক্তকরণ এবং প্রতিরোধ ব্যবস্থা (IDS/IPS)

**মডিউল 6: ক্লাউড নিরাপত্তা এবং ভবিষ্যতের প্রবণতা**
- ক্লাউড কম্পিউটিং মডেল (IaaS, PaaS, SaaS)
- ক্লাউড নিরাপত্তা চ্যালেঞ্জ এবং সর্বোত্তম অনুশীলন
- আইওটি নিরাপত্তা এবং মোবাইল ডিভাইস নিরাপত্তা

**পরীক্ষার তথ্য**
- **ফরম্যাট**: 20টি দৃশ্যকল্প-ভিত্তিক মাল্টিপল চয়েস প্রশ্ন
- **পাসিং স্কোর**: 70%
- **সময়সীমা**: 45 মিনিট
- **সার্টিফিকেট**: পাস করার পর বিশ্বব্যাপী বৈধ সার্টিফিকেট।`
         }
      ]
   }
];
