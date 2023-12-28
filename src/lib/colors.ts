export const LIGHT_MODE_COLORS = {
  'page-bg': '#FDF9EF',
  'tooltip-bg': '#495455',
  'tooltip-text': '#F5F6F6',
  accent: '#F99417',
  'text-primary': '#393E40',
  'text-secondary': '#495455',
  'text-hover': '#000',
};

type Colors = typeof LIGHT_MODE_COLORS;

export const DARK_MODE_COLORS = {
  'page-bg': '#393e40',
  'tooltip-bg': '#E4E8E9',
  'tooltip-text': '#393E40',
  accent: '#fbb54e',
  'text-primary': '#F5F6F6',
  'text-secondary': '#E4E8E9',
  'text-hover': '#fff',
} satisfies Colors;
