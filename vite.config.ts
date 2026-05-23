import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'node:path'
import { readdirSync, readFileSync } from 'node:fs'

function svgAssetsPlugin(): Plugin {
  return {
    name: 'svg-assets',
    generateBundle() {
      const assetsDir = resolve(__dirname, 'src/assets')
      for (const file of readdirSync(assetsDir)) {
        if (file.endsWith('.svg')) {
          this.emitFile({
            type: 'asset',
            fileName: `assets/${file}`,
            source: readFileSync(resolve(assetsDir, file), 'utf-8'),
          })
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [svgAssetsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DsJakarta',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
})
