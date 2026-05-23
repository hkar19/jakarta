export const typography = {
  fontFamily: {
    body: 'var(--jkt-font-family-body)',
    heading: 'var(--jkt-font-family-heading)',
    code: 'var(--jkt-font-family-code)',
  },
  fontSize: {
    xs: 'var(--jkt-font-size-xs)',
    sm: 'var(--jkt-font-size-sm)',
    md: 'var(--jkt-font-size-md)',
    lg: 'var(--jkt-font-size-lg)',
    xl: 'var(--jkt-font-size-xl)',
    '2xl': 'var(--jkt-font-size-2xl)',
    '3xl': 'var(--jkt-font-size-3xl)',
  },
  fontWeight: {
    regular: 'var(--jkt-font-weight-regular)',
    medium: 'var(--jkt-font-weight-medium)',
    semibold: 'var(--jkt-font-weight-semibold)',
    bold: 'var(--jkt-font-weight-bold)',
  },
  lineHeight: {
    tight: 'var(--jkt-line-height-tight)',
    normal: 'var(--jkt-line-height-normal)',
    relaxed: 'var(--jkt-line-height-relaxed)',
  },
} as const

export type TypographyToken = typeof typography
