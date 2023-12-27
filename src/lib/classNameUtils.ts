import { ClassNameValue, extendTailwindMerge, twJoin } from 'tailwind-merge';

const twMerge = extendTailwindMerge({});

export function mergeClassNames(...classLists: ClassNameValue[]) {
  return twMerge(...classLists);
}

export function joinClassNames(...classLists: ClassNameValue[]) {
  return twJoin(...classLists);
}
