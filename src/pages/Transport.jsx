import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import {
  CART_ITEMS,
  SHIPPING_FEE,
  computeSummary,
  getLineTotal,
} from "../data/cart";

export default function Transport() {
  // 在元件內計算訂單摘要（此頁不變更商品內容，故直接以 CART_ITEMS 計算）
  const summary = useMemo(() => computeSummary(CART_ITEMS, SHIPPING_FEE), []);
  return (
    <section className="w-full">
      <NavLink
        to="/checkout/payment"
        className="block text-center bg-[#FFE180] text-[#3F5D45] py-2 font-medium"
      >
        下一步
      </NavLink>
      {/* <h1 className="text-2xl font-semibold">運送</h1> */}
      {/* <p>這裡是運送 /checkout/transport 頁面。</p> */}
      {/* <NavLink
        to="/checkout/payment"
        className={({ isActive }) =>
          `${
            isActive
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
          } py-[20px]`
        }
      >
        付款
      </NavLink> */}
      <div className="w-[780px] mx-auto flex flex-col lg:flex-row gap-x-[20px] gap-y-[16px]">
        {/* 左側：商品清單（唯讀顯示） */}
        <div className="flex-1 min-w-0 lg:w-[460px]"></div>
        {/* 右側：訂單摘要 */}
        <div className="lg:w-[300px] w-full">
          <OrderSummary summary={summary} />

          <div className="font-[600] text-[24px] flex justify-center items-center bg-[#EAF0ED] py-[16px] mb-[10px]">
            購物車
          </div>
          <div>
            {CART_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex gap-x-[20px] py-2 border-b border-gray-200"
              >
                <div>
                  <img
                    className="object-cover w-[110px] h-[110px]"
                    src={item?.image}
                    alt={item?.name}
                  />
                </div>
                <div className="flex flex-col gap-y-[2px] justify-center items-center">
                  <p className="w-full">
                    {item.name} ({item.qty})
                  </p>
                  <p className="w-full">
                    {item?.currency} {getLineTotal(item).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 簡單的 OrderSummary 元件，放在同一檔案裡便於新手理解
function OrderSummary({ summary }) {
  return (
    // { summary.subtotal.toLocaleString() && <p>123<p/>}
    <aside className="w-full lg:w-[300px] shrink-0 bg-[#EAF0ED] text-[#8DA291] p-4 mb-[20px]">
      {/* 標題 */}
      <h3 className="text-[24px] font-[600] text-center py-[16px] border-b border-[#EAF0ED]">
        訂單摘要
      </h3>

      {/* 金額明細 */}

      <div className="text-sm flex flex-col gap-y-[8px] py-[16px] font-[300] text-[16px] text-[#EAF0ED]">
        <div className="flex justify-between text-[#8DA291]">
          <span>小計</span>
          <span>
            {summary.currency} {summary.subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-[#8DA291]">
          <span>運費</span>
          <span>
            {summary.currency} {summary.shipping.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between font-semibold pt-2 text-[#8DA291]">
          <span>總計</span>
          <span>
            {summary.currency} {summary.total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 結帳按鈕（用 NavLink 前往下一步） */}
      <div className="mt-4 relative max-sm:bottom-[-16px] max-sm:left-[-16px] max-sm:w-[calc(100%+32px)] font-[600] text-[24px]"></div>
    </aside>
  );
}
