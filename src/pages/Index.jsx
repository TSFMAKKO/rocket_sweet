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
      <div className="mb-[80px] flex max-w-[780px] w-full mt-[-89px] max-sm:mt-0 mx-auto gap-x-[0.66px] h-64 text-center text-[24px] font-[300] relative overflow-hidden">
        <div className="flex-1 flex justify-center items-center relative">
          <img
            src={`${BASE_URL}p-1.png`}
            className="w-[260px] h-[256px] absolute inset-0 object-cover blur-[5px] opacity-80"
          />
          <div className="absolute inset-0 bg-[#FFE180]/80"></div>
          <span className="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-block leading-[34px] font-[600] text-green-800">
            本日精選
          </span>
        </div>

        {/* <!-- 人氣推薦 --> */}
        <div className="flex-1 flex justify-center items-center relative">
          <img
            src={`${BASE_URL}p-5.png`}
            className="w-[260px] h-[256px] absolute inset-0 object-cover blur-[5px] opacity-80"
          />
          <div className="absolute inset-0 bg-[#3F5D45]/80"></div>
          <span className="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-block leading-[34px] text-white">
            人氣推薦
          </span>
        </div>

        {/* <!-- 新品上市 --> */}
        <div className="flex-1 flex justify-center items-center relative">
          <img
            src={`${BASE_URL}p-3.png`}
            className="w-[260px] h-[256px] absolute inset-0 object-cover blur-[5px] opacity-80"
          />
          <div className="absolute inset-0 bg-[#3F5D45]/70"></div>
          <span className="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-block leading-[34px] text-white">
            新品上市
          </span>
        </div>
      </div>

      {/* 為啥一定要做/要吃甜點 */}
      <div className="max-w-[1024px] mb-[105px] h-[420px]  bg-[#EAF0ED] flex w-full  px-[42px]">
        {/*  */}
        <div className="flex w-full  justify-between gap-x-[80px] relative">
          <div className="relative top-[-20px]">
            <img
              className="w-[460px] h-[460px] object-cover"
              src={`${BASE_URL}photo-1519730722595-a5ff788dea4d.avif`}
              alt="photo-1519730722595-a5ff788dea4d.avif"
              srcset=""
            />
          </div>

          <div className=" py-[70px]">123</div>
          <div className="mb-[80px] w-[90px] flex justify-center">
            <img
              className="w-full h-full object-fit"
              src={`${BASE_URL}lg-為什麼選擇了做甜點.svg`}
              alt="lg-為什麼選擇了做甜點.svg"
              srcset=""
            />
          </div>
        </div>
      </div>

      {/* 想吃甜點是不需要理由的 */}
      <div className="mb-[80px] flex justify-center">
        <img
          className="w-[90px] h-full object-cover"
          src={`${BASE_URL}lg-想吃甜點是不需要理由的.svg`}
          alt="lg-想吃甜點是不需要理由的.svg"
          srcset=""
        />
      </div>

      {/* 三個商品 可以加入購物車 */}
    </section>
  );
}
