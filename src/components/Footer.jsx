import { Form } from "react-router-dom"
const BASE_URL = import.meta.env.BASE_URL || '/'
console.log("BASE_URL:", BASE_URL);

import LogoFromPublic from "./LogoFromPublic.jsx"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className=" w-full">
      {/* 綠底訂閱 */}
      {/* <div className="mx-auto max-w-[1024px] w-full px-[42px] bg-[#3F5D45] text-[#EAF0ED] flex justify-center max-sm:flex-col gap-x-[124px] max-sm:gap-y-[30px] py-[38px] max-sm:py-[30px]">
        <div className="flex w-full justify-center items-center gap-x-[20px]">
          <div aria-label="Rocket Sweet Logo" className="flex">
            <LogoFromPublic src="logo-light.svg" className={`h-[38px] w-[38px] text-[#EAF0ED]`} />
          </div>
          <div className="text-[24px] ">訂閱你我的甜蜜郵件</div>
        </div>

        <Form method="post" className=" bg-[#fff] flex items-center max-w-[380px] max-sm:mx-auto w-full">
          <div className="flex justify-center items-center py-[16px] ml-[20px]">
            <img src={`${BASE_URL}mail-24px.png`} alt="" srcset="" />
          </div>
          <input className="block w-full text-[20px] py-[13px] px-[12px] text-[#000] border-none  focus:outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="email" />
          <div className="flex justify-center items-center py-[20px] px-[24px] bg-[#FFE180]">
            <img src={`${BASE_URL}arrow_forward-24px.png`} alt="" srcset="" />
          </div>

        </Form>

      </div> */}

      {/* 綠底2 */}
      <div className="bg-[#3F5D45] text-[#EAF0ED] flex justify-between max-sm:flex-col max-sm:gap-y-[30px] py-[38px] max-sm:py-[30px]">
        <div className="max-w-[1024px] mx-auto flex max-sm:flex-col max-sm:gap-y-[30px]">
          <div className="flex w-full justify-center items-center gap-x-[20px]">
            <div aria-label="Rocket Sweet Logo" className="flex">
              <LogoFromPublic src="logo-light.svg" className={`h-[38px] w-[38px] text-[#EAF0ED]`} />
            </div>
            <div className="text-[24px] ">訂閱你我的甜蜜郵件</div>
          </div>

          <Form method="post" className=" bg-[#fff] flex items-center max-w-[380px] max-sm:mx-auto w-full">
            <div className="flex justify-center items-center py-[16px] ml-[20px]">
              <img src={`${BASE_URL}mail-24px.png`} alt="" srcset="" />
            </div>
            <input className="block w-full text-[20px] py-[13px] px-[12px] text-[#000] border-none  focus:outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="email" />
            <div className="flex justify-center items-center py-[20px] px-[24px] bg-[#FFE180]">
              <img src={`${BASE_URL}arrow_forward-24px.png`} alt="" srcset="" />
            </div>

          </Form>
        </div>

      </div>

      {/* 灰底 */}
      <div className="bg-[#EAF0ED] flex justify-between max-sm:flex-col max-sm:gap-y-[30px] py-[38px] max-sm:py-[30px]">
        <div className="max-w-[784px] mx-auto flex justify-between">
          <div>
            <div>上</div>
            <div>下</div>
          </div>
          <div className="flex">
            <div>圖右</div>
            <div>圖左</div>
          </div>

        </div>

      </div>


    </footer>
  )
}
