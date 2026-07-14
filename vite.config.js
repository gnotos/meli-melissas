import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/images/324741533_915215752989866_8705467051427583790_n.jpg'],
    },
  },
})
