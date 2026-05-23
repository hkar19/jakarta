import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PlusJIcon } from '../src/components/Logo'
import '../src/tokens.css'

const meta: Meta = {
  title: 'Brand/Themes',
  parameters: { layout: 'padded' },
}
export default meta

// ─── The 6 approved MENOR colour combinations (JakartaBrandBook.pdf) ─────────

const combinations = [
  {
    name: 'Konektivitas & Kolaborasi',
    primary:   { name: 'Biru Abang',         hex: '#1c5ddc' },
    accent:    { name: 'Pink None',           hex: '#eb30a2' },
    text:      '#ffffff',
    districts: ['Jakarta Utara', 'Jakarta Timur'],
  },
  {
    name: 'Harmoni Alam',
    primary:   { name: 'Hijau Betawi',        hex: '#19ae5d' },
    accent:    { name: 'Kuning Gigi Balang',  hex: '#feb52b' },
    text:      '#ffffff',
    districts: ['Jakarta Selatan', 'Jakarta Barat'],
  },
  {
    name: 'Pesisir & Semangat',
    primary:   { name: 'Biru Pesisir',        hex: '#00aaff' },
    accent:    { name: 'Jingga Bis Kota',     hex: '#fc351c' },
    text:      '#ffffff',
    districts: ['Kepulauan Seribu', 'Jakarta Pusat'],
  },
  {
    name: 'Energi Kota',
    primary:   { name: 'Kuning Gigi Balang',  hex: '#feb52b' },
    accent:    { name: 'Jingga Bis Kota',     hex: '#fc351c' },
    text:      '#000000',
    districts: ['Jakarta Barat', 'Jakarta Pusat'],
  },
  {
    name: 'Tumbuh Bersama',
    primary:   { name: 'Hijau Betawi',        hex: '#19ae5d' },
    accent:    { name: 'Biru Abang',          hex: '#1c5ddc' },
    text:      '#ffffff',
    districts: ['Jakarta Selatan', 'Jakarta Utara'],
  },
  {
    name: 'Semarak & Tenang',
    primary:   { name: 'Pink None',           hex: '#eb30a2' },
    accent:    { name: 'Biru Pesisir',        hex: '#00aaff' },
    text:      '#ffffff',
    districts: ['Jakarta Timur', 'Kepulauan Seribu'],
  },
]

const allColors = [
  { name: 'Hijau Betawi',       hex: '#19ae5d' },
  { name: 'Kuning Gigi Balang', hex: '#feb52b' },
  { name: 'Jingga Bis Kota',    hex: '#fc351c' },
  { name: 'Biru Abang',         hex: '#1c5ddc' },
  { name: 'Pink None',          hex: '#eb30a2' },
  { name: 'Biru Pesisir',       hex: '#00aaff' },
]

// ─── Theme card ───────────────────────────────────────────────────────────────

function ThemeCard({ combo }: { combo: typeof combinations[number] }) {
  const font = "'Plus Jakarta Sans', sans-serif"
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
      {/* Main panel */}
      <div style={{ background: combo.primary.hex, padding: '32px 28px', position: 'relative' }}>
        {/* Accent block */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '38%', height: '100%',
          background: combo.accent.hex,
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }} />
        {/* Logo */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <PlusJIcon size={48} color={combo.text} />
        </div>
        {/* Name */}
        <div style={{ fontFamily: font, color: combo.text, marginTop: 24, position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>{combo.name}</div>
          <div style={{ fontSize: 13, marginTop: 6, opacity: 0.75 }}>{combo.districts.join(' · ')}</div>
        </div>
      </div>
      {/* Colour swatch footer */}
      <div style={{ background: '#fff', padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'center' }}>
        {[combo.primary, combo.accent].map(c => (
          <div key={c.hex} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: c.hex, border: '1px solid rgba(0,0,0,0.08)' }} />
            <div style={{ fontFamily: font, fontSize: 12 }}>
              <div style={{ fontWeight: 600 }}>{c.name}</div>
              <div style={{ color: '#6b778c', fontFamily: 'monospace', fontSize: 11 }}>{c.hex}</div>
            </div>
          </div>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 16, height: 16, borderRadius: 3, background: combo.text, border: '1px solid #eee' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999' }}>{combo.text}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const ApprovedCombinations: StoryObj = {
  name: 'Approved Combinations',
  render: () => (
    <div>
      <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#6b778c', marginBottom: 24 }}>
        6 approved MENOR colour combinations from the Jakarta Brand Book.
        Each pair is pre-cleared for use in communications — max 3 colours per medium (2 brand + white or black).
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {combinations.map(c => <ThemeCard key={c.name} combo={c} />)}
      </div>
    </div>
  ),
}

export const FullPalette: StoryObj = {
  name: 'Full MENOR Wheel',
  render: () => {
    const font = "'Plus Jakarta Sans', sans-serif"
    return (
      <div>
        <p style={{ fontFamily: font, fontSize: 13, color: '#6b778c', marginBottom: 24 }}>
          All 6 MENOR colours together — for reference only. Never use all 6 simultaneously in one medium.
        </p>
        <div style={{ display: 'flex', borderRadius: 16, overflow: 'hidden', height: 200 }}>
          {allColors.map(c => (
            <div key={c.hex} style={{ flex: 1, background: c.hex, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 12 }}>
              <div style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
                {c.name.split(' ').map((w, i) => <span key={i} style={{ display: 'block' }}>{w}</span>)}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{c.hex}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

export const LogoOnThemes: StoryObj = {
  name: 'Logo on Themes',
  render: () => {
    const font = "'Plus Jakarta Sans', sans-serif"
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {allColors.map(c => {
          const isLight = c.hex === '#feb52b'
          const textColor = isLight ? '#000' : '#fff'
          return (
            <div key={c.hex} style={{
              background: c.hex, borderRadius: 12, padding: 24,
              display: 'flex', flexDirection: 'column', gap: 16
            }}>
              <PlusJIcon size={40} color={textColor} />
              <div>
                <div style={{ fontFamily: font, color: textColor, fontWeight: 700, fontSize: 18 }}>Jakarta</div>
                <div style={{ fontFamily: font, color: textColor, fontSize: 11, opacity: 0.8, marginTop: 2 }}>kota kolaborasi</div>
              </div>
              <div style={{ fontFamily: font, fontSize: 11, color: textColor, opacity: 0.7 }}>{c.name}</div>
            </div>
          )
        })}
        <div style={{ background: '#000', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PlusJIcon size={40} color="#fff" />
          <div>
            <div style={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: 18 }}>Jakarta</div>
            <div style={{ fontFamily: font, color: '#fff', fontSize: 11, opacity: 0.8, marginTop: 2 }}>kota kolaborasi</div>
          </div>
          <div style={{ fontFamily: font, fontSize: 11, color: '#fff', opacity: 0.7 }}>Hitam — Black</div>
        </div>
      </div>
    )
  },
}
