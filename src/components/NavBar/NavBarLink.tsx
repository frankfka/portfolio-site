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
        'px-2 py-1',
        'text-text-primary hover:text-text-hover text-3xl font-bold transition-colors',
        'border-text-primary hover:border-text-hover',
        isActive && 'border-b-2',
        className
      )}
    >
      {children}
    </Link>
  );
}
