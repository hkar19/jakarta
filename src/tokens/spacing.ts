export const spacing = {
  0: 'var(--jkt-spacing-0)',
  25: 'var(--jkt-spacing-25)',
  50: 'var(--jkt-spacing-50)',
  75: 'var(--jkt-spacing-75)',
  100: 'var(--jkt-spacing-100)',
  150: 'var(--jkt-spacing-150)',
  200: 'var(--jkt-spacing-200)',
  300: 'var(--jkt-spacing-300)',
  400: 'var(--jkt-spacing-400)',
  500: 'var(--jkt-spacing-500)',
  600: 'var(--jkt-spacing-600)',
  800: 'var(--jkt-spacing-800)',
  1000: 'var(--jkt-spacing-1000)',
} as const

export type SpacingToken = typeof spacing
