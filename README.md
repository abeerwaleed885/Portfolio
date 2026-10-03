# Abeer Awad - Minimalist Bilingual Portfolio

A high-performance, minimalist personal portfolio website for **Abeer Awad (عبير عوض)** (Computer Engineering Junior | Software & Data Engineering Enthusiast). Built using modern React.js, Tailwind CSS, and full internationalization (i18n) supporting both **English (LTR)** and **Arabic (RTL)** with seamless dynamic switching.

---

## 🚀 How to Publish to the Live Internet (Free & Instant — No Localhost)

You can publish this portfolio to the public web for 100% free with SSL HTTPS in under 1 minute. Choose whichever method you prefer:

### 🌟 Method 1: Netlify Drop (Fastest & Easiest — 30 Seconds, Zero Setup)
1. Open your browser and go to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Sign in or create a free Netlify account.
3. Drag and drop your `portfoilio` folder directly into the upload area in your browser window.
4. **Done!** Netlify will deploy it instantly and give you a public URL (like `https://calm-breeze-123.netlify.app`).
5. *Optional:* In Netlify's **Site Configuration -> Change site name**, you can change the URL to `https://abeer-awad.netlify.app` or connect a custom domain!

---

### 🌟 Method 2: GitHub Pages (Ideal for Developers & GitHub Profile)
1. Log in to your GitHub account and open: **[https://github.com/new](https://github.com/new)**
2. Name your repository (for example: `portfolio` or `abeer-awad-portfolio`).
3. Set it to **Public** and click **Create repository**.
4. In the new repository screen, click the link: **"uploading an existing file"**.
5. Drag and drop `index.html` (and any other files from this folder) into the browser and click **Commit changes**.
6. Go to repository **Settings** (top tab) ➔ **Pages** (left sidebar).
7. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
8. Within 60 seconds, your portfolio will be live at:
   `https://<your-github-username>.github.io/portfolio`

---

### 🌟 Method 3: Vercel
1. Go to **[https://vercel.com](https://vercel.com)** and sign up / sign in (free).
2. Click **Add New... ➔ Project**.
3. Import your GitHub repository or drag and drop your project directory.
4. Click **Deploy**. Vercel gives you an instant global CDN link (e.g., `https://abeer-awad.vercel.app`).

---

## 🎨 Design Philosophy & UI/UX

- **Strict Minimalist Aesthetic:** Editorial typography, generous whitespace, structured card layouts, and subtle hairline borders.
- **Strict Light Mode Only:** Pure White (`#FFFFFF`) background with high-contrast Dark Charcoal (`#18181B`) text. Dark mode is intentionally omitted.
- **Sticky-Note Pastel Accents:**
  - 🍑 **Pastel Peach / Warm Amber** (`#FCE4D6` / `#FCD5B4`): Primary highlights, active language switch, and data engineering tags.
  - 💧 **Soft Pastel Blue** (`#E0F2FE` / `#BAE6FD`): Systems, cloud, and backend tags.
  - 🌸 **Soft Pastel Pink** (`#FFE4E6` / `#FECDD3`): Object-oriented concepts and core competencies.
  - 🌿 **Soft Pastel Sage / Mint** (`#DCFCE7` / `#BBF7D0`): Embedded systems, hardware, and assistive tech.
- **Zero Personal Photos:** Visual appeal is crafted purely through typographic hierarchy, card architecture, and minimal vector shapes/icons.

---

## 🌐 Bilingual Support (i18n & RTL/LTR)

- **One-Click Switcher:** Easily toggle between **English** and **العربية** in the navigation header.
- **Dynamic Direction:** Automatically updates `<html dir="ltr" lang="en">` or `<html dir="rtl" lang="ar">`.
- **Typographic Harmonization:**
  - English: **Inter** / Clean geometric sans-serif.
  - Arabic: **Tajawal** / High-legibility modern Arabic typeface.
- **Persisted Preference:** Saves the chosen language in `localStorage`.

---

## 📁 Project Structure

```text
portfoilio/
├── index.html                   # Zero-dependency instant-run React 18 application
├── serve.py                     # One-click Python server (runs at http://localhost:3000)
├── package.json                 # Modular project dependencies (Vite + React + Tailwind)
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Tailwind configuration with pastel palette & typography
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation & deployment guide
└── src/
    ├── main.jsx                 # Vite application entry point
    ├── App.jsx                  # Main App shell
    ├── index.css                # Global styles, fonts, and light mode rules
    ├── context/
    │   └── LanguageContext.jsx  # React Context for bilingual state & RTL management
    ├── data/
    │   └── portfolioData.js     # English & Arabic content dictionary
    └── components/
        ├── Navbar.jsx           # Sticky nav with language toggle & smooth scroll
        ├── Hero.jsx             # Minimalist hero (objective, stats, copy email)
        ├── Experience.jsx       # Clean timeline (FlyRank AI, DEPI, CIB)
        ├── Projects.jsx         # Minimalist project cards & architecture modal
        ├── Skills.jsx           # Sticky-note pastel tags & category filters
        ├── Education.jsx        # Nile University, B.Sc., CGPA 3.33 card
        ├── Contact.jsx          # Contact details, quick message form, social links
        ├── Footer.jsx           # Minimal footer & back-to-top button
        └── Toast.jsx            # Micro-interaction floating alert
```

---

## 💻 Local Testing

- **Direct in browser:** Double click `index.html`.
- **Or Python server:** Run `python serve.py` or `python -m http.server 3000` and visit `http://localhost:3000`.

---

## 🛠️ Content Summary Included

1. **Hero / About:**
   - **Name:** Abeer Awad (عبير عوض)
   - **Role:** Computer Engineering Junior | Software & Data Engineering Enthusiast
   - **Institution:** Nile University (Expected 2028)
   - **GPA:** 3.33 / 4.00
   - **Objective:** Focus on OOP, Data Structures, Backend Systems, C++, Python, and SQL.
2. **Projects:**
   - **IoT-Based Waste Management Platform:** SQL, MySQL, IoT, Route Optimization.
   - **Music Player Application:** Python UI with high-throughput C++ backend.
   - **Shopping Cart Application:** C++, SFML, OOP, SOLID principles.
   - **Smart Blind Stick:** Arduino, C, AI heuristics, hardware sensors.
3. **Experience:**
   - **AI Backend Intern** — FlyRank AI
   - **Microsoft Data Engineer Trainee** — DEPI
   - **Generative AI & Core Banking Summer Intern** — CIB
4. **Skills:**
   - **Languages:** C++, Python, SQL, C, MATLAB, HTML/CSS
   - **Core:** OOP, Data Structures & Algorithms, Data Engineering, Backend Development, AI, Embedded Systems
   - **Tools:** Microsoft Azure, SFML, Arduino IDE, MySQL
5. **Contact:**
   - **Email:** `abeerwaleed885@gmail.com`
   - **Location:** Giza, Egypt
   - **LinkedIn & GitHub:** Minimalist icons & links

---

## 📄 License
© 2026 Abeer Awad. All rights reserved.
