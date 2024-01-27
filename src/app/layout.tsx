import '@/styles/globals.scss';
import type { Metadata, Viewport } from 'next';
import { Inconsolata } from 'next/font/google';
import Script from 'next/script';
import { BASE_URL } from '@/constants';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://costinmirica.com'),
  title: 'Costin Mirică - Full Stack Developer',
  description: 'Just another software developer trying to build the future one line of code at a time.',
  keywords: 'personal website, portfolio, full stack developer, indie game developer',
  authors: [{ name: 'Costin Mirică', url: 'https://github.com/numbofathma' }],
  appleWebApp: {
    capable: true,
    title: "Costin Mirică's Portfolio",
    statusBarStyle: 'black',
  },
  openGraph: {
    url: 'https://costinmirica.com',
    type: 'website',
    title: 'Costin Mirică - Full Stack Developer',
    images: [{ url: `${BASE_URL}/static/img/costin-mirica.jpeg` }],
    description: 'Just another software developer trying to build the future one line of code at a time.',
  },
  twitter: {
    card: 'summary',
    site: 'https://costinmirica.com/',
    title: 'Costin Mirică - Full Stack Developer',
    description: 'Just another software developer trying to build the future one line of code at a time.',
    images: [{ url: `${BASE_URL}/static/img/costin-mirica.jpeg` }],
  },
  icons: {
    shortcut: `favicon.ico`,
    icon: `${BASE_URL}/icons/icon-64x64.png`,
    apple: [`${BASE_URL}/icons/icon-64x64.png`, `${BASE_URL}/icons/icon-180x180.png`],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-7D4XY5H6PV' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7D4XY5H6PV');
        `}
      </Script>
      <body suppressHydrationWarning={true} className={inconsolata.className}>
        {children}
      </body>
    </html>
  );
}
