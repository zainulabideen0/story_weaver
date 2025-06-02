// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // You might keep this or use another font
import './globals.css'; // Essential for your global styles, including Tailwind

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Story Weaver',
  description: 'Your collaborative storytelling platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* You'll add your main app layout here, e.g., a Navbar */}
        {children}
        {/* You might add a Footer here */}
      </body>
    </html>
  );
}