import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import '../src/tokens.css'

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: { layout: 'padded' },
}
export default meta

// ─── Brand type scale from JakartaBrandBook.pdf ──────────────────────────────

const scale = [
  { role: 'Judul Utama',      roleEn: 'Primary Heading',   size: '2.25rem', weight: 500, family: 'display', sample: 'Kota Kolaborasi' },
  { role: 'Judul Pendukung',  roleEn: 'Secondary Heading', size: '1.375rem', weight: 500, family: 'display', sample: 'Jakarta, Ibu Kota Bangsa' },
  { role: 'Tajuk',            roleEn: 'Label',             size: '0.75rem',  weight: 700, family: 'body',    sample: 'KOLABORASI POSITIF' },
  { role: 'Paragraf',         roleEn: 'Body',              size: '1rem',     weight: 400, family: 'body',    sample: 'Plus adalah visualisasi dari sebuah persimpangan, titik temu yang mempertemukan ide, budaya dan berbagai impian.' },
]

const sizes = [
  { token: '--jkt-font-size-xs',  label: 'xs',  px: '12px',  sample: 'The quick brown fox' },
  { token: '--jkt-font-size-sm',  label: 'sm',  px: '14px',  sample: 'The quick brown fox' },
  { token: '--jkt-font-size-md',  label: 'md',  px: '16px',  sample: 'The quick brown fox' },
  { token: '--jkt-font-size-lg',  label: 'lg',  px: '22px',  sample: 'The quick brown fox' },
  { token: '--jkt-font-size-xl',  label: 'xl',  px: '24px',  sample: 'Kota Kolaborasi' },
  { token: '--jkt-font-size-2xl', label: '2xl', px: '36px',  sample: 'Kota Kolaborasi' },
  { token: '--jkt-font-size-3xl', label: '3xl', px: '48px',  sample: '+Jakarta' },
]

const weights = [
  { label: 'Regular', value: 400, token: '--jkt-font-weight-regular' },
  { label: 'Medium',  value: 500, token: '--jkt-font-weight-medium'  },
  { label: 'SemiBold',value: 600, token: '--jkt-font-weight-semibold'},
  { label: 'Bold',    value: 700, token: '--jkt-font-weight-bold'    },
]

// ─── Styles ──────────────────────────────────────────────────────────────────

const font = "var(--jkt-font-family-body, 'Plus Jakarta Sans', sans-serif)"

const s = {
  page: { fontFamily: font, color: '#172b4d', maxWidth: 800 } as React.CSSProperties,
  label: { fontSize: 11, fontWeight: 600, color: '#6b778c', letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: 4 },
  token: { fontFamily: 'monospace', fontSize: 11, color: '#0052cc' } as React.CSSProperties,
  divider: { borderBottom: '1px solid #ebecf0', margin: '1.5rem 0' } as React.CSSProperties,
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const BrandHierarchy: StoryObj = {
  name: 'Brand Hierarchy',
  render: () => (
    <div style={s.page}>
      <p style={{ fontSize: 13, color: '#6b778c', marginBottom: 24 }}>
        Type hierarchy from JakartaBrandBook.pdf — four roles, two optical sizes.
      </p>
      {scale.map((item, i) => (
        <div key={item.role}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 4 }}>
            <span style={s.label}>{item.role}</span>
            <span style={{ fontSize: 11, color: '#aaa' }}>{item.roleEn}</span>
          </div>
          <div
            style={{
              fontFamily: font,
              fontSize: item.size,
              fontWeight: item.weight,
              lineHeight: item.family === 'display' ? 1.2 : 1.6,
              marginBottom: 8,
              letterSpacing: item.weight === 700 ? '0.05em' : undefined,
            }}
          >
            {item.sample}
          </div>
          <div style={{ ...s.token, marginBottom: 16 }}>
            {item.size} / weight {item.weight} / Plus Jakarta Sans {item.family === 'display' ? 'Display' : 'Text'}
          </div>
          {i < scale.length - 1 && <div style={s.divider} />}
        </div>
      ))}
    </div>
  ),
}

export const TypeScale: StoryObj = {
  name: 'Type Scale',
  render: () => (
    <div style={s.page}>
      {sizes.map(sz => (
        <div key={sz.token} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ width: 40, flexShrink: 0, ...s.label }}>{sz.label}</div>
          <div style={{ fontFamily: font, fontSize: `var(${sz.token})`, flex: 1 }}>{sz.sample}</div>
          <div style={{ flexShrink: 0, textAlign: 'right' }}>
            <div style={s.token}>{sz.token}</div>
            <div style={{ fontSize: 11, color: '#aaa' }}>{sz.px}</div>
          </div>
        </div>
      ))}
    </div>
  ),
}

export const FontWeights: StoryObj = {
  name: 'Font Weights',
  render: () => (
    <div style={s.page}>
      {weights.map(w => (
        <div key={w.token} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 0', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ width: 80, flexShrink: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#172b4d' }}>{w.label}</div>
            <div style={{ ...s.token, marginTop: 2 }}>{w.value}</div>
          </div>
          <div style={{ fontFamily: font, fontSize: '1.5rem', fontWeight: w.value, flex: 1 }}>
            Plus Jakarta Sans
          </div>
          <div style={{ ...s.token, flexShrink: 0 }}>{w.token}</div>
        </div>
      ))}
    </div>
  ),
}

export const FontFamilies: StoryObj = {
  name: 'Font Families',
  render: () => (
    <div style={s.page}>
      {[
        { label: 'Display', token: '--jkt-font-family-display', family: "var(--jkt-font-family-display, 'Plus Jakarta Sans', sans-serif)", note: 'Headlines, logo wordmark' },
        { label: 'Body',    token: '--jkt-font-family-body',    family: "var(--jkt-font-family-body, 'Plus Jakarta Sans', sans-serif)",    note: 'Body text, UI labels' },
        { label: 'Code',    token: '--jkt-font-family-code',    family: 'var(--jkt-font-family-code, monospace)',                          note: 'Code, token names' },
      ].map(f => (
        <div key={f.token} style={{ padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={s.label}>{f.label}</span>
            <span style={{ ...s.token, fontSize: 11 }}>{f.token}</span>
          </div>
          <div style={{ fontFamily: f.family, fontSize: '1.75rem', fontWeight: 500, marginBottom: 4 }}>
            Kota Kolaborasi — Jakarta
          </div>
          <div style={{ fontFamily: f.family, fontSize: '1rem', color: '#6b778c' }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 &amp;!@#
          </div>
          <div style={{ fontSize: 12, color: '#999', marginTop: 6 }}>{f.note}</div>
        </div>
      ))}
    </div>
  ),
}
