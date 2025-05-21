# 🧠 Supabase MySQL for Certification Study Platform

A static HTML/JavaScript web app designed to help users prepare for technical certifications. Now enhanced with Supabase for dynamic content, quiz tracking, and user progress.

## 🔗 Live Site
https://rvale92.github.io/certification-study-platform

## 📁 Project Structure
```bash
.
├── index.html                # Main HTML page
├── style.css                # Stylesheet
├── scripts.js               # Main JavaScript (frontend logic)
├── supabase/
│   ├── supabaseClient.js    # Supabase client setup
│   └── helpers.js           # Helper functions to fetch and save data
├── test_supabase_integration.html  # Manual test page for Supabase
└── README.md
```

## 🧰 Tech Stack
- HTML/CSS/JavaScript
- Supabase (for backend-as-a-service)
- GitHub Pages (for static hosting)

## ⚙️ How to Use / Develop

1. **Clone the repo:**
   ```bash
   git clone https://github.com/rvale92/certification-study-platform.git
   cd certification-study-platform
   ```

2. **Update Supabase Credentials:**
   - Open `supabase/supabaseClient.js`
   - Replace with your actual `SUPABASE_URL` and `SUPABASE_ANON_KEY`

3. **Run locally:**
   Since it's a static site, you can open `index.html` directly in your browser or use a local dev server:
   ```bash
   npx serve .
   ```

4. **Test Supabase connection:**
   Open `test_supabase_integration.html` in your browser to verify database fetches.

## 🧪 Supabase Features
- Stores quizzes and certification data
- Tracks user scores and progress
- Uses JSON for quiz questions

## 🛡️ Git Snapshots
- Before Supabase: `backup-before-supabase-setup`
- After integration: `supabase-integration-setup`

## 🚀 Deployment
This site is auto-deployed using GitHub Pages from the main branch. To deploy changes:

```bash
git add .
git commit -m "Update"
git push
```

## 🌟 Features

- **Multiple Certification Paths**
  - JNCIA (Juniper Networks)
  - CCNA (Cisco)
  - Security+ (CompTIA)
  - SC-205 (Microsoft)

- **Interactive Learning Tools**
  - Detailed topic breakdowns
  - Practice quizzes
  - Progress tracking
  - Performance analytics

## 🛠️ Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Vite
  - Material-UI (MUI)
  - React Router

- **Backend**
  - Supabase
  - PostgreSQL with RLS (Row Level Security)

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rvale92/Supabase_learning.git
   cd Supabase_learning
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=https://mkivdveacuoazqgaigah.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📚 Project Structure

```
certification-study-platform/
├── src/
│   ├── components/     # React components
│   ├── supabase/      # Supabase client and configs
│   ├── types/         # TypeScript definitions
│   ├── utils/         # Utility functions
│   └── App.tsx        # Main application component
├── public/            # Static assets
└── vite.config.ts     # Vite configuration
```

## 🗄️ Database Schema

### Tables

1. **certifications**
   - Stores certification metadata
   - Includes exam details, prerequisites, and validity

2. **topics**
   - Links to certifications
   - Contains detailed study materials
   - Tracks topic weightage

3. **quizzes**
   - Practice questions and answers
   - Performance tracking
   - Time limits and scoring

## 🔒 Security Features

- Row Level Security (RLS) implementation
- Secure authentication flow
- Protected API endpoints
- Environment variable management

## 🎯 Roadmap

- [ ] User authentication and profiles
- [ ] Study progress tracking
- [ ] Interactive flashcards
- [ ] Mobile responsiveness
- [ ] Offline mode support
- [ ] Performance analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request


---

Made with ❤️ by Reimundo Valentin
