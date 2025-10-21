import { useMemo, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL || "/";

// 使用者提供的資料（將圖片對應到現有 public 圖檔）
const PRODUCT_DATA = {
  category: "甜點類別",
  filters: [
    { name: "所有甜點", count: 48 },
    { name: "本日精選", count: 10 },
    { name: "人氣", count: 26, tag: "300" },
    { name: "新品上市", count: 12, tag: "65" },
  ],
  products: [
    {
      name: "焦糖馬卡龍",
      price: 450,
      currency: "NT$",
      tag: "本日精選",
      image: "photo-1473256599800-b48c7c88cd7e.avif",
      button: "加入購物車",
    },
    {
      name: "焦糖馬卡龍",
      price: 450,
      currency: "NT$",
      tag: "本日精選",
      image: "photo-1499635842761-4f1f28fafcff.avif",
      button: "加入購物車",
    },
    {
      name: "焦糖馬卡龍",
      price: 450,
      currency: "NT$",
      tag: "本日精選",
      image: "photo-1501432781167-c0ccfd492297.avif",
      button: "加入購物車",
    },
    {
      name: "焦糖馬卡龍",
      price: 450,
      currency: "NT$",
      tag: "本日精選",
      image: "photo-1514517220017-8ce97a34a7b6.avif",
      button: "加入購物車",
    },
    {
      name: "焦糖馬卡龍",
      price: 450,
      currency: "NT$",
      tag: "本日精選",
      image: "photo-1504855328839-2f4baf9e0fd7.avif",
      button: "加入購物車",
    },
    {
      name: "焦糖馬卡龍",
      price: 450,
      currency: "NT$",
      tag: "本日精選",
      image: "photo-1490474504059-bf2db5ab2348.avif",
      button: "加入購物車",
    },
  ],
  pagination: { current_page: 2, total_pages: 3 },
};

function FilterList({ title, items, active, onChange }) {
  return (
    <aside className="w-full md:w-[240px] shrink-0 bg-white">
      <div className="bg-[#3F5D45] text-white text-center py-3 rounded-t">
        {title}
      </div>
      <ul className="border border-[#EAF0ED] divide-y">
        {items.map((it) => {
          const isActive = active === it.name;
          return (
            <li key={it.name}>
              <button
                type="button"
                onClick={() => onChange?.(it.name)}
                className={`${
                  isActive ? "bg-[#EAF0ED]" : "bg-white"
                } w-full flex items-center justify-between px-4 py-3 text-left`}
              >
                <span>{it.name}</span>
                <span className="text-gray-500">({it.count})</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function ProductCard({ p }) {
  return (
    <div className="border border-[#EAF0ED] bg-white">
      <div className="relative">
        {p.tag ? (
          <span className="absolute left-3 top-3 bg-[#3F5D45] text-white text-xs px-2 py-1 rounded-sm">
            {p.tag}
          </span>
        ) : null}
        <img
          src={BASE_URL + p.image}
          alt={p.name}
          className="w-full h-[240px] object-cover"
        />
      </div>

      <div className="flex justify-between items-center px-4 py-3 border-t border-[#EAF0ED]">
        <div className="text-gray-700">{p.name}</div>
        <div className="text-gray-900">
          {p.currency} {p.price}
        </div>
      </div>

      <button className="w-full bg-[#EAF0ED] hover:bg-[#dbe4dd] text-[#3F5D45] py-3">
        {p.button}
      </button>
    </div>
  );
}

function Pagination({ current, total }) {
  const pages = useMemo(
    () => Array.from({ length: total }, (_, i) => i + 1),
    [total]
  );
  return (
    <nav
      className="flex items-center justify-center gap-2 mt-6"
      aria-label="Pagination"
    >
      <button
        className="px-3 py-2 border border-[#EAF0ED] disabled:opacity-50"
        disabled={current <= 1}
      >
        ‹
      </button>
      {pages.map((n) => (
        <button
          key={n}
          className={`px-3 py-2 border border-[#EAF0ED] ${
            n === current ? "bg-[#3F5D45] text-white" : "bg-white"
          }`}
        >
          {n}
        </button>
      ))}
      <button
        className="px-3 py-2 border border-[#EAF0ED] disabled:opacity-50"
        disabled={current >= total}
      >
        ›
      </button>
    </nav>
  );
}

export default function ProductPage() {
  const [activeFilter, setActiveFilter] = useState(
    PRODUCT_DATA.filters[0].name
  );

  // 目前為靜態資料，不過保留過濾邏輯以利後續擴充
  const filtered = PRODUCT_DATA.products;

  return (
    <section className="w-full max-w-[1024px] mx-auto px-4 md:px-6 py-6">
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
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <div>
          <div className="flex flex-wrap gap-[20px]">
            {filtered.map((p, idx) => (
              <div key={p.name + idx} className="basis-full md:max-w-[calc(50%-10px)]">
                <ProductCard p={p} />
              </div>
            ))}
          </div>

          <Pagination
            current={PRODUCT_DATA.pagination.current_page}
            total={PRODUCT_DATA.pagination.total_pages}
          />
        </div>
      </div>
    </section>
  );
}
