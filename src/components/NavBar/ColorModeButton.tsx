'use client';

import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { WithClassnames } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';
import { AnimatePresence, motion } from 'framer-motion';

export function ColorModeButton({ className }: WithClassnames) {
  const [isLightMode, setIsLightMode] = useState(true);

  const Icon = isLightMode ? MdLightMode : MdDarkMode;

  return (
    <button
      onClick={() => setIsLightMode((prev) => !prev)}
      className={joinClassNames(
        'border-accent text-text-primary rounded-full border-2 p-1',
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`${isLightMode ? 'light' : 'dark'}-mode`}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Icon className="h-auto w-9" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
