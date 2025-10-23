import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import {
  CART_ITEMS,
  SHIPPING_FEE,
  computeSummary,
  getLineTotal,
} from "../data/cart";

export default function Payment() {
  // 在元件內計算訂單摘要（此頁不變更商品內容，故直接以 CART_ITEMS 計算）
  const summary = useMemo(() => computeSummary(CART_ITEMS, SHIPPING_FEE), []);
  return (
    <section className="w-full">
      <div className="max-w-[780px] mx-auto flex flex-col lg:flex-row gap-x-[20px] gap-y-[16px]">
        {/* 左側：商品清單（唯讀顯示） */}
        <div className="flex-1 relative min-w-0 lg:w-[460px] py-[30px] px-[40px] pb-[90px] bg-[#3F5D45] text-[#EAF0ED]">
          <div className="flex justify-between mb-[24px]">
            <div className="font-[600] text-[36px]">付款</div>
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
              {/* 圓圈(進行中) */}
              <span className="w-[20px] h-[20px] border border-[#fff]  rounded-full flex justify-center items-center">
                <span className="w-[14px] h-[14px] bg-[#fff]  rounded-full"></span>
              </span>

              {/* 直線  */}
              <span className="w-[65px] border-b"></span>
              {/* 圓圈(未進行) */}
              <span className="w-[20px] h-[20px] border border-[#fff]  rounded-full flex justify-center items-center">
                {/* <span className="w-[14px] h-[14px] bg-[#fff]  rounded-full"></span> */}
              </span>
            </div>
          </div>

          <div className="">
            {/* 表單 */}
            <form className="space-y-5">
              {/* 信用卡 */}
              <div>
                <label className="block mb-2 text-[16px]" htmlFor="cardNumber">
                  信用卡卡號
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="number"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                  autoComplete="tel"
                />
              </div>

              {/* 持卡人姓名 */}
              <div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <label className="text-[16px]" htmlFor="lastName">
                    持卡人姓名
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="王"
                    className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                    autoComplete="family-name"
                  />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="小明"
                    className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                    autoComplete="given-name"
                  />
                </div>
              </div>

              {/* 有效日期 */}
              <div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <label className="text-[16px]" htmlFor="expirationDate">
                    有效日期
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    id="month"
                    name="month"
                    type="text"
                    placeholder="月"
                    className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                    autoComplete="month"
                  />
                  <input
                    id="year"
                    name="year"
                    type="text"
                    placeholder="年"
                    className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                    autoComplete="year"
                  />
                </div>
              </div>

              {/* CVC */}
              <div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <label className="text-[16px]" htmlFor="cvc">
                    CVC
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    id="CVC"
                    name="cvc"
                    type="number"
                    placeholder="CVC"
                    className="w-full bg-[#EAF0ED] text-[#3F5D45] placeholder-[#8DA291] px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFE180]"
                    autoComplete="month"
                  />
                </div>
              </div>
            </form>
          </div>
          <NavLink
            to="/checkout/payment"
            className="block absolute w-full left-[0px] bottom-0 text-center bg-[#FFE180] text-[#3F5D45] text-[24px] font-[600] py-2"
          >
            下一步
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

      {/* 結帳按鈕（用 NavLink 前往下一步） */}
      <div className="mt-4 relative max-sm:bottom-[-16px] max-sm:left-[-16px] max-sm:w-[calc(100%+32px)] font-[600] text-[24px]">
        {/* 用navlink 導航到invoice */}
        <NavLink
          to="/checkout/invoice"
          className="block absolute w-full left-[0px] bottom-0 text-center bg-[#FFE180] text-[#3F5D45] text-[24px] font-[600] py-2"
        >
          下一步
        </NavLink>
      </div>
    </aside>
  );
}
