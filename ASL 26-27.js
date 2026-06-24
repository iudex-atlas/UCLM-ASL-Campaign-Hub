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
  // Map each candidate name to their image path
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

  // ─── RENDER CANDIDATES ────────────────────────────────────
  const container = document.getElementById('candidatesContent');

  positions.forEach(pos => {
    const block = document.createElement('div');
    block.className = 'position-block';
    block.style.cssText = 'padding: 0 2rem;';

    const label = document.createElement('div');
    label.className = 'position-label';
    label.innerHTML = `<span>🏛</span> ${pos.title}`;
    block.appendChild(label);

    const row = document.createElement('div');
    row.className = 'candidates-row';

    pos.candidates.forEach((name, candidateIndex) => {
      const globalIndex = positions.slice(0, positions.indexOf(pos)).reduce((sum, item) => sum + item.candidates.length, 0) + candidateIndex;
      const courseYear = courseYearPlaceholders[globalIndex % courseYearPlaceholders.length];
      const card = document.createElement('div');
      card.className = 'candidate-card';
      const candidateImage = candidateImages[name] || "imgs/candidates/default.jpg";
      card.innerHTML = `
        <div class="card-front">
          <div class="avatar">
            <img src="${candidateImage}" alt="${name}" onerror="this.style.display='none'">
          </div>
          <div class="candidate-name">${name}</div>
          <div class="candidate-course">${courseYear}</div>
          <div class="view-hint">Tap to view →</div>
        </div>
      `;
      card.addEventListener('click', () => openModal(name, pos.title));
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

  positions.forEach((pos, positionIndex) => {
    const block = document.createElement('div');
    block.className = 'position-block';
    block.style.cssText = 'padding: 0 2rem; margin-bottom: 2.5rem;';

    const label = document.createElement('div');
    label.className = 'position-label';
    label.innerHTML = `<span>🏛</span> ${pos.title}`;
    block.appendChild(label);

    const row = document.createElement('div');
    row.className = 'platform-row';

    pos.candidates.forEach((name, candidateIndex) => {
      const promptIndex = positionIndex * 2 + candidateIndex;
      const globalIndex = positions.slice(0, positionIndex).reduce((sum, item) => sum + item.candidates.length, 0) + candidateIndex;
      const courseYear = courseYearPlaceholders[globalIndex % courseYearPlaceholders.length];
      const card = document.createElement('div');
      card.className = 'platform-card';
      card.innerHTML = `
        <div class="card-front">
          <h3>${name}</h3>
          <p>${promptIndex < platformPrompts.length ? platformPrompts[promptIndex] : 'Share your vision for a stronger organization.'}</p>
          <span class="platform-course">${courseYear}</span>
        </div>
      `;
      row.appendChild(card);
    });

    block.appendChild(row);
    platformGrid.appendChild(block);
  });

  // ─── MODAL ────────────────────────────────────────────────
  function openModal(name, position) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalPosition').textContent = position;
    const list = document.getElementById('modalCredentials');
    
    // Get candidate-specific credentials, or use placeholders if not found
    const credentials = candidateCredentials[name] || placeholderCredentials;
    
    list.innerHTML = credentials
      .map(c => `<li>${c}</li>`)
      .join('');
    const overlay = document.getElementById('modalOverlay');
    overlay.style.display = 'flex';
    // Trigger animation on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.add('open'));
    });
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    if (e && e.target !== document.getElementById('modalOverlay')) return;
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('open');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 600);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal(null);
  });

  // ─── SECTION NAVIGATION ───────────────────────────────────
  function showSection(id, linkEl) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const section = document.getElementById(id);
    if (section) {
      section.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (linkEl) linkEl.classList.add('active');
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('open');
  }

  // ─── BURGER ───────────────────────────────────────────────
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Prevent default link behavior
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });