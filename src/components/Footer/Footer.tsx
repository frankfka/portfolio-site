'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FooterIconLink } from '@/components/Footer/FooterIconLink';
import { WithClassnames } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';

// TODO: make this server compatible
export function Footer({ className }: WithClassnames) {
  return (
    <footer
      className={joinClassNames(
        'flex items-center justify-center gap-x-16',
        className
      )}
    >
      <FooterIconLink
        href="https://github.com/frankfka"
        icon={FaGithub}
        label="Github"
      />
      <FooterIconLink
        href="https://www.linkedin.com/in/jiafrank/"
        icon={FaLinkedin}
        label="LinkedIn"
      />
      <FooterIconLink
        href="mailto:jiafrank98@gmail.com"
        icon={MdEmail}
        label="Email"
      />
    </footer>
  );
}
