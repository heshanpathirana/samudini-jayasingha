# Undergraduate Microbiology & Laboratory Science Portfolio

A modern, responsive personal portfolio website tailored for an undergraduate student at the **University of Sri Jayewardenepura, Sri Lanka** applying for **Microbiology and Laboratory internships**.

Designed with a clean aesthetic featuring deep navy blue, teal, subtle mint accents, smooth animations, and an interactive scientific motif.

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
