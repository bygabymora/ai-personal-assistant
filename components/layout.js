import { Inter } from 'next/font/google';
import '../public/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ai-personal-assistant',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
