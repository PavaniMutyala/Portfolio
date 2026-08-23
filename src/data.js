import aidmapImg from "./assets/images/aidmap_dashboard_new_1783095046888.jpg";
import houseHuntImg from "./assets/images/house_hunt_mockup_1783092781903.jpg";
import readybiteImg from "./assets/images/readybite_dashboard_1783092796284.jpg";
import nutriwiseImg from "./assets/images/nutriwise_dashboard_1783092811741.jpg";

import sihLogo from "./assets/images/sih_logo.jpg";
import solutionChallengeLogo from "./assets/images/solution_challenge_logo.jpg";
import vibe2shipLogo from "./assets/images/vibe2ship_logo.jpg";
import indiaRunsLogo from "./assets/images/india_runs_logo.png";
import aiBharatLogo from "./assets/images/ai_bharat_logo.jpg";
import purplelaneLogo from "./assets/images/purplelane_logo.jpg";
import builtWithAiLogo from "./assets/images/built_with_ai_logo.jpg";

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React.js", "HTML", "CSS", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Mongoose"]
  },
  {
    title: "Languages & DB",
    skills: ["Python", "Java", "C", "MongoDB", "SQL"]
  },
  {
    title: "AI/ML & Advanced",
    skills: ["Agentic AI", "Generative AI", "Pinecone", "Vector DBs", "LLMs", "Deep Learning", "RAG"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Render", "Vercel", "GitHub", "Netlify", "VS Code"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AidMap",
    description: "AID MAP is an AI-powered disaster relief and resource management platform designed to help users quickly locate essential emergency services during crises. The application provides an interactive map to identify nearby shelters, hospitals, food distribution centers, and relief camps based on the user's location. Built with modern web technologies, it offers a responsive and user-friendly interface for seamless access across devices. The project emphasizes efficient resource discovery, improved accessibility, and faster emergency response. It demonstrates practical skills in front-end development, interactive mapping, and real-world problem solving.",
    tags: ["React", "Node.js", "MongoDB", "Generative AI", "Express.js"],
    link: "https://aid-map-project-2elc.vercel.app/",
    liveUrl: "https://aid-map-project-2elc.vercel.app/",
    githubUrl: "https://github.com/PavaniMutyala/AidMap_project",
    category: "GENERATIVE AI PLATFORM",
    badge: "Featured Project",
    image: aidmapImg,
    color: "#D4AF37"
  },
  {
    id: 2,
    title: "House Hunt",
    description: "A comprehensive full-stack property search and listing web application featuring real-time filters, interactive map integration, and direct agent-buyer messaging portals.",
    tags: ["MERN Stack", "JWT Auth", "Cloudinary"],
    link: "https://househount.onrender.com/",
    liveUrl: "https://househount.onrender.com/",
    githubUrl: "https://github.com/PavaniMutyala/HouseHount",
    category: "FULL STACK REAL ESTATE",
    badge: "Real Estate App",
    image: houseHuntImg,
    color: "#B8860B"
  },
  {
    id: 3,
    title: "ReadyBite",
    description: "An intuitive food ordering and recipe discovery web application that suggests customized meal plans and coordinates rapid restaurant order tracking.",
    tags: ["React", "Express.js", "MongoDB", "REST APIs"],
    link: "#",
    category: "WEB APPLICATION",
    badge: "Foodtech App",
    image: readybiteImg,
    color: "#F4D03F"
  },
  {
    id: 4,
    title: "NutriWise",
    description: "An AI-powered nutrition tracking application utilizing advanced image recognition and LLM feedback to automatically analyze calorie intake and recommend daily dietary plans.",
    tags: ["React", "Generative AI", "Node.js"],
    link: "#",
    category: "AI MOBILE WEB APP",
    badge: "AI Health Tracker",
    image: nutriwiseImg,
    color: "#B8860B"
  }
];

export const experienceTimeline = [
  {
    id: 1,
    title: "Mobile App Development Intern",
    company: "Excelerate",
    duration: "Jul 6, 2026 – Present",
    description: "Spearheading cross-platform mobile application development, focusing on performance tuning, state management, and seamless backend integrations. Collaborating closely with UI/UX designers to implement pixel-perfect, interactive user interfaces while optimizing render performance across iOS and Android platforms.",
    tech: ["React Native", "Flutter", "Firebase", "Redux Toolkit", "REST APIs"],
    type: "internship",
    certificateUrl: "#"
  },
  {
    id: 2,
    title: "Project Management Associate Intern",
    company: "Excelerate (Remote)",
    duration: "Jun 1, 2026 – Jul 1, 2026",
    description: "Coordinated sprint planning, daily standups, and retrospective meetings for cross-functional development teams. Streamlined project tracking workflows in Jira, analyzed team velocity charts, and mitigated project delivery risks, boosting milestone completion rates by 15%.",
    tech: ["Agile/Scrum", "Jira", "Sprint Planning", "Risk Mitigation", "Slack"],
    type: "internship",
    certificateUrl: "#"
  },
  {
    id: 3,
    title: "Full Stack Intern",
    company: "SmartBridge (APSCHE)",
    duration: "Jan 2026 – Apr 2026",
    description: "Designed and engineered secure, responsive full-stack modules. Developed robust server-side APIs, integrated multi-layered JWT authentication schemes, and optimized database indexing in MongoDB to ensure faster query processing and high reliability under heavy client load.",
    tech: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "JWT Auth", "AWS"],
    type: "internship",
    certificateUrl: "https://drive.google.com/file/d/1XBdOlcUtWOdrtvu0Kxu6_1ySZrF8jFjC/view?usp=sharing"
  },
  {
    id: 4,
    title: "Web Development Intern",
    company: "SkillDzire",
    duration: "Oct 2025 – Dec 2025",
    description: "Built, tested, and shipped engaging, highly optimized landing pages and responsive client-side web components. Transformed Figma mockups into interactive React applications, implementing smooth scroll behaviors and cross-browser CSS styling to optimize performance.",
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Git"],
    type: "internship",
    certificateUrl: "#"
  },
  {
    id: 5,
    title: "B.Tech in Computer Science & Technology",
    company: "Sasi Institute of Technology and Engineering",
    duration: "2023 – Present",
    description: "Pursuing rigorous academic training with a strong focus on advanced algorithms, object-oriented systems, and software engineering methodologies. Actively participating in national hackathons, leading campus coding initiatives, and maintaining a top tier scholastic record.",
    tech: ["Data Structures", "Algorithms", "DBMS", "OOPs", "Software Engineering"],
    type: "education",
    certificateUrl: "#"
  }
];

export const hackathonsList = [
  {
    id: 1,
    name: "Smart India Hackathon",
    year: "2025",
    project: "AidMap (AI Disaster Management)",
    logo: sihLogo,
    tag: "Ministry of Education Initiative",
    description: "An AI-powered disaster response portal featuring live location mapping and resource routing.",
    tech: ["React.js", "Node.js", "MongoDB", "Pinecone Vector DB", "Gemini API"],
    certificateUrl: ""
  },
  {
    id: 2,
    name: "Solution Challenge",
    year: "2026",
    project: "NutriWise (Intelligent Health Assistant)",
    logo: solutionChallengeLogo,
    tag: "Google Developer Groups Global",
    description: "A localized nutritional tracker utilizing advanced vision-language models to recommend plans.",
    tech: ["React.js", "Express.js", "Node.js", "Gemini Pro Vision", "Chart.js"],
    certificateUrl: "https://drive.google.com/file/d/1faUNbpqvc5wIbdP3UvgV2fgKwQsLROuG/view?usp=sharing"
  },
  {
    id: 3,
    name: "Vibe2Ship (Coding Ninjas)",
    year: "2026",
    project: "Speed Coding & Optimizations",
    logo: vibe2shipLogo,
    tag: "National Coding Arena",
    description: "Algorithmic speed-coding competition focusing on dynamic programming and graph calculations.",
    tech: ["C++", "Data Structures", "Algorithms", "STL"],
    certificateUrl: "https://drive.google.com/file/d/1K7Ixmg9sNgUPujsxvG3oMylBiUd-zyLQ/view?usp=sharing"
  },
  {
    id: 4,
    name: "India.Runs (Back2Skill)",
    year: "2026",
    project: "ReadyBite (High-Throughput Tracking)",
    logo: "https://h2svision.github.io/publicAssets/india_runs/og_image-min.webp",
    tag: "National Development Challenge",
    description: "Backend route restructuring and database indexing for a high-frequency food tracker.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    certificateUrl: ""
  },
  {
    id: 5,
    name: "AI For Bharat",
    year: "2026",
    project: "Bhasha-Link (Speech Translation Portal)",
    logo: aiBharatLogo,
    tag: "Regional Language Accessibility",
    description: "Speech translation portal enabling regional speakers to access public services via speech-to-text.",
    tech: ["Python", "HuggingFace", "FastAPI", "React.js"],
    certificateUrl: ""
  },
  {
    id: 6,
    name: "Women Who Master",
    year: "2026",
    project: "AI Empowerment & Innovation Sprint",
    logo: purplelaneLogo,
    tag: "Women In Tech Hackathon",
    description: "National initiative celebrating women developers, creating AI-driven solutions and technical breakthroughs.",
    tech: ["React.js", "Python", "Generative AI", "MongoDB", "Node.js"],
    certificateUrl: "https://drive.google.com/file/d/1dapm-ckiSfDwywN5XXMyJe6rGEvMzS3A/view?usp=sharing"
  }
];

export const workshopsList = [
  {
    id: 1,
    name: "Intellipaat AI & Cloud Summit",
    organizer: "Intellipaat",
    logo: "https://logo.clearbit.com/intellipaat.com",
    tag: "Enterprise AI & Cloud Architecture",
    description: "Summit covering enterprise AI architectures, AWS cloud integrations, and scalable deployments.",
    tech: ["AWS Cloud", "Machine Learning", "DevOps", "MLOps"],
    certificateUrl: "https://drive.google.com/file/d/11aRs0hedlWbALDfGOGFV-o8hGta5t5KR/view?usp=sharing"
  },
  {
    id: 2,
    name: "PurpleLane Full Stack Bootcamp",
    organizer: "PurpleLane",
    logo: purplelaneLogo,
    tag: "Full Stack Engineering Intensive",
    description: "MERN engineering intensive building secure web applications with custom API schemas.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Git"],
    certificateUrl: "https://drive.google.com/file/d/16ASS3EA2_Y9ABFOKt_SklRkuEDDEFtox/view?usp=sharing"
  },
  {
    id: 3,
    name: "Built with AI Bootcamp",
    organizer: "Google",
    logo: builtWithAiLogo,
    tag: "AI Tools & Practical Development",
    description: "Hands-on bootcamp exploring Google's AI ecosystem, prompt engineering, and Gemini APIs.",
    tech: ["Gemini API", "Google AI Studio", "Prompt Engineering", "Python"],
    certificateUrl: "https://drive.google.com/file/d/1PhN_sbMM81_SCbcG6bV2PDHTNKTuwyW4/view?usp=sharing"
  },
  {
    id: 4,
    name: "PurpleLane Gen AI Workshop",
    organizer: "PurpleLane",
    logo: purplelaneLogo,
    tag: "Generative AI & LLM Deployment",
    description: "Workshop focused on developing generative AI systems, LLM integration, and vector search.",
    tech: ["Generative AI", "LLMs", "Vector Search", "Prompt Engineering"],
    certificateUrl: "https://drive.google.com/file/d/1e2O7pXPXTJbnubc9raPgkulK5silxKpd/view?usp=sharing"
  }
];

export const certificationsList = [
  {
    id: 1,
    title: "Generative AI Foundations",
    issuer: "AWS",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description: "Mastered core generative AI concepts including foundation models, LLM architectures, and prompt engineering using AWS Bedrock — applying responsible AI principles in cloud-native deployments.",
    certificateUrl: "https://drive.google.com/file/d/1R9IYg00mxZzN5Kd_kOD-4QEhy_M358Bn/view?usp=sharing"
  },
  {
    id: 2,
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    description: "Gained foundational expertise in Oracle Cloud Infrastructure covering compute, storage, networking, and identity management — demonstrating cloud architecture fundamentals.",
    certificateUrl: "https://drive.google.com/file/d/1o4d_b8-YCm_W6swaFOSZ35rEvrpfZqoc/view?usp=sharing"
  },
  {
    id: 3,
    title: "Python for Machine Learning",
    issuer: "IBM",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    description: "Applied Python for end-to-end ML pipelines — data preprocessing, feature engineering, and model evaluation using scikit-learn, NumPy, and Pandas on real-world datasets.",
    certificateUrl: "https://drive.google.com/file/d/1_iZnLQHQia07pI24akeAt4xEeVu4zD2b/view?usp=sharing"
  },
  {
    id: 4,
    title: "AWS Virtual Internship Certification",
    issuer: "AWS",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description: "Completed virtual cloud engineering tasks on AWS — deploying scalable solutions with EC2, S3, and Lambda while applying architectural best practices and cloud security principles.",
    certificateUrl: "https://drive.google.com/file/d/1R9IYg00mxZzN5Kd_kOD-4QEhy_M358Bn/view?usp=sharing"
  },
  {
    id: 5,
    title: "Deloitte Technology Virtual Internship",
    issuer: "Deloitte",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg",
    description: "Simulated real-world technology consulting tasks — conducted data analysis, built automation scripts, and developed digital transformation strategies aligned with enterprise standards.",
    certificateUrl: "https://drive.google.com/file/d/1n0D9IqBtDdhNqDUlRveoLUAKN_AhLvwl/view?usp=sharing"
  },
  {
    id: 6,
    title: "TATA Virtual Internship",
    issuer: "TATA",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    description: "Executed cybersecurity simulations covering threat detection, identity & access management, and incident response — building practical defensive security skills in enterprise environments.",
    certificateUrl: "https://drive.google.com/file/d/1lSZmlqaR83kO890eLljRmfOVioRZuQXW/view?usp=sharing"
  },
  {
    id: 7,
    title: "Google Analytics Certification",
    issuer: "Google",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Mastered web analytics, audience segmentation, and conversion tracking using Google Analytics 4 — leveraging data-driven insights to optimise digital marketing performance.",
    certificateUrl: "https://drive.google.com/file/d/1YTa-omkD50fmbJk72lsZmf4jSDmi0aw_/view?usp=sharing"
  },
  {
    id: 8,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    description: "Built scalable, schema-flexible database applications using MongoDB aggregation pipelines, Atlas Search, and advanced indexing strategies for high-performance NoSQL solutions.",
    certificateUrl: "https://drive.google.com/file/d/1PUuuCcrvGHjVkVYNdkX14GhpJ09GcED2/view?usp=sharing"
  }
];

