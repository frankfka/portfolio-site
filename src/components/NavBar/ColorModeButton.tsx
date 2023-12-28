'use client';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { WithClassnames } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useIsClient } from 'usehooks-ts';

export function ColorModeButton({ className }: WithClassnames) {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  const isDarkMode = resolvedTheme === 'dark';
  const Icon = isDarkMode ? MdDarkMode : MdLightMode;

  return (
    <button
      onClick={() => {
        setTheme(isDarkMode ? 'light' : 'dark');
      }}
      className={joinClassNames(
        'border-accent text-text-primary rounded-full border-2 p-1',
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`${isDarkMode ? 'dark' : 'light'}-mode`}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Icon className="h-auto w-5 lg:w-9" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
