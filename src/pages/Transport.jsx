import { NavLink } from "react-router-dom";

export default function Transport() {
  return (
    <section className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">運送</h1>
      <p>這裡是運送 /checkout/transport 頁面。</p>
      <NavLink
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
      </NavLink>
    </section>
  );
}
