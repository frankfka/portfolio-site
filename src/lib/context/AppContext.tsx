'use client';
import { WithChildren } from '@/lib/types/UtilityTypes';
import { ThemeProvider } from 'next-themes';

export function AppContext({ children }: WithChildren) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
