# rocket_sweet — React + Router + Tailwind v4

這是以 Vite 建立的 React 專案，已整合：

- React Router 路由
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

本專案使用 Hash 路由（`createHashRouter`），適合 GitHub Pages 等靜態託管：

## 樣式

Tailwind v4 已啟用於 `src/index.css`：

```css
@import "tailwindcss";
```

如需自訂設計值，可於同一檔案使用 `@theme` 語法進行 CSS-first 設定。

## GitHub Pages 部署

本專案已內建 GitHub Actions 以部署到 GitHub Pages：

1. 確認 repo 為 `TSFMAKKO/rocket_sweet`，且分支為 `main`。
2. 在 GitHub 設定 Pages：
	- Settings → Pages → Build and deployment → Source 選擇「GitHub Actions」。
3. 提交到 `main` 分支後，Action 會自動：
	- 安裝依賴並建置
	- 複製 `dist/index.html` 為 `dist/404.html`（SPA 回退）
	- 部署 `dist` 到 Pages

部署網址形式（專案頁）：

```
https://TSFMAKKO.github.io/rocket_sweet/
```

注意：`vite.config.js` 已設定 `base: '/rocket_sweet/'`，若倉庫名稱或自訂網域變更，請同步調整。
