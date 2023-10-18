import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import './globals.css'
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zhe Kai',
  description: 'Zhe Kai\'s portfolio website'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <NavigationBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
