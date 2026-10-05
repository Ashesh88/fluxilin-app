import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { ChatbotWidget } from '@/components/ui/ChatbotWidget';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Fluxilin — India\'s Influencer Marketing Agency | Where Brands Grow',
  description:
    'Fluxilin connects ambitious brands with India\'s top creators. Data-driven influencer campaigns, vernacular reach, real ROAS — not vanity metrics.',
  keywords: [
    'Influencer Marketing Agency India',
    'Creator Marketing Agency',
    'D2C Brand Growth India',
    'UGC Agency India',
    'Performance Influencer Campaigns',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Fluxilin — India\'s Influencer Marketing Agency',
    description: 'Scale your brand with India\'s top creators. Real reach. Real results.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-base text-main antialiased overflow-x-hidden min-h-screen flex flex-col">
        <ThemeProvider>
          {/* Grain overlay */}
          <div className="noise-overlay" aria-hidden="true" />
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ChatbotWidget />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
