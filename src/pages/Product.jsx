import { useMemo, useState } from "react";
import { addCartItem } from "../data/cart";

const BASE_URL = import.meta.env.BASE_URL || "/";




// 使用者提供的資料（將圖片對應到現有 public 圖檔）
const PRODUCT_DATA = {
  category: "甜點類別",
  filters: [
    { name: "所有甜點", count: 6 },
    { name: "本日精選", count: 3 },
    { name: "人氣", count: 2, label: "300" },
    { name: "新品上市", count: 1, label: "65" },
  ],
  products: [
    {
      id: "1",
      name: "焦糖馬卡龍1",
      price: 450,
      currency: "NT$",
      label: "人氣",
      image: "photo-1.avif",
      button: "加入購物車",
    },
    {
      id: "2",
      name: "焦糖馬卡龍2",
      price: 450,
      currency: "NT$",
      label: "人氣",
      image: "photo-2.avif",
      button: "加入購物車",
    },
    {
      id: "3",
      name: "焦糖馬卡龍3",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-3.avif",
      button: "加入購物車",
    },
    {
      id: "4",
      name: "焦糖馬卡龍4",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-4.avif",
      button: "加入購物車",
    },
    {
      id: "5",
      name: "焦糖馬卡龍5",
      price: 450,
      currency: "NT$",
      label: "新品上市",
      image: "photo-5.avif",
      button: "加入購物車",
    },
    {
      id: "6",
      name: "焦糖馬卡龍6",
      price: 450,
      currency: "NT$",
      label: "本日精選",
      image: "photo-6.avif",
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

function ProductCard({ p, onAdd, liked, onToggleLike }) {
  return (
    <div className="border border-[#EAF0ED] bg-white">
      <div className="relative">
        {/* 有本日精選之類的就印出來 */}
        {p.label ? (
          <span className="absolute [writing-mode:vertical-rl] flex tracking-[4px] leading-[36px] left-[20px] top-0 bg-[#3F5D45] text-white text-[16px] font-[600] px-[10px] pb-[20px] ">{p.label}</span>

        ) : null}

        {/* 收藏按鈕（搭配 products 切換） */}
        <button
          type="button"
          onClick={onToggleLike}
          aria-pressed={liked}
          className={`absolute top-[10px] right-[20px] inline-flex items-center justify-center transition-transform hover:scale-120 active:ring-[#3F5D45]/40 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[24px] h-[24px]"
            aria-hidden="true"
          >
            <path
              d="M21 8.25c0-2.485-2.098-4.5-4.688-4.5-1.828 0-3.416.99-4.312 2.454C11.104 4.74 9.516 3.75 7.688 3.75 5.098 3.75 3 5.765 3 8.25c0 7.22 9 11.25 9 11.25s9-4.03 9-11.25z"
              fill={liked ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
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

  let products = PRODUCT_DATA.products.filter(p => p.label === activeFilter);


  // 將資料對齊到同一份 React 結構：{ id, title, label, image, price, currency }
  const normalizedProducts = useMemo(
    () =>
      PRODUCT_DATA.products.map((p, idx) => ({
        id: String(p.id ?? idx + 1),
        title: p.name,
        label: p.label ?? "",
        image: p.image,
        price: p.price,
        currency: p.currency || "NT$",
        button: p.button || "加入購物車",
      })),
    []
  );

  // 依目前篩選條件過濾（所有甜點 => 全部）
  const filtered = useMemo(
    () =>
      activeFilter === "所有甜點"
        ? normalizedProducts
        : normalizedProducts.filter((p) => p.label === activeFilter),
    [normalizedProducts, activeFilter]
  );

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

  // 收藏狀態：以商品 id 存在集合中代表已收藏
  const [likedIds, setLikedIds] = useState(new Set());
  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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

        <div className="w-full">
          <div className="flex flex-wrap gap-[20px] max-sm:px-[32px]">
            {/* 迴圈把資料印出來 */}
            {filtered.map((p) => (
              <div key={p.id} className="w-full md:max-w-[calc(50%-10px)]">
                <ProductCard
                  p={p}
                  onAdd={addToCart}
                  liked={likedIds.has(p.id)}
                  onToggleLike={() => toggleLike(p.id)}
                />
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
        products.map((item) => (
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
