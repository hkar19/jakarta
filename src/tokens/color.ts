/** MENOR brand colours — 6 vivid + 2 neutral, from JakartaBrandBook.pdf */
export const color = {
  menor: {
    hijauBetawi:      'var(--jkt-color-menor-hijau-betawi)',
    kuningGigiBalang: 'var(--jkt-color-menor-kuning-gigi-balang)',
    jinggaBisKota:    'var(--jkt-color-menor-jingga-bis-kota)',
    biruAbang:        'var(--jkt-color-menor-biru-abang)',
    pinkNone:         'var(--jkt-color-menor-pink-none)',
    biruPesisir:      'var(--jkt-color-menor-biru-pesisir)',
  },
  /** District → colour alias layer */
  district: {
    pusat:     'var(--jkt-color-district-pusat)',
    utara:     'var(--jkt-color-district-utara)',
    barat:     'var(--jkt-color-district-barat)',
    selatan:   'var(--jkt-color-district-selatan)',
    timur:     'var(--jkt-color-district-timur)',
    kepulauan: 'var(--jkt-color-district-kepulauan)',
  },
  brand: {
    primary:   'var(--jkt-color-brand-primary)',
    secondary: 'var(--jkt-color-brand-secondary)',
  },
  neutral: {
    0:    'var(--jkt-color-neutral-0)',
    100:  'var(--jkt-color-neutral-100)',
    200:  'var(--jkt-color-neutral-200)',
    300:  'var(--jkt-color-neutral-300)',
    400:  'var(--jkt-color-neutral-400)',
    500:  'var(--jkt-color-neutral-500)',
    600:  'var(--jkt-color-neutral-600)',
    700:  'var(--jkt-color-neutral-700)',
    800:  'var(--jkt-color-neutral-800)',
    900:  'var(--jkt-color-neutral-900)',
    1000: 'var(--jkt-color-neutral-1000)',
  },
  text: {
    default:  'var(--jkt-color-text-default)',
    subtle:   'var(--jkt-color-text-subtle)',
    disabled: 'var(--jkt-color-text-disabled)',
    inverse:  'var(--jkt-color-text-inverse)',
  },
  background: {
    default: 'var(--jkt-color-background-default)',
    subtle:  'var(--jkt-color-background-subtle)',
    inverse: 'var(--jkt-color-background-inverse)',
  },
  border: {
    default: 'var(--jkt-color-border-default)',
    subtle:  'var(--jkt-color-border-subtle)',
    focused: 'var(--jkt-color-border-focused)',
  },
} as const

export type ColorToken = typeof color
