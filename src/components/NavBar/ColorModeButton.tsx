'use client';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { WithClassnames } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from 'usehooks-ts';

export function ColorModeButton({ className }: WithClassnames) {
  const { isDarkMode, toggle } = useDarkMode();

  const Icon = isDarkMode ? MdDarkMode : MdLightMode;

  return (
    <button
      onClick={toggle}
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
