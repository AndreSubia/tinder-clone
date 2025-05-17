export const Typography = {
  h1: {
    fontSize: 58,
  },
  h2: {
    fontSize: 44,
  },
  h3: {
    fontSize: 36,
  },
  h4: {
    fontSize: 28,
  },
  h5: {
    fontSize: 24,
  },
  t1: {
    fontSize: 22,
  },
  t2: {
    fontSize: 18,
  },
  subNav: {
    fontSize: 16,
  },
  subNavBold: {
    fontSize: 16,
  },
  button: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 16,
    lineHeight: '24px',
  },
  caption: {
    fontSize: 14,
  },
  captionBold: {
    fontSize: 14,
  },
  captionSmall: {
    fontSize: 12,
  },
  disclosure: {
    fontSize: 12,
    lineHeight: '18px',
  },
} as const;

export type TypographyType = keyof typeof Typography;
