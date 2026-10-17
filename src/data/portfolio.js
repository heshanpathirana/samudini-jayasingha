/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * Welcome! This is the single central file containing all personal information,
 * academic history, skills, project showcases, gallery photos, and contact info.
 * 
 * TO UPDATE YOUR PORTFOLIO:
 * Simply replace the placeholder values below with your real details and save.
 * You do NOT need any admin dashboard or database. Your changes will automatically
 * appear on your website.
 * ==============================================================================
 */

export const portfolioData = {
  // ----------------------------------------------------------------------------
  // 1. PERSONAL PROFILE & HERO DETAILS
  // ----------------------------------------------------------------------------
  profile: {
    // Replace with your real full name, e.g. "Samudi Wickramasinghe"
    fullName: "Samudini Jayasingha",
    
    // Professional Title for internship applications
    title: "A Bachelor of Science (BSc) degree Undergraduate",
    
    // University affiliation
    university: "University of Sri Jayewardenepura, Sri Lanka",
    faculty: "Faculty of Applied Science",
    academicLevel: "Third-year undergraduate",
    expectedGraduationYear: "2028",
    
    // Core Subject Combination
    subjectCombination: ["Zoology", "Microbiology", "Chemistry"],
    
    // Hero short introduction
    heroIntro: "Third-year undergraduate at the University of Sri Jayewardenepura studying Zoology, Microbiology, and Chemistry. Dedicated to scientific investigation, rigorous laboratory protocols, and advancing practical bench skills through hands-on internship opportunities.",
    
    // Profile photo:
    // Place your portrait in `assets/images/my-photo.jpg` and change the path below:
    photoUrl: "assets/images/samudini.jpeg",
    photoAlt: "Profile portrait placeholder for undergraduate researcher",
    
    // Career Goal / Statement
    careerGoal: "Obtain a Microbiology or Laboratory internship and develop practical scientific experience.",
    
    // Contact & Social channels (Replace placeholders with your real info)
    email: "samudinijayasingha2002@gmail.com",
    phone: "+94703962957",
    location: "Nugegoda, SRI LANKA",
    linkedin: "linkedin.com/in/samudini-jayasingha-193262408",
    
    // Action Links
    availableForInternship: true,
    internshipAvailabilityText: "Actively Seeking Internship Opportunities (2026/2027)"
  },

  // ----------------------------------------------------------------------------
  // 2. ABOUT ME & OBJECTIVES
  // ----------------------------------------------------------------------------
  about: {
    // Verbatim starting biography for recruiters
    biography: "I am a third-year undergraduate at the University of Sri Jayewardenepura, studying Zoology, Microbiology, and Chemistry. Through my university laboratory practicals and academic projects, I have developed an interest in scientific investigation and laboratory work. I am eager to expand my practical knowledge, gain professional experience, and contribute to a scientific or laboratory team through an internship opportunity.",
    
    // Dedicated Career Objective Card
    careerObjective: {
      title: "Career Objective",
      focus: "Microbiology & Laboratory Science",
      description: "To secure a challenging Microbiology or Laboratory internship where I can apply rigorous university laboratory training, enhance analytical and benchtop techniques, and contribute responsibly to experimental workflows and quality scientific investigation."
    },

    // Highlights / Quick Profile Badges
    keyHighlights: [
      {
        icon: "microscope",
        label: "Core Discipline",
        value: "Zoology, Microbiology & Chemistry"
      },
      {
        icon: "academic",
        label: "Academic Standing",
        value: "3rd Year Undergraduate (Faculty of Applied Science)"
      },
      {
        icon: "lab",
        label: "Practical Focus",
        value: "Microscopy & University Lab Practicals"
      },
      {
        icon: "calendar",
        label: "Graduation Year",
        value: "Expected 2028"
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. EDUCATION TIMELINE
  // ----------------------------------------------------------------------------
  education: [
    {
      institution: "University of Sri Jayewardenepura",
      degree: "Undergraduate Studies in Zoology, Microbiology, and Chemistry",
      faculty: "Faculty of Applied Science",
      period: "Present (Third Year)",
      expectedGraduation: "Expected Graduation: 2028",
      details: [
        "Major Subjects: Zoology, Microbiology, and Chemistry",
        "Engaged in hands-on university laboratory practical sessions across all three scientific disciplines.",
        "Developing structured laboratory methodologies, aseptic handling, and systematic scientific inquiry."
      ],
      current: true
    },
    {
      institution: "Kegalu Balika Vidyalaya - Kegalle",
      degree: "G.C.E. Advanced Level (Biological Science Stream)",
      period: "Completed: 2022",
      results: "Results: B, C, C",
      details: [
        "Completed Advanced Level examinations in the Biological Science stream.",
        "Built a strong foundational understanding in Biology, Chemistry, and Physics.",
        "Demonstrated consistent academic commitment and laboratory aptitude."
      ],
      current: false
    },
    {
      institution: "Sri Sanghabodhi Central College - Nittambuwa",
      degree: "G.C.E. Ordinary Level",
      period: "Completed with Distinction",
      results: "Results: 7 As and 2 B",
      details: [
        "7 'A' Grades: Science, Mathematics, Buddhism, Sinhala, History, Health & Physical Education, Business & Accounting Studies.",
        "2 'B' Grade:  English, Sinhala Literature.",
        "Demonstrated well-rounded academic excellence across sciences, mathematics, and humanities."
      ],
      current: false
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. LABORATORY & TECHNICAL SKILLS
  // ----------------------------------------------------------------------------
  skills: [
    {
      id: "microscope-use",
      title: "Microscope Use",
      category: "Laboratory Technique",
      icon: "microscope",
      description: "Proficient in compound optical microscope handling, slide mounting, sample focus calibration, oil immersion viewing, and systematic morphological inspection of cellular and microbiological specimens.",
      tags: ["Compound Microscopy", "Slide Preparation", "Sample Focusing", "Morphological Observation"]
    },
    {
      id: "university-lab-practicals",
      title: "University Laboratory Practical",
      category: "Laboratory Technique",
      icon: "flask",
      description: "Experienced in standardized university laboratory routines, sterile bench techniques, aseptic handling, chemical reagent measurement, laboratory glassware preparation, and safety protocol adherence.",
      tags: ["Aseptic Handling", "Sterilization Protocols", "Reagent Preparation", "Lab Safety Standards"]
    },
    {
      id: "scientific-observation",
      title: "Scientific Observation",
      category: "Investigative Skill",
      icon: "eye",
      description: "Trained in methodical observation, recognizing qualitative and quantitative biological variations, accurate morphological sketching, and systematic recording of experimental phenomena.",
      tags: ["Visual Inspection", "Accurate Note-taking", "Phenotypic Tracking", "Data Accuracy"]
    },
    {
      id: "attention-to-detail",
      title: "Attention to Detail",
      category: "Operational Standard",
      icon: "check-circle",
      description: "Meticulous adherence to standard operating procedures (SOPs), contamination prevention during practical exercises, precise volumetric measurements, and structured documentation.",
      tags: ["Precision Measurement", "Contamination Prevention", "Protocol Compliance", "Careful Documentation"]
    },
    {
      id: "academic-project-work",
      title: "Academic Project Work",
      category: "Research & Teamwork",
      icon: "clipboard-list",
      description: "Participated in university academic practical coursework and investigative tasks, synthesizing experimental observations, working productively in lab teams, and preparing lab reports.",
      tags: ["Scientific Inquiry", "Team Practical Work", "Practical Reports", "Literature Foundation"]
    },
    {
      id: "microsoft-excel",
      title: "Microsoft Excel",
      category: "Computer & Data Skill",
      icon: "table",
      description: "Application of Microsoft Excel for experimental laboratory data logging, tabular organization of practical results, mathematical formula calculations, and generating visual charts for reports.",
      tags: ["Data Entry", "Formulas & Calculations", "Scientific Charting", "Tabular Structuring"]
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. ACADEMIC PROJECTS (Editable Showcase)
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "microbiology-practical",
      title: "[Microbiology Laboratory Practical]",
      subject: "Microbiology",
      badgeColor: "teal",
      shortDescription: "Academic laboratory practical series focusing on microbial culture techniques, slide preparation, staining methods, and sterile bench procedures.",
      skillsUsed: ["Microscope Use", "Aseptic Technique", "Staining Protocols", "Laboratory Documentation"],
      image: "assets/images/project-microbiology.jpg",
      imageAlt: "Microbiology laboratory practical setup and culture plates",
      // Detailed information displayed when the user clicks 'View Details'
      details: {
        department: "Department of Botany, Faculty of Applied Science",
        academicContext: "University Practical Coursework Module",
        objectives: "To develop core practical competency in sterile culture handling, microbial morphology observation under optical microscopy, and standard laboratory documentation.",
        techniquesPracticed: [
          "Slide preparation and fixed bacterial smear observation.",
          "Application of staining protocols to distinguish microbiological characteristics.",
          "Aseptic transfer techniques using Bunsen flame and sterile media.",
          "Systematic recording of microbial growth patterns and practical results."
        ],
        practicalRelevance: "Provides hands-on foundation directly relevant to industrial, clinical, and environmental microbiology laboratories.",
        note: "hello"
      }
    },
    {
      id: "zoology-project",
      title: "[Zoology Academic Project]",
      subject: "Zoology",
      badgeColor: "navy",
      shortDescription: "Academic coursework and practical investigations examining anatomical structures, specimen classification, and organismal biology.",
      skillsUsed: ["Specimen Observation", "Anatomical Examination", "Classification", "Data Recording"],
      image: "assets/images/project-zoology.jpg",
      imageAlt: "Zoology academic specimen study and biological examination",
      details: {
        department: "Department of Zoology, Faculty of Applied Science",
        academicContext: "University Practical Coursework Module",
        objectives: "To observe, identify, and systematically categorize biological specimens according to morphological features and evolutionary relationships.",
        techniquesPracticed: [
          "Stereomicroscopic and optical examination of invertebrate and vertebrate specimens.",
          "Morphological characterization and classification keys.",
          "Accurate anatomical sketching and observational record keeping.",
          "Understanding physiological adaptations and biological diversity."
        ],
        practicalRelevance: "Builds rigorous observational discipline, biological classification acumen, and careful specimen handling skills.",
        note: "This project card is ready for your own zoology coursework title, experimental findings, or field study details."
      }
    },
    {
      id: "chemistry-practical",
      title: "[Chemistry Practical Project]",
      subject: "Chemistry",
      badgeColor: "emerald",
      shortDescription: "University chemistry laboratory practicals emphasizing solution preparation, volumetric titrations, chemical safety, and analytical measurement.",
      skillsUsed: ["Volumetric Analysis", "Reagent Preparation", "Laboratory Safety", "Analytical Measurement"],
      image: "assets/images/project-chemistry.jpg",
      imageAlt: "Chemistry laboratory practical glassware and titration apparatus",
      details: {
        department: "Department of Chemistry, Faculty of Applied Science",
        academicContext: "University Practical Coursework Module",
        objectives: "To master precise quantitative chemical analysis, standard solution preparation, and rigorous adherence to chemical safety standards.",
        techniquesPracticed: [
          "Volumetric titrations using burettes, pipettes, and standard indicators.",
          "Accurate preparation of chemical molar solutions and dilutions.",
          "Careful handling of laboratory glassware, reagents, and waste neutralisation.",
          "Recording precise numerical measurements and calculating stoichiometric concentrations."
        ],
        practicalRelevance: "Crucial for understanding analytical chemistry principles required in multi-disciplinary quality control and research labs.",
        note: "Easily update this card with your specific university chemistry practical or laboratory assessment title."
      }
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. LABORATORY GALLERY
  // ----------------------------------------------------------------------------
  // Note: Clearly distinguish illustrative stock images from genuine student photos.
  // Set `isStudentPhoto: true` when you replace an image with your own genuine photo!
  laboratoryGallery: [
    {
      id: "gallery-1",
      title: "Optical Compound Microscope",
      category: "Microscopes",
      image: "assets/images/microscope.jpg",
      alt: "High precision optical laboratory microscope with objective lenses",
      caption: "Standard laboratory microscope setup used for examining microbiological smears and cell structures.",
      isStudentPhoto: false,
      badgeText: "Illustrative Scientific Visual"
    },
    {
      id: "gallery-2",
      title: "Microbiology Culture & Petri Dish Setup",
      category: "Microbiology Laboratory",
      image: "assets/images/petri-dish.jpeg",
      alt: "Petri dishes with agar culture media in a microbiology laboratory environment",
      caption: "Sterile agar media plates and streak culturing workflows in microbiology practical environments.",
      isStudentPhoto: false,
      badgeText: "Illustrative Scientific Visual"
    },
    {
      id: "gallery-3",
      title: "Chemical Glassware & Practical Bench",
      category: "Chemistry Practical",
      image: "assets/images/chemistry-lab.jpg",
      alt: "Laboratory glassware, flasks, and solution reagents arranged for practical analysis",
      caption: "Analytical glassware, volumetric flasks, and solution setups for quantitative chemistry practicals.",
      isStudentPhoto: false,
      badgeText: "Illustrative Scientific Visual"
    },
    {
      id: "gallery-4",
      title: "Cellular & Microscopic Structures",
      category: "Cellular Science",
      image: "assets/images/cellular-structure.jpeg",
      alt: "High-magnification visualization of biological cellular structures",
      caption: "Microscopic observation of cellular morphology, cell division, and biological tissues.",
      isStudentPhoto: false,
      badgeText: "Illustrative Scientific Visual"
    },
    {
      id: "gallery-5",
      title: "Zoological & Biological Specimen Study",
      category: "Zoological Specimens",
      image: "assets/images/biology-specimen.jpg",
      alt: "Biological laboratory research setup for specimen analysis",
      caption: "Examination of biological specimens, morphological characteristics, and anatomical features.",
      isStudentPhoto: false,
      badgeText: "Illustrative Scientific Visual"
    },
    {
      id: "gallery-6",
      title: "Laboratory Equipment & Sterile Workstation",
      category: "Laboratory Equipment",
      image: "assets/images/lab-workstation.jpg",
      alt: "Modern clean scientific laboratory workstation with analytical instruments",
      caption: "Clean bench workstation designed for contamination-free laboratory analysis and sample preparation.",
      isStudentPhoto: false,
      badgeText: "Illustrative Scientific Visual"
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. INTERNSHIP INTERESTS
  // ----------------------------------------------------------------------------
  internshipInterests: {
    sectionTitle: "Internship Interests & Focus Areas",
    statement: "I am interested in internship opportunities that allow me to learn from experienced professionals, strengthen my practical laboratory skills, and contribute responsibly to scientific work.",
    targetAreas: [
      {
        title: "Microbiology Laboratories",
        description: "Clinical, industrial, and food microbiology laboratories conducting microbial testing, contamination control, culture maintenance, and quality inspection.",
        icon: "bacteria"
      },
      {
        title: "Laboratory-Based Research",
        description: "Scientific research institutions, biotechnology units, and academic research groups conducting investigative biological experiments.",
        icon: "flask-conical"
      },
      {
        title: "Scientific & Academic Projects",
        description: "Multidisciplinary laboratory environments focused on biological sampling, chemical analysis, specimen evaluation, and systematic laboratory reporting.",
        icon: "atom"
      }
    ],
    ctaText: "Discuss an Internship Opportunity"
  },

  // ----------------------------------------------------------------------------
  // 8. CURRICULUM VITAE (CV) DOWNLOAD
  // ----------------------------------------------------------------------------
  cv: {
    title: "Curriculum Vitae",
    subtitle: "Official academic and laboratory profile available for internship recruiters.",
    filePath: "assets/docs/CV_Microbiology_Undergraduate.pdf",
    fileName: "CV_Microbiology_Undergraduate.pdf",
    fileSize: "PDF Document (Formatted for Recruiters)",
    lastUpdated: "2026 Academic Year",
    statusBadge: "Verified Academic Profile",
    instructions: "To replace this CV, place your updated PDF file in the 'assets/docs/' folder and update the 'filePath' and 'fileName' properties in this file (src/data/portfolio.js)."
  },

  // ----------------------------------------------------------------------------
  // 9. CONTACT & FOOTER
  // ----------------------------------------------------------------------------
  contact: {
    title: "Get In Touch",
    subtitle: "Feel free to reach out regarding microbiology, chemistry, or laboratory internship opportunities.",
    availabilityNote: "Available for internships, laboratory training, and collaborative academic opportunities in Sri Lanka.",
    formDisclaimer: "Note: This contact form is a frontend demonstration. You can also send a direct email using the button below or email client.",
    socialLinks: {
      email: "samudinijayasingha2002@gmail.com",
      phone: "+94703962957",
      location: "Nugegoda, SRI LANKA",
      linkedin: "linkedin.com/in/samudini-jayasingha-193262408"
    }
  }
};
