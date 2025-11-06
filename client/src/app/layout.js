import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: {
    template: '%s | Softiwo - Application Development Company',
    default: 'Softiwo - Professional Web, Mobile & Desktop App Development Services',
  },
  description: 'Softiwo delivers cutting-edge web applications, mobile apps (iOS/Android), and desktop software. Expert development team with 200+ successful projects. Get your free quote today!',
  keywords: [
    'web development',
    'mobile app development', 
    'iOS app development',
    'Android app development',
    'desktop app development',
    'custom software development',
    'React development',
    'Next.js development',
    'Flutter development',
    'React Native development',
    'full-stack development',
    'UI/UX design',
    'software consulting',
    'application development company',
    'Softiwo'
  ],
  authors: [{ name: 'Softiwo Development Team' }],
  creator: 'Softiwo',
  publisher: 'Softiwo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://softiwo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softiwo.com',
    title: 'Softiwo - Professional Application Development Services',
    description: 'Expert web, mobile & desktop app development. 200+ successful projects, cutting-edge technology, and exceptional client satisfaction. Transform your ideas into powerful applications.',
    siteName: 'Softiwo',
    images: [
      {
        url: '/Softiwo.png',
        width: 1200,
        height: 630,
        alt: 'Softiwo - Application Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softiwo - Professional Application Development Services',
    description: 'Expert web, mobile & desktop app development. Transform your ideas into powerful applications with our experienced team.',
    images: ['/Softiwo.png'],
    creator: '@softiwo',
    site: '@softiwo',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512', 
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Softiwo",
    "url": "https://softiwo.com",
    "logo": "https://softiwo.com/Softiwo.png",
    "description": "Professional application development company specializing in web, mobile, and desktop applications",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@softiwo.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/softiwo",
      "https://twitter.com/softiwo",
      "https://github.com/softiwo"
    ],
    "services": [
      "Web Application Development",
      "Mobile App Development", 
      "Desktop Application Development",
      "Custom Software Development",
      "UI/UX Design",
      "Software Consulting"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
