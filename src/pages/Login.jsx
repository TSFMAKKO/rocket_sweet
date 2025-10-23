const BASE_URL = import.meta.env.BASE_URL || "/";
export default function LoginPage() {
  return (
<div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto rounded overflow-hidden shadow-lg">
  {/* <!-- 左側登入 --> */}
  <div className="bg-[#3F5D45] relative overflow-visible text-[#EAF0ED] md:w-1/2 flex flex-col p-8">
    <h2 className="text-2xl font-[600] text-[#EAF0ED] text-[36px] text-center mb-[40px] max-sm:mb-[10px] ">會員登入</h2>

    {/* <!-- 手機版社群登入 --> */}
    <div className="bg-[#EAF0ED] flex md:hidden justify-around mb-6 p-3 rounded gap-x-[2px] ">
      <button className="text-gray-700 bg-white font-[600] py-[10px] block max-w-full w-full">
        <img src={`${BASE_URL}ic-facebook-logotype.svg`} alt="facebook" />
      </button>
      <button className="text-gray-700 bg-white font-[600] py-[10px] block max-w-full w-full">
        <img src={`${BASE_URL}ic-google.svg`} alt="Google" />
      </button>
      <button className="text-gray-700 bg-white font-[600] py-[10px] block max-w-full w-full">
        <img src={`${BASE_URL}ic-yahoo.svg`} alt="YAHOO!" />
      </button>
    </div>

    <div className="flex flex-col gap-y-[16px] mb-[13px]">
      <div className="flex items-center bg-[#EAF0ED] text-gray-700 px-3 py-[16px] rounded">
        {/* <span className="material-icons mr-2">person</span> */}
        <input type="text" placeholder="電子信箱/手機號碼" className="bg-transparent flex-1 outline-none" />
      </div>
      <div className="flex items-center bg-[#EAF0ED] text-gray-700 px-3 py-[16px] rounded">
        {/* <span className="material-icons mr-2">vpn_key</span> */}
        <input type="password" placeholder="請輸入使用者密碼" className="bg-transparent flex-1 outline-none" />
      </div>
    </div>

    <div className="flex items-center mb-[9px]">
      <input type="checkbox" id="remember" className="mr-2" />
      <label htmlFor="remember">記住我</label>
    </div>

    <button className="bg-[#FFE180] absolute bottom-0 max-sm:hidden left-0 text-[#3F5D45] font-bold py-[20px] w-[100%]">
      登入帳號
    </button>

    <button className="bg-[#FFE180] -mb-[32px] z-10 sm:hidden left-0 text-[#3F5D45] font-bold py-[20px] w-[calc(100%+64px)] -ml-[32px]">
      登入帳號
    </button>
  </div>

  {/* <!-- 右側社群登入 --> */}
  <div className="hidden h-[380px] md:flex flex-col justify-center md:w-1/2 text-center text-green-800">
    <div className="bg-[#EAF0ED] h-[350px] my-auto flex flex-col justify-center gap-y-[36px]">
      <p className="">── 連結社群帳號 ──</p>
      <div className=" flex flex-col gap-y-[16px] mx-auto w-[85%] text-[24px]">
        <button className="bg-white py-2 rounded font-semibold">facebook</button>
        <button className="bg-white py-2 rounded font-semibold">Google</button>
        <button className="bg-white py-2 rounded font-semibold">YAHOO!</button>
      </div>
    </div>
  </div>
</div>

  )
}
