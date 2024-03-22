import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathwin Reddy Julakanti · Software Engineer",
  description:
    "Full-stack engineer specializing in cloud infrastructure, distributed systems, and AI/ML. Building production systems with AWS, Docker, Kubernetes, and modern web technologies.",
  keywords: [
    "Sathwin Reddy Julakanti",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Engineer",
    "AWS",
    "Machine Learning",
    "DevOps",
    "React",
    "Next.js",
    "FastAPI",
  ],
  authors: [{ name: "Sathwin Reddy Julakanti" }],
  openGraph: {
    title: "Sathwin Reddy Julakanti · Software Engineer",
    description:
      "Full-stack engineer specializing in cloud infrastructure, distributed systems, and AI/ML.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathwin Reddy Julakanti · Software Engineer",
    description:
      "Full-stack engineer specializing in cloud infrastructure, distributed systems, and AI/ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
