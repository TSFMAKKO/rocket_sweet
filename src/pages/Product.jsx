import { useMemo, useState } from "react";
import { addCartItem } from "../data/cart";

const BASE_URL = import.meta.env.BASE_URL || "/";

// 使用者提供的資料（將圖片對應到現有 public 圖檔）
const PRODUCT_DATA = {
  category: "甜點類別",
  filters: [
    { name: "所有甜點", count: 6 },
    { name: "本日精選", count: 4 },
    { name: "人氣", count: 1, label: "300" },
    { name: "新品上市", count: 1, label: "65" },
  ],
  products: [
    {
      id: "1",
      name: "焦糖馬卡龍1",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-1473256599800-b48c7c88cd7e.avif",
      button: "加入購物車",
    },
    {
      id: "2",
      name: "焦糖馬卡龍2",
      price: 450,
      currency: "NT$",
      label: "人氣",
      image: "photo-1499635842761-4f1f28fafcff.avif",
      button: "加入購物車",
    },
    {
      id: "3",
      name: "焦糖馬卡龍3",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-1501432781167-c0ccfd492297.avif",
      button: "加入購物車",
    },
    {
      id: "4",
      name: "焦糖馬卡龍4",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-1514517220017-8ce97a34a7b6.avif",
      button: "加入購物車",
    },
    {
      id: "5",
      name: "焦糖馬卡龍5",
      price: 450,
      currency: "NT$",
      label: "新品上市",
      image: "photo-1504855328839-2f4baf9e0fd7.avif",
      button: "加入購物車",
    },
    {
      id: "6",
      name: "焦糖馬卡龍6",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-1490474504059-bf2db5ab2348.avif",
      button: "加入購物車",
    },
  ],
  pagination: { current_page: 1, total_pages: 3 },
};

// active=所有甜點 
// items=filters(所有) { name: "所有甜點", count: 48 }, { name: "本日精選", count: 10 },
function FilterList({ title, items, active, onChange }) {
  return (
    <aside className="w-full md:max-w-[300px] bg-white">
      <div className="bg-[#3F5D45] text-white text-center py-3">
        {title}
      </div>
      <ul className="border border-[#EAF0ED] divide-y">
        {/*  */}
        {items.map((item) => {
          // active=所有甜點
          const isActive = active === item.name;
          return (
            <li key={item.name}>
              <button
                type="button"
                // 每個li 點下去 把自己的name傳給 onChange=setActiveFilter(設定activeFilter)
                onClick={() => onChange(item.name)}
                className={`${
                  // 被選中的加上背景顏色(例如所有甜點)
                  isActive ? "bg-[#EAF0ED]" : "bg-white"
                  } w-full flex items-center justify-between px-4 py-3 text-left`}
              >
                <span>{item.name}</span>
                <span className="text-gray-500">({item.count})</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function ProductCard({ p, onAdd }) {
  return (
    <div className="border border-[#EAF0ED] bg-white">
      <div className="relative">
        {/* 有本日精選之類的就印出來 */}
        {p.label ? (
          <span className="absolute [writing-mode:vertical-rl] flex tracking-[4px] leading-[36px] left-[20px] top-0 bg-[#3F5D45] text-white text-[16px] font-[600] px-[10px] pb-[20px] ">{p.label}</span>

        ) : null}
        <img
          src={BASE_URL + p.image}
          alt={p.title}
          className="w-full h-[315px] object-cover"
        />
      </div>

      <div className="flex justify-between items-center px-[16px] py-[12px] border-t border-[#EAF0ED]">
        <div className="text-gray-700">{p.title}</div>
        <div className="text-gray-900">
          {p.currency} {p.price}
        </div>
      </div>

      <button onClick={() => onAdd?.(p)} className="w-full bg-[#EAF0ED] hover:bg-[#dbe4dd] text-[#3F5D45] py-[12px]">
        {p.button}
      </button>
    </div>
  );
}

// 傳入當前頁數current 總頁數total
function Pagination({ current, total }) {
  // 產生頁碼陣列 [1,2,3]
  const pages = useMemo(
    () => Array.from({ length: total }, (_, i) => i + 1),
    [total]
  );
  return (
    <nav
      className="flex items-center justify-end max-sm:justify-center mt-[24px]"
      aria-label="Pagination"
    >
      <button
        className="flex justify-center items-center w-[60px] h-[60px] border border-[#EAF0ED] disabled:opacity-50"
        disabled={current <= 1}
      >
        <img src={BASE_URL + "arrow_left.png"} alt="" />
        {/* ‹ */}
      </button>
      {pages.map((n) => (
        <button
          key={n}
          className={`flex justify-center items-center w-[60px] h-[60px] border border-[#EAF0ED] ${n === current ? "bg-[#3F5D45] text-white" : "bg-white"
            }`}
        >
          {n}
        </button>
      ))}
      <button
        className="flex justify-center items-center w-[60px] h-[60px] border border-[#EAF0ED] disabled:opacity-50"
        disabled={current >= total}
      >
        {/* › */}
        <img src={BASE_URL + "arrow_right.png"} alt="" />
      </button>
    </nav>
  );
}

export default function ProductPage() {
  const [activeFilter, setActiveFilter] = useState(
    // 設定初始的過濾條件(所有甜點)  { name: "所有甜點", count: 48 }
    PRODUCT_DATA.filters[0].name
  );

  // 將資料對齊到同一份 React 結構：{ id, title, label, image, price, currency }
  const normalizedProducts = useMemo(
    () =>
      PRODUCT_DATA.products.map((p, idx) => ({
        id: String(idx + 1),
        title: p.name,
        label: p.label ?? "",
        image: p.image,
        price: p.price,
        currency: p.currency || "NT$",
        button: p.button || "加入購物車",
      })),
    []
  );

  // 目前為靜態資料(之後從這邊過濾)
  const filtered = normalizedProducts;

  // 加入購物車（同步至全域 cart 模組）
  function addToCart(p) {
    console.log("addToCart:", p);

    addCartItem({
      id: p.id,
      title: p.title,
      label: p.label,
      price: p.price,
      currency: p.currency,
      image: p.image,
    });
  }

  return (
    <section className="relative">
      <div className="max-sm:hidden absolute top-[40px] right-[40px] flex justify-center">
        <img
          className="w-[90px] h-full object-cover"
          src={`${BASE_URL}lg-想吃甜點是不需要理由的.svg`}
          alt="lg-想吃甜點是不需要理由的.svg"
          srcSet=""
        />
      </div>

      <div className="sm:hidden absolute top-[40px] right-[40px] flex justify-center">
        {/* font-size: clamp(1.4rem, 3vw, 1.6rem); */}
        {/* h-[clamp(250px, 0.5vw, 400px)] */}
        <img
          className="h-[180px] object-cover aspect-auto"
          src={`${BASE_URL}sm-想吃甜點是不需要理由的.svg`}
          alt="sm-想吃甜點是不需要理由的.svg"
          srcSet=""
        />
      </div>


      {/*  */}
      <img
        src={BASE_URL + "photo-1512484457149-266d165a4eca.avif"}
        alt="甜點圖片"
        className="w-full h-auto mb-[60px]"
      />

      {/* Filter + Products */}
      <div className="flex flex-col md:flex-row gap-x-[20px]">
        <FilterList
          title={PRODUCT_DATA.category}
          items={PRODUCT_DATA.filters}
          // active=所有甜點
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <div>
          <div className="flex flex-wrap gap-[20px] max-sm:px-[32px]">
            {/* 迴圈把資料印出來 */}
            {filtered.map((p) => (
              <div key={p.id} className="w-full md:max-w-[calc(50%-10px)]">
                <ProductCard p={p} onAdd={addToCart} />
              </div>
            ))}
          </div>

          <Pagination
            current={PRODUCT_DATA.pagination.current_page}
            total={PRODUCT_DATA.pagination.total_pages}
          />
        </div>
      </div>

      {/* 把cart 資料印出來 */}
      {
        PRODUCT_DATA.products.map((item) => (
          <div key={item.id}>
            {/* 印出名字 */}
            <p>{item.name}名稱: {item.title}</p>
            <p>{item.name}數量: {item.qty}</p>
            <div className="text-[20px] font-[500]">
              {item.currency} {item.unitPrice} x {item.qty} = {item.currency} {item.price * item.qty}
            </div>
          </div>
        ))
      }
    </section>
  );
}
