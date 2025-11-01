// app/RootLayout.tsx (or your main layout file)
import React, { ReactNode } from "react";
import "./globals.css";



import { Metadata } from "next";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Bolaji Portfolio',
  description: 'A portfolio website showcasing Bolaji\'s projects and skills.',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  },

  manifest: '/site.webmanifest'
}
export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bolaji Oluwatosin - Portfolio</title>
        <meta name="description" content="A portfolio website showcasing Bolaji's projects and skills." />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
