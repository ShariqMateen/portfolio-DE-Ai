import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://data-engineer-portfolio.vercel.app"),
  title: "Shariq Mateen | Data Engineer | AI Automation Engineer",
  description:
    "Shariq Mateen's portfolio as a Data Engineer and AI Automation Engineer specializing in ETL pipelines, cloud data platforms, data warehousing, SQL optimization, and intelligent workflow automation.",
  keywords: [
    "Data Engineer",
    "AI Automation Engineer",
    "ETL Developer",
    "Python Developer",
    "SQL Expert",
    "Cloud Data Engineer",
    "Snowflake",
    "AWS Data Engineer",
    "Azure Data Engineer",
    "Apache Spark",
    "Data Warehouse Developer",
    "Workflow Automation",
    "n8n Developer",
  ],
  openGraph: {
    title: "Shariq Mateen | Data Engineer | AI Automation Engineer",
    description:
      "Scalable pipelines, cloud data platforms, analytics engineering, and AI-powered workflow automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shariq Mateen | Data Engineer | AI Automation Engineer",
    description:
      "Scalable pipelines, cloud data platforms, analytics engineering, and AI-powered workflow automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
