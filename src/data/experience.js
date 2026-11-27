// Condensed from the public resume; numbers must match it.
const experiences = [
  {
    period: "2025-05 → now",
    title: "Software Engineer",
    company: "Modec",
    link: "https://www.modec.com",
    bullets: [
      "Led a distributed document synchronization platform, cutting processing latency from 15 minutes to 1 minute with a fault-tolerant, event-driven workflow.",
      "Automated Azure environments with Terraform and GitOps (ArgoCD on Kubernetes); environment setup went from 1–2 days to minutes.",
      "Reduced annual cloud cost by about 50% by removing idle resources and tuning storage, spot-node and compute tiers.",
    ],
    skills: ["FastAPI", "Azure", "Terraform", "PostgreSQL", "Kubernetes", "AI Agents"],
  },
  {
    period: "2024-04 → 2025-04",
    title: "Backend Software Engineer",
    company: "Employment Hero",
    link: "https://employmenthero.com/",
    bullets: [
      "Designed a scalable search system on PostgreSQL (tsvector, trigram) as a cost-effective alternative to external search infrastructure.",
      "Contributed to a 5x CI/CD cost reduction by migrating all service pipelines from CircleCI to GitHub Actions.",
    ],
    skills: ["Ruby on Rails", "PostgreSQL", "gRPC", "CI/CD"],
  },
  {
    period: "2022-11 → 2024-03",
    title: "Software Engineer",
    company: "Athena Studio",
    link: "https://athena.studio/",
    bullets: [
      "Built high-throughput FastAPI ingestion pipelines for automated revenue and cost data collection.",
      "Implemented event processing on GCP Pub/Sub, handling millions of daily events and cutting infrastructure cost by about 25%.",
    ],
    skills: ["Python", "FastAPI", "GCP", "Airflow"],
  },
];

export default experiences;
