import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  target: 'es2020',
  outDir: 'dist',
  esbuildOptions(options) {
    options.platform = 'neutral'
  }
})
