const BASE_URL = import.meta.env.BASE_URL || "/";

export let CART_ITEMS = [
  // {
  //   id: "1",
  //   name: "焦糖馬卡龍1",
  //   label: "本日精選",
  //   price: 450,
  //   currency: "NT$",
  //   qty: 2,
  //   image: BASE_URL + "photo-1514517220017-8ce97a34a7b6.avif",
  // },
  // {
  //   id: "2",
  //   name: "焦糖馬卡龍2",
  //   label: "本日精選",
  //   price: 450,
  //   currency: "NT$",
  //   qty: 3,
  //   image: BASE_URL + "photo-1473256599800-b48c7c88cd7e.avif",
  // },
  // {
  //   id: "",
  //   name: "焦糖馬卡龍3",
  //   label: "本日精選",
  //   price: 450,
  //   currency: "NT$",
  //   qty: 2,
  //   image: BASE_URL + "photo-1490474504059-bf2db5ab2348.avif",
  // },
];

export const SHIPPING_FEE = 300;

export function delHandler(id) {
  console.log("刪除商品:", id);
  CART_ITEMS = CART_ITEMS.filter(item => {
    console.log("item:", item);

    return item.id !== id
  });
  console.log("剩餘商品:", CART_ITEMS);

}

// 新增或增加購物車品項（供頁面呼叫）
// 參數 newItem 支援以下欄位：
// { id, name|title, price, currency, image, label }
export function addCartItem(newItem = {}) {
  const id = String(newItem.id ?? newItem.name ?? newItem.title ?? "");
  if (!id) return;

  const name = newItem.name ?? newItem.title ?? "";
  const price = Number(newItem.price || 0);
  const currency = newItem.currency || "NT$";
  const label = newItem.label || "";
  const image = (newItem.image || "").startsWith("http")
    ? newItem.image
    : BASE_URL + (newItem.image || "");

  const existed = CART_ITEMS.find((it) => it.id === id);
  if (existed) {
    existed.qty = Number(existed.qty || 0) + 1;
  } else {
    CART_ITEMS.push({ id, name, label, price, currency, qty: 1, image });
  }
  console.log("CART_ITEMS:", CART_ITEMS);

}
// 計算金額摘要（小計、運費、總計）
export function computeSummary(items = CART_ITEMS, shipping = SHIPPING_FEE) {
  const currency = items[0]?.currency ?? "NT$";
  const subtotal = items.reduce(
    (sum, it) => sum + Number(it.price || 0) * Number(it.qty || 0),
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
  return Number(item.price || 0) * Number(item.qty || 0);
}
