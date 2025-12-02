# How to Add More Translations to LMS

## What's Been Implemented

✅ Language selector UI (English | Hindi | Bengali)
✅ Type definitions for multi-language content
✅ Sample translation for Lesson 1 of Entrepreneurship Basics

## How to Add More Translations

### Step 1: Locate the Lesson in App.tsx

Find the `LMS_MODULES` array (around line 145). Each lesson looks like this:

```tsx
{ 
  type: 'text', 
  title: 'Lesson 2: The Entrepreneurial Mindset', 
  content: 'English content here...'
},
```

### Step 2: Add Hindi and Bengali Content

Update the lesson to include `contentHi` and `contentBn`:

```tsx
{ 
  type: 'text', 
  title: 'Lesson 2: The Entrepreneurial Mindset', 
  content: 'English content here...',
  contentHi: 'हिंदी सामग्री यहाँ...',
  contentBn: 'বাংলা বিষয়বস্তু এখানে...'
},
```

### Step 3: Translation Tips

**For Hindi:**
- Use Google Translate or a professional translator
- Keep business terminology in English if commonly used (e.g., "Business Plan")
- Maintain the numbered list format: (1), (2), (3)

**For Bengali:**
- Similar approach as Hindi
- Ensure proper Bengali script rendering

### Step 4: Test

1. Run `npm run dev`
2. Navigate to LMS
3. Switch between languages using the selector
4. Verify content displays correctly

## Current Status

**Translated:**
- Entrepreneurship Basics > Lesson 1 ✅

**Needs Translation:**
- Entrepreneurship Basics > Lessons 2-3
- Digital Marketing 101 > All lessons
- Financial Literacy > All lessons

## Example: Full Lesson Structure

```tsx
{
  type: 'text',
  title: 'Lesson 1: Welcome to Entrepreneurship',
  content: `**Introduction to Entrepreneurship**

Entrepreneurship is the journey...

**Key Points:**
1. Vision
2. Resilience
3. Adaptability`,
  contentHi: `**उद्यमिता का परिचय**

उद्यमिता यात्रा है...

**मुख्य बिंदु:**
1. दृष्टि
2. लचीलापन
3. अनुकूलनशीलता`,
  contentBn: `**উদ্যোক্তার পরিচয**

উদ্যোক্তা যাত্রা...

**মূল পয়েন্ট:**
1. দৃষ্টি
2. স্থিতিস্থাপকতা
3. অভিযোজনযোগ্যতা`
}
```

## Notes

- The language selector automatically shows/hides based on available translations
- If a translation is missing, it falls back to English
- Use `whitespace-pre-wrap` class to preserve formatting
