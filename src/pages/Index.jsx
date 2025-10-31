import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BASE_URL = import.meta.env.BASE_URL || "/";
import { addCartItem } from "../data/cart";

export default function IndexPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "焦糖馬卡龍1",
      label: "本日精選",
      image: "photo-1.avif",
      price: 450,
      currency: "NT$",
      liked: false,
    },
    {
      id: "2",
      title: "焦糖馬卡龍2",
      label: "本日精選",
      image: "photo-2.avif",
      price: 450,
      currency: "NT$",
      liked: true,
    },
    {
      id: "3",
      title: "焦糖馬卡龍3",
      label: "本日精選",
      image: "photo-3.avif",
      price: 450,
      currency: "NT$",
      liked: false,
    },
  ]);

  // const [cart, setCart] = useState([]);

  // 收藏狀態：以商品 id 存在集合中代表已收藏
  // const [likedIds, setLikedIds] = useState(new Set());

  const toggleLike = (p) => {
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === p.id ? { ...prod, liked: !prod.liked } : prod
      )
    );
  };


  // function addToCart(product) {
  //   setCart((prev) => {
  //     console.log("prev:", prev);

  //     const found = prev.find((p) => p.id === product.id);
  //     if (found) {
  //       return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
  //     }
  //     return [...prev, { ...product, qty: 1 }];
  //   });
  // }

  // 加入購物車（同步至全域 cart 模組）
  function addToCart(p) {
    console.log("addToCart:", p);

    addCartItem({
      id: p.id,
      title: p.title,
      label: p.label,
      price: p.price,
      currency: p.currency,
      image: p.image,
    });
    // 導向購物車頁
    navigate("/cart");
  }



  return (
    //  max-sm:px-[20px]
    <section className="">
      {/* <h1 className="text-3xl font-bold tracking-tight">這是首頁</h1> */}
      <div>
        <img
          src={BASE_URL + "首頁1.avif"}
          alt="甜點圖片"
          className="w-full h-auto aspect-auto"
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
          <span className="relative [writing-mode:vertical-rl] [text-orientation:upright] inline-flex leading-[34px] justify-center items-center text-white w-full h-full cursor-pointer hover:text-green-800 hover:font-[600] hover:bg-[#FFE180]/80">
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
      <div className="max-sm:hidden max-w-[1024px] mb-[105px] h-[420px]  bg-[#EAF0ED] flex w-full  px-[42px]">
        {/*  */}
        <div className="flex max-sm:flex-col w-full mb-[80px] justify-between relative">
          {/* 文字 */}
          <div className="py-[70px] flex h-[280px] gap-x-[64px] font-[300] text-[16px]">
            {/* 右側縱書文案 */}
            <div className="h-full w-[56px] text-[#8DA291]">
              <p className=" h-[290px] [writing-mode:vertical-rl] [text-orientation:upright] leading-[36px] tracking-[0px] text-[16px]">
                是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
            {/* 左側縱書文案 */}
            <div className="h-full text-[#8DA291]">
              <p className=" h-[299px] [writing-mode:vertical-rl] [text-orientation:upright] leading-[36px] tracking-[0px] text-[16px]">
                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
          </div>
          {/* 右側圖片為什麼一定要吃甜點 */}
          <div className="mt-[-60px] w-[90px] flex justify-center">
            <img
              className="w-full h-full object-fit"
              srcSet={`${BASE_URL}lg-為什麼一定要吃甜點.svg`}
              alt="lg-為什麼一定要吃甜點.svg"
            />
          </div>

          {/* 柳丁 */}
          <div className="mt-[-20px] max-sm:mt-0 w-[460px] max-sm:order-[-1]">
            <img
              className="w-[460px] h-[460px] object-cover"
              srcSet={`${BASE_URL}photo-1501432781167-c0ccfd492297.avif`}
              alt="photo-1501432781167-c0ccfd492297.avif"
            />
          </div>
        </div>
      </div>

      {/* 為啥一定要做/要吃甜點2 */}
      <div className="max-sm:hidden max-w-[1024px] mb-[105px] h-[420px]  bg-[#EAF0ED] flex w-full  px-[42px]">
        {/*  */}
        <div className="flex w-full mb-[80px] justify-between relative">
          <div className="mt-[-20px] w-[460px]">
            <img
              className="w-[460px] h-[460px] object-cover"
              src={`${BASE_URL}photo-1519730722595-a5ff788dea4d.avif`}
              alt="photo-1519730722595-a5ff788dea4d.avif"
              srcSet=""
            />
          </div>

          <div className="py-[70px] flex h-[280px] gap-x-[64px] font-[300] text-[16px]">
            {/* 右側縱書文案 */}
            <div className="h-full w-[56px] text-[#8DA291]">
              <p className=" h-[290px] [writing-mode:vertical-rl] [text-orientation:upright] leading-[36px] tracking-[0px] text-[16px]">
                是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
            {/* 左側縱書文案 */}
            <div className="h-full text-[#8DA291]">
              <p className=" h-[299px] [writing-mode:vertical-rl] [text-orientation:upright] leading-[40px] tracking-[0px] text-[16px]">
                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
          </div>

          {/* 右側圖片 */}
          <div className="mt-[-60px] w-[90px] flex justify-center">
            <img
              className="w-full h-full object-fit"
              src={`${BASE_URL}lg-為什麼選擇了做甜點.svg`}
              alt="lg-為什麼選擇了做甜點.svg"
              srcSet=""
            />
          </div>
        </div>
      </div>

      {/* 為啥一定要做/要吃甜點 Mobile */}
      <div className="sm:hidden mb-[30px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col py-[30px] items-center justify-center">
            <img
              className="w-[200px] h-full object-cover"
              src={`${BASE_URL}sm-橫式-為什麼一定要吃甜點.svg`}
              alt="sm-橫式-為什麼一定要吃甜點.svg"
              srcSet=""
            />
          </div>
          <div className="flex w-full h-[250px] flex-col items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src={`${BASE_URL}photo-1519730722595-a5ff788dea4d.avif`}
              alt="photo-1519730722595-a5ff788dea4d.avif"
              srcSet=""
            />
          </div>
          <div className="py-[30px] px-[30px] gap-y-[60px] bg-[#EAF0ED] font-[300] w-full flex flex-col items-center justify-center ">
            <p className="leading-[40px]">
              青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
            <p className="leading-[40px]">
              是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
          </div>
        </div>
      </div>

      {/* 為啥一定要做/要吃甜點 Mobile2 */}
      <div className="sm:hidden mb-[30px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col py-[30px] items-center justify-center">
            <img
              className="w-[200px] h-full object-cover"
              src={`${BASE_URL}sm-橫式-為什麼選擇了做甜點.svg`}
              alt="sm-橫式-為什麼選擇了做甜點.svg"
              srcSet=""
            />
          </div>
          <div className="flex w-full h-[250px] flex-col items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src={`${BASE_URL}photo-1501432781167-c0ccfd492297.avif`}
              alt="photo-1501432781167-c0ccfd492297.avif"
              srcSet=""
            />
          </div>
          <div className="py-[30px] px-[30px] gap-y-[60px] bg-[#EAF0ED] font-[300] w-full flex flex-col items-center justify-center ">
            <p className="leading-[40px]">
              青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
            <p className="leading-[40px]">
              是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
          </div>
        </div>
      </div>

      {/* 想吃甜點是不需要理由的 */}
      {/* sm-橫式-想吃甜點是不需要理由的 */}
      <div className="max-sm:hidden mb-[80px] flex justify-center">
        <img
          className="w-[90px] h-full object-cover"
          src={`${BASE_URL}lg-想吃甜點是不需要理由的.svg`}
          alt="lg-想吃甜點是不需要理由的.svg"
          srcSet=""
        />
      </div>

      <div className="sm:hidden mb-[80px] flex justify-center">
        <img
          className="w-[226px] h-full object-cover"
          src={`${BASE_URL}sm-橫式-想吃甜點是不需要理由的.svg`}
          alt="sm-橫式-想吃甜點是不需要理由的.svg"
          srcSet=""
        />
      </div>

      {/* 三個商品 可以加入購物車 */}
      <div className="max-w-[1024px] mx-auto mb-[120px] px-[42px] max-sm:px-[30px]">
        <div className="flex flex-wrap justify-center gap-[20px]">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="relative overflow-hidden border border-[#EAF0ED] bg-white w-[calc(33%-16.6px)] max-sm:w-full flex flex-col"
            >

              {/* 本日精選 */}
              <span className="absolute [writing-mode:vertical-rl] flex tracking-[4px] leading-[36px] left-[20px] top-0 bg-[#3F5D45] text-white text-[16px] font-[600] px-[10px] pb-[20px] ">{p.label}</span>
              {/* 收藏按鈕（搭配 products 切換） */}
              <button
                type="button"
                onClick={() => toggleLike(p)}
                className={`absolute top-[10px] right-[20px] inline-flex  items-center justify-center transition-transform hover:scale-120  active:ring-[#3F5D45]/40  `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[24px] h-[24px]"
                  aria-hidden="true"
                >
                  <path
                    d="M21 8.25c0-2.485-2.098-4.5-4.688-4.5-1.828 0-3.416.99-4.312 2.454C11.104 4.74 9.516 3.75 7.688 3.75 5.098 3.75 3 5.765 3 8.25c0 7.22 9 11.25 9 11.25s9-4.03 9-11.25z"
                    fill={p.liked === true ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <div className="w-full h-full bg-gray-100">
                <img
                  src={BASE_URL + p.image}
                  alt={p.title}
                  className="object-cover aspect-[300/315]"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center h-[60px]">
                  <h3 className="text-[20px] font-[300] border border-[#EAF0ED] py-[14px] flex-5 text-center text-[#2f4f3d]">{p.title}</h3>
                  <div className="text-[20px] font-[600] border border-[#EAF0ED] py-[14px] flex-4 text-center">{p.currency}{p.price}</div>
                </div>
                {/* <p className="text-sm text-[#6B7C6F] mb-4">{p.description}</p> */}
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => addToCart(p)}
                  className="w-full bg-[#EAF0ED] text-[#3F5D45] text-[24px] font-[600] py-[16px] hover:opacity-90 hover:text-[#EAF0ED] hover:bg-[#3F5D45] cursor-pointer transition-colors"
                >
                  加入購物車
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* cart 調試輸出已移除 */}




    </section>
  );
}
