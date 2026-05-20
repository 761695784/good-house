import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Résidence Good House | Appartements Meublés Premium à Dakar',
  description: 'Appartements meublés premium à Ngor, Almadies Dakar. Studios et appartements climatisés avec WiFi, cuisine équipée. Idéal séjour courte et longue durée.',
  keywords: ['appartement meublé Dakar', 'location courte durée Dakar', 'résidence Ngor Almadies', 'hébergement premium Dakar', 'studio meublé Dakar'],
  authors: [{ name: 'Résidence Good House' }],
  metadataBase: new URL('https://votre-domaine.com'), // ← à remplacer
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Résidence Good House | Appartements Meublés Premium à Dakar',
    description: 'Appartements meublés haut de gamme à Ngor, Almadies Dakar.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://residencegoodhouse.com',
    siteName: 'Résidence Good House',
    images: [
      {
        url: '/og-image.jpg', // ← ajouter une belle photo dans /public
        width: 1200,
        height: 630,
        alt: 'Résidence Good House Dakar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Résidence Good House Dakar',
    description: 'Appartements meublés premium à Ngor, Almadies Dakar.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-[#F8FAFC]">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
