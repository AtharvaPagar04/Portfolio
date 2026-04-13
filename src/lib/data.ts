// ─── lib/data.ts ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personal = {
    name: "Atharva Pagar",
    logo: "Atharva",
    tagline: ["Full-Stack Developer", "AI/ML Enthusiast", "Problem Solver", "Open-Source Contributor"],
    about:
        "Motivated software developer with strong problem-solving skills, quick adaptability, and a disciplined approach to work. I bring focus, curiosity, and independence gained through sports and solo-travel, with a drive to learn and contribute to real project environments.",
    about2:
        "I'm currently pursuing a B.Tech in Computer Science & Engineering (AI & ML) at VIT Bhopal University. I enjoy building intelligent, full-stack applications — from computer vision tools with Python and OpenCV to responsive frontends with Next.js and Tailwind CSS.",
    email: "atharvapagar04@gmail.com",
    phone: "+91 9403148744",
    location: "Bhopal, India",
    cgpa: "7.71",
    resumeUrl: "/resume.pdf",
    socials: {
        linkedin: "https://www.linkedin.com/in/atharva-pagar-809bbb273",
        github: "https://github.com",
    },
};



export const skillCategories = [
    {
        icon: "fas fa-code",
        title: "Programming Languages",
        skills: ["Java", "Python", "C++", "JavaScript"],
    },
    {
        icon: "fas fa-laptop-code",
        title: "Full-Stack",
        skills: ["MERN Stack", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
        icon: "fas fa-database",
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        icon: "fas fa-tools",
        title: "Tools & Technologies",
        skills: ["Git & GitHub", "Postman", "GitHub Copilot", "ChatGPT", "Linux Basics"],
    },
    {
        icon: "fas fa-cogs",
        title: "Software Engineering",
        skills: ["OOP", "Basic DSA", "Computer Networks"],
    },

    {
        icon: "fas fa-robot",
        title: "AI & LLM-Oriented Skills",
        skills: [
            "Computer Vision for visual analysis & interpretation",
            "NLP fundamentals for LLM data understanding",
            "Reinforcement Learning concepts (RLHF basics)",
            "Machine Learning model evaluation & data quality understanding",
            "Dataset curation, preprocessing & structuring",
        ],
    },
];

export const experiences = [
    {
        period: "June 2023 – August 2023",
        location: "Nashik, India",
        role: "IT Support Assistant / Hardware Assistant",
        company: "Yash Infotech",
        companyClass: "company-purple",
        points: [
            "Diagnosed and resolved system issues, strengthening analytical thinking and technical troubleshooting skills.",
            "Assisted in deploying small-scale network setups (routers, cabling, basic configuration), gaining practical IT infrastructure exposure.",
            "Coordinated with clients during service visits, improving communication and real-world problem-solving under time constraints.",
            "Streamlined equipment handling and documentation, ensuring efficient workflow and organized technical operations.",
        ],
    },
];

export const projects = [
    {
        title: "Virtual Pen – Gesture-Based Drawing Tool",
        desc: "A computer vision application enabling users to draw using hand gestures with real-time hand tracking, color selection, and eraser features.",
        tags: ["Python", "OpenCV", "MediaPipe", "NumPy"],
        category: "ai-web",
        badge: "AI + CV",
        badgeColor: "#8b5cf6",
        bg: "linear-gradient(135deg,#1a1a2e,#16213e)",
        live: "#",
        code: "#",
    },
    {
        title: "EventSnap – AI-Powered Event Photo Finder",
        desc: "Frontend for an AI-powered platform that identifies event photos using facial recognition. Includes photo upload, search flow, and results display.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        category: "ai-web",
        badge: "AI + Web",
        badgeColor: "#4ade80",
        badgeTextColor: "#000",
        bg: "linear-gradient(135deg,#0f2027,#203a43)",
        live: "#",
        code: "https://github.com/AtharvaPagar04/eventsnap",
    },
    {
        title: "VeggieMap – Hyperlocal Vendor Finder",
        desc: "Real-time platform to discover nearby vegetable vendors (shops & hawkers) with live GPS tracking, geospatial search, vendor dashboard, and favorites — built for mobile vendors sharing live location on an interactive map.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Leaflet", "Geo-indexing"],
        category: "web",
        badge: "Real-Time + Maps",
        badgeColor: "#22c55e",
        badgeTextColor: "#fff",
        bg: "linear-gradient(135deg,#052e16,#14532d)",
        live: "#",
        code: "https://github.com/AtharvaPagar04/veggiemap-dev",
    },
];

export const education = [
    {
        period: "Sep 2023 – Present",
        location: "Bhopal, India",
        degree: "B.Tech – Computer Science and Engineering (AI & ML)",
        institution: "VIT Bhopal University",
        badge: "CGPA: 7.71",
        points: [
            "Specializing in Artificial Intelligence and Machine Learning.",
            "Building full-stack and AI-driven projects to apply classroom learning.",
            "Actively participating in hackathons and project-based learning.",
        ],
    },
    {
        period: "May 2023",
        location: "Nashik, India",
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Unnati Secondary and Higher Secondary School",
        badge: "66.50%",
        points: [
            "Completed Higher Secondary education with a focus on Science.",
        ],
    },
    {
        period: "May 2021",
        location: "Nashik, India",
        degree: "Secondary School Certificate (SSC)",
        institution: "Espalier The Experimental School",
        badge: "88.40%",
        points: [
            "Completed Secondary education with distinction.",
        ],
    },
];

export const certifications = [
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2024",
        desc: "Covered cloud fundamentals, IaaS, PaaS, SaaS, and deployment strategies on AWS including EC2, S3, IAM, and VPC.",
        featured: true,
        link: "#",
    },
    {
        title: "Blockchain Developer",
        issuer: "IBM",
        date: "2024",
        desc: "Learned blockchain fundamentals, smart contracts, Hyperledger Fabric, and decentralized application development.",
        featured: false,
        link: "#",
    },
];
