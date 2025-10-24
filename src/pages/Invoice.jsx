import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import {
  CART_ITEMS,
  SHIPPING_FEE,
  computeSummary,
  getLineTotal,
} from "../data/cart";

export default function Invoice() {
  // 在元件內計算訂單摘要（此頁不變更商品內容，故直接以 CART_ITEMS 計算）
  const summary = useMemo(() => computeSummary(CART_ITEMS, SHIPPING_FEE), []);
  return (
    <section className="w-full">
      <div className="max-w-[780px] mx-auto flex flex-col lg:flex-row gap-x-[20px] gap-y-[16px]">
        {/* 左側：商品清單（唯讀顯示） */}
        <div className="flex-1 relative min-w-0 lg:w-[460px] py-[30px] px-[40px] pb-[90px] bg-[#3F5D45] text-[#EAF0ED]">
          <div className="flex justify-between mb-[24px]">
            <div className="font-[600] text-[36px]">發票</div>

            {/*  */}
            <div className="flex justify-center items-center h-[54px] mb-[32px]">
              {/* 打勾 */}
              <span className="w-[20px] h-[20px] border bg-[#3F5D45] rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#EAF0ED"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {/* 直線 */}
              <span className="w-[65px] border-b"></span>
              {/* 打勾 */}
              <span className="w-[20px] h-[20px] border bg-[#3F5D45] rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#EAF0ED"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>

              {/* 直線  */}
              <span className="w-[65px] border-b"></span>
              {/* 圓圈(進行中) */}
              <span className="w-[20px] h-[20px] border border-[#fff]  rounded-full flex justify-center items-center">
                <span className="w-[14px] h-[14px] bg-[#fff]  rounded-full"></span>
              </span>
            </div>
          </div>


          {/* 電子發票/郵寄發票 */}
          <div className="flex w-full justify-center items-center font-[600] text-[24px] h-[54px] mb-[32px]">
            <div className="flex-1 text-center py-[24px] border bg-[#EAF0ED] text-[#3F5D45]">電子發票</div>
            <div className="flex-1 text-center py-[24px] border">郵寄發票</div>
          </div>

          <div className="">
            {/* 表單 */}
            <form className="space-y-5">
              {/* email */}
              <div>
                <label className="block mb-2 text-[16px]" htmlFor="email">
                  電子郵件信箱
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                  autoComplete="email"
                />
              </div>

              {/* 統一編號(選填) */}
              <div>
                <label className="block mb-2 text-[16px]" htmlFor="taxId">
                  統一編號(選填)
                </label>
                <input
                  id="taxId"
                  name="taxId"
                  type="text"
                  placeholder="12345678"
                  className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <NavLink
            to="/checkout/complete"
            className="block absolute w-full left-[0px] bottom-0 text-center bg-[#FFE180] text-[#3F5D45] text-[24px] font-[600] py-2"
          >
            確認結帳
          </NavLink>
        </div>
        {/* 右側：訂單摘要 */}
        <div className="max-sm:hidden lg:w-[300px] w-full">
          <OrderSummary summary={summary} />

          <div className="font-[600] text-[24px] flex justify-center items-center bg-[#EAF0ED] text-[#3F5D45] py-[16px] mb-[10px]">
            購物清單
          </div>
          <div>
            {CART_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex gap-x-[20px] py-2 border-b border-gray-200"
              >
                <div>
                  <img
                    className="object-cover w-[120px] h-[80px]"
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
    <aside className="w-full lg:w-[300px] shrink-0 bg-[#EAF0ED] text-[#8DA291] mb-[20px]">
      {/* 標題 */}
      <h3 className="text-[24px] font-[600] text-center py-[16px] border-b border-[#EAF0ED]">
        訂單摘要
      </h3>

      {/* 金額明細 */}

      <div className="text-sm flex flex-col gap-y-[8px] py-[16px] font-[300] text-[16px] px-4 bg-[#fff] border border-[#EAF0ED]">
        <div className="flex justify-between text-[#8DA291] ">
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
    </aside>
  );
}
