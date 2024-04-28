import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//const HOST = "0.0.0.0";
//const dev_back = "https://localhost:7115";
//const prod_back = "http://back:65165";
const prod_back = "https://localhost:7115";
const dev_back = "http://back:65165";

//const scrPath = fileURLToPath(new URL("./src", import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  return {
    plugins: [vue()],
    server: {
    port: 3000,
    proxy:{
      "^/api":{
        target: mode == "development" ? dev_back : prod_back,
        ws: false,
        secure: false,
      },
      "^/hub":{
        target: mode == "development" ? dev_back : prod_back,
        ws: true,
        secure: false,
      },
    },
  },
}
})
