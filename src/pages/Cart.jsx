import { NavLink } from "react-router-dom";
import { CART_ITEMS,SHIPPING_FEE } from "../data/cart";
console.log("CART_ITEMS:", CART_ITEMS);
console.log("SHIPPING_FEE:", SHIPPING_FEE);


export default function Cart() {
  return (
    <section className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">購物車</h1>
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
    </section>
  );
}
