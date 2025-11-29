import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindVite from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tsconfigPaths({ ignoreConfigErrors: true }),
      tailwindVite(),
    ],
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
})