"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileJson,
  GitFork,
  GraduationCap,
  Layers3,
  Link2,
  Mail,
  Network,
  Send,
  ServerCog,
  Sparkles,
  Trophy,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const personalInfo = {
  name: "Shariq Mateen",
  title: "Data Engineer | AI Automation Engineer",
  email: "shariqmateen80@gmail.com",
  linkedin: "https://www.linkedin.com/in/shariq-mateen-61b724264/",
  fiverr: "https://www.fiverr.com/users/shariq_mateen",
  github: "https://github.com/ShariqMateen",
  profileImage: "/profile.jpg",
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Pipelines Delivered", value: 24, suffix: "+" },
  { label: "Cloud Workflows", value: 16, suffix: "+" },
  { label: "Automation Hours Saved", value: 780, suffix: "+" },
  { label: "Avg. Query Gain", value: 43, suffix: "%" },
];

const summaryPoints = [
  "Architect scalable ETL pipelines that move raw operational data into analytics-ready models.",
  "Design cloud-native data platforms across AWS, Azure, Snowflake, Databricks, and modern warehouses.",
  "Optimize SQL workloads, dimensional models, and orchestration layers for reliability and speed.",
  "Build AI-enabled automations that connect APIs, LLMs, and workflows into production-ready systems.",
];

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: [string, number][];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Data Engineering",
    icon: Database,
    accent: "from-violet-500/35 to-purple-600/10",
    skills: [
      ["Python", 96],
      ["SQL", 98],
      ["PostgreSQL", 92],
      ["SQL Server", 88],
      ["MySQL", 87],
      ["Pandas", 91],
      ["NumPy", 85],
      ["PySpark", 89],
      ["Apache Spark", 90],
      ["ETL Pipelines", 97],
      ["Data Cleaning", 93],
      ["Data Transformation", 95],
      ["Data Warehousing", 94],
      ["Star Schema", 88],
      ["Snowflake Schema", 86],
      ["Apache Airflow", 89],
      ["Pentaho PDI", 84],
      ["Snowflake", 91],
      ["Databricks", 86],
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    accent: "from-amber-400/35 to-yellow-500/10",
    skills: [
      ["AWS", 92],
      ["Amazon S3", 93],
      ["AWS Glue", 88],
      ["Athena", 86],
      ["Lambda", 82],
      ["Azure SQL", 85],
      ["Azure Data Factory", 88],
      ["Azure Data Lake", 87],
    ],
  },
  {
    title: "AI Automation",
    icon: Bot,
    accent: "from-purple-500/35 to-violet-400/10",
    skills: [
      ["OpenAI API", 92],
      ["Gemini API", 85],
      ["n8n", 93],
      ["AI Agents", 89],
      ["Prompt Engineering", 90],
      ["Workflow Automation", 95],
      ["LLM Integration", 91],
    ],
  },
  {
    title: "Analytics",
    icon: Activity,
    accent: "from-fuchsia-400/30 to-pink-500/10",
    skills: [
      ["Power BI", 92],
      ["Tableau", 83],
      ["Excel", 90],
      ["Business Intelligence", 94],
      ["Dashboard Development", 93],
    ],
  },
];

type Project = {
  title: string;
  overview: string;
  problem: string;
  architecture: string[];
  stack: string[];
  workflow: string[];
  challenges: string;
  solution: string;
  results: string;
  github: string;
  category: string;
  secondaryLink?: {
    label: string;
    href: string;
  };
  projectImage?: string;
  visual?: "default" | "n8n" | "weather";
};

const projects: Project[] = [
  {
    title: "SuperStore ETL Pipeline",
    category: "Data Warehousing",
    overview:
      "A complete retail analytics solution that combines Python ETL, an MS SQL Server star schema, and a Tableau dashboard for SuperStore sales analysis.",
    problem:
      "A client needed sales data stored in a low-cost database and transformed into an analytics-ready structure that could power interactive reporting.",
    architecture: ["SuperStore Dataset", "Python ETL", "MS SQL Server", "Star Schema", "Tableau"],
    stack: ["Python", "Pandas", "PyODBC", "MS SQL Server", "Tableau Public"],
    workflow: ["Extract CSV", "Transform Data", "Load Dimensions", "Load Fact Table", "Visualize KPIs"],
    challenges:
      "Converting raw retail records into a well-structured warehouse model while keeping the schema simple and analytics-friendly.",
    solution:
      "Designed a star schema, created ETL logic in Python, loaded the warehouse into MS SQL Server, and published an interactive Tableau dashboard.",
    results:
      "Delivered a full data warehouse workflow that turns operational sales data into filterable business insight for decision-making.",
    github: "https://github.com/ShariqMateen/SuperStore-Sales-DataWarehouse-Dashboard",
    secondaryLink: {
      label: "LinkedIn Post",
      href: "https://www.linkedin.com/posts/shariq-mateen-61b724264_dataengineering-sqlserver-etl-activity-7366721308136599552-R59R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDkFHcBIAei9XmZgojERUt2btK5pTj8B0o",
    },
    projectImage: "/superstore-dashboard.png",
  },
  {
    title: "AWS + Snowflake Weather Data Pipeline",
    category: "Cloud & Data Engineering",
    overview:
      "A serverless weather ingestion pipeline that fetches live API data, processes it through AWS services, and lands it in Snowflake for analysis.",
    problem:
      "The goal was to build a secure, event-driven cloud pipeline that could ingest weather data continuously and make it queryable in Snowflake.",
    architecture: ["Weather API", "AWS Scheduler", "Lambda", "DynamoDB", "S3", "Snowflake"],
    stack: ["Python", "AWS Lambda", "AWS Scheduler", "DynamoDB", "Amazon S3", "Snowflake", "SQL", "AWS STS"],
    workflow: ["Schedule", "Fetch API", "Store in DynamoDB", "Stream to S3", "Load into Snowflake"],
    challenges:
      "Handling event-driven ingestion, secure cloud access, and a clean handoff from operational AWS services into Snowflake.",
    solution:
      "Built a pipeline with scheduled Lambda ingestion, DynamoDB stream processing, S3 as an intermediary layer, and Snowflake integration secured through STS.",
    results:
      "Created a scalable cloud-native ingestion pattern and strengthened hands-on expertise with AWS serverless architecture.",
    github: "https://github.com/ShariqMateen/WD-AWS-SF",
    secondaryLink: {
      label: "LinkedIn Post",
      href: "https://www.linkedin.com/posts/shariq-mateen-61b724264_aws-dataengineer-lambda-activity-7345352497172996096-biz_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDkFHcBIAei9XmZgojERUt2btK5pTj8B0o",
    },
    projectImage: "/aws-snowflake-pipeline.png",
    visual: "weather",
  },
  {
    title: "Data Warehouse using Pentaho",
    category: "ETL & Warehousing",
    overview:
      "Enterprise warehouse project using Pentaho PDI to consolidate operational systems into a dimensional model.",
    problem:
      "Business teams lacked a central source of truth across finance, operations, and CRM reporting.",
    architecture: ["ERP + CRM", "Pentaho PDI", "SQL Server DW", "BI Layer"],
    stack: ["Pentaho PDI", "SQL Server", "Star Schema", "ETL"],
    workflow: ["Profile", "Stage", "Dimension Load", "Fact Load", "Publish"],
    challenges:
      "Slowly changing dimensions, varied source quality, and overnight batch windows.",
    solution:
      "Designed staging pipelines, surrogate key strategy, and reusable Pentaho transformations.",
    results: "Created a reliable warehouse foundation for cross-functional analytics.",
    github: "https://github.com/ShariqMateen",
    projectImage: "/pentaho-etl.png",
  },
  {
    title: "AI Automation using n8n",
    category: "AI & Automation",
    overview:
      "An automated lead capture and classification workflow built in n8n with OpenAI to triage submissions and send structured notifications.",
    problem:
      "Website form submissions needed to be cleaned, classified, scored for urgency, filtered for spam, and routed without manual review.",
    architecture: ["Webhook", "Edit Fields", "OpenAI Classifier", "Code", "IF Filter", "Email"],
    stack: ["n8n", "OpenAI API", "Webhook", "Prompt Engineering", "Workflow Automation", "SMTP"],
    workflow: ["Capture", "Normalize", "Classify", "Score", "Filter", "Notify"],
    challenges:
      "Maintaining consistent AI classification, separating spam from genuine leads, and sending notifications in a clean business-ready format.",
    solution:
      "Built an n8n workflow using Webhook, Edit Fields, OpenAI classification, code-based lead scoring, conditional spam filtering, and structured email delivery.",
    results:
      "Reduced manual triage work and created a reusable AI automation pattern for lead qualification and notification routing.",
    github: "https://github.com/ShariqMateen/n8n-lead-capture-flow",
    projectImage: "/n8n-workflow.png",
    visual: "n8n",
  },
  {
    title: "Customer Churn Analysis",
    category: "Analytics",
    overview:
      "End-to-end analytics project combining data modeling, feature engineering, and executive-facing churn dashboards.",
    problem:
      "Customer attrition patterns were unclear, limiting retention strategies and campaign prioritization.",
    architecture: ["Transactional DB", "Feature Layer", "Warehouse", "BI Dashboard"],
    stack: ["Python", "SQL", "Pandas", "Power BI", "Statistics"],
    workflow: ["Prepare", "Engineer Features", "Analyze", "Segment", "Report"],
    challenges:
      "Sparse behavior signals and inconsistent customer lifecycle definitions.",
    solution:
      "Standardized cohorts, engineered retention features, and mapped churn drivers into dashboards.",
    results: "Delivered clearer retention insights for targeted business actions.",
    github: "https://github.com/ShariqMateen",
  },
  {
    title: "Book Scraping ETL Pipeline",
    category: "ETL & Python",
    overview:
      "Automated web extraction pipeline that collects catalog data, transforms it, and loads it for analysis.",
    problem:
      "Book metadata was spread across web pages and not available in a structured, reusable format.",
    architecture: ["Web Pages", "Scraper", "ETL Layer", "SQL Store"],
    stack: ["Python", "Requests", "BeautifulSoup", "SQL", "ETL"],
    workflow: ["Scrape", "Parse", "Normalize", "Load", "Analyze"],
    challenges:
      "Changing page structures, duplicate entities, and text normalization.",
    solution:
      "Implemented robust parsing, cleansing rules, and repeatable load jobs.",
    results: "Turned unstructured content into a reusable dataset for reporting and experimentation.",
    github: "https://github.com/ShariqMateen",
  },
  {
    title: "Business Intelligence Dashboard",
    category: "Analytics & BI",
    overview:
      "Executive dashboard suite focused on KPI monitoring, trend analysis, and drill-down reporting.",
    problem:
      "Stakeholders needed a faster way to track performance without relying on raw exports and spreadsheets.",
    architecture: ["Warehouse", "Semantic Layer", "Dashboard", "Alerts"],
    stack: ["Power BI", "Tableau", "SQL", "Business Intelligence"],
    workflow: ["Model", "Measure", "Visualize", "Share", "Monitor"],
    challenges:
      "Metric alignment, dashboard performance, and self-service usability.",
    solution:
      "Created a governed semantic layer with curated measures and intuitive visual storytelling.",
    results: "Improved executive visibility and reduced ad hoc reporting cycles.",
    github: "https://github.com/ShariqMateen",
  },
  {
    title: "Database Design Projects",
    category: "Database Design",
    overview:
      "Relational modeling and database design work focused on normalization, performance, and reporting-readiness.",
    problem:
      "Application data structures needed stronger relational design to support scale and downstream analytics.",
    architecture: ["App Data", "ER Modeling", "Relational DB", "Reporting Layer"],
    stack: ["SQL", "PostgreSQL", "SQL Server", "Data Modeling"],
    workflow: ["Model", "Normalize", "Index", "Query Tune", "Document"],
    challenges:
      "Balancing transactional integrity with reporting flexibility and performance.",
    solution:
      "Designed robust schemas, indexing strategies, and query patterns for operational and analytical use cases.",
    results: "Improved maintainability and query performance across multiple scenarios.",
    github: "https://github.com/ShariqMateen",
    projectImage: "/database-design.png",
  },
];

const services = [
  "ETL Pipeline Development",
  "Data Engineering",
  "SQL Database Design",
  "Data Warehousing",
  "Cloud Data Solutions",
  "AI Automation",
  "API Integration",
  "Workflow Automation",
  "Dashboard Development",
];

const timeline = [
  {
    title: "Education",
    subtitle: "BS Computer Science — University of Engineering & Technology Taxila (UET Taxila)",
    icon: GraduationCap,
    body:
      "Completed Bachelor of Science in Computer Science from the prestigious University of Engineering and Technology Taxila (UET Taxila). Built deep expertise in programming, databases, algorithms, system design, and data-focused foundations that power every data engineering solution I deliver.",
  },
  {
    title: "Experience",
    subtitle: "Data engineering and analytics delivery",
    icon: BriefcaseBusiness,
    body:
      "Designed ETL workflows, warehouse models, and BI assets that translate operational data into decision-ready insight.",
  },
  {
    title: "Major Projects",
    subtitle: "Cloud pipelines, warehousing, automation",
    icon: Workflow,
    body:
      "Delivered data platform projects spanning Python ETL, Snowflake, AWS, Pentaho, dashboards, and AI-enhanced automations.",
  },
  {
    title: "Certifications",
    subtitle: "Cloud, analytics, and platform skills",
    icon: Layers3,
    body:
      "Expanded expertise across warehouse tooling, cloud services, orchestration patterns, and modern automation stacks.",
  },
  {
    title: "Achievements",
    subtitle: "Performance, reliability, and impact",
    icon: Trophy,
    body:
      "Consistently improved pipeline quality, reporting speed, and workflow efficiency for analytics and operations teams.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shariq-mateen-61b724264",
    href: personalInfo.linkedin,
    icon: Link2,
  },
  {
    label: "GitHub",
    value: "github.com/ShariqMateen",
    href: personalInfo.github,
    icon: GitFork,
  },
  {
    label: "Fiverr",
    value: "fiverr.com/users/shariq_mateen",
    href: personalInfo.fiverr,
    icon: Sparkles,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FaLinkedinIn,
    className:
      "border-violet-400/30 bg-violet-400/10 text-violet-200 hover:border-violet-300/50 hover:bg-violet-400/20",
  },
  {
    label: "Fiverr",
    href: personalInfo.fiverr,
    icon: SiFiverr,
    className:
      "border-amber-400/30 bg-amber-400/10 text-amber-200 hover:border-amber-300/50 hover:bg-amber-400/20",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FaGithub,
    className:
      "border-purple-400/20 bg-purple-400/8 text-slate-200 hover:border-purple-300/40 hover:bg-purple-400/15",
  },
] as const;

const particles = [
  { size: 180, top: "8%", left: "72%", duration: "10s", delay: "0s" },
  { size: 140, top: "22%", left: "8%", duration: "13s", delay: "1s" },
  { size: 120, top: "58%", left: "78%", duration: "9s", delay: "2s" },
  { size: 90, top: "72%", left: "16%", duration: "12s", delay: "0.5s" },
  { size: 130, top: "84%", left: "62%", duration: "15s", delay: "1.5s" },
];

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let frame = 0;
    const totalFrames = 42;
    const interval = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((target * frame) / totalFrames));
      if (frame >= totalFrames) {
        window.clearInterval(interval);
      }
    }, 32);

    return () => window.clearInterval(interval);
  }, [reduceMotion, target]);

  return reduceMotion ? target : value;
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const count = useCountUp(value);

  return (
    <Card className="h-full">
      <CardContent className="p-5">
        <p className="text-3xl font-semibold text-white">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-sm text-slate-300">{label}</p>
      </CardContent>
    </Card>
  );
}

function HeroDiagram() {
  const nodes = [
    { icon: FileJson, label: "Data Sources" },
    { icon: Workflow, label: "ETL" },
    { icon: Cloud, label: "Cloud" },
    { icon: Database, label: "Warehouse" },
    { icon: Activity, label: "Dashboard" },
    { icon: BrainCircuit, label: "AI Agent" },
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="relative overflow-hidden rounded-[2rem] p-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_transparent_42%)]" />
        <CardContent className="relative p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-violet-300">
                Intelligent Data Flow
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Sources to governed insights and automation
              </p>
            </div>
            <div className="soft-ring rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
              Live Topology
            </div>
          </div>

          <div className="space-y-4">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isLast = index === nodes.length - 1;
              return (
                <div key={node.label}>
                  <motion.div
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="glass-panel relative flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-4"
                  >
                    <div className="rounded-2xl bg-violet-400/12 p-3 text-violet-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">
                        {node.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {index === 0 &&
                          "APIs, databases, files, webhooks, and streaming inputs"}
                        {index === 1 &&
                          "Validation, transformation, enrichment, and orchestration"}
                        {index === 2 &&
                          "Elastic services across AWS, Azure, and modern cloud stacks"}
                        {index === 3 &&
                          "Modeled facts, dimensions, marts, and semantic-ready data"}
                        {index === 4 &&
                          "Executive dashboards, KPI tracking, and self-service analytics"}
                        {index === 5 &&
                          "LLM-driven workflows, decisioning, and process automation"}
                      </p>
                    </div>
                    <div className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-violet-200">
                      Stage {index + 1}
                    </div>
                  </motion.div>
                  {!isLast ? (
                    <div className="relative mx-auto h-8 w-px bg-white/10">
                      <div className="pipeline-line absolute inset-x-[-6px] top-0 h-full rounded-full bg-cyan-400/12" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkillCard({
  title,
  icon: Icon,
  skills,
  accent,
}: SkillGroup) {
  return (
    <motion.div whileHover={{ y: -8 }}>
      <Card className="relative h-full overflow-hidden">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-24 bg-gradient-to-r opacity-80",
            accent
          )}
        />
        <CardContent className="relative p-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-slate-400">
                Interactive proficiency overview
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {skills.map(([name, level]) => (
              <div key={name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{name}</span>
                  <span className="text-violet-300">{level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-violet-500 via-purple-400 to-amber-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasImage = Boolean(project.projectImage);

  return (
    <Reveal delay={(index % 3) * 0.06}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group h-full"
      >
        <div className="glass-panel relative h-full overflow-hidden rounded-3xl border border-violet-400/12 transition-all duration-300 group-hover:border-violet-400/30 group-hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]">
          {/* Image area */}
          {hasImage ? (
            <div className="relative overflow-hidden border-b border-violet-400/10 bg-[#0d1130]">
              <img
                src={project.projectImage}
                alt={project.title}
                className="h-56 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "center center" }}
              />
              {/* Subtle bottom fade only */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0d1130]/70 to-transparent" />
              {/* Category pill on image */}
              <span className="absolute left-4 top-4 rounded-full border border-violet-400/30 bg-violet-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          ) : (
            /* Gradient banner for projects without image */
            <div className="relative flex h-28 items-center justify-between overflow-hidden border-b border-violet-400/10 bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-[#080b18] px-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
              <div>
                <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                  {project.category}
                </span>
              </div>
              <div className="flex gap-2">
                {project.stack.slice(0, 3).map((s) => (
                  <div key={s} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400">
                    <Database className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex h-full flex-col p-5">
            <h3 className="text-lg font-bold text-white leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">
              {project.overview}
            </p>

            {/* Results highlight */}
            <div className="mt-4 rounded-2xl border border-amber-400/15 bg-amber-400/8 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400">Result</p>
              <p className="mt-1 text-sm text-slate-300 line-clamp-2">{project.results}</p>
            </div>

            {/* Stack pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-400/20 bg-violet-400/8 px-2.5 py-1 text-[11px] font-medium text-violet-300"
                >
                  {item}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">
                  +{project.stack.length - 5} more
                </span>
              )}
            </div>

            {/* Workflow steps */}
            <div className="mt-4 flex flex-wrap items-center gap-1">
              {project.workflow.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <span className="text-[11px] text-slate-300">{step}</span>
                  {i < project.workflow.length - 1 && (
                    <ArrowRight className="h-2.5 w-2.5 text-violet-400" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-400/20"
              >
                <GitFork className="h-3.5 w-3.5" />
                GitHub
              </a>
              {project.secondaryLink ? (
                <a
                  href={project.secondaryLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/8 px-4 py-2 text-xs font-semibold text-amber-300 transition hover:border-amber-400/40 hover:bg-amber-400/15"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {project.secondaryLink.label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

function InfoBlock({
  title,
  content,
  highlight = false,
}: {
  title: string;
  content: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-slate-950/40 p-5",
        highlight && "border-emerald-400/20 bg-emerald-400/10"
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-300">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{content}</p>
    </div>
  );
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "Website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-x-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <header className="sticky top-0 z-40 border-b border-violet-500/10 bg-[rgba(8,11,24,0.85)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="soft-ring rounded-2xl bg-violet-500/10 p-2.5 text-violet-300">
              <ServerCog className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-slate-100 uppercase">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-400">
                {personalInfo.title}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-violet-300 hover:font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-amber-300 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
            Available for freelance and full-time roles
          </div>
        </div>
      </header>

      <main>
        <section className="section-shell relative px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="max-w-3xl">
              {/* Profile image + Name row */}
              <div className="mb-8 flex items-center gap-6">
                {/* Circular profile image */}
                <div className="relative flex-shrink-0">
                  <div className="profile-ring h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="h-full w-full object-cover object-center"
                      style={{ objectPosition: "50% 15%" }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/20">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
                  </span>
                </div>

                {/* Name + status — right side of image */}
                <div>
                  <p className="text-2xl font-bold tracking-[0.12em] text-violet-300 uppercase sm:text-3xl">
                    {personalInfo.name}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                    Available to hire
                  </p>
                  <p className="mt-1 text-sm text-slate-400">Data Engineer · AI Automation</p>
                </div>
              </div>

              <Badge className="mb-6">{personalInfo.title}</Badge>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
                Building <span className="text-gradient">Scalable Data Pipelines</span> &amp; Intelligent AI Automation
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I design scalable ETL pipelines, cloud-based data platforms, SQL
                optimization strategies, workflow automation systems, and
                AI-powered solutions that turn raw data into reliable business
                infrastructure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={buttonVariants({ variant: "default", size: "lg" })}>
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request`}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a href="#contact" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                  Contact Me
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  const isEnabled = Boolean(item.href);

                  return isEnabled ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                        item.className
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium opacity-70",
                        item.className
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label} URL pending
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <MetricCard key={stat.label} {...stat} />
                ))}
              </div>
            </Reveal>

            <div className="lg:pl-8">
              <HeroDiagram />
            </div>
          </div>
        </section>

        <section id="about" className="section-shell px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Engineering data infrastructure that scales cleanly from ingestion to intelligence"
                description="My work sits at the intersection of robust data engineering and practical automation. I build systems that help organizations ingest, transform, warehouse, analyze, and activate data with confidence."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <Reveal>
                <Card>
                  <CardContent className="p-7 sm:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
                        <Network className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          Professional Summary
                        </h3>
                        <p className="text-sm text-slate-400">
                          Data engineering, cloud architecture, and AI workflow delivery
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {summaryPoints.map((point) => (
                        <div
                          key={point}
                          className="rounded-3xl border border-white/10 bg-slate-950/35 p-5 text-sm leading-7 text-slate-300"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.08}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between p-7 sm:p-8">
                    <div>
                      <Badge className="mb-4">Core Focus</Badge>
                      <h3 className="text-2xl font-semibold text-white">
                        Trusted systems for modern data teams
                      </h3>
                      <p className="mt-4 text-base leading-8 text-slate-300">
                        Every solution is designed to reinforce reliability,
                        observability, performance, and stakeholder confidence.
                        The goal is not only to move data, but to operationalize
                        insight across analytics and automation layers.
                      </p>
                    </div>
                    <div className="mt-8 grid gap-4">
                      {[
                        "Data Engineering",
                        "ETL Development",
                        "SQL Optimization",
                        "Data Warehousing",
                        "Cloud Platforms",
                        "AI Automation",
                        "Workflow Automation",
                        "Scalable Data Solutions",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-violet-500/15 bg-violet-500/8 px-4 py-3"
                        >
                          <span className="text-sm text-slate-200">{item}</span>
                          <Cpu className="h-4 w-4 text-violet-300" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Technical Skills"
                title="Specialized tooling across data platforms, orchestration, and AI automation"
                description="Skills are grouped the way hiring teams and enterprise stakeholders evaluate them: data pipelines, cloud services, AI automation tooling, and analytics delivery."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {skillGroups.map((group) => (
                <SkillCard key={group.title} {...group} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Featured Projects"
                title="Real projects. Real architecture. Measurable outcomes."
                description="From cloud-native pipelines to AI automation workflows — each card is a live delivery story with stack, results, and source code."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="Enterprise-style services for data transformation, cloud architecture, and automation"
                description="Designed for teams that need clean pipelines, warehouse foundations, governed reporting, and AI-assisted workflow orchestration."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service} delay={(index % 3) * 0.06}>
                  <motion.div whileHover={{ y: -8 }}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                          <Workflow className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {service}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          Strategy, build, and delivery focused on reliable,
                          scalable, recruiter-friendly outcomes with technical depth.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="section-shell px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Timeline"
                title="Professional journey through education, delivery, and platform maturity"
                description="A vertical journey that captures academic grounding, real-world implementation, and continued growth across cloud and automation tooling."
              />
            </Reveal>

            <div className="relative mt-12 pl-6 sm:pl-10">
              <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-violet-500/80 via-purple-400/40 to-amber-400/60 sm:left-[19px]" />
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.06}>
                      <div className="relative">
                        <div className="absolute left-[-6px] top-8 flex h-9 w-9 items-center justify-center rounded-full border border-violet-400/30 bg-[#0d1130] text-violet-300 sm:left-[-2px]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <Card className="ml-8">
                          <CardContent className="p-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div>
                                <h3 className="text-xl font-semibold text-white">
                                  {item.title}
                                </h3>
                                <p className="mt-1 text-sm text-violet-300">
                                  {item.subtitle}
                                </p>
                              </div>
                              <Badge>Milestone {index + 1}</Badge>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-300">
                              {item.body}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Open to data platform, ETL, warehousing, and AI automation opportunities"
                description="Whether you need a scalable data pipeline, a cloud warehouse foundation, or AI-enabled workflow automation, this portfolio is designed to make the next conversation easy."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <Reveal>
                <Card className="h-full">
                  <CardContent className="p-7">
                    <div className="mb-6 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                        Availability Status
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">
                        Available for freelance, contract, and full-time roles
                      </p>
                    </div>

                    <div className="space-y-4">
                      {contactLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          item.href ? (
                            <a
                              key={item.label}
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/35 p-5 transition hover:border-violet-400/30 hover:bg-violet-900/20"
                            >
                              <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-300">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">
                                  {item.label}
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                  {item.value}
                                </p>
                              </div>
                            </a>
                          ) : (
                            <div
                              key={item.label}
                              className="flex items-start gap-4 rounded-3xl border border-dashed border-white/10 bg-slate-950/25 p-5 opacity-75"
                            >
                              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">
                                  {item.label}
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.08}>
                <Card className="h-full">
                  <CardContent className="p-7">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-white">
                        Contact Form
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Sends a prefilled inquiry through your default email client.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <input
                          value={form.name}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              name: event.target.value,
                            }))
                          }
                          placeholder="Your name"
                          className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                          required
                        />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              email: event.target.value,
                            }))
                          }
                          placeholder="Email address"
                          className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                          required
                        />
                      </div>
                      <input
                        value={form.company}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            company: event.target.value,
                          }))
                        }
                        placeholder="Company or project"
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                      />
                      <textarea
                        value={form.message}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            message: event.target.value,
                          }))
                        }
                        placeholder="Tell me about your ETL, warehousing, cloud, or AI automation needs"
                        className="min-h-40 w-full rounded-3xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                        required
                      />
                      <button type="submit" className={buttonVariants({ variant: "default", size: "lg" })}>
                        Send Inquiry
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {personalInfo.name}. Built with Next.js for modern data and AI opportunities.</p>
          <div className="flex items-center gap-5">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
            <a href={personalInfo.fiverr} target="_blank" rel="noreferrer">
              Fiverr
            </a>
            {personalInfo.github ? (
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : (
              <span className="text-slate-500">GitHub URL pending</span>
            )}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
