import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//const HOST = "0.0.0.0";
const backend = "http//localhost:7115";
//const scrPath = fileURLToPath(new URL("./src", import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy:{
      "^/api":{
        target: backend,
        ws: false,
        secure: false,
      },
      "^/hub":{
        target: backend,
        ws: true,
        secure: false,
      },
    },
  },
})
