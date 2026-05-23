import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PlusJIcon, JakartaWordmark } from '../src/components/Logo'
import '../src/tokens.css'

const meta: Meta = {
  title: 'Brand/Logo',
  parameters: { layout: 'padded' },
}
export default meta

// ─── District colour map ──────────────────────────────────────────────────────

const districtPalette = {
  kepulauanSeribu: '#00aaff',
  utara:           '#1c5ddc',
  barat:           '#feb52b',
  pusat:           '#fc351c',
  timur:           '#eb30a2',
  selatan:         '#19ae5d',
  stem:            '#1a1a1a',
}

// ─── Stories: Icon ────────────────────────────────────────────────────────────

export const IconDefault: StoryObj = {
  name: 'Icon — Default (Black)',
  render: () => (
    <div style={{ display: 'flex', gap: 40, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      {[24, 32, 48, 64, 96, 128].map(size => (
        <div key={size} style={{ textAlign: 'center' }}>
          <PlusJIcon size={size} color="#000" />
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', marginTop: 8 }}>{size}px</div>
        </div>
      ))}
    </div>
  ),
}

export const IconWhite: StoryObj = {
  name: 'Icon — White (on dark)',
  render: () => (
    <div style={{ background: '#000', padding: 32, borderRadius: 12, display: 'flex', gap: 40, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      {[24, 32, 48, 64, 96, 128].map(size => (
        <div key={size} style={{ textAlign: 'center' }}>
          <PlusJIcon size={size} color="#fff" />
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#666', marginTop: 8 }}>{size}px</div>
        </div>
      ))}
    </div>
  ),
}

export const IconDistrictColors: StoryObj = {
  name: 'Icon — District Colours',
  render: () => (
    <div>
      <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#6b778c', marginBottom: 24 }}>
        Each shape represents an administrative district. Triangle = Kepulauan Seribu.
        5 squares = the 5 municipalities (Pusat, Utara, Selatan, Barat, Timur).
      </p>
      <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <PlusJIcon size={128} districtColors={districtPalette} />
        <div style={{ fontFamily: 'sans-serif', fontSize: 13, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 16px', alignContent: 'start' }}>
          {Object.entries(districtPalette).filter(([k]) => k !== 'stem').map(([district, hex]) => (
            <React.Fragment key={district}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 16, height: 16, borderRadius: 3, background: hex, border: '1px solid rgba(0,0,0,0.1)' }} />
                <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{district.replace(/([A-Z])/g, ' $1').trim()}</span>
              </div>
              <span style={{ color: '#6b778c', fontFamily: 'monospace' }}>{hex}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  ),
}

// ─── Stories: SVG Wordmark ────────────────────────────────────────────────────

export const WordmarkDefault: StoryObj = {
  name: 'Wordmark — Default',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: 8 }}>
      {[200, 140, 100, 72].map(h => (
        <div key={h}>
          <JakartaWordmark height={h} color="#1a1a1a" />
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#aaa', marginTop: 8 }}>{h}px height</div>
        </div>
      ))}
    </div>
  ),
}

export const WordmarkWhiteOnDark: StoryObj = {
  name: 'Wordmark — White on Dark',
  render: () => (
    <div style={{ background: '#000', padding: 48, borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 48 }}>
      {[200, 140, 100].map(h => (
        <div key={h}>
          <JakartaWordmark height={h} color="#fff" />
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#444', marginTop: 8 }}>{h}px height</div>
        </div>
      ))}
    </div>
  ),
}

export const WordmarkDistrictColors: StoryObj = {
  name: 'Wordmark — District Colours',
  render: () => (
    <JakartaWordmark height={160} color="#1a1a1a" districtColors={districtPalette} />
  ),
}

export const WordmarkOnBrandColor: StoryObj = {
  name: 'Wordmark — On Brand Colours',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[
        { bg: '#1c5ddc', color: '#fff', label: 'Biru Abang'         },
        { bg: '#19ae5d', color: '#fff', label: 'Hijau Betawi'        },
        { bg: '#fc351c', color: '#fff', label: 'Jingga Bis Kota'     },
        { bg: '#feb52b', color: '#000', label: 'Kuning Gigi Balang'  },
        { bg: '#eb30a2', color: '#fff', label: 'Pink None'           },
        { bg: '#00aaff', color: '#fff', label: 'Biru Pesisir'        },
        { bg: '#000000', color: '#fff', label: 'Hitam'               },
      ].map(({ bg, color, label }) => (
        <div key={label} style={{
          background: bg, padding: '28px 36px', borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <JakartaWordmark height={80} color={color} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color, opacity: 0.7 }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const WordmarkNoTagline: StoryObj = {
  name: 'Wordmark — No Tagline',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <JakartaWordmark height={120} color="#1a1a1a" tagline={false} />
      <div style={{ background: '#000', padding: 32, borderRadius: 12, display: 'inline-block' }}>
        <JakartaWordmark height={120} color="#fff" tagline={false} />
      </div>
    </div>
  ),
}

export const MinimumSizes: StoryObj = {
  name: 'Minimum Sizes',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#172b4d' }}>
      <p style={{ color: '#6b778c', marginBottom: 32 }}>
        Brand book digital minimums: icon 31px height · wordmark 42px height.
      </p>
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div>
          <PlusJIcon size={31} color="#000" />
          <div style={{ color: '#6b778c', fontSize: 11, marginTop: 6 }}>Icon — 31px min</div>
        </div>
        <div>
          <JakartaWordmark height={42} color="#1a1a1a" tagline={false} />
          <div style={{ color: '#6b778c', fontSize: 11, marginTop: 6 }}>Wordmark — 42px min</div>
        </div>
        <div>
          <JakartaWordmark height={42} color="#1a1a1a" />
          <div style={{ color: '#6b778c', fontSize: 11, marginTop: 6 }}>Wordmark + tagline — 42px min</div>
        </div>
      </div>
    </div>
  ),
}

export const WordmarkNotes: StoryObj = {
  name: 'Wordmark — Implementation Notes',
  render: () => {
    const font = "'Plus Jakarta Sans', sans-serif"
    return (
      <div style={{ fontFamily: font, color: '#172b4d', maxWidth: 760 }}>

        <div style={{ background: '#fff', border: '1px solid #ebecf0', borderRadius: 12, padding: 40, marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#6b778c', marginBottom: 24 }}>
            SVG Wordmark — height 140px
          </div>
          <JakartaWordmark height={140} color="#1a1a1a" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{ background: '#f4f5f7', borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#6b778c', marginBottom: 12 }}>
              Grid math
            </div>
            <div style={{ fontSize: 12, color: '#344563', lineHeight: 1.7, fontFamily: 'monospace' }}>
              viewBox 0 0 3041.6 1254.37<br/>
              traced from brand book<br/>
              (1.3 Konstruksi Logo)<br/>
              sharp-edged districts<br/>
              6 districts + J stem<br/>
              + "akarta" + tagline (evenodd)
            </div>
          </div>
          <div style={{ background: '#f4f5f7', borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#6b778c', marginBottom: 12 }}>
              Properties
            </div>
            <div style={{ fontSize: 13, color: '#344563', lineHeight: 1.7 }}>
              ✓ Single SVG, scales cleanly<br/>
              ✓ Icon IS the J — text = "akarta"<br/>
              ✓ Authentic brand letterforms<br/>
              ✓ No webfont dependency<br/>
              ✓ Per-district colourable<br/>
              ✓ Tagline toggle
            </div>
          </div>
        </div>
      </div>
    )
  },
}
