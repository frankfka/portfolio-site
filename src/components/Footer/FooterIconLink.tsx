'use client';

import { motion, Variants } from 'framer-motion';
import { joinClassNames } from '@/lib/classNameUtils';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

type FooterLinkType = 'github' | 'linkedin' | 'email';

interface FooterIconLinkProps {
  type: FooterLinkType;
}

export function FooterIconLink({ type }: FooterIconLinkProps) {
  const {
    href,
    icon: Icon,
    label,
  } = (() => {
    switch (type) {
      case 'github':
        return {
          href: 'https://github.com/frankfka',
          icon: FaGithub,
          label: 'Github',
        };
      case 'linkedin':
        return {
          href: 'https://www.linkedin.com/in/jiafrank/',
          icon: FaLinkedin,
          label: 'LinkedIn',
        };
      case 'email':
        return {
          href: 'mailto:jiafrank98@gmail.com',
          icon: MdEmail,
          label: 'Email',
        };
    }
  })();

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
        <Icon className="text-text-primary hover:text-text-hover h-auto w-4 transition-colors lg:w-6" />
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
