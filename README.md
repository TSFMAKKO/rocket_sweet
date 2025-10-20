# rocket_sweet — React + Router + Tailwind v4

這是以 Vite 建立的 React 專案，已整合：

- React Router 路由（/ 與 /about）
- Tailwind CSS v4（使用 `@tailwindcss/vite` 外掛與 `@import "tailwindcss"`）

## 快速開始

開發伺服器：

```bash
npm run dev
```

建置：

```bash
npm run build
```

預覽：

```bash
npm run preview
```

## 路由

- `/` Index 頁面
- `/about` About 頁面

## 樣式

Tailwind v4 已啟用於 `src/index.css`：

```css
@import "tailwindcss";
```

如需自訂設計值，可於同一檔案使用 `@theme` 語法進行 CSS-first 設定。
