// ─── lib/data.ts ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personal = {
    name: "Atharva Pagar",
    logo: "Atharva",
    tagline: ["GenAI Engineer", "AI/ML Enthusiast", "Problem Solver", "Open-Source Contributor"],
    about:
        "I'm a Computer Science (AI & ML) undergraduate focused on building practical, production-style AI systems — repository-aware RAG applications, hybrid retrieval pipelines, reinforcement-learning trading agents, and local LLM tooling. Hands-on with Python, PyTorch, Qdrant, and Ollama, with a strong foundation in full-stack engineering using React.js and Next.js.",
    about2:
        "I'm currently pursuing a B.Tech in Computer Science & Engineering (AI & ML) at VIT Bhopal University, and actively seeking AI Engineer / GenAI Engineer / LLM Engineer internship roles involving RAG systems, applied reinforcement learning, and retrieval evaluation.",
    email: "atharvapagar04@gmail.com",
    phone: "+91 9403148744",
    location: "Nashik, Maharashtra",
    cgpa: "7.73",
    resumeUrl: "/Resume_Atharva_Pagar.pdf",
    socials: {
        linkedin: "https://www.linkedin.com/in/atharva-pagar-809bbb273",
        github: "https://github.com",
    },
};



export const skillCategories = [
    {
        icon: "fas fa-robot",
        title: "AI / GenAI",
        skills: ["RAG systems", "LLM application development", "Prompt engineering", "LangChain", "LlamaIndex", "Ollama", "Hugging Face Transformers"],
    },
    {
        icon: "fas fa-sync-alt",
        title: "Reinforcement Learning",
        skills: ["PPO", "Actor-Critic architectures", "GAE", "Reward shaping", "Policy-gradient methods"],
    },
    {
        icon: "fas fa-brain",
        title: "Deep Learning",
        skills: ["PyTorch", "LSTM / Sequence modeling", "Time-series feature engineering"],
    },
    {
        icon: "fas fa-search",
        title: "Retrieval / Vector Search",
        skills: ["Qdrant", "Embeddings", "Hybrid search (BM25 + RRF)", "Semantic search", "Retrieval evaluation"],
    },
    {
        icon: "fas fa-check-circle",
        title: "Evaluation / Observability",
        skills: ["DeepEval", "pytest", "Groundedness & hallucination testing"],
    },
    {
        icon: "fas fa-sliders-h",
        title: "Model Adaptation",
        skills: ["LoRA", "PEFT", "Local LLM inference workflows"],
    },
    {
        icon: "fas fa-chart-line",
        title: "Quant / Trading",
        skills: ["Backtesting", "Equity-curve evaluation", "Multi-asset pipelines", "Binance API", "OHLCV data processing"],
    },
    {
        icon: "fas fa-code",
        title: "Programming / Backend",
        skills: ["Python", "Java", "JavaScript/TypeScript", "FastAPI", "REST APIs", "SQLite", "PostgreSQL", "MongoDB"],
    },
    {
        icon: "fas fa-laptop-code",
        title: "Frontend / Infra",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Git", "Linux", "Docker"],
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
            "Diagnosed and resolved system, hardware, OS, and basic network issues, strengthening troubleshooting and root-cause analysis skills.",
            "Assisted with small-scale network setups and basic configuration during client visits, maintaining equipment and documentation workflows under time constraints.",
        ],
    },
];

export const projects = [
    {
        title: "CodeSeek – Repository-Aware RAG Coding Assistant",
        desc: "A local-first, repository-aware RAG assistant combining Qdrant vector search with in-process BM25 and Reciprocal Rank Fusion (RRF) for hybrid retrieval across codebases. Features a scored intent-classification layer (10 intent families), two-layer source-attribution model, and a retrieval-evaluation harness (DeepEval, pytest) to catch hit errors and false-absence failures.",
        tags: ["Python", "Qdrant", "RAG", "Ollama", "Git"],
        category: "ai-web",
        badge: "RAG + LLM",
        badgeColor: "#a78bfa",
        badgeTextColor: "#fff",
        bg: "linear-gradient(135deg,#1e1b4b,#312e81)",
        live: "#",
        code: "https://github.com/AtharvaPagar04/Codeseek",
    },
    {
        title: "RL Trading Agent – LSTM/PPO Position-Sizing System",
        desc: "An offline reinforcement-learning trading research system using a shared LSTM actor-critic policy trained with PPO to learn continuous long/short position sizing from crypto market sequences. Includes hourly OHLCV feature pipelines, risk-aware reward components, GAE, walk-forward testing, feature ablation, and exposure-equivalent baseline comparison across BTC, ETH, and SOL.",
        tags: ["Python", "PyTorch", "PPO", "LSTM", "Binance OHLCV"],
        category: "quant",
        badge: "RL + Quant",
        badgeColor: "#f59e0b",
        badgeTextColor: "#000",
        bg: "linear-gradient(135deg,#451a03,#78350f)",
        live: "#",
        code: "https://github.com/AtharvaPagar04/PPO-LSTM-Trader",
    },
    {
        title: "Grid Trading Bot V3",
        desc: "A production-oriented algorithmic trading platform with a governed Python/FastAPI runtime, real-time telemetry, paper-trading engine, recovery-safe persistence, and a comprehensive Next.js operational dashboard.",
        tags: ["Python", "FastAPI", "Next.js", "TypeScript", "WebSockets"],
        category: "quant",
        badge: "Trading System",
        badgeColor: "#0ea5e9",
        badgeTextColor: "#fff",
        bg: "linear-gradient(135deg,#0c4a6e,#0369a1)",
        live: "#",
        code: "https://github.com/AtharvaPagar04/Trading-Bot",
    },

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
        badge: "CGPA: 7.73",
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
