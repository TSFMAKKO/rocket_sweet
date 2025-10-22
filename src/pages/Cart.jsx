import { NavLink } from "react-router-dom";
import {
  CART_ITEMS,
  SHIPPING_FEE,
  computeSummary,
  getLineTotal,
  
  
} from "../data/cart";
console.log("CART_ITEMS:", CART_ITEMS);
console.log("SHIPPING_FEE:", SHIPPING_FEE);

export default function Cart() {
  //計算金額摘要（小計、運費、總計）
  const summary = computeSummary(CART_ITEMS, SHIPPING_FEE);
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

      <div className="flex relative flex-col lg:flex-row gap-x-[20px]">
        {/* 左側：彈性區塊，手機/平板會撐滿寬度，桌機維持約 620px */}
        <div className="flex-1 min-w-0 lg:w-[620px]">
          <div className="font-[600] text-[24px] flex justify-center items-center bg-[#EAF0ED] py-[16px] mb-[33px]">
            購物車
          </div>

          {/* 商品列表 CART_ITEMS */}
          {/* {
              id: "macaron-1",
              name: "焦糖馬卡龍",
              unitPrice: 450,
              currency: "NT$",
              qty: 2,
              image: BASE_URL + "photo-1514517220017-8ce97a34a7b6.avif",
            }, */}
          <div>
            {CART_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b border-gray-200"
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
                    {item?.currency} {item?.unitPrice.toLocaleString()}
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <span className="block p-[12px] border border-[#3F5D45]">{'<'}</span>
                  <span className="block p-[12px] border border-[#3F5D45]">{item.qty}</span>
                  <span className="block p-[12px] border border-[#3F5D45]">{'>'}</span>
                </div>

                <div className="flex flex-col justify-center">
                  {item?.currency} {getLineTotal(item).toLocaleString()}
                </div>

                <div className="flex flex-col justify-center">刪除</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右側：使用可重用的 OrderSummary 元件（props: summary） */}
        <OrderSummary summary={summary} />
      </div>
    </section>
  );
}

// 簡單的 OrderSummary 元件，放在同一檔案裡便於新手理解
function OrderSummary({ summary }) {
  return (
    <aside className="w-full lg:w-[300px] shrink-0 bg-[#3F5D45] text-[#EAF0ED] p-4">
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
