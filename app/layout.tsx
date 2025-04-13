import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NavHeader } from '@/components/nav-header';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CypherSec | Observe. Exploit. Document. Repeat.',
  description: 'A closed collective of offensive researchers, intelligence gatherers, and underground engineers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={jetbrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="matrix-bg hex-pattern" />
          <NavHeader />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}