import { NavLink } from "react-router-dom";
import { Form } from "react-router-dom";
const BASE_URL = import.meta.env.BASE_URL || "/";

export default function IndexPage() {
  return (
    //  max-sm:px-[20px]
    <section className="">
      {/* <h1 className="text-3xl font-bold tracking-tight">這是首頁</h1> */}
      <div>
        <img
          src={BASE_URL + "首頁1.avif"}
          alt="甜點圖片"
          className="w-full h-auto"
        />
      </div>

        {/* <!-- 本日精選 --> */}
      <div class="flex max-w-[780px] w-full mt-[-89px] max-sm:mt-0 mx-auto gap-x-[0.66px] h-64 text-center text-[24px] font-[300] relative overflow-hidden">
        <div class="flex-1 flex justify-center items-center relative">
          <img
            src={`${BASE_URL}p-1.png`}
            class="w-[260px] h-[256px] absolute inset-0 object-cover blur-[5px] opacity-80"
          />
          <div class="absolute inset-0 bg-[#FFE180]/80"></div>
          <span class="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-block leading-[34px] font-[600] text-green-800">
            本日精選
          </span>
        </div>

        {/* <!-- 人氣推薦 --> */}
        <div class="flex-1 flex justify-center items-center relative">
          <img
            src={`${BASE_URL}p-3.png`}
            class="w-[260px] h-[256px] absolute inset-0 object-cover blur-[5px] opacity-80"
          />
          <div class="absolute inset-0 bg-[#3F5D45]/80"></div>
          <span class="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-block leading-[34px] text-white">
            人氣推薦
          </span>
        </div>

        {/* <!-- 新品上市 --> */}
        <div class="flex-1 flex justify-center items-center relative">
          <img
            src={`${BASE_URL}p-3.png`}
            class="w-[260px] h-[256px] absolute inset-0 object-cover blur-[5px] opacity-80"
          />
          <div class="absolute inset-0 bg-[#3F5D45]/70"></div>
          <span class="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-block leading-[34px] text-white">
            新品上市
          </span>
        </div>
      </div>
    </section>
  );
}
