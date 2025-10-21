import { NavLink } from "react-router-dom";
export default function Payment() {
  return (
    <section className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">付款</h1>
      <p>這裡是付款 /checkout/payment 頁面。</p>
      <NavLink
        to="/checkout/invoice"
        className={({ isActive }) =>
          `${
            isActive
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
          } py-[20px]`
        }
      >
        電子發票
      </NavLink>
    </section>
  );
}
