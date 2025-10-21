import { Form } from "react-router-dom";
const BASE_URL = import.meta.env.BASE_URL || "/";
// console.log("BASE_URL:", BASE_URL);

import LogoFromPublic from "./LogoFromPublic.jsx";

export default function Footer() {
  // const year = new Date().getFullYear()
  return (
    <footer className="w-full pt-[24px]">
      {/* 綠底 */}
      <div className="bg-[#3F5D45] text-[#EAF0ED] flex justify-between max-sm:flex-col max-sm:gap-y-[30px] py-[38px] max-sm:py-[30px]">
        <div className="max-w-[784px] w-full mx-auto flex max-sm:flex-col max-sm:gap-y-[30px]">
          <div className="flex w-full items-center max-sm:justify-center gap-x-[20px]">
            <div aria-label="Rocket Sweet Logo" className="flex">
              <LogoFromPublic
                src="logo-light.svg"
                className={`h-[38px] w-[38px] text-[#EAF0ED]`}
              />
            </div>
            <div className="text-[24px]">訂閱你我的甜蜜郵件</div>
          </div>

          <Form
            method="post"
            className="bg-[#fff] flex items-center max-w-[380px] max-sm:mx-auto w-full"
          >
            <div className="flex justify-center items-center py-[16px] ml-[20px]">
              <img src={`${BASE_URL}mail-24px.png`} alt="mail" />
            </div>
            <input
              className="block w-full text-[20px] py-[13px] px-[12px] text-[#000] border-none focus:outline-none focus:ring-0 focus:border-transparent"
              type="text"
              placeholder="email"
            />
            <div className="flex justify-center items-center py-[20px] px-[24px] bg-[#FFE180]">
              <img
                src={`${BASE_URL}arrow_forward-24px.png`}
                alt="arrow forward"
              />
            </div>
          </Form>
        </div>
      </div>

      {/* 灰底 */}
      <div className="bg-[#EAF0ED] flex justify-between max-sm:flex-col max-sm:gap-y-[30px] py-[38px] max-sm:py-[30px] max-sm:px-[20px]">
        <div className="max-w-[784px] w-full mx-auto flex justify-between">
          <div>
            <div>
              <img src={`${BASE_URL}logotype-sm-dark.svg`} alt="" />
            </div>
            <div>
              <p>07-1234-5678 </p>
              <p>sweetaste@email.com</p>
              <p>800 高雄市新興區幸福路 520 號</p>
            </div>
          </div>
          <div className="flex">
            <div><img src={`${BASE_URL}logotype-sm-dark.svg`} alt="" /></div>
            <div><img src={`${BASE_URL}logotype-sm-dark.svg`} alt="" /></div>
          </div>
        </div>
      </div>

      {/* ig fb */}
      <div className="bg-[#EAF0ED] w-full max-sm:px-[20px]">
        <div className=" max-w-[784px] mx-auto flex justify-between items-end pb-[30px]">
          <div className="flex gap-x-[8px]">
            <div className=""><img className="w-[32px]" src={`${BASE_URL}ic-line@.svg`} alt="line" /></div>
            <div className=""><img className="w-[32px]" src={`${BASE_URL}ic-facebook.svg`} alt="fb" /></div>
          </div>

          <div>© 2018 Sweetaste* All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
