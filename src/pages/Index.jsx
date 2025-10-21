import { NavLink } from "react-router-dom";
import { Form } from "react-router-dom";
const BASE_URL = import.meta.env.BASE_URL || "/";

export default function IndexPage() {
  return (
    //  max-sm:px-[20px]
    <section className="">
      <h1 className="text-3xl font-bold tracking-tight">Index</h1>
      <p className="text-slate-600">這是首頁</p>
      <img
        src={BASE_URL + "首頁1.avif"}
        alt="甜點圖片"
        className="w-full h-auto mb-[60px]"
      />
    </section>
  );
}
