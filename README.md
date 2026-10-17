# Undergraduate Microbiology & Laboratory Science Portfolio

A modern, responsive personal portfolio website tailored for an undergraduate student at the **University of Sri Jayewardenepura, Sri Lanka** applying for **Microbiology and Laboratory internships**.

Designed with a clean aesthetic featuring deep navy blue, teal, subtle mint accents, smooth animations, and an interactive scientific motif.

---

## 🔬 Key Highlights & Architecture

- **100% Public-Facing & Read-Only**: No admin dashboards, no login screens, no CMS, and no editing buttons visible to visitors.
- **Centralized Data File**: All personal profile details, education history, skills, project showcases, gallery photos, and contact info reside in a single, well-documented file: [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js).
- **Zero Build Step Required**: Built with standard modern HTML5, CSS3, and ES6 JavaScript modules. Runs directly in any web browser or lightweight local server.
- **Working CV Download**: Includes a genuine formatted PDF CV template located in [`assets/docs/CV_Microbiology_Undergraduate.pdf`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/assets/docs/CV_Microbiology_Undergraduate.pdf).
- **Curated Scientific Imagery**: Local high-resolution scientific photography and SVG illustrations (microscopes, petri dishes, cellular structures, titration practicals) stored locally in [`assets/images/`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/assets/images/).
- **Accessible & Responsive**: WCAG AA compliant contrast, keyboard navigation, focus management, modal dialogs with escape-key support, and mobile navigation drawer.

---

## 🚀 How to Run the Website Locally

You can launch the portfolio locally using any of the methods below:

### Option A: Using Python (Recommended & Built-in)

Open your terminal or PowerShell in this project folder and run:

```bash
# Start a local web server on port 3000
python -m http.server 3000
```

Now open your web browser and visit:
👉 **`http://localhost:3000`**

### Option B: Using VS Code "Live Server" Extension

1. Open the project folder in VS Code.
2. Right-click on [`index.html`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/index.html).
3. Select **"Open with Live Server"**.

---

## 📁 Project Structure

```text
samudi akka/
├── index.html                   # Main semantic HTML structure & metadata
├── README.md                    # Comprehensive documentation & update guide
├── assets/
│   ├── docs/
│   │   └── CV_Microbiology_Undergraduate.pdf  # Downloadable PDF CV file
│   └── images/
│       ├── favicon.svg          # Scientific microscope & molecule SVG favicon
│       ├── profile-placeholder.svg # Modern scientific portrait placeholder SVG
│       ├── microscope.jpg       # High-res optical compound microscope
│       ├── petri-dish.jpg       # Microbiology agar plates & culture setup
│       ├── chemistry-lab.jpg    # Volumetric titration & chemistry glassware
│       ├── cellular-structure.jpg # Microscopic cellular histology visual
│       ├── biology-specimen.jpg # Biological zoology research specimen
│       ├── lab-workstation.jpg  # Sterile clean-bench workstation
│       ├── project-microbiology.jpg # Microbiology practical showcase
│       ├── project-zoology.jpg  # Zoology academic specimen study
│       └── project-chemistry.jpg # Chemistry quantitative titration bench
└── src/
    ├── data/
    │   └── portfolio.js         # ⭐ CENTRAL DATA CONFIGURATION (Edit this!)
    ├── css/
    │   ├── variables.css        # Colors, fonts, shadows, and design tokens
    │   ├── base.css             # CSS reset, container, and typography rules
    │   ├── components.css       # Buttons, cards, modals, lightbox, toast
    │   ├── sections.css         # Section layouts (Hero, About, Timeline, etc.)
    │   └── animations.css       # Particle styling, fade transitions
    └── js/
        ├── main.js              # Application entry point
        ├── renderer.js          # Injects portfolio.js data into DOM
        ├── navigation.js        # Sticky header, scrollspy & mobile drawer
        ├── modal.js             # Project details modal & photo lightbox
        ├── particles.js         # Subtle canvas molecular background effect
        └── contact.js           # Form validation & direct mailto fallback
```

---

## ✏️ How to Update Each Section of the Website

All website content is managed in **[`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js)**. Simply open that file in your code editor and change the values:

### 1. Update Name, Title, and Profile Photo
In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L20-L40), locate `profile`:
```javascript
fullName: "Your Real Full Name",
title: "Microbiology & Laboratory Science Undergraduate",
email: "your.name@email.com",
phone: "+94 7X XXX XXXX",
location: "Colombo, Sri Lanka",
linkedin: "https://linkedin.com/in/yourprofile",
photoUrl: "assets/images/my-photo.jpg", // Place your JPG/PNG in assets/images/
```

### 2. Update Biography & Career Objective
In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L55-L80), locate `about`:
- Edit `biography` to customize your personal statement.
- Edit `careerObjective.description` to specify your ideal internship role.

### 3. Update Education & A/L / O/L Results
In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L95-L135), locate the `education` array. You can adjust years, school names, subject streams, and exam grades.

### 4. Update Laboratory Skills
In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L140-L195), locate `skills`. Each card contains:
- `title`: Skill name
- `category`: Classification badge
- `description`: Detailed practical explanation
- `tags`: Key bench techniques

### 5. Update Academic Projects
In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L200-L280), locate `projects`. You can replace the three placeholders (`[Microbiology Laboratory Practical]`, `[Zoology Academic Project]`, `[Chemistry Practical Project]`) with your exact university report titles, methodologies, and findings.

### 6. Update Laboratory Gallery & Add Your Own Lab Photos
In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L285-L350), locate `laboratoryGallery`:
- Copy your laboratory photos into `assets/images/`.
- Change `image` to `"assets/images/my-lab-photo.jpg"`.
- Set `isStudentPhoto: true` to automatically display the green **"Student Practical Photo"** badge instead of "Illustrative Scientific Visual".

### 7. Replace the Downloadable CV (PDF)
1. Save your completed resume PDF into the folder:
   `assets/docs/Your_Name_CV.pdf`
2. In [`src/data/portfolio.js`](file:///c:/Users/Admin/Desktop/Antigravity/samudi%20akka/src/data/portfolio.js#L375-L385), update:
   ```javascript
   cv: {
     filePath: "assets/docs/Your_Name_CV.pdf",
     fileName: "Your_Name_CV.pdf",
     ...
   }
   ```
Every "Download CV" button across the navigation bar, hero section, and dedicated CV card will immediately download your new PDF!

---

## 🌐 Free Deployment Instructions

This website has zero build dependencies and can be hosted for free in minutes on any static hosting service:

### Option 1: GitHub Pages (Free)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a repository on GitHub (e.g. `microbiology-portfolio`) and push your code.
3. In GitHub, go to **Settings > Pages**.
4. Under **Branch**, select `main` (root) and click **Save**.
5. Your website will be live at `https://<your-username>.github.io/microbiology-portfolio/`.

### Option 2: Netlify (Free Drag-and-Drop)
1. Go to [netlify.com](https://www.netlify.com/) and sign in.
2. Go to the **Sites** tab.
3. Drag and drop this whole folder into Netlify's drop zone.
4. Your portfolio goes live instantly with an automatic SSL certificate.

### Option 3: Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel` or import your GitHub repo directly on [vercel.com](https://vercel.com).
2. Deploy with zero configuration.
