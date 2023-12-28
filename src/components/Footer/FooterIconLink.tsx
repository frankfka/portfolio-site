'use client';

import { IconType } from 'react-icons';
import { motion, Variants } from 'framer-motion';
import { joinClassNames } from '@/lib/classNameUtils';
import Link from 'next/link';

interface FooterIconLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

export function FooterIconLink({
  href,
  icon: Icon,
  label,
}: FooterIconLinkProps) {
  return (
    <motion.div className="relative" initial="initial" whileHover="animate">
      <motion.div
        variants={TOOLTIP_VARIANTS}
        className={joinClassNames(
          'bg-tooltip-bg text-tooltip-text pointer-events-none rounded-lg px-2 py-1',
          'absolute bottom-full left-1/2 mb-2 -translate-x-1/2'
        )}
      >
        {label}
      </motion.div>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="text-text-primary hover:text-text-hover h-auto w-6 transition-colors" />
      </Link>
    </motion.div>
  );
}

const TOOLTIP_VARIANTS: Variants = {
  initial: {
    opacity: 0,
    bottom: '80%',
  },
  animate: {
    opacity: 1,
    bottom: '100%',
  },
};
