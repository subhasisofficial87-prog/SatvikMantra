import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Satvik Mantra - Pure Cold Pressed Oils & Desi Ghee',
  description: 'Premium cold-pressed oils and desi cow ghee made with traditional Ayurvedic methods.',
  keywords: 'cold pressed oils, wood pressed oils, desi ghee, Ayurvedic oils',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#F5F5DC]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
