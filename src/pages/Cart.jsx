import { NavLink } from "react-router-dom";
import { CART_ITEMS, SHIPPING_FEE, computeSummary } from "../data/cart";
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

      <div className="flex flex-col lg:flex-row gap-x-[20px]">
        {/* 左側：彈性區塊，手機/平板會撐滿寬度，桌機維持約 620px */}
        <div className="flex-1 min-w-0 lg:w-[620px]">
          <div className="font-[600] text-[24px] flex justify-center items-center bg-[#EAF0ED] py-[16px]">
            購物車
          </div>
          <div>商品列表</div>
        </div>
        {/* 右側：shrink-0固定寬度，不會被壓扁 */}
        <div className="w-full lg:w-[300px] shrink-0 bg-[#3F5D45] text-[#EAF0ED] ">
          <div>
            小計：{summary.currency} {summary.subtotal.toLocaleString()}
          </div>
          <div>
            運費：{summary.currency} {summary.shipping.toLocaleString()}
          </div>
          <div className="font-semibold">
            總計：{summary.currency} {summary.total.toLocaleString()}
          </div>
          <div>
            <NavLink
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
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
