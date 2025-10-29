import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CART_ITEMS,
  SHIPPING_FEE,
  computeSummary,
  getLineTotal,
} from "../data/cart";

export default function Cart() {
  // 使用 state 管理購物車項目，這樣刪除或改數量才能更新畫面
  const [items, setItems] = useState(CART_ITEMS);

  // 計算摘要（依 items 更新）
  const summary = useMemo(() => computeSummary(items, SHIPPING_FEE), [items]);

  // 改變數量（若要禁止小於 1，可用 Math.max）
  function changeQty(id, diff) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, (it.qty || 1) + diff) } : it
      )
    );
  }

  // 刪除項目（更新 state）
  function delHandler(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }
  return (
    <section className="mx-auto w-full max-w-[920px] px-[42px]">
      {/* <h1 className="text-2xl font-semibold">購物車</h1> */}
      {/* <NavLink
        to="/checkout/transport"
        className={({ isActive }) =>
          `${
            isActive
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
          } py-[20px]`
        }
      >
        運送
      </NavLink> */}

      {/* 右側金額摘要 */}
      {/* <div className="text-sm text-gray-700 space-y-1">
        <div>小計：{summary.currency} {summary.subtotal.toLocaleString()}</div>
        <div>運費：{summary.currency} {summary.shipping.toLocaleString()}</div>
        <div className="font-semibold">總計：{summary.currency} {summary.total.toLocaleString()}</div>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-x-[20px]">
        {/* 左側：彈性區塊，手機/平板會撐滿寬度，桌機維持約 620px */}
        <div className="flex-1 min-w-0 lg:w-[620px]">
          <div className="max-sm:-ml-[42px] max-sm:w-[calc(100%+84px)] font-[600] text-[24px] flex justify-center items-center bg-[#EAF0ED] py-[16px] mb-[33px]">
            您的購物車
          </div>

          {/* 商品列表 CART_ITEMS */}
          {/* {
              id: "macaron-1",
              name: "焦糖馬卡龍",
              price: 450,
              currency: "NT$",
              qty: 2,
              image: BASE_URL + "photo-1514517220017-8ce97a34a7b6.avif",
            }, */}
          {/* 桌機 */}
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="max-sm:hidden flex justify-between py-[8px] 
                max-sm:flex-col
                border-b border-gray-200"
              >
                <div className="">
                  <img
                    className="object-cover w-[110px] h-[110px]"
                    src={item?.image}
                    alt={item?.name}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p>{item.name}</p>
                  <p>
                    {item?.currency} {item?.price.toLocaleString()}
                  </p>
                </div>

                  {/* 加/減：置於左下角（貼齊圖片底部），造型與桌機一致 */}
                  <div className="flex justify-start font-[300] items-center gap-x-[0px]">
                    <button
                      className="w-[48px] h-[48px] flex items-center justify-center border border-[#EAF0ED] font-[300] text-[#3F5D45] text-[26px] leading-none"
                      onClick={() => changeQty(item.id, -1)}
                      aria-label={`減少 ${item.name}`}
                    >
                      −
                    </button>
                    <div className="w-[48px] h-[48px] flex justify-center items-center text-[18px] border-[#EAF0ED] font-[300] text-[#3F5D45] border-t border-b">{item.qty}</div>
                    <button
                      className="w-[48px] h-[48px] flex items-center justify-center border border-[#EAF0ED] text-[#3F5D45] font-[300] text-[26px] leading-none"
                      onClick={() => changeQty(item.id, 1)}
                      aria-label={`增加 ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                <div className="flex flex-col justify-center text-[#3F5D45] font-[600] text-[24px]">
                  {item?.currency} {getLineTotal(item).toLocaleString()}
                </div>

                <div
                  className="max-sm:hidden flex flex-col justify-center"
                  onClick={() => delHandler(item.id)}
                >
                  刪除
                </div>
              </div>
            ))}
          </div>

          {/* 手機 */}
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="sm:hidden flex relative mb-[60px] justify-between py-2 border-b border-gray-200"
              >
                <div className="flex-1">
                  <img
                    className="object-cover w-full h-[110px]"
                    src={item?.image}
                    alt={item?.name}
                  />
                </div>

                {/* 右側資訊：固定與圖片同高，內部上下分佈（上：名稱/單價，下：加減） */}
                <div className="flex-1 pl-[16px] max-sm:h-[110px] max-sm:flex max-sm:flex-col max-sm:justify-between">
                  {/* 名稱與單價 */}
                  <div className="flex flex-col">
                    <p>{item.name}</p>
                    <p>
                      {item?.currency} {item?.price.toLocaleString()}
                    </p>
                  </div>
                  {/* 加/減：置於左下角（貼齊圖片底部），造型與桌機一致 */}
                  <div className="flex justify-start font-[300] items-center gap-x-[0px]">
                    <button
                      className="w-[48px] h-[48px] flex items-center justify-center border border-[#EAF0ED] font-[300] text-[#3F5D45] text-[26px] leading-none"
                      onClick={() => changeQty(item.id, -1)}
                      aria-label={`減少 ${item.name}`}
                    >
                      −
                    </button>
                    <div className="w-[48px] h-[48px] flex justify-center items-center text-[18px] border-[#EAF0ED] font-[300] text-[#3F5D45] border-t border-b">{item.qty}</div>
                    <button
                      className="w-[48px] h-[48px] flex items-center justify-center border border-[#EAF0ED] text-[#3F5D45] font-[300] text-[26px] leading-none"
                      onClick={() => changeQty(item.id, 1)}
                      aria-label={`增加 ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 價格 */}
                <div className="absolute top-[100%]  border-b border-[#EAF0ED] text-[20px] flex justify-end font-[600] w-full ">
                  <div className="flex justify-end items-center h-[60px]">
                    {item?.currency} {getLineTotal(item).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右側：使用可重用的 OrderSummary 元件（props: summary） */}
        <OrderSummary summary={summary} />
        <OrderSummaryMobile summary={summary} />
      </div>
    </section>
  );
}

// 簡單的 OrderSummary 元件，放在同一檔案裡便於新手理解
function OrderSummary({ summary }) {
  return (
    // { summary.subtotal.toLocaleString() && <p>123<p/>}
    <aside className="max-sm:hidden w-full h-[300px] max-sm:h-auto lg:w-[300px] shrink-0 bg-[#3F5D45] text-[#EAF0ED] p-4">
      {/* 標題 */}
      <h3 className="text-[24px] font-[600] text-center py-[16px] border-b border-[#EAF0ED]">
        訂單摘要
      </h3>

      {/* 金額明細 */}

      <div className="text-sm flex flex-col gap-y-[8px] py-[16px] font-[300] text-[16px] text-[#EAF0ED]">
        <div className="flex justify-between">
          <span>小計</span>
          <span>
            {summary.currency} {summary.subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span>運費</span>
          <span>
            {summary.currency} {summary.shipping.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between font-semibold pt-2">
          <span>總計</span>
          <span>
            {summary.currency} {summary.total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 結帳按鈕（用 NavLink 前往下一步） */}
      <div className="mt-4 relative max-sm:bottom-[-16px] max-sm:left-[-16px] max-sm:w-[calc(100%+32px)] font-[600] text-[24px]">
        <NavLink
          to="/checkout/transport"
          className="block text-center bg-[#FFE180] text-[#3F5D45] py-2 font-medium"
        >
          結帳
        </NavLink>
      </div>
    </aside>

    
  );
}

function OrderSummaryMobile({ summary }) {
  return (
    // { summary.subtotal.toLocaleString() && <p>123<p/>}
    <aside className="sm:hidden w-full h-[300px] max-sm:h-auto lg:w-[300px] shrink-0 text-[#3F5D45] p-[16px]">
      {/* 標題 */}
      <h3 className="text-[24px] font-[600] text-center py-[16px] border-b bg-[#EAF0ED] text-[#3F5D45] border-[#EAF0ED] ml-[-16px] w-[calc(100%+32px)] mt-[-16px]">
        訂單摘要
      </h3>

      {/* 金額明細 */}

      <div className="text-sm flex flex-col gap-y-[8px] py-[16px] font-[300] text-[16px]">
        <div className="flex justify-between">
          <span>小計</span>
          <span>
            {summary.currency} {summary.subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span>運費</span>
          <span>
            {summary.currency} {summary.shipping.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between font-semibold pt-2">
          <span>總計</span>
          <span>
            {summary.currency} {summary.total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 結帳按鈕（用 NavLink 前往下一步） */}
      <div className=" font-[600] text-[24px] ml-[calc(-58px)] w-[calc(100%+116px)] mb-[-16px]">
        <NavLink
          to="/checkout/transport"
          className="block text-center bg-[#FFE180] py-[16px] text-[#3F5D45] font-medium"
        >
          結帳
        </NavLink>
      </div>
    </aside>

    
  );
}