// 購物車靜態資料（你確認後再做版型）
// 圖片皆來自 public 資料夾，會依照 Vite 的 BASE_URL 自動拼接

const BASE_URL = import.meta.env.BASE_URL || "/";

// 單筆商品項目範例格式
// {
//   id: string,
//   name: string,
//   unitPrice: number,    // 單價
//   currency: string,     // 幣別顯示用，如 'NT$'
//   qty: number,          // 數量
//   image: string         // 完整圖片 URL（已拼 BASE_URL）
// }

export const CART_ITEMS = [
  {
    id: "macaron-1",
    name: "焦糖馬卡龍",
    unitPrice: 450,
    currency: "NT$",
    qty: 2,
    image: BASE_URL + "photo-1514517220017-8ce97a34a7b6.avif",
  },
  {
    id: "macaron-2",
    name: "焦糖馬卡龍",
    unitPrice: 450,
    currency: "NT$",
    qty: 2,
    image: BASE_URL + "photo-1473256599800-b48c7c88cd7e.avif",
  },
  {
    id: "macaron-3",
    name: "焦糖馬卡龍",
    unitPrice: 450,
    currency: "NT$",
    qty: 2,
    image: BASE_URL + "photo-1490474504059-bf2db5ab2348.avif",
  },
];

export const SHIPPING_FEE = 300;

// 計算金額摘要（小計、運費、總計）
export function computeSummary(items = CART_ITEMS, shipping = SHIPPING_FEE) {
  const currency = items[0]?.currency ?? "NT$";
  const subtotal = items.reduce(
    (sum, it) => sum + Number(it.unitPrice || 0) * Number(it.qty || 0),
    0
  );
  const total = subtotal + Number(shipping || 0);
  return { currency, subtotal, shipping, total };
}

// 方便直接使用的快照物件
export const CART_SNAPSHOT = {
  items: CART_ITEMS,
  summary: computeSummary(CART_ITEMS, SHIPPING_FEE),
};

// 也提供每筆商品的小計工具（若需要在 UI 顯示 NT$ 900）
export function getLineTotal(item) {
  return Number(item.unitPrice || 0) * Number(item.qty || 0);
}
