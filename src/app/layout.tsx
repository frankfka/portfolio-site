import type { Metadata } from 'next';
import './globals.css';
import { PLAYFAIR_DISPLAY } from '@/lib/fonts';
import { WithChildren } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';
import { Footer } from '@/components/Footer/Footer';
import { NavBar } from '@/components/NavBar/NavBar';
import { AppContext } from '@/lib/context/AppContext';

export const metadata: Metadata = {
  title: 'Frank Jia | Portfolio',
  description: 'TODO',
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html
      lang="en"
      // For next-themes https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <body>
        <AppContext>
          <div
            className={joinClassNames(
              PLAYFAIR_DISPLAY.className,
              'bg-page-bg text-text-primary transition-colors',
              'box-border flex min-h-screen flex-col pb-4'
            )}
          >
            <NavBar className="mx-2 mt-8 lg:mx-16 lg:mt-16" />
            <div className="flex w-full max-w-[1000px] flex-1 self-center px-8">
              {children}
            </div>
            <Footer />
          </div>
        </AppContext>
      </body>
    </html>
  );
}
