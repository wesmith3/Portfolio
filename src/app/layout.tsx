import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from './NavBar'
import Footer from './Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Wesley's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <NavBar />
      </body>
    </html>
  );
}
