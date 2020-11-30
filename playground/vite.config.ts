import type { UserConfig } from '../src/node/config'
import { jsPlugin } from './plugins/jsPlugin'
import { changeConfigPlugin1 } from './plugins/changeConfig'
import { i18nTransform } from './custom-blocks/i18nTransform'

const config: UserConfig = {
  alias: {
    alias: '/alias/aliased',
    '/@alias/': require('path').resolve(__dirname, 'alias/aliased-dir')
  },
  define: {
    __VALUE__: 'value'
  },
  jsx: 'preact',
  plugins: [jsPlugin, changeConfigPlugin1],
  vueCustomBlockTransforms: { i18n: i18nTransform },
  optimizeDeps: {
    exclude: ['bootstrap', 'rewrite-unoptimized-test-package'],
    link: ['optimize-linked']
  },
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'preprocess-custom-color': 'green'
      }
    }
  },
  vueTransformAssetUrls: {
    img: ['src', 'data-src']
  },
  indexHtmlTransforms: [
    ({ code }) => code.replace(/Vite App/, 'Vite Playground')
  ],
  emitManifest: true
}

export default config
