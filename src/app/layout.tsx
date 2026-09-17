import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/config/company";
import { seo } from "@/config/seo";

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: { default: seo.title, template: `%s | ${company.name}` },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: company.domain,
    siteName: company.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise" suppressHydrationWarning>{children}</body>
    </html>
  );
}
