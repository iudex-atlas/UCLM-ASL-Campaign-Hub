// ─── POSITIONS & CANDIDATES DATA ─────────────────────────
  const positions = [
    { title: "President", candidates: ["Izhel Joy Mayol", "Maria Santos", "Rafael Cena"] },
    { title: "Vice President", candidates: ["Pedro Reyes", "Ana Lim"] },
    { title: "Secretary General", candidates: ["Carlo Mendoza", "Trisha Gomez", "Devon Price"] },
    { title: "Deputy Secretary for College", candidates: ["Bea Villanueva", "Josh Torres", "Nicole Hart"] },
    { title: "Deputy Secretary for Senior High", candidates: ["Nikki Ramos", "Leon Cruz"] },
    { title: "Chief Financial Officer", candidates: ["Ria Padilla", "Michael Chen"] },
    { title: "Treasurer", candidates: ["Toni Mira", "Dave Salazar", "Jessica Wong"] },
    { title: "Auditor", candidates: ["Dr. Support Role", "Dr. Mentor Role"] },
    { title: "Commissioners on Membership", candidates: ["Ashley Kim", "Vincent Lopez", "Sophia Martin"] },
    { title: "Head Communication Officer", candidates: ["Gio Tan", "Ella Cruz", "Brandon Scott"] },
    { title: "Head Media Officer", candidates: ["Celine Bautista", "Marco Sy", "Hannah Grace"] },
    { title: "Head Health and Safety Officer", candidates: ["Ryan Foster", "Olivia Park"] },
    { title: "Communication Officer", candidates: ["Pau Castillo", "Rene Macaraeg", "Taylor Davis"] },
    { title: "Media Officer", candidates: ["Mia Florendo", "Sam Navarro", "Jordan Blake"] },
    { title: "Documentation Officer", candidates: ["Maya Gonzalez", "Lucas White"] },
    { title: "Health and Safety Officer", candidates: ["Natasha Brown", "Chris Anderson", "Zoe Rodriguez"] },
    { title: "Business and Accountancy Representative", candidates: ["Kyle Herrera", "Dani Ong", "Emma Stone"] },
    { title: "Tourism Management Representative", candidates: ["Alex Turner", "Sophia Chen"] },
    { title: "Hospitality Management Representative", candidates: ["Grace Johnson", "Tyler Moore"] },
    { title: "Computer Studies Representative", candidates: ["Iris Ferrer", "Ace Robles", "Quinn Taylor"] },
    { title: "Engineering Representative", candidates: ["Madison Lee", "Owen Green"] },
    { title: "Criminology Representative", candidates: ["Derek Cooper", "Amber Fox", "Cameron Hayes"] },
    { title: "Customs Administration Representative", candidates: ["Gab Macasaet", "Ysa Ocampo", "Jordan Phillips"] },
    { title: "Maritime Education Representative", candidates: ["Sienna Knight", "Mason Rivera"] },
    { title: "Nursing Representative", candidates: ["Lex Domingo", "Char Viernes", "Parker Grant"] },
    { title: "Teacher Education Representative", candidates: ["Casey Bennett", "Riley Murphy"] },
    { title: "Senior High School Representative", candidates: ["Aurora Stewart", "Dylan Clark", "Eden Price"] },
  ];

  const placeholderCredentials = [
    "4th Year BSIT Student, University of Cebu",
    "Former Committee Chair, Academic Affairs 2024",
    "Dean's Lister for 3 consecutive semesters",
    "Certified volunteer — Community Outreach 2023",
    "Led [Project Name] with 200+ participants",
  ];

  const placeholderPlatforms = [
    "Champion inclusive member support and wellness programs for all scholars.",
    "Promote transparent leadership through regular reports and open forums.",
    "Empower academic success with structured study and mentorship initiatives.",
    "Strengthen campus events for broader member engagement and community.",
    "Improve financial planning and resource access for all members.",
  ];

  const courseYearPlaceholders = [
    'BSA 2nd Yr', 'BSBA 3rd Yr', 'BSED 3rd Yr', 'BSOA 2nd Yr', 'BSCrim 4th Yr', 'BSComm 2nd Yr',
    'AB English 3rd Yr', 'BSCS 3rd Yr', 'BSIT 2nd Yr', 'BSED 4th Yr', 'BSBA 1st Yr', 'BSIT 3rd Yr',
    'BSW 2nd Yr', 'BSA 3rd Yr', 'BSOA 4th Yr', 'BSComm 3rd Yr', 'BSIT 1st Yr', 'BSBA 2nd Yr',
    'BSED 2nd Yr', 'AB Psych 3rd Yr', 'BSCS 2nd Yr', 'BSW 3rd Yr', 'BSIT 3rd Yr', 'BSBA 4th Yr',
    'AB English 2nd Yr', 'BSCrim 2nd Yr', 'BSOA 3rd Yr', 'BSComm 4th Yr', 'BSIT 4th Yr', 'BSED 1st Yr',
    'BSBA 3rd Yr', 'BSCS 4th Yr', 'AB Psych 2nd Yr', 'BSW 4th Yr', 'BSIT 2nd Yr', 'BSOA 1st Yr',
    'BSComm 2nd Yr', 'BSED 3rd Yr', 'BSBA 2nd Yr', 'BSCrim 3rd Yr', 'AB English 4th Yr', 'BSCS 3rd Yr',
    'BSIT 3rd Yr', 'BSW 1st Yr', 'BSOA 4th Yr', 'BSBA 1st Yr', 'BSED 2nd Yr', 'BSComm 3rd Yr',
    'AB Psych 4th Yr', 'BSCS 2nd Yr', 'BSIT 4th Yr'
  ];

  // ─── CANDIDATE IMAGES ────────────────────────────────────
  const candidateImages = {
    "Izhel Joy Mayol": "imgs/izhel.jpg",
    "Maria Santos": "imgs/candidates/maria-santos.jpg",
    "Rafael Cena": "imgs/candidates/rafael-cena.jpg",
    "Pedro Reyes": "imgs/candidates/pedro-reyes.jpg",
    "Ana Lim": "imgs/candidates/ana-lim.jpg",
    "Carlo Mendoza": "imgs/candidates/carlo-mendoza.jpg",
    "Trisha Gomez": "imgs/candidates/trisha-gomez.jpg",
    "Devon Price": "imgs/candidates/devon-price.jpg",
    "Bea Villanueva": "imgs/candidates/bea-villanueva.jpg",
    "Josh Torres": "imgs/candidates/josh-torres.jpg",
    "Nicole Hart": "imgs/candidates/nicole-hart.jpg",
    "Nikki Ramos": "imgs/candidates/nikki-ramos.jpg",
    "Leon Cruz": "imgs/candidates/leon-cruz.jpg",
    "Ria Padilla": "imgs/candidates/ria-padilla.jpg",
    "Michael Chen": "imgs/candidates/michael-chen.jpg",
    "Toni Mira": "imgs/candidates/toni-mira.jpg",
    "Dave Salazar": "imgs/candidates/dave-salazar.jpg",
    "Jessica Wong": "imgs/candidates/jessica-wong.jpg",
    "Dr. Support Role": "imgs/candidates/dr-support-role.jpg",
    "Dr. Mentor Role": "imgs/candidates/dr-mentor-role.jpg",
    "Ashley Kim": "imgs/candidates/ashley-kim.jpg",
    "Vincent Lopez": "imgs/candidates/vincent-lopez.jpg",
    "Sophia Martin": "imgs/candidates/sophia-martin.jpg",
    "Gio Tan": "imgs/candidates/gio-tan.jpg",
    "Ella Cruz": "imgs/candidates/ella-cruz.jpg",
    "Brandon Scott": "imgs/candidates/brandon-scott.jpg",
    "Celine Bautista": "imgs/candidates/celine-bautista.jpg",
    "Marco Sy": "imgs/candidates/marco-sy.jpg",
    "Hannah Grace": "imgs/candidates/hannah-grace.jpg",
    "Ryan Foster": "imgs/candidates/ryan-foster.jpg",
    "Olivia Park": "imgs/candidates/olivia-park.jpg",
    "Pau Castillo": "imgs/candidates/pau-castillo.jpg",
    "Rene Macaraeg": "imgs/candidates/rene-macaraeg.jpg",
    "Taylor Davis": "imgs/candidates/taylor-davis.jpg",
    "Mia Florendo": "imgs/candidates/mia-florendo.jpg",
    "Sam Navarro": "imgs/candidates/sam-navarro.jpg",
    "Jordan Blake": "imgs/candidates/jordan-blake.jpg",
    "Maya Gonzalez": "imgs/candidates/maya-gonzalez.jpg",
    "Lucas White": "imgs/candidates/lucas-white.jpg",
    "Natasha Brown": "imgs/candidates/natasha-brown.jpg",
    "Chris Anderson": "imgs/candidates/chris-anderson.jpg",
    "Zoe Rodriguez": "imgs/candidates/zoe-rodriguez.jpg",
    "Kyle Herrera": "imgs/candidates/kyle-herrera.jpg",
    "Dani Ong": "imgs/candidates/dani-ong.jpg",
    "Emma Stone": "imgs/candidates/emma-stone.jpg",
    "Alex Turner": "imgs/candidates/alex-turner.jpg",
    "Sophia Chen": "imgs/candidates/sophia-chen.jpg",
    "Grace Johnson": "imgs/candidates/grace-johnson.jpg",
    "Tyler Moore": "imgs/candidates/tyler-moore.jpg",
    "Quinn Taylor": "imgs/candidates/quinn-taylor.jpg",
    "Madison Lee": "imgs/candidates/madison-lee.jpg",
    "Owen Green": "imgs/candidates/owen-green.jpg",
    "Derek Cooper": "imgs/candidates/derek-cooper.jpg",
    "Amber Fox": "imgs/candidates/amber-fox.jpg",
    "Cameron Hayes": "imgs/candidates/cameron-hayes.jpg",
    "Jordan Phillips": "imgs/candidates/jordan-phillips.jpg",
    "Sienna Knight": "imgs/candidates/sienna-knight.jpg",
    "Mason Rivera": "imgs/candidates/mason-rivera.jpg",
    "Lex Domingo": "imgs/candidates/lex-domingo.jpg",
    "Char Viernes": "imgs/candidates/char-viernes.jpg",
    "Parker Grant": "imgs/candidates/parker-grant.jpg",
    "Casey Bennett": "imgs/candidates/casey-bennett.jpg",
    "Riley Murphy": "imgs/candidates/riley-murphy.jpg",
    "Aurora Stewart": "imgs/candidates/aurora-stewart.jpg",
    "Dylan Clark": "imgs/candidates/dylan-clark.jpg",
    "Eden Price": "imgs/candidates/eden-price.jpg",
    "Iris Ferrer": "imgs/candidates/iris-ferrer.jpg",
    "Ace Robles": "imgs/candidates/ace-robles.jpg",
    "Gab Macasaet": "imgs/candidates/gab-macasaet.jpg",
    "Ysa Ocampo": "imgs/candidates/ysa-ocampo.jpg"
  };

  // ─── CANDIDATE CREDENTIALS ────────────────────────────────
  const candidateCredentials = {
    "Izhel Joy Mayol": [
      "2nd Year BSA Student, University of Cebu",
      "ASL Commissioners on Membership Officer 2025-2026",
      "Dean's Lister for 2 consecutive semesters",
      "Led academic mentorship program with 50+ participants",
      "Active in community service projects"
    ],
    "Maria Santos": [
      "3rd Year BSBA Student, University of Cebu",
      "Former Finance Committee Head 2024",
      "Organized 5+ campus fundraising events",
      "Volunteer — Financial Literacy Workshop 2024",
      "Member of honor society"
    ],
    "Pedro Reyes": [
      "4th Year BSCrim Student",
      "Head of Public Safety Committee",
      "Certified in event management",
      "Coordinated campus security protocols",
      "3x Dean's Lister"
    ],
    "Ana Lim": [
      "3rd Year BSED Student",
      "Assistant Vice President 2025-2026",
      "Coordinated 3+ national competitions",
      "Peer mentor for first-year students",
      "Active in social media campaigns"
    ],
    "Carlo Mendoza": [
      "4th Year BSCS Student",
      "Member of Documentation Team 2024",
      "Proficient in data organization systems",
      "Led record management initiative",
      "2x Dean's Lister"
    ],
    "Trisha Gomez": [
      "2nd Year BSComm Student",
      "Communications Committee Member",
      "Experienced in document preparation",
      "Excellent organizational skills",
      "Dean's Lister"
    ],
    "Bea Villanueva": [
      "4th Year BSBA Student",
      "Treasurer Committee Member 2024",
      "Expertise in financial planning",
      "Managed annual budget allocation",
      "CPA Exam Passer"
    ],
    "Josh Torres": [
      "3rd Year BSA Student",
      "Audit Committee Assistant",
      "Strong analytical and accounting skills",
      "Experience in financial audits",
      "Dean's Lister for 2 semesters"
    ],
    "Nikki Ramos": [
      "4th Year BSIT Student",
      "Internal Audit Lead 2024",
      "Proficient in compliance review",
      "Organized audit documentation system",
      "3x Dean's Lister"
    ],
    "Leon Cruz": [
      "3rd Year BSBA Student",
      "Finance & Audit Committee Member",
      "Detail-oriented with analytical mindset",
      "Experience in budget reconciliation",
      "Dean's Lister"
    ],
    "Celine Bautista": [
      "2nd Year BSComm Student",
      "Public Relations Lead 2024",
      "Managed organization social media accounts",
      "Organized press conferences",
      "Strong communication skills"
    ],
    "Marco Sy": [
      "3rd Year AB English Student",
      "Communications & Marketing Assistant",
      "Experienced content writer",
      "Coordinated 10+ PR campaigns",
      "Dean's Lister"
    ],
    "Ria Padilla": [
      "4th Year BSIT Student",
      "Assistant Executive Director 2024",
      "Overseen operational efficiency initiatives",
      "Managed cross-committee projects",
      "3x Dean's Lister"
    ],
    "Kyle Herrera": [
      "3rd Year BSBA Student",
      "Treasurer Committee Member",
      "Managed budget allocation and tracking",
      "Organized financial reports",
      "Dean's Lister"
    ],
    "Dani Ong": [
      "2nd Year BSA Student",
      "Finance Team Assistant",
      "Experience in accounting systems",
      "Strong numerical skills",
      "Accounting Certification"
    ],
    "Mia Florendo": [
      "4th Year BSED Student",
      "Programs Committee Chair 2024",
      "Organized 15+ seminars and workshops",
      "Led student engagement initiatives",
      "3x Dean's Lister"
    ],
    "Sam Navarro": [
      "3rd Year BSCS Student",
      "Programs Committee Member",
      "Tech-savvy event organizer",
      "Coordinated 8+ student programs",
      "Dean's Lister"
    ],
    "Gio Tan": [
      "4th Year BSComm Student",
      "Communications Head 2024",
      "Managed internal and external communications",
      "Proficient in multimedia content creation",
      "3x Dean's Lister"
    ],
    "Ella Cruz": [
      "2nd Year AB English Student",
      "Communications Team Assistant",
      "Strong writing and editing skills",
      "Experience in newsletter production",
      "Dean's Lister"
    ],
    "Pau Castillo": [
      "3rd Year BSComm Student",
      "Events Coordination Lead 2024",
      "Organized 12+ major campus events",
      "Logistics and timeline management expert",
      "Dean's Lister"
    ],
    "Rene Macaraeg": [
      "2nd Year BSBA Student",
      "Events Committee Member",
      "Assistant event organizer",
      "Experienced in vendor coordination",
      "Strong project management skills"
    ],
    "Toni Mira": [
      "4th Year BSED Student",
      "Academic Affairs Chair 2024",
      "Led educational reform initiatives",
      "Coordinated academic seminars",
      "3x Dean's Lister"
    ],
    "Dave Salazar": [
      "3rd Year BSIT Student",
      "Academic Support Committee Member",
      "Organized peer tutoring programs",
      "Mentored struggling students",
      "Dean's Lister"
    ],
    "Iris Ferrer": [
      "4th Year BSW Student",
      "Community Relations Chair 2024",
      "Coordinated 20+ community outreach programs",
      "Built partnerships with local organizations",
      "3x Dean's Lister"
    ],
    "Ace Robles": [
      "3rd Year BSED Student",
      "Community Engagement Officer",
      "Organized volunteer initiatives",
      "Strong advocacy for social causes",
      "Dean's Lister"
    ],
    "Gab Macasaet": [
      "4th Year BSKin Student",
      "Sports & Wellness Officer 2024",
      "Organized 10+ sports tournaments",
      "Promoted fitness and wellness programs",
      "3x Dean's Lister"
    ],
    "Ysa Ocampo": [
      "2nd Year BSBA Student",
      "Wellness Committee Member",
      "Assistant sports coordinator",
      "Mental health advocacy supporter",
      "Certified fitness instructor"
    ],
    "Lex Domingo": [
      "3rd Year AB Art & Design Student",
      "Creative Director 2024",
      "Designed organizational branding materials",
      "Led creative workshops",
      "Award-winning graphic designer"
    ],
    "Char Viernes": [
      "2nd Year BSComm Student",
      "Creative Team Member",
      "Visual content creator",
      "Design and artistic skills",
      "Dean's Lister"
    ],
    "Rafael Cena": [
      "2nd Year BSCS Student",
      "Research Team Member 2024",
      "Tech innovation advocate",
      "Coding competition winner",
      "Dean's Lister"
    ],
    "Devon Price": [
      "3rd Year AB English Student",
      "Writing & Documentation Lead",
      "Newsletter editor 2024",
      "Strong communication skills",
      "Published writer"
    ],
    "Nicole Hart": [
      "2nd Year BSBA Student",
      "Finance Committee Member",
      "Budget tracking specialist",
      "Financial reporting coordinator",
      "Accounting certification"
    ],
    "Michael Chen": [
      "3rd Year BSCS Student",
      "Operations Assistant 2024",
      "Systems management skilled",
      "Process improvement coordinator",
      "Dean's Lister"
    ],
    "Jessica Wong": [
      "2nd Year BSED Student",
      "Scholarship Coordinator 2024",
      "Award process streamliner",
      "Student support advocate",
      "Dean's Lister"
    ],
    "Ashley Kim": [
      "3rd Year BSBA Student",
      "Scholarship Committee Member",
      "Financial aid specialist",
      "Student grant advisor",
      "Dean's Lister"
    ],
    "Vincent Lopez": [
      "4th Year BSBA Student",
      "Scholarship Program Manager",
      "Award allocation expert",
      "Student needs assessor",
      "2x Dean's Lister"
    ],
    "Sophia Martin": [
      "2nd Year BSOA Student",
      "Scholarship Coordinator Assistant",
      "Application processor",
      "Student welfare advocate",
      "Bright student"
    ],
    "Dr. Support Role": [
      "PhD Holder, University Staff",
      "Research Director 2024",
      "Published researcher",
      "Grant funding specialist",
      "Mentorship facilitator"
    ],
    "Dr. Mentor Role": [
      "PhD Holder, University Faculty",
      "Research Department Head",
      "Research initiative designer",
      "Student researcher mentor",
      "Publications advisor"
    ],
    "Brandon Scott": [
      "3rd Year BSComm Student",
      "Communications Committee Member",
      "Content strategy developer",
      "Media relations coordinator",
      "Dean's Lister"
    ],
    "Hannah Grace": [
      "2nd Year BSComm Student",
      "PR Committee Member",
      "Media outreach specialist",
      "Press release writer",
      "Communications student"
    ],
    "Ryan Foster": [
      "4th Year BSBA Student",
      "Marketing Manager 2024",
      "Brand strategy developer",
      "Campaign implementation expert",
      "2x Dean's Lister"
    ],
    "Olivia Park": [
      "3rd Year BSComm Student",
      "Marketing Committee Member",
      "Digital marketing specialist",
      "Social media strategist",
      "Dean's Lister"
    ],
    "Taylor Davis": [
      "3rd Year BSED Student",
      "Events Coordinator 2024",
      "Student event planner",
      "Venue coordination specialist",
      "Dean's Lister"
    ],
    "Jordan Blake": [
      "2nd Year BSOA Student",
      "Programs Assistant 2024",
      "Event logistics coordinator",
      "Student program supporter",
      "Organized events"
    ],
    "Maya Gonzalez": [
      "3rd Year AB Filipino Student",
      "Cultural Affairs Officer 2024",
      "Cultural event organizer",
      "Heritage program designer",
      "Dean's Lister"
    ],
    "Lucas White": [
      "2nd Year BSCS Student",
      "Cultural Committee Member",
      "Arts and culture advocate",
      "Event assistant coordinator",
      "Student leader"
    ],
    "Natasha Brown": [
      "4th Year BSBA Student",
      "Logistics Manager 2024",
      "Supply chain coordinator",
      "Resource allocation expert",
      "2x Dean's Lister"
    ],
    "Chris Anderson": [
      "3rd Year BSCS Student",
      "Logistics Committee Member",
      "Systems coordinator",
      "Inventory management skilled",
      "Dean's Lister"
    ],
    "Zoe Rodriguez": [
      "2nd Year BSOA Student",
      "Logistics Assistant 2024",
      "Logistics coordinator",
      "Operations helper",
      "Detail-oriented"
    ],
    "Emma Stone": [
      "3rd Year BSBA Student",
      "Business Coordinator 2024",
      "Administrative operations manager",
      "Vendor relations specialist",
      "Dean's Lister"
    ],
    "Alex Turner": [
      "4th Year BSBA Student",
      "Finance Officer 2024",
      "Financial tracking expert",
      "Report generation specialist",
      "2x Dean's Lister"
    ],
    "Sophia Chen": [
      "3rd Year BSA Student",
      "Finance Committee Member",
      "Accounting procedure expert",
      "Financial analysis skilled",
      "Dean's Lister"
    ],
    "Grace Johnson": [
      "2nd Year BSOA Student",
      "Administrative Assistant 2024",
      "Office management coordinator",
      "Documentation specialist",
      "Administrative skilled"
    ],
    "Tyler Moore": [
      "2nd Year BSCS Student",
      "Admin Support Staff",
      "IT systems helper",
      "Data management assistant",
      "Tech support coordinator"
    ],
    "Quinn Taylor": [
      "2nd Year BSW Student",
      "Community Relations Assistant",
      "Outreach program helper",
      "Community liaison coordinator",
      "Service-oriented"
    ],
    "Madison Lee": [
      "3rd Year BSED Student",
      "Student Welfare Officer 2024",
      "Student support services manager",
      "Welfare program advocate",
      "Dean's Lister"
    ],
    "Owen Green": [
      "2nd Year BSCS Student",
      "Welfare Committee Member",
      "Student assistance coordinator",
      "Counseling resource connector",
      "Empathetic leader"
    ],
    "Derek Cooper": [
      "4th Year BSIT Student",
      "Mentorship Program Lead 2024",
      "Mentoring framework designer",
      "Mentor training coordinator",
      "2x Dean's Lister"
    ],
    "Amber Fox": [
      "3rd Year BSED Student",
      "Mentorship Committee Member",
      "Peer mentoring organizer",
      "Student development guide",
      "Dean's Lister"
    ],
    "Cameron Hayes": [
      "2nd Year BSBA Student",
      "Mentorship Assistant 2024",
      "Mentor-mentee connector",
      "Support program helper",
      "Engaging mentor"
    ],
    "Jordan Phillips": [
      "3rd Year BSKin Student",
      "Wellness Program Coordinator",
      "Athletic event organizer",
      "Health initiative promoter",
      "Dean's Lister"
    ],
    "Sienna Knight": [
      "3rd Year BSCS Student",
      "Health Advocate 2024",
      "Health education designer",
      "Wellness awareness promoter",
      "Dean's Lister"
    ],
    "Mason Rivera": [
      "2nd Year AB Psych Student",
      "Health Committee Member",
      "Mental health supporter",
      "Wellness program helper",
      "Supportive leader"
    ],
    "Parker Grant": [
      "3rd Year BSCS Student",
      "Creative Coordinator 2024",
      "Multimedia design specialist",
      "Creative projects lead",
      "Dean's Lister"
    ],
    "Casey Bennett": [
      "4th Year BSIT Student",
      "Innovation Lead 2024",
      "New initiative developer",
      "Technology innovation champion",
      "2x Dean's Lister"
    ],
    "Riley Murphy": [
      "3rd Year BSCS Student",
      "Innovation Committee Member",
      "Entrepreneurial ideas generator",
      "Process improvement specialist",
      "Dean's Lister"
    ],
    "Aurora Stewart": [
      "3rd Year BSComm Student",
      "Social Media Manager 2024",
      "Social platform content manager",
      "Community engagement specialist",
      "Dean's Lister"
    ],
    "Dylan Clark": [
      "2nd Year BSBA Student",
      "Social Media Assistant",
      "Content scheduler",
      "Engagement metrics tracker",
      "Social media enthusiast"
    ],
    "Eden Price": [
      "2nd Year BSComm Student",
      "Social Media Coordinator",
      "Post creation specialist",
      "Audience engagement builder",
      "Digital native"
    ]
  };

  // ─── CANDIDATE PLATFORMS ──────────────────────────────────
  const candidatePlatforms = {
    "Izhel Joy Mayol": [
      "Establish a Scholar's Council to ensure every member has a direct voice in organizational decisions.",
      "Launch a Peer-to-Peer Mentorship Program pairing senior scholars with incoming members for academic guidance.",
      "Develop a centralized digital portal for scholarship updates, announcements, and event registrations.",
      "Advocate for expanded mental health resources and wellness check-ins for all scholar members.",
      "Strengthen inter-departmental collaboration through joint projects and cross-college initiatives."
    ],
    "Maria Santos": [
      "Create a transparent budget reporting system published quarterly for all ASL members to review.",
      "Organize financial literacy seminars and workshops to empower scholars with practical money skills.",
      "Establish an emergency assistance fund for scholars facing unexpected financial hardships.",
      "Partner with local businesses to create scholarship sponsorship opportunities and internship pipelines.",
      "Implement a grant application workshop series to help members access additional academic funding."
    ],
    "Rafael Cena": [
      "Build a tech-driven resource hub using open-source tools to streamline ASL operations and communications.",
      "Champion a Scholars' Innovation Challenge — an annual hackathon open to all member departments.",
      "Develop an online voting and feedback platform for transparent, accessible organizational governance.",
      "Create coding bootcamps and digital skills training sessions accessible to all ASL members.",
      "Advocate for integrating sustainability and environmental responsibility into every ASL initiative."
    ],
    "Pedro Reyes": [
      "Establish clear safety protocols and emergency response guidelines for all ASL-organized events.",
      "Develop a campus safety awareness campaign through seminars and informational materials.",
      "Create a network of trained safety marshals among scholar volunteers for large-scale events.",
      "Partner with the university's health and safety office to align organizational policies with campus standards.",
      "Implement a feedback mechanism for members to report safety concerns anonymously and promptly."
    ],
    "Ana Lim": [
      "Strengthen ASL's representation in national student competitions by providing logistical and financial support.",
      "Develop a peer mentoring network connecting second-year students with incoming scholars.",
      "Organize an annual ASL Leadership Summit bringing together all department representatives.",
      "Expand the organization's social media presence to showcase member achievements and upcoming events.",
      "Promote work-life balance by scheduling organizational activities mindful of academic calendars."
    ],
    "Carlo Mendoza": [
      "Digitize all organizational records into a secure, searchable cloud-based documentation system.",
      "Standardize templates and filing protocols to ensure consistency across all ASL documents.",
      "Publish a monthly digital newsletter documenting ASL activities, achievements, and upcoming events.",
      "Train committee members in data management and digital record-keeping best practices.",
      "Establish an archive of past ASL projects and initiatives for institutional memory and reference."
    ],
    "Trisha Gomez": [
      "Introduce a streamlined digital communication calendar accessible to all ASL officers and members.",
      "Improve documentation turnaround times by standardizing submission and review workflows.",
      "Develop a forms and templates library to reduce redundancy across committees.",
      "Facilitate regular inter-committee communication sessions to align on organizational objectives.",
      "Implement a digital minutes repository for all ASL meetings, accessible to all members."
    ],
    "Devon Price": [
      "Produce a quarterly ASL magazine highlighting member stories, achievements, and organizational news.",
      "Develop a comprehensive writing guide and style manual for consistent organizational communications.",
      "Train committee members in effective report writing and documentation practices.",
      "Establish a media archive documenting significant ASL milestones and events.",
      "Create an open submission platform for members to contribute articles, features, and opinion pieces."
    ],
    "Bea Villanueva": [
      "Implement zero-based budgeting for all ASL programs to maximize fund utilization and accountability.",
      "Introduce a digital expense tracking system accessible to the finance committee and auditors.",
      "Organize financial planning workshops for all organizational officers to improve fiscal responsibility.",
      "Establish a scholarship fund allocation review panel to ensure equitable distribution of resources.",
      "Create a transparent procurement process with documented vendor evaluations and cost comparisons."
    ],
    "Josh Torres": [
      "Conduct quarterly internal audits to maintain financial integrity across all ASL committees.",
      "Develop a standardized financial reporting template for consistent and comparable records.",
      "Introduce an independent review process for major expenditures to prevent fiscal mismanagement.",
      "Provide financial literacy training for committee heads to improve budget management skills.",
      "Establish whistleblower-friendly channels for reporting financial concerns or irregularities."
    ],
    "Nicole Hart": [
      "Build a centralized budget tracker shared across committees for real-time financial visibility.",
      "Streamline reimbursement processes to ensure timely payment for officer expenses.",
      "Develop a semester-based financial planning cycle tied to organizational activity calendars.",
      "Introduce cost-benefit analysis requirements for all proposed ASL programs and events.",
      "Foster accountability by publishing financial summaries in organizational communications."
    ],
    "Nikki Ramos": [
      "Conduct a comprehensive audit of all existing ASL financial processes and documentation.",
      "Develop standardized audit checklists for consistent evaluation across all committees.",
      "Introduce digital receipts and e-signing workflows to reduce paper-based inefficiencies.",
      "Establish regular compliance training sessions for all organizational officers.",
      "Create an audit findings report shared with members to promote transparency."
    ],
    "Leon Cruz": [
      "Implement a real-time financial dashboard for officers to monitor budget status at any time.",
      "Introduce monthly financial reconciliation reviews to catch discrepancies early.",
      "Develop a financial risk assessment protocol for high-cost organizational events.",
      "Advocate for an annual general financial disclosure to all ASL members.",
      "Build a cross-committee finance advisory group to align spending with organizational goals."
    ],
    "Ria Padilla": [
      "Launch a digital operations management system to streamline task delegation and tracking.",
      "Create an onboarding program for newly elected ASL officers to accelerate their effectiveness.",
      "Develop a comprehensive operations manual covering all organizational processes and protocols.",
      "Introduce key performance indicators (KPIs) for each committee to measure and improve output.",
      "Establish a regular operations review meeting to identify bottlenecks and optimize workflows."
    ],
    "Michael Chen": [
      "Automate repetitive administrative tasks using accessible digital tools and platforms.",
      "Develop an internal operations knowledge base for all ASL officers to reference.",
      "Improve inter-committee coordination through a shared project management platform.",
      "Establish a tech support helpdesk for ASL members needing assistance with digital tools.",
      "Introduce process improvement cycles to continuously refine organizational operations."
    ],
    "Toni Mira": [
      "Launch a Scholars' Academic Empowerment Program providing study resources and review materials.",
      "Organize regular academic achievement recognition events to motivate and celebrate member excellence.",
      "Partner with faculty advisers to develop workshop series aligned with current academic challenges.",
      "Create a resource-sharing platform for academic materials, reviewers, and course notes.",
      "Advocate for flexible organizational scheduling that prioritizes members' academic commitments."
    ],
    "Dave Salazar": [
      "Establish a peer tutoring network connecting advanced scholars with those needing academic support.",
      "Develop a subject-specific study group directory for all member departments.",
      "Create an academic calendar integration tool to help members plan organizational participation.",
      "Introduce a scholarship academic monitoring program to proactively support at-risk scholars.",
      "Build partnerships with university academic services for expanded member support resources."
    ],
    "Jessica Wong": [
      "Streamline the scholarship application and renewal process through a digital submission platform.",
      "Develop a scholarship benefits guide for members to fully understand their entitlements.",
      "Create an academic scholarship timeline and reminder system to prevent missed deadlines.",
      "Establish a scholarship appeal support service to assist members navigating the review process.",
      "Advocate for expanded scholarship criteria to recognize diverse forms of student achievement."
    ],
    "Ashley Kim": [
      "Develop a centralized scholarship tracking system for real-time status updates and notifications.",
      "Create financial guidance workshops specifically designed for scholarship recipients.",
      "Build a database of external scholarship opportunities available to ASL members.",
      "Establish partnerships with sponsoring institutions to increase scholarship funding availability.",
      "Introduce a scholarship ambassador program where experienced recipients guide new applicants."
    ],
    "Vincent Lopez": [
      "Redesign the scholarship allocation framework to ensure equitable distribution across all colleges.",
      "Develop a needs assessment process to better identify and prioritize members requiring financial support.",
      "Create a scholarship monitoring committee with representation from all member departments.",
      "Launch an annual Scholars' Achievement Night recognizing academic and organizational excellence.",
      "Advocate for new scholarship categories acknowledging leadership, community service, and innovation."
    ],
    "Sophia Martin": [
      "Develop a student welfare support network connecting scholars to campus counseling and health services.",
      "Create a scholarship application buddy system pairing new applicants with experienced members.",
      "Introduce regular member pulse surveys to identify emerging welfare concerns proactively.",
      "Establish an accessible grievance process for scholars to raise concerns safely and confidentially.",
      "Build a resource directory of financial aid, academic, and wellness services available to all members."
    ],
    "Dr. Support Role": [
      "Develop a research mentorship framework pairing faculty researchers with scholar members.",
      "Establish a grant-writing workshop series to help members pursue academic research funding.",
      "Create a research publication support program for scholars producing academic work.",
      "Build partnerships with external research institutions to provide members with expanded opportunities.",
      "Introduce an annual ASL Research Symposium showcasing member research and innovation."
    ],
    "Dr. Mentor Role": [
      "Launch a structured academic mentorship program connecting faculty with scholar leaders.",
      "Develop a research orientation series for members interested in pursuing graduate-level studies.",
      "Create a publications advisory service to support members in academic writing and submission.",
      "Establish a research funding database cataloguing opportunities relevant to ASL member disciplines.",
      "Advocate for increased faculty involvement in organizational academic development initiatives."
    ],
    "Gio Tan": [
      "Develop a comprehensive internal and external communications strategy for the ASL.",
      "Launch an ASL podcast or vlog series featuring member stories, achievements, and organizational news.",
      "Create a crisis communications protocol ensuring timely and accurate information during key events.",
      "Establish a media partnership program connecting ASL with campus and local media outlets.",
      "Introduce a content production team to ensure professional quality across all ASL communications."
    ],
    "Ella Cruz": [
      "Launch a weekly ASL e-newsletter keeping all members informed about organizational updates.",
      "Develop a writing and editing guide standardizing tone and style across all ASL materials.",
      "Create an open communications platform where members can submit announcements and stories.",
      "Establish a communications feedback loop to continuously improve member-facing messaging.",
      "Introduce a multilingual communications initiative to ensure accessibility for all members."
    ],
    "Brandon Scott": [
      "Build a media relations strategy to elevate ASL's visibility on campus and in the community.",
      "Develop a content calendar ensuring consistent and strategic organizational communications.",
      "Create a press team trained in writing effective announcements, releases, and feature stories.",
      "Establish partnerships with student media organizations for collaborative content production.",
      "Introduce a communications audit process to regularly evaluate and improve messaging effectiveness."
    ],
    "Celine Bautista": [
      "Develop a cohesive social media strategy driving engagement across all ASL platforms.",
      "Launch monthly digital campaigns spotlighting member achievements and organizational milestones.",
      "Establish a media production team to create high-quality visual and video content.",
      "Create a press kit for ASL to use when engaging with campus media and external partners.",
      "Introduce analytics-based reporting to measure and improve communications reach and impact."
    ],
    "Marco Sy": [
      "Produce a semestral ASL magazine featuring in-depth stories, opinions, and achievements.",
      "Develop a content creation workshop series to build communications capacity among member officers.",
      "Introduce a community storytelling project documenting the experiences of ASL scholars.",
      "Establish an editorial board to maintain content quality and editorial consistency.",
      "Create a digital content archive preserving ASL's media history and organizational legacy."
    ],
    "Hannah Grace": [
      "Build an ASL media outreach network connecting with campus journalists and student publications.",
      "Develop press release templates and guidelines for consistent external communications.",
      "Create a media monitoring system tracking ASL mentions and coverage across platforms.",
      "Establish a photography and video documentation team for all major ASL events.",
      "Introduce a media portfolio for the organization to showcase achievements to external audiences."
    ],
    "Ryan Foster": [
      "Develop a campus-wide ASL awareness campaign to increase membership visibility and engagement.",
      "Launch partnership programs with local businesses supporting ASL events and scholar initiatives.",
      "Create a branding guide standardizing ASL's visual identity across all materials and platforms.",
      "Establish a sponsorship acquisition strategy to fund key organizational programs and events.",
      "Introduce a marketing analytics system to evaluate campaign effectiveness and optimize outreach."
    ],
    "Olivia Park": [
      "Build an ASL digital marketing strategy centered on authentic member stories and impact.",
      "Develop a social media content plan with regular posting, engagement, and performance tracking.",
      "Create a visual content team to produce graphics, reels, and promotional materials.",
      "Establish brand guidelines ensuring consistent messaging and visual identity across platforms.",
      "Introduce partnerships with student influencers and campus media for broader organizational reach."
    ],
    "Pau Castillo": [
      "Develop a comprehensive event management framework covering planning, execution, and evaluation.",
      "Introduce a post-event review process to capture lessons learned and continuously improve.",
      "Build an events resource kit — templates, timelines, and checklists — available to all committees.",
      "Establish partnerships with campus facilities and external venues for diverse event hosting options.",
      "Introduce a member experience focus into all event planning to maximize participation and satisfaction."
    ],
    "Rene Macaraeg": [
      "Develop a vendor management system for efficient procurement and cost tracking for all events.",
      "Create a volunteer coordination platform to streamline recruitment and task assignment.",
      "Introduce a logistics checklist system ensuring no critical event details are overlooked.",
      "Build partnerships with university services for smoother event permitting and resource access.",
      "Establish a post-event debrief culture to capture feedback and improve future planning."
    ],
    "Taylor Davis": [
      "Introduce a centralized event calendar accessible to all ASL members and officers.",
      "Develop standardized event planning templates to reduce preparation time and inconsistencies.",
      "Create a student engagement measurement system to track event participation trends.",
      "Establish venue partnerships to provide diverse, cost-effective options for all organizational events.",
      "Advocate for inclusive event design ensuring accessibility for members of all backgrounds."
    ],
    "Mia Florendo": [
      "Develop a semester-based academic events calendar featuring seminars, workshops, and fora.",
      "Launch a flagship ASL symposium bringing together scholars for academic exchange and networking.",
      "Create a speakers series inviting professionals to share industry insights with member scholars.",
      "Establish a program evaluation framework to measure educational impact and member satisfaction.",
      "Introduce a member-led program initiative funding innovative ideas from scholar volunteers."
    ],
    "Sam Navarro": [
      "Build a digital event feedback platform to collect real-time participant responses and suggestions.",
      "Develop a tech-assisted event registration system to streamline attendance tracking.",
      "Create online program resources — recordings, materials, and summaries — for all ASL events.",
      "Introduce virtual participation options to broaden event accessibility for members.",
      "Establish a programs committee training curriculum to build event management competencies."
    ],
    "Jordan Blake": [
      "Create an event logistics database tracking vendor contacts, venue details, and past event records.",
      "Develop a post-event reporting template to document outcomes and recommendations.",
      "Introduce a volunteer recognition program celebrating member contributions to organizational events.",
      "Establish a pre-event coordination checklist ensuring consistent preparation standards.",
      "Build a cost-sharing framework for events involving multiple ASL committees."
    ],
    "Maya Gonzalez": [
      "Launch a cultural heritage series celebrating the diverse backgrounds of ASL member scholars.",
      "Develop an annual ASL Cultural Festival showcasing art, music, and traditions from all departments.",
      "Create a cultural documentation project preserving member stories and organizational heritage.",
      "Establish partnerships with cultural organizations for co-produced events and programs.",
      "Introduce cultural sensitivity training for all ASL officers to promote inclusivity."
    ],
    "Lucas White": [
      "Build an arts and cultural showcase series featuring member talents in visual art, music, and performance.",
      "Develop a cultural calendar with activities spanning the full academic year.",
      "Create a member cultural profile database celebrating the diverse identities within ASL.",
      "Establish a creative expression fund supporting member-led artistic and cultural initiatives.",
      "Introduce cultural exchange programs connecting ASL with other student organizations."
    ],
    "Natasha Brown": [
      "Develop a centralized logistics management system for tracking resources across all ASL events.",
      "Introduce a procurement standardization process ensuring quality and cost efficiency.",
      "Create a supply inventory database to prevent redundant purchases across committees.",
      "Establish a logistics training program for committee officers managing event resources.",
      "Build supplier relationships to secure preferential rates for recurring ASL needs."
    ],
    "Chris Anderson": [
      "Implement a digital inventory management tool for organizational equipment and supplies.",
      "Develop a logistics review process post-events to optimize future resource deployment.",
      "Create an inter-committee resource sharing system to maximize utilization of existing assets.",
      "Introduce a logistics risk assessment framework for large-scale events.",
      "Establish a logistics committee communication protocol for seamless coordination."
    ],
    "Zoe Rodriguez": [
      "Develop a logistics assistant training program for new committee members.",
      "Create a checklist-based logistics verification system for all organizational events.",
      "Introduce a feedback mechanism for logistics performance improvement after each event.",
      "Build a resource request system to streamline equipment and supply access for committees.",
      "Establish a logistics documentation archive for future reference and planning."
    ],
    "Kyle Herrera": [
      "Introduce a semester-based financial planning cycle for all ASL programs.",
      "Develop a budget variance reporting system to track planned vs. actual expenditures.",
      "Create a cost-saving initiative program identifying areas for more efficient spending.",
      "Establish financial management workshops for organizational officers.",
      "Build a committee budget allocation guide ensuring equitable resource distribution."
    ],
    "Dani Ong": [
      "Develop a digital accounting log for real-time financial record accuracy.",
      "Create a reimbursement process improvement plan to reduce processing time.",
      "Introduce a financial controls checklist for all organizational transactions.",
      "Build a financial literacy resource hub for ASL members and officers.",
      "Establish a quarterly financial health review to assess organizational fiscal stability."
    ],
    "Emma Stone": [
      "Develop a business partnership program connecting ASL with sponsoring organizations.",
      "Create an administrative operations guide standardizing processes across all committees.",
      "Introduce a vendor relations management system for consistent and cost-effective procurement.",
      "Establish a business case template for all proposed organizational initiatives.",
      "Build a stakeholder engagement strategy to strengthen ASL's external relationships."
    ],
    "Alex Turner": [
      "Implement a real-time financial tracking dashboard for all ASL committees and officers.",
      "Develop a financial reporting cycle with regular updates to members and stakeholders.",
      "Create a cost efficiency audit process for all recurring organizational expenditures.",
      "Establish a financial forecasting model to guide annual organizational planning.",
      "Introduce a financial transparency pledge committing to open reporting practices."
    ],
    "Sophia Chen": [
      "Develop a financial analysis framework for evaluating proposed programs before approval.",
      "Create a standardized accounting procedure manual for all finance-related activities.",
      "Introduce a financial mentorship program training future ASL finance officers.",
      "Establish a cross-committee budget alignment process ensuring organizational financial coherence.",
      "Build a scholarship financial management tracking system for transparent fund allocation."
    ],
    "Grace Johnson": [
      "Develop a digital administrative operations system streamlining documentation workflows.",
      "Create an onboarding documentation kit for newly elected ASL officers.",
      "Introduce a records management protocol ensuring all organizational documents are properly filed.",
      "Establish an administrative support helpdesk for officers needing process assistance.",
      "Build a standard operating procedures guide for all routine administrative tasks."
    ],
    "Tyler Moore": [
      "Develop an IT support framework for all ASL digital tools and platforms.",
      "Create a data management system ensuring secure and organized organizational records.",
      "Introduce a tech training program for officers adapting to new organizational tools.",
      "Establish a cybersecurity awareness campaign protecting ASL's digital assets.",
      "Build a technology roadmap aligning digital tools with organizational goals."
    ],
    "Iris Ferrer": [
      "Launch a flagship community outreach program partnering with local organizations and barangays.",
      "Develop an annual community service calendar with scheduled events open to all members.",
      "Create a member volunteer recognition system celebrating community engagement contributions.",
      "Establish community partnerships providing internship and practicum opportunities for scholars.",
      "Introduce a community impact measurement framework to evaluate and improve outreach outcomes."
    ],
    "Ace Robles": [
      "Develop a member volunteer program connecting scholars with community service opportunities.",
      "Create an advocacy platform championing social causes relevant to the ASL community.",
      "Introduce a community engagement badge system recognizing member service contributions.",
      "Build partnerships with NGOs and civic organizations for meaningful community initiatives.",
      "Establish a social responsibility pledge committing ASL to sustained community engagement."
    ],
    "Quinn Taylor": [
      "Develop a community liaison network connecting ASL with local organizations and institutions.",
      "Create a community needs assessment process guiding targeted and meaningful outreach efforts.",
      "Introduce a member community project fund supporting scholar-led service initiatives.",
      "Establish regular community partnership reviews ensuring impactful and sustainable programs.",
      "Build an ASL community service report documenting member contributions and outcomes."
    ],
    "Madison Lee": [
      "Develop a comprehensive student welfare program addressing academic, social, and emotional needs.",
      "Create a welfare resource directory connecting members with campus and community support services.",
      "Introduce a proactive welfare monitoring system identifying at-risk members early.",
      "Establish a student welfare committee with trained peer support volunteers.",
      "Build a wellness calendar with regular activities promoting member health and well-being."
    ],
    "Owen Green": [
      "Develop a peer support network connecting scholars facing challenges with trained volunteer listeners.",
      "Create a student welfare awareness campaign reducing stigma around seeking help.",
      "Introduce a counseling referral system connecting members with professional mental health services.",
      "Establish a welfare feedback platform for anonymous member concerns and suggestions.",
      "Build partnerships with university counseling services for accessible and timely support."
    ],
    "Derek Cooper": [
      "Launch a structured mentorship program matching experienced scholars with incoming members.",
      "Develop a mentorship training curriculum building peer mentoring skills and emotional intelligence.",
      "Create a mentorship outcomes tracking system to evaluate program effectiveness.",
      "Establish a mentorship showcase event celebrating mentor-mentee achievements.",
      "Introduce a mentorship directory accessible to all ASL members seeking guidance."
    ],
    "Amber Fox": [
      "Develop a peer mentoring handbook guiding both mentors and mentees through the program.",
      "Create a mentorship skill-building workshop series for participating scholars.",
      "Introduce a mentorship matching platform based on academic goals and personal interests.",
      "Establish regular mentor-mentee check-in protocols to ensure sustained engagement.",
      "Build a mentorship community fostering long-term relationships beyond the organizational term."
    ],
    "Cameron Hayes": [
      "Develop a mentorship onboarding process making it easy for new members to find mentors.",
      "Create a resource kit for mentors providing guidance tools and conversation frameworks.",
      "Introduce a mentorship feedback system continuously improving the program experience.",
      "Establish a peer mentor appreciation day recognizing dedicated volunteer mentors.",
      "Build a mentorship alumni network maintaining connections among past program participants."
    ],
    "Jordan Phillips": [
      "Develop a comprehensive wellness program promoting physical, mental, and social health.",
      "Launch a fitness and active lifestyle campaign with regular sports and wellness events.",
      "Create a wellness resource hub providing health tips, self-care guides, and support contacts.",
      "Establish partnerships with campus health services for accessible wellness support.",
      "Introduce a member wellness survey tracking health trends and informing program planning."
    ],
    "Sienna Knight": [
      "Develop a health education series addressing topics relevant to scholar well-being.",
      "Create a mental health awareness campaign normalizing conversations about psychological wellness.",
      "Introduce a health ambassador program training member volunteers in wellness advocacy.",
      "Establish a health screening and referral system connecting members with campus health resources.",
      "Build a digital health resource platform with accessible information for all ASL members."
    ],
    "Mason Rivera": [
      "Develop a mental health first aid training program for ASL officers and key volunteers.",
      "Create a safe space initiative where members can openly discuss personal challenges.",
      "Introduce regular wellness check-ins integrated into organizational meetings and events.",
      "Establish a peer wellness support group for scholars navigating stress and academic pressure.",
      "Build a mental wellness awareness calendar with regular campaigns and activities throughout the year."
    ],
    "Lex Domingo": [
      "Develop a creative branding initiative elevating ASL's visual identity across all platforms.",
      "Launch a member arts showcase celebrating the creative talents within the organization.",
      "Create a design resource kit providing templates and tools for all ASL committees.",
      "Establish a creative workshop series teaching graphic design, photography, and multimedia skills.",
      "Introduce a creative team structure ensuring professional quality in all organizational materials."
    ],
    "Char Viernes": [
      "Develop a visual content strategy producing engaging graphics and videos for ASL communications.",
      "Create a member creative portfolio platform showcasing artistic work and achievements.",
      "Introduce a collaborative design sprint series producing creative materials for organizational events.",
      "Establish a creative mentorship pairing design-skilled members with those eager to learn.",
      "Build an ASL creative archive documenting the visual history of the organization."
    ],
    "Parker Grant": [
      "Develop a multimedia production capability within ASL for events, campaigns, and communications.",
      "Create a creative projects fund supporting member-led design and media initiatives.",
      "Introduce a digital storytelling initiative sharing member and organizational stories compellingly.",
      "Establish a creative review process ensuring quality and consistency across all ASL materials.",
      "Build partnerships with campus media programs for collaborative creative productions."
    ],
    "Casey Bennett": [
      "Launch an ASL Innovation Hub providing resources, tools, and mentorship for scholar entrepreneurs.",
      "Develop an annual innovation challenge where members propose and prototype organizational solutions.",
      "Create a technology integration roadmap modernizing ASL's tools, processes, and communications.",
      "Establish partnerships with tech companies and startups for scholar exposure and opportunities.",
      "Introduce a digital literacy program equipping all ASL members with essential technology skills."
    ],
    "Riley Murphy": [
      "Develop a process improvement program systematically evaluating and optimizing ASL workflows.",
      "Create an entrepreneurial mindset workshop series for member scholars.",
      "Introduce a continuous improvement feedback platform gathering member ideas and suggestions.",
      "Establish a cross-committee innovation council developing new organizational initiatives.",
      "Build a pilot program framework enabling safe, low-risk testing of new organizational ideas."
    ],
    "Aurora Stewart": [
      "Develop a strategic social media plan driving authentic engagement across ASL's platforms.",
      "Launch a member spotlight series celebrating scholar achievements and stories.",
      "Create a social media training program for officers managing organizational accounts.",
      "Introduce a content performance tracking system to continuously optimize social media output.",
      "Establish community-building campaigns fostering connection among ASL members digitally."
    ],
    "Dylan Clark": [
      "Develop a consistent social media posting schedule maintaining regular organizational visibility.",
      "Create engaging content formats — polls, stories, reels — to drive member interaction.",
      "Introduce a social media engagement metric dashboard to inform content strategy.",
      "Establish a social media moderation policy maintaining a respectful and inclusive online community.",
      "Build a member-generated content initiative encouraging scholars to share their own stories."
    ],
    "Eden Price": [
      "Develop a digital-first communications strategy maximizing ASL's social media presence.",
      "Create an audience segmentation approach tailoring content to different member groups.",
      "Introduce a social media response protocol ensuring timely and consistent member engagement.",
      "Establish a content creation team developing diverse and compelling organizational content.",
      "Build an online community platform fostering continuous connection among ASL members."
    ],
    "Gab Macasaet": [
      "Launch a comprehensive sports and wellness program promoting active lifestyles among scholars.",
      "Organize an inter-department sports festival celebrating health, teamwork, and friendly competition.",
      "Develop a fitness resource platform with workout guides and wellness tips accessible to all members.",
      "Create partnerships with campus sports facilities for expanded member access.",
      "Introduce a sports and wellness ambassador program building a culture of health within ASL."
    ],
    "Ysa Ocampo": [
      "Develop a member wellness needs assessment identifying priority health and fitness concerns.",
      "Create a mental health and physical wellness integration program addressing both dimensions.",
      "Introduce a wellness buddy system pairing members for mutual health goal accountability.",
      "Establish a wellness events calendar providing regular activities throughout the school year.",
      "Build a digital wellness resource hub with articles, guides, and mental health support contacts."
    ]
  };

  // ─── RENDER CANDIDATES ────────────────────────────────────
  const container = document.getElementById('candidatesContent');

  positions.forEach(pos => {
    const block = document.createElement('div');
    block.className = 'position-block';
    block.style.cssText = 'padding: 0 2rem;';

    const label = document.createElement('div');
    label.className = 'position-label';
    label.innerHTML = '<span>🏛</span> ' + pos.title;
    block.appendChild(label);

    const row = document.createElement('div');
    row.className = 'candidates-row';

    pos.candidates.forEach((name, candidateIndex) => {
      const globalIndex = positions.slice(0, positions.indexOf(pos)).reduce((sum, item) => sum + item.candidates.length, 0) + candidateIndex;
      const courseYear = courseYearPlaceholders[globalIndex % courseYearPlaceholders.length];
      const card = document.createElement('div');
      card.className = 'candidate-card';
      const candidateImage = candidateImages[name] || "imgs/candidates/default.jpg";
      card.innerHTML =
        '<div class="card-front">' +
          '<div class="avatar">' +
            '<img src="' + candidateImage + '" alt="' + name + '" onerror="this.style.display=\'none\'">' +
          '</div>' +
          '<div class="candidate-name">' + name + '</div>' +
          '<div class="candidate-course">' + courseYear + '</div>' +
          '<div class="view-hint">Tap to view &#x2192;</div>' +
        '</div>';
      card.addEventListener('click', (function(n, p) {
        return function() { openModal(n, p, 'credentials'); };
      })(name, pos.title));
      row.appendChild(card);
    });

    block.appendChild(row);
    container.appendChild(block);
  });

  // ─── PLATFORM CARDS ───────────────────────────────────────
  const platformGrid = document.getElementById('platformGrid');

  const platformPrompts = [
    'Champion inclusive member support and wellness programs.',
    'Promote transparent leadership through regular updates.',
    'Empower academic success with structured study initiatives.',
    'Strengthen campus events for broader member engagement.',
    'Improve financial planning and resource access for all.',
    'Build stronger community partnerships and volunteer work.',
    'Advance digital communication and outreach tools.',
    'Support leadership development and mentorship opportunities.',
    'Create programs for health, fitness, and student wellness.',
    'Encourage creative collaboration and cultural activities.',
    'Develop more academic assistance and peer tutoring systems.',
    'Foster community service projects and outreach events.',
    'Launch sports and wellness initiatives for student health.',
    'Inspire creative direction and innovation within the organization.',
    'Implement data-driven research initiatives.',
    'Streamline scholarship award processes.',
    'Enhance internal communications efficiency.',
    'Develop targeted PR campaigns for recruitment.',
    'Modernize marketing strategies and brand presence.',
    'Optimize event planning and execution workflows.',
    'Integrate new cultural programs and activities.',
    'Strengthen logistics coordination systems.',
    'Implement transparent financial management practices.',
    'Improve finance tracking and reporting procedures.',
    'Organize administrative processes and documentation.',
    'Expand community outreach and partnerships.',
    'Develop student support services network.',
    'Create comprehensive mentorship frameworks.',
    'Promote holistic student wellness initiatives.',
    'Advance health education and awareness programs.',
    'Lead artistic initiatives and creative projects.',
    'Champion innovation and entrepreneurial thinking.',
    'Build engaged social media communities.',
    'Increase member participation and satisfaction.',
    'Strengthen organizational culture and unity.',
    'Promote academic excellence across all programs.',
    'Develop leadership training opportunities.',
    'Enhance environmental sustainability efforts.',
    'Foster diversity and inclusion initiatives.',
    'Improve conflict resolution and mediation services.',
    'Strengthen alumni engagement and networking.',
    'Create scholarship fundraising campaigns.',
    'Develop career development programs.',
    'Improve accessibility for all members.',
    'Enhance member feedback and communication channels.',
    'Strengthen interdepartmental collaborations.',
    'Promote mental health awareness initiatives.',
    'Develop inclusive event planning strategies.',
    'Create mentoring circles for personal growth.',
    'Advance technology integration in operations.'
  ];

  positions.forEach(function(pos, positionIndex) {
    const block = document.createElement('div');
    block.className = 'position-block';
    block.style.cssText = 'padding: 0 2rem; margin-bottom: 2.5rem;';

    const label = document.createElement('div');
    label.className = 'position-label';
    label.innerHTML = '<span>🏛</span> ' + pos.title;
    block.appendChild(label);

    const row = document.createElement('div');
    row.className = 'platform-row';

    pos.candidates.forEach(function(name, candidateIndex) {
      const promptIndex = positionIndex * 2 + candidateIndex;
      const globalIndex = positions.slice(0, positionIndex).reduce(function(sum, item) { return sum + item.candidates.length; }, 0) + candidateIndex;
      const courseYear = courseYearPlaceholders[globalIndex % courseYearPlaceholders.length];
      const card = document.createElement('div');
      card.className = 'platform-card';
      card.style.cssText = 'cursor: pointer;';
      const promptText = promptIndex < platformPrompts.length ? platformPrompts[promptIndex] : 'Share your vision for a stronger organization.';
      card.innerHTML =
        '<div class="card-front">' +
          '<h3>' + name + '</h3>' +
          '<p>' + promptText + '</p>' +
          '<span class="platform-course">' + courseYear + '</span>' +
          '<div class="view-hint" style="margin-top:0.5rem;">Tap to read platform &#x2192;</div>' +
        '</div>';
      card.addEventListener('click', (function(n, p) {
        return function() { openModal(n, p, 'platform'); };
      })(name, pos.title));
      row.appendChild(card);
    });

    block.appendChild(row);
    platformGrid.appendChild(block);
  });

  // ─── MODAL ────────────────────────────────────────────────
  function openModal(name, position, mode) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalPosition').textContent = position;
    var list = document.getElementById('modalCredentials');
    var modalRightTitle = document.querySelector('.modal-right h3');

    var avatarImg = document.getElementById('modalAvatarImg');
    var candidatePhoto = candidateImages[name] || 'imgs/candidates/default.jpg';
    avatarImg.src = candidatePhoto;
    avatarImg.alt = name + ' photo';
    avatarImg.style.display = 'block';
    avatarImg.onerror = function() { avatarImg.style.display = 'none'; };

    if (mode === 'platform') {
      modalRightTitle.textContent = 'Platform & Advocacy';
      var platforms = candidatePlatforms[name] || placeholderPlatforms;
      list.innerHTML = platforms.map(function(p) { return '<li>' + p + '</li>'; }).join('');
    } else {
      modalRightTitle.textContent = 'Credentials & Background';
      var credentials = candidateCredentials[name] || placeholderCredentials;
      list.innerHTML = credentials.map(function(c) { return '<li>' + c + '</li>'; }).join('');
    }

    var overlay = document.getElementById('modalOverlay');
    overlay.style.display = 'flex';
    /* Reset scroll position every time modal opens */
    overlay.scrollTop = 0;
    var modalRight = document.getElementById('modalRight');
    if (modalRight) { modalRight.scrollTop = 0; }

    requestAnimationFrame(function() {
      requestAnimationFrame(function() { overlay.classList.add('open'); });
    });
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    if (e && e.target !== document.getElementById('modalOverlay')) return;
    var overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('open');
    setTimeout(function() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 600);
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal(null);
  });

  // ─── SECTION NAVIGATION ───────────────────────────────────
  function showSection(id, linkEl) {
    document.querySelectorAll('.page-section').forEach(function(s) { s.classList.remove('active'); });
    document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
    var section = document.getElementById(id);
    if (section) {
      section.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (linkEl) linkEl.classList.add('active');
    document.getElementById('navLinks').classList.remove('open');
  }

  // ─── BURGER ───────────────────────────────────────────────
  document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.addEventListener('click', function(e) { e.preventDefault(); });
  });
