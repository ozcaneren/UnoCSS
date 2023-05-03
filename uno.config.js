import { defineConfig } from 'vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({ /* preset options */ }),
    // ...
  ],
  transformers: [
    transformerAttributifyJsx(), // <--
  ],
})