import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "James Andrew Tamayo - Front-End Developer Portfolio",
  description: "Hi! I am James Andrew. I am a front-end developer who loves creating and exploring new things when it comes to web.",
  keywords: ["James Andrew Tamayo", "Front-End Developer", "Web Developer", "React", "Next.js", "JavaScript", "PHP", "WordPress", "Joomla"],
  authors: [{ name: "James Andrew Tamayo" }],
  creator: "James Andrew Tamayo",
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamesandrew1315.github.io/",
    title: "James Andrew Tamayo - Front-End Developer Portfolio",
    description: "Hi! I am James Andrew. I am a front-end developer who loves creating and exploring new things when it comes to web.",
    siteName: "James Andrew Tamayo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Andrew Tamayo - Front-End Developer Portfolio",
    description: "Hi! I am James Andrew. I am a front-end developer who loves creating and exploring new things when it comes to web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
