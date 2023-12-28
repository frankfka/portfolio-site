import type { Metadata } from 'next';
import './globals.css';
import { PLAYFAIR_DISPLAY } from '@/lib/fonts';
import { WithChildren } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';
import { Footer } from '@/components/Footer/Footer';
import { NavBar } from '@/components/NavBar/NavBar';

export const metadata: Metadata = {
  title: 'Frank Jia | Portfolio',
  description: 'TODO',
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body
        className={joinClassNames(
          PLAYFAIR_DISPLAY.className,
          'bg-page-bg text-text-primary box-border min-h-screen',
          'flex flex-col pb-4'
        )}
      >
        <NavBar className="mx-2 mt-8 lg:mx-16 lg:mt-16" />
        <div className="mx-auto flex max-w-[1000px] flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
