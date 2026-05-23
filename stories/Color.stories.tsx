import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import '../src/tokens.css'

const meta: Meta = {
  title: 'Design Tokens/Color',
  parameters: { layout: 'padded' },
}
export default meta

// ─── Raw values (for stories only — consuming apps use CSS vars) ─────────────

const menor = [
  { name: 'Hijau Betawi',       token: '--jkt-color-menor-hijau-betawi',       hex: '#19ae5d', pantone: '7481 C',      district: 'Jakarta Selatan' },
  { name: 'Kuning Gigi Balang', token: '--jkt-color-menor-kuning-gigi-balang', hex: '#feb52b', pantone: '1235 C',      district: 'Jakarta Barat' },
  { name: 'Jingga Bis Kota',    token: '--jkt-color-menor-jingga-bis-kota',    hex: '#fc351c', pantone: 'Warm Red C',  district: 'Jakarta Pusat' },
  { name: 'Biru Abang',         token: '--jkt-color-menor-biru-abang',         hex: '#1c5ddc', pantone: '2728 C',      district: 'Jakarta Utara' },
  { name: 'Pink None',          token: '--jkt-color-menor-pink-none',          hex: '#eb30a2', pantone: 'Rhodamine Red C', district: 'Jakarta Timur' },
  { name: 'Biru Pesisir',       token: '--jkt-color-menor-biru-pesisir',       hex: '#00aaff', pantone: '2995 C',      district: 'Kepulauan Seribu' },
]

const neutrals = [
  { label: '0',    hex: '#ffffff', token: '--jkt-color-neutral-0',    dark: true  },
  { label: '100',  hex: '#f7f7f7', token: '--jkt-color-neutral-100',  dark: true  },
  { label: '200',  hex: '#ebebeb', token: '--jkt-color-neutral-200',  dark: true  },
  { label: '300',  hex: '#d6d6d6', token: '--jkt-color-neutral-300',  dark: true  },
  { label: '400',  hex: '#b3b3b3', token: '--jkt-color-neutral-400',  dark: true  },
  { label: '500',  hex: '#909090', token: '--jkt-color-neutral-500',  dark: false },
  { label: '600',  hex: '#6e6e6e', token: '--jkt-color-neutral-600',  dark: false },
  { label: '700',  hex: '#4d4d4d', token: '--jkt-color-neutral-700',  dark: false },
  { label: '800',  hex: '#333333', token: '--jkt-color-neutral-800',  dark: false },
  { label: '900',  hex: '#1a1a1a', token: '--jkt-color-neutral-900',  dark: false },
  { label: '1000', hex: '#000000', token: '--jkt-color-neutral-1000', dark: false },
]

const semantic = [
  { group: 'Text',       tokens: [
    { label: 'default',  var: '--jkt-color-text-default'  },
    { label: 'subtle',   var: '--jkt-color-text-subtle'   },
    { label: 'disabled', var: '--jkt-color-text-disabled' },
    { label: 'inverse',  var: '--jkt-color-text-inverse'  },
  ]},
  { group: 'Background', tokens: [
    { label: 'default',  var: '--jkt-color-background-default' },
    { label: 'subtle',   var: '--jkt-color-background-subtle'  },
    { label: 'inverse',  var: '--jkt-color-background-inverse' },
  ]},
  { group: 'Border',     tokens: [
    { label: 'default',  var: '--jkt-color-border-default' },
    { label: 'subtle',   var: '--jkt-color-border-subtle'  },
    { label: 'focused',  var: '--jkt-color-border-focused' },
  ]},
]

// ─── Styles ──────────────────────────────────────────────────────────────────

const s = {
  page: { fontFamily: 'var(--jkt-font-family-body, sans-serif)', color: '#172b4d' } as React.CSSProperties,
  heading: { fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#6b778c', margin: '2rem 0 1rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 },
  swatch: (hex: string, dark: boolean): React.CSSProperties => ({
    borderRadius: 8,
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.08)',
    background: '#fff',
  }),
  swatchColor: (hex: string): React.CSSProperties => ({ background: hex, height: 72 }),
  swatchBody: { padding: '10px 12px' } as React.CSSProperties,
  swatchName: { fontWeight: 700, fontSize: 13, marginBottom: 2 } as React.CSSProperties,
  swatchMeta: { fontSize: 11, color: '#6b778c', lineHeight: 1.5 } as React.CSSProperties,
  tokenName: { fontFamily: 'monospace', fontSize: 10, color: '#0052cc', display: 'block', marginTop: 4 } as React.CSSProperties,
  stripGrid: { display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)', gap: 4 } as React.CSSProperties,
  stripCell: (hex: string, dark: boolean): React.CSSProperties => ({
    background: hex,
    borderRadius: 4,
    padding: '28px 0 8px',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 600,
    color: dark ? '#333' : '#fff',
    border: '1px solid rgba(0,0,0,0.06)',
  }),
  semanticRow: { display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #f0f0f0' } as React.CSSProperties,
  semanticSwatch: (cssVar: string): React.CSSProperties => ({ width: 32, height: 32, borderRadius: 6, background: `var(${cssVar})`, border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0 }),
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const MENoRPalette: StoryObj = {
  name: 'MENOR Palette',
  render: () => (
    <div style={s.page}>
      <p style={{ fontSize: 13, color: '#6b778c', marginBottom: 8 }}>
        MENOR — the 6 vivid brand colours, each representing an administrative district of Jakarta.
        Max 3 colours per medium; use one of the approved combinations below.
      </p>
      <div style={s.grid}>
        {menor.map(c => (
          <div key={c.token} style={s.swatch(c.hex, false)}>
            <div style={s.swatchColor(c.hex)} />
            <div style={s.swatchBody}>
              <div style={s.swatchName}>{c.name}</div>
              <div style={s.swatchMeta}>
                {c.hex}<br />{c.pantone}<br />{c.district}
              </div>
              <span style={s.tokenName}>{c.token}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const NeutralScale: StoryObj = {
  name: 'Neutral Scale',
  render: () => (
    <div style={s.page}>
      <div style={s.stripGrid}>
        {neutrals.map(n => (
          <div key={n.token} style={s.stripCell(n.hex, n.dark)}>
            {n.label}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
        {neutrals.map(n => (
          <div key={n.token} style={{ fontSize: 11, color: '#6b778c', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: n.hex, border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'monospace' }}>{n.token}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const SemanticTokens: StoryObj = {
  name: 'Semantic Tokens',
  render: () => (
    <div style={s.page}>
      {semantic.map(group => (
        <div key={group.group}>
          <div style={s.heading}>{group.group}</div>
          {group.tokens.map(t => (
            <div key={t.var} style={s.semanticRow}>
              <div style={s.semanticSwatch(t.var)} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{group.group.toLowerCase()}.{t.label}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#0052cc' }}>{t.var}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}
