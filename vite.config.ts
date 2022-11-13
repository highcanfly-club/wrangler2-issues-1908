/*!
=========================================================
* © 2022 Ronan LE MEILLAT for SCTG Développement
=========================================================
This website use:
- Vite, Vue3, Cloudflare
- And many others
*/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    fs.existsSync("./localhost.key") ? vue():[basicSsl(),vue()],
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules'),
      '§': path.resolve(__dirname, './'),
    },
  },
  server: {
    https: fs.existsSync("./localhost.key")
      ? {
          key: fs.readFileSync("./localhost.key"),
          cert: fs.readFileSync("./localhost.pem"),
        }
      : false,
  },
})