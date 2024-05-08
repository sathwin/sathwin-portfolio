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
  { value: "5", label: "prod systems" },
  { value: "8+", label: "AWS services" },
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
    desc: "ASU GSG Teaching Excellence Award (Spring 2026) + Fulton Outstanding UGTA Award (2023–2024). TA for FSE 100 — 200+ students.",
    metric: "200+ students mentored",
    color: "teal",
  },
];

// Experience timeline
export const experience: Experience[] = [
  {
    year: "Jun 2025 – Apr 2026",
    company: "VariableAI",
    role: "SWE Intern",
    bullets: [
      "End-to-end: React + TypeScript analytics dashboard, FastAPI backend, LangChain + OpenRouter LLM pipeline. System absorbed second enterprise client volume with zero code changes — 60% manual review reduction.",
      "Diagnosed slow brand-lookup queries; added PostgreSQL index coverage + Redis caching. Response time: ~2s → <500ms.",
    ],
  },
  {
    year: "Aug 2024 – May 2025",
    company: "AI Quotient",
    role: "SWE Intern",
    bullets: [
      "Full stack for BERT ticket routing: FastAPI inference on EC2, Redis caching, React + TypeScript ops dashboard. Routing accuracy: 68% → 80%+.",
      "Python ETL pipeline with C++ preprocessing → PostgreSQL on RDS. CloudWatch caught 2 upstream schema changes pre-corruption.",
    ],
  },
  {
    year: "Oct 2023 – Aug 2024",
    company: "ASU AI Cloud Innovation Center",
    role: "Cloud Developer Intern",
    bullets: [
      "PHI-compliant medical chatbot: React + WebSocket streaming, FastAPI on ECS Fargate, Bedrock LLM, Cognito auth.",
      "PDF pipeline: $3/page → <$0.01 via serverless Lambda + native C++ parser. WCAG 2.1 compliant.",
    ],
  },
];
