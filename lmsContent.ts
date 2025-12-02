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
    }
];
