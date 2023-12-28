import { NavBarLink } from '@/components/NavBar/NavBarLink';
import { MdArrowOutward } from 'react-icons/md';
import { ColorModeButton } from '@/components/NavBar/ColorModeButton';
import { WithClassnames } from '@/lib/types/UtilityTypes';
import { joinClassNames } from '@/lib/classNameUtils';

export function NavBar({ className }: WithClassnames) {
  return (
    <div
      className={joinClassNames(
        'relative flex items-center justify-center gap-x-32',
        className
      )}
    >
      <NavBarLink href="/">about</NavBarLink>
      <NavBarLink href="/experience">experience</NavBarLink>
      <NavBarLink
        href="mailto:jiafrank98@gmail.com"
        className="flex items-end gap-x-1"
      >
        contact
        <MdArrowOutward />
      </NavBarLink>
      {/*Color mode is absolutely positioned to allow links to be centered properly*/}
      <ColorModeButton className="absolute right-0" />
    </div>
  );
}
