'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { joinClassNames } from '@/lib/classNameUtils';
import { WithChildren, WithClassnames } from '@/lib/types/UtilityTypes';

interface NavBarLinkProps extends WithChildren, WithClassnames {
  href: string;
}

export function NavBarLink({ href, children, className }: NavBarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.toLowerCase() === href;

  return (
    <Link
      href={href}
      className={joinClassNames(
        'leading-5 md:text-xl md:leading-6 lg:text-3xl',
        'md:px-2 md:py-1',
        'text-text-primary hover:text-text-hover font-bold transition-colors',
        'border-b lg:border-b-2',
        isActive
          ? 'border-text-primary hover:border-text-hover'
          : 'border-transparent',
        className
      )}
    >
      {children}
    </Link>
  );
}
