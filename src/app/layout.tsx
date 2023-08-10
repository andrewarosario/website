import '@/styles/globals.css';

import { Metadata } from 'next';
import Script from 'next/script';

import { headerConfig } from '@/config';

import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Andrew Rosário',
    default: 'Andrew Rosário'
  },
  description: 'Description',
  manifest: '/manifest.json',
  themeColor: '#201f27'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <body className="bg-primary text-gray-100">
        <Header />

        <Layout>
          <div className="py-20">{children}</div>
        </Layout>

        <BackToTop />

        <Footer items={headerConfig.mainNav} />
      </body>
    </html>
  );
}
