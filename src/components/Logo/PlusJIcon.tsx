import React from 'react'

export interface DistrictColors {
  kepulauanSeribu?: string
  utara?: string
  barat?: string
  pusat?: string
  timur?: string
  selatan?: string
  stem?: string
}

export interface PlusJIconProps {
  /** Height in px — width is derived from 5:9 aspect ratio */
  size?: number
  /** Uniform fill; overridden per-district by districtColors */
  color?: string
  districtColors?: DistrictColors
  className?: string
  style?: React.CSSProperties
}

/**
 * The +J icon, constructed from the brand book 5×9 grid.
 * Each district shape is individually colourable via districtColors.
 *
 * Grid reference: 5 columns × 9 rows, cell = 100 units.
 * ViewBox: 0 0 500 900 (coordinates shifted to origin from brand guide SVG).
 */
export function PlusJIcon({
  size = 64,
  color = 'currentColor',
  districtColors = {},
  className,
  style,
}: PlusJIconProps) {
  const width = size * (500 / 900)

  const c = (district: keyof DistrictColors) =>
    districtColors[district] ?? color

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 500 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Kepulauan Seribu — top-left triangle, col 0 row 0 */}
      <polygon points="0,0 100,0 0,100" fill={c('kepulauanSeribu')} />

      {/* Utara (North) — col 2 row 0 */}
      <rect x="200" y="0" width="100" height="100" fill={c('utara')} />

      {/* Barat (West) — col 0 row 2 */}
      <rect x="0" y="200" width="100" height="100" fill={c('barat')} />

      {/* Pusat (Centre) — col 2 row 2 */}
      <rect x="200" y="200" width="100" height="100" fill={c('pusat')} />

      {/* Timur (East) — col 4 row 2 */}
      <rect x="400" y="200" width="100" height="100" fill={c('timur')} />

      {/* Selatan (South) — col 2 row 4 */}
      <rect x="200" y="400" width="100" height="100" fill={c('selatan')} />

      {/* J letterform — col 4, row 4 downward, hooks left
          Traced directly from brand book construction grid.
          Outer curve: (500,650) → bezier → (270,900)
          Inner curve: (270,800) → bezier → (400,650) */}
      <path
        d="
          M 400,400
          L 500,400
          L 500,650
          C 500,805 410,900 270,900
          L 250,900
          L 250,800
          L 270,800
          C 355,800 400,750 400,650
          Z
        "
        fill={c('stem')}
      />
    </svg>
  )
}
