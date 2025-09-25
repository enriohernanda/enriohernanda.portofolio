import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: 'Portofolio Enrio',
  description: 'Frontend Developer Portfolio',
  icons: {
    icon: '/assets/logo-portfolio.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
