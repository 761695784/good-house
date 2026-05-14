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
  description: 'Découvrez nos appartements meublés premium à Dakar pour les COJOJ. Studios et appartements climatisés avec WiFi, cuisine équipée et confort haut de gamme.',
  keywords: ['appartement meublé Dakar', 'COJOJ Dakar', 'location courte durée Dakar', 'résidence premium Dakar', 'hébergement COJOJ'],
  authors: [{ name: 'Résidence Good House' }],
  openGraph: {
    title: 'Résidence Good House | Appartements Meublés Premium à Dakar',
    description: 'Votre confort premium à Dakar pendant les COJOJ. Appartements et studios meublés haut de gamme.',
    type: 'website',
    locale: 'fr_FR',
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
