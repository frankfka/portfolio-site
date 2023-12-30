import { FooterIconLink } from '@/components/Footer/FooterIconLink';
import { WithClassnames } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';

export function Footer({ className }: WithClassnames) {
  return (
    <footer
      className={joinClassNames(
        'flex items-center justify-center gap-x-16',
        className
      )}
    >
      <FooterIconLink type="github" />
      <FooterIconLink type="linkedin" />
      <FooterIconLink type="email" />
    </footer>
  );
}
