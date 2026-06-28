import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import './globals.css';

export const metadata: Metadata = {
  title: 'Le Meilleur Dentiste Tunis - si vous cherchez des Implants Dentaires près de chez vous - Cabinet dentaire Dr Rezgui Houssem est l\'endroit qu\'il vous faut',
  description: 'Vous méritez un dentiste de confiance à Tunis. Chez le Cabinet Dr Rezgui Houssem, vous êtes entre les mains d\'un professionnel qualifié. Prenez rendez-vous dès aujourd\'hui !',
  alternates: {
    canonical: 'https://www.smilevip.net/',
  },
  openGraph: {
    title: 'Le Meilleur Dentiste Tunis – Cabinet Dr Rezgui Houssem',
    type: 'website',
    url: 'https://www.smilevip.net/',
    images: [
      {
        url: 'https://www.smilevip.net/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    description: 'Vous méritez un dentiste de confiance à Tunis. Chez le Cabinet Dr Rezgui Houssem, vous êtes entre les mains d\'un professionnel qualifié. Prenez rendez-vous dès aujourd\'hui !',
    locale: 'fr_TN',
    siteName: 'Cabinet dentaire Dr Rezgui Houssem',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Meilleur Dentiste Tunis – Cabinet Dr Rezgui Houssem',
    description: 'Vous méritez un dentiste de confiance à Tunis. Chez le Cabinet Dr Rezgui Houssem, vous êtes entre les mains d\'un professionnel qualifié. Prenez rendez-vous dès aujourd\'hui !',
    images: ['https://www.smilevip.net/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2' }],
  },
  other: {
    'twitter:image:alt': 'Cabinet dentaire Dr Rezgui Houssem – Logo sur fond blanc',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Cabinet dentaire Dr rezgui Houssem',
  image: [
    'https://www.smilevip.net/og-image.png',
    'https://www.smilevip.net/logo.svg',
  ],
  '@id': 'https://smilevip.net/#dentist',
  url: 'https://smilevip.net',
  telephone: '+21650149159',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '23 Av. Iben Kholdoun',
    addressLocality: 'Tunis',
    postalCode: '1064',
    addressCountry: 'TN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.83983244399368,
    longitude: 10.115723750320473,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '08:30', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '08:30', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '08:30', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:30', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:30', closes: '13:30' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
