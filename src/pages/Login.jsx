export default function LoginPage() {
  return (
<div class="flex flex-col md:flex-row w-full max-w-4xl mx-auto rounded overflow-hidden shadow-lg">
  {/* <!-- 左側登入 --> */}
  <div class="bg-[#3F5D45] text-[#EAF0ED] md:w-1/2 flex flex-col p-8">
    <h2 class="text-2xl font-bold text-center mb-6">會員登入</h2>

    {/* <!-- 手機版社群登入 --> */}
    <div class="flex md:hidden justify-around mb-6 bg-green-50 p-3 rounded">
      <button class="text-gray-700 font-semibold">facebook</button>
      <button class="text-gray-700 font-semibold">Google</button>
      <button class="text-gray-700 font-semibold">YAHOO!</button>
    </div>

    <div class="space-y-4">
      <div class="flex items-center bg-green-100 text-gray-700 px-3 py-2 rounded">
        <span class="material-icons mr-2">person</span>
        <input type="text" placeholder="電子信箱/手機號碼" class="bg-transparent flex-1 outline-none" />
      </div>
      <div class="flex items-center bg-green-100 text-gray-700 px-3 py-2 rounded">
        <span class="material-icons mr-2">vpn_key</span>
        <input type="password" placeholder="請輸入使用者密碼" class="bg-transparent flex-1 outline-none" />
      </div>
    </div>

    <div class="flex items-center mt-4">
      <input type="checkbox" id="remember" class="mr-2" />
      <label for="remember">記住我</label>
    </div>

    <button class="bg-yellow-300 text-green-800 font-bold py-3 mt-6 rounded">
      登入帳號
    </button>
  </div>

  {/* <!-- 右側社群登入 --> */}
  <div class="hidden md:flex flex-col justify-center bg-green-50 md:w-1/2 text-center text-green-800">
    <p class="text-lg mb-4">── 連結社群帳號 ──</p>
    <div class="flex flex-col gap-4 mx-auto w-2/3">
      <button class="bg-white py-2 rounded font-semibold">facebook</button>
      <button class="bg-white py-2 rounded font-semibold">Google</button>
      <button class="bg-white py-2 rounded font-semibold">YAHOO!</button>
    </div>
  </div>
</div>

  )
}
