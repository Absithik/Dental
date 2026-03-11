import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Modern Dental Clinic | Professional Dental Care',
  description: 'Experience top-tier dental care with our highly qualified professionals. We provide root canals, implants, whitening, and more.',
  openGraph: {
    title: 'Modern Dental Clinic | Professional Dental Care',
    description: 'Experience top-tier dental care with our highly qualified professionals.',
    url: 'https://dentalclinic.example.com',
    siteName: 'Modern Dental Clinic',
    images: [
      {
        url: 'https://dentalclinic.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Dental Clinic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Dental Clinic | Professional Dental Care',
    description: 'Experience top-tier dental care with our highly qualified professionals.',
    images: ['https://dentalclinic.example.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
