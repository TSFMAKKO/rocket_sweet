import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 若部署為 GitHub 專案頁（非使用自訂網域），需設定 base 為倉庫名稱
  base: '/rocket_sweet/',
})
