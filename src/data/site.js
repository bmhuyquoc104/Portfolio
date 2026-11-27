import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export const NAME = "Huy Quoc Vo";
export const ALIAS = "Steve Vo"; // English name, so foreign recruiters can address and search for you
export const ROLE = "Software Engineer";
export const TAGLINE =
  "I build full-stack applications and cloud infrastructure that solve business problems: faster pipelines, lower cloud cost, safer releases.";
export const RESUME_URL = "/resume.pdf"; // lives in public/ so the address never changes
export const EMAIL = "huy.vo.softwareengineer@gmail.com";

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/bmhuyquoc104", Icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/huyvoquoc", Icon: FaLinkedinIn },
  { name: "Email", href: `mailto:${EMAIL}`, Icon: FaEnvelope },
];

// ids must match the <section id> of each block.
export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const ABOUT = [
  "I work mostly in the terminal (Neovim, tmux, fish; my setup is on GitHub), use AI tools to move faster, and keep learning from new tech and books.",
];

export const PROJECTS_INTRO =
  "Side projects I build outside work to learn and experiment. My work is under Experience.";

export const SKILL_GROUPS = [
  { title: "Backend", items: ["Python (Django, FastAPI)", "Ruby on Rails", "REST", "gRPC", "GraphQL"] },
  { title: "Frontend", items: ["React", "TypeScript", "Material UI", "styled-components"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "ClickHouse", "Redis", "Kafka", "Airflow"] },
  { title: "Cloud & Platform", items: ["Azure", "GCP", "Terraform", "Docker", "Kubernetes", "ArgoCD", "GitHub Actions", "Azure DevOps"] },
  { title: "AI", items: ["LLM Integration", "RAG", "MCP"] },
];

export const EDUCATION = {
  period: "2019-09 → 2023-09",
  degree: "BSc Software Engineering",
  school: "RMIT University Vietnam",
  detail: "First Class Honours",
  link: "https://www.myequals.net/sharelink/b3ab6670-8b0d-4648-9699-ee67119fb46c/4d9d4ecd-ec97-4df0-9301-156322c7bac5", // RMIT digital credential (MyEquals)
};
