const BASE_URL = import.meta.env.BASE_URL || '/'

// 極簡版本：使用 CSS mask 將 public 的 SVG 當作遮罩，顏色由 currentColor（文字顏色）控制。
// 優點：
// - 完全不需要 fetch、狀態或字串替換。
// - 保持檔案在 public，不改動 src 結構。
// 用法：
// <LogoFromPublic src="logo-light.svg" className="h-[38px] w-[38px] text-[var(--brand-forest)]" />
export default function LogoFromPublic({ src = 'logo-light.svg', className = '' }) {
  const url = BASE_URL + src
  const style = {
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    // 元素本體用背景色來著色，搭配 text- 類似的顏色控制，可使用 currentColor
    backgroundColor: 'currentColor',
    display: 'inline-block',
  }
  return <span className={className} style={style} aria-hidden="true" />
}
