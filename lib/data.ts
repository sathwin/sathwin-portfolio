// All portfolio content as typed constants

export interface Tag {
  label: string;
  color: "blue" | "teal" | "amber" | "gray";
}

export interface Project {
  name: string;
  tags: Tag[];
  infra: string;
  metric: string;
  desc: string;
  github?: string;
  image?: string; // Path to project preview image
  demo?: string;  // Optional demo link
}

export interface Award {
  icon: string;
  title: string;
  desc: string;
  metric: string;
  color: "teal" | "amber";
}

export interface Experience {
  year: string;
  company: string;
  role: string;
  bullets: string[];
}

export interface StackLayer {
  layer: string;
  pills: string[];
  color: "blue" | "teal" | "amber" | "gray";
}

export interface OpsCard {
  icon: string;
  title: string;
  bullets: string[];
  color: "teal" | "blue" | "amber";
}

// Personal info
export const personalInfo = {
  name: "Sathwin Reddy Julakanti",
  email: "sjulaka7@asu.edu",
  phone: "520-858-1832",
  linkedin: "https://linkedin.com/in/sathwin",
  github: "https://github.com/sathwin",
  degree: "M.S. CS · ASU · 4.0",
  status: "● open · May 2026",
};

// Typewriter roles
export const typewriterRoles = [
  "Software Engineer · Full-Stack",
  "Cloud & DevOps Engineer · AWS",
  "AI / ML Systems Engineer",
  "Backend · Distributed Systems",
];

// Hero pillars
export const pillars = [
  {
    label: "FULL-STACK",
    color: "blue" as const,
    techs: "React · Next.js / FastAPI · Node.js / TypeScript · REST",
  },
  {
    label: "CLOUD · DEVOPS",
    color: "teal" as const,
    techs: "AWS · ECS · Lambda / Docker · K8s · IaC / CI/CD · X-Ray",
  },
  {
    label: "AI / ML",
    color: "amber" as const,
    techs: "LangChain · RAG / YOLOv8 · BERT / Bedrock · PyTorch",
  },
];

// Hero stats
export const heroStats = [
  { value: "6", label: "prod systems" },
  { value: "10+", label: "AWS services" },
  { value: "<1¢", label: "pdf/page cost", isStatic: true },
  { value: "4.0", label: "GPA · M.S." },
];

// Spec panel sections
export const specPanelData = {
  identity: [
    { key: "name", value: "Sathwin R. Julakanti", color: "#EEF4FF" },
    { key: "degree", value: "M.S. CS · ASU · 4.0", color: "#A8C4E0" },
    { key: "status", value: "● open · May 2026", color: "#4ECBA0" },
  ],
  capabilities: [
    { key: "frontend", value: "React · Next · TS", color: "#5B8CFF" },
    { key: "backend", value: "FastAPI · Node · C++", color: "#5B8CFF" },
    { key: "infra", value: "AWS · Docker · K8s", color: "#4ECBA0" },
    { key: "ai/ml", value: "LangChain · BERT", color: "#EF9F27" },
  ],
  certifications: ["AWS SAA", "AZ-204", "Cloud Prac"],
};

// Projects
export const projects: Project[] = [
  {
    name: "LegalDocs AI",
    tags: [
      { label: "ECS · Lambda", color: "teal" },
      { label: "React · FastAPI", color: "blue" },
      { label: "Bedrock", color: "amber" },
    ],
    infra: "Bedrock · Step Functions · Textract · Cognito · KMS · CloudFormation · X-Ray",
    metric: "15 min → 2 min analysis · multi-tenant · PHI compliant",
    desc: "Contract analysis platform built as ASU × Business School capstone. Serverless ingestion pipeline chains Textract OCR into Claude 3.5 via Bedrock. RAG comparison feature lets users ask plain-English questions across contracts.",
    github: "https://github.com/sathwin/legaldocs-ai",
    image: "/projects/legaldocs.png",
  },
  {
    name: "SmartQueue",
    tags: [
      { label: "ECS · Redis", color: "teal" },
      { label: "C++ · FastAPI", color: "blue" },
    ],
    infra: "CloudWatch auto-scaling · GitHub Actions CI/CD · Docker · ECR · ECS workers",
    metric: "Latency flat at 2× concurrent load · multiple deploys/day",
    desc: "Distributed task queue with FastAPI REST API and React real-time dashboard. C++ worker processes for compute-heavy jobs. ECS auto-scaling triggered by CloudWatch queue-depth metrics.",
    github: "https://github.com/sathwin/smartqueue",
    image: "/projects/smartqueue.png",
  },
  {
    name: "FlowSight",
    tags: [
      { label: "YOLOv8 · Kafka", color: "amber" },
      { label: "K8s · EKS", color: "teal" },
    ],
    infra: "Docker · MLflow · Grafana · ONNX · real-time Kafka multi-camera ingestion",
    metric: "94.7% mAP · real-time multi-camera detection",
    desc: "End-to-end real-time traffic intelligence. Kafka decouples bursty camera traffic from the inference API. Grafana caught a checkpoint degrading on nighttime footage that aggregate mAP had hidden.",
    github: "https://github.com/sathwin/flowsight",
    image: "/projects/flowsight.png",
  },
  {
    name: "MediQuery AI",
    tags: [
      { label: "ECS Fargate", color: "teal" },
      { label: "React · WebSocket", color: "blue" },
      { label: "Bedrock", color: "amber" },
    ],
    infra: "Bedrock · Lambda · Cognito · CloudFormation · X-Ray · C++ PDF parser",
    metric: "$3/page → <$0.01 · WCAG 2.1 · PHI compliant",
    desc: "PHI-compliant medical chatbot with real-time token streaming via WebSocket. FastAPI backend on ECS Fargate connected to AWS Bedrock for LLM inference. PDF accessibility pipeline rebuilt serverless with native C++ parser, reducing costs from $3 to under a penny per page.",
    github: "https://github.com/sathwin/mediquery-ai",
    image: "/projects/mediquery.png",
  },
  {
    name: "ChainSwap DEX",
    tags: [
      { label: "Solidity · Web3", color: "blue" },
      { label: "React · TypeScript", color: "blue" },
    ],
    infra: "Hardhat · Ethereum · AMM Protocol · Liquidity Pools · Smart Contracts",
    metric: "AMM protocol · swap routing · slippage protection",
    desc: "Decentralized exchange protocol implementing automated market maker (AMM) with constant product formula. Built TypeScript/React frontend for wallet connection and swap execution. Deployed and tested on Hardhat network with comprehensive unit tests covering edge cases including slippage, price impact, and reentrancy protection.",
    github: "https://github.com/sathwin/chainswap",
    image: "/projects/chainswap.png",
  },
  {
    name: "BookTrack Library",
    tags: [
      { label: "React · Node.js", color: "blue" },
      { label: "PostgreSQL", color: "gray" },
    ],
    infra: "JWT Authentication · REST API · Advanced Search · Database Optimization",
    metric: "35% faster retrieval · 25% query optimization",
    desc: "Full-stack library management system with React frontend and Node.js backend. Implemented advanced search and filtering improving retrieval efficiency by 35%. Optimized database schemas reducing query response time by 25%. Integrated JWT authentication for secure user management.",
    github: "https://github.com/sathwin/booktrack",
    image: "/projects/booktrack.png",
  },
];

// Stack layers
export const stackLayers: StackLayer[] = [
  {
    layer: "FRONTEND",
    pills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "WebSockets", "D3.js"],
    color: "blue",
  },
  {
    layer: "BACKEND",
    pills: ["FastAPI", "Node.js", "C++", "Express", "GraphQL", "REST APIs", "Flask"],
    color: "blue",
  },
  {
    layer: "DATA",
    pills: ["PostgreSQL", "Redis", "MongoDB", "S3", "RDS", "Vector DBs"],
    color: "gray",
  },
  {
    layer: "CLOUD · INFRA",
    pills: ["ECS/Fargate", "Lambda", "CloudFormation", "API Gateway", "Cognito", "KMS", "X-Ray", "SageMaker", "Bedrock"],
    color: "teal",
  },
  {
    layer: "DEVOPS",
    pills: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "MLflow", "W&B"],
    color: "teal",
  },
  {
    layer: "AI / ML",
    pills: ["LangChain", "PyTorch", "BERT", "YOLOv8", "HuggingFace", "RAG pipelines", "ViT/CLIP"],
    color: "amber",
  },
];

// Operations cards
export const opsCards: OpsCard[] = [
  {
    icon: "settings",
    title: "Infrastructure as Code",
    color: "teal",
    bullets: [
      "CloudFormation across 3 AWS accounts (AI Cloud Innovation Center)",
      "ECS Fargate + API Gateway + Cognito + KMS per environment",
      "X-Ray trace surfaced exact Lambda fault mid-client demo",
    ],
  },
  {
    icon: "git-merge",
    title: "CI/CD Pipelines",
    color: "blue",
    bullets: [
      "GitHub Actions → Docker build → ECR push → ECS rolling deploy",
      "Unit tests gated on every merge (SmartQueue)",
      "Multiple deploys/day during final sprint with zero regressions",
    ],
  },
  {
    icon: "chart-line",
    title: "Observability",
    color: "amber",
    bullets: [
      "CloudWatch alerts caught 2 upstream schema changes before training corruption",
      "Grafana caught checkpoint degradation hidden by aggregate mAP",
      "W&B structured ablation reviews across 3D detection mAP + ADE/FDE",
    ],
  },
  {
    icon: "server",
    title: "Cost & Performance",
    color: "teal",
    bullets: [
      "PDF pipeline: $3/page → <$0.01 via Lambda + native C++ parser",
      "Query latency: ~2s → <500ms via PostgreSQL index + Redis cache layer",
      "ECS auto-scaling kept SmartQueue latency flat as concurrent load doubled",
    ],
  },
];

// Research section
export const research = {
  role: "NSF Research Assistant",
  lab: "ASU IMPACT Lab · UC San Diego collab",
  advisors: "Dr. Chavez, Dr. Owens",
  duration: "Dec 2023 – Aug 2025",
  highlights: [
    "PyTorch multimodal fusion (LiDAR + egocentric camera). CLIP-style contrastive pre-training. 22% zero-shot scene classification improvement on ASU–UCSD benchmark.",
    "GPT-4V evaluation harness benchmarking multi-agent perception across 10K+ driving frames. W&B logging turned ablation reviews from qualitative to quantitative.",
  ],
};

// Awards
export const awards: Award[] = [
  {
    icon: "trophy",
    title: "OpenAI × ASU Pitch Competition — 1st Place",
    desc: "1st place in AI pitch competition co-hosted with OpenAI and Arizona State University",
    metric: "rank: 1 of n competitors · May 2025",
    color: "amber",
  },
  {
    icon: "medal",
    title: "Moeur Award",
    desc: "Top 0.4% of ASU graduates — highest academic distinction awarded at graduation",
    metric: "top 0.4% percentile",
    color: "amber",
  },
  {
    icon: "cloud",
    title: "AWS SAA + AZ-204 + Cloud Practitioner",
    desc: "AWS Certified Solutions Architect Associate (Feb 2026), Azure Developer Associate AZ-204 (Dec 2025), AWS Cloud Practitioner (May 2025)",
    metric: "3 active cloud certifications",
    color: "teal",
  },
  {
    icon: "school",
    title: "Teaching Excellence",
    desc: "ASU GSG Teaching Excellence Award (Spring 2026) + Fulton Outstanding UGTA Award (2023–2024). TA supporting 120+ students per semester across Python, Java, C++, MATLAB, and data structures courses.",
    metric: "240+ students mentored",
    color: "teal",
  },
  {
    icon: "award",
    title: "SUN Award",
    desc: "ASU SUN (Serving University Needs) Award for exemplary service and dedication to the School of Molecular Sciences, recognized for commitment to assisting colleagues during times of need.",
    metric: "Nov 2024 · ASU Recognition",
    color: "teal",
  },
  {
    icon: "code",
    title: "Full-Stack Developer Certification",
    desc: "ASU/AZNext Full-Stack Developer Certification with Cognizant covering React, Node.js, and modern web development practices",
    metric: "Sep 2025 · Cognizant",
    color: "teal",
  },
];

// Experience timeline
export const experience: Experience[] = [
  {
    year: "Jun 2025 – May 2026",
    company: "VariableAI",
    role: "Software Engineer Intern",
    bullets: [
      "Built LLM document extraction pipeline processing thousands of documents monthly for 2 enterprise clients. Designed automated validation system reducing manual review by 60%+, enabling team to scale without additional headcount.",
      "Implemented AI-driven RAG search using LangChain and vector embeddings, enabling natural language queries and context-aware responses over extracted document corpus.",
      "Developed full-stack analytics dashboard (React + TypeScript, Node.js/Express). Improved query performance through PostgreSQL indexing and Redis caching, bringing response times under 500ms.",
    ],
  },
  {
    year: "Aug 2025 – May 2026",
    company: "Claude Builder Club @ ASU",
    role: "Head of Operations / Technology",
    bullets: [
      "Leading operations and technology initiatives for ASU's official Claude AI builder community, organizing workshops and hackathons.",
      "Coordinating technical projects and fostering collaboration among students building AI-powered applications.",
    ],
  },
  {
    year: "Aug 2024 – May 2025",
    company: "AI Quotient",
    role: "Software Engineer Intern",
    bullets: [
      "Built ML ticket classification service using FastAPI and BERT, improving routing accuracy from 68% to 80%+. Deployed on EC2 with Redis caching and React + TypeScript dashboard for real-time monitoring.",
      "Designed automated ETL pipeline combining Python orchestration with C++ components for data-intensive transformations. Integrated S3, RDS PostgreSQL, and Lambda with CloudWatch monitoring for weekly retraining cycles.",
      "Containerized analytics application with Docker and deployed to ECS. Built Flask API with Chart.js visualizations to surface model performance metrics.",
    ],
  },
  {
    year: "Oct 2023 – Aug 2024",
    company: "ASU AI Cloud Innovation Center",
    role: "Cloud Developer Intern",
    bullets: [
      "Built PHI-compliant medical chatbot with React + TypeScript frontend and FastAPI backend on ECS Fargate, connecting to AWS Bedrock for LLM inference with WebSocket streaming for real-time token delivery.",
      "Cut document processing costs from $3/page to under $0.01 by rearchitecting PDF accessibility pipeline into serverless Lambda workflow with native C++ parsing library while maintaining WCAG 2.1 compliance.",
      "Owned CloudFormation infrastructure-as-code across three AWS accounts and instrumented system with X-Ray distributed tracing end-to-end for rapid debugging.",
    ],
  },
  {
    year: "Aug 2024 – Apr 2026",
    company: "ASU Fulton Academic Integrity Matters",
    role: "Student Representative",
    bullets: [
      "Served on academic integrity appeal hearing boards, reviewing real cases and contributing to fair, policy-aligned outcomes alongside Academic Integrity Officers.",
      "Participated in formal hearings where student sanctions were reviewed, providing student perspective to process with serious academic consequences.",
    ],
  },
  {
    year: "Jan 2023 – May 2026",
    company: "Arizona State University",
    role: "Teaching Assistant",
    bullets: [
      "Supporting 120+ students per semester across Python, Java, C++, MATLAB, and data structures courses through weekly lab sessions and office hours.",
      "Led lab sessions and ran classes independently when professors unavailable. Provided detailed feedback on assignments and conducted one-on-one mentoring.",
      "Recognized with Fulton Outstanding UGTA Award (2023-2024) and GSG Teaching Excellence Award (Spring 2026) for going above and beyond role responsibilities.",
    ],
  },
];
