import { NavLink } from 'react-router-dom'

export default function Complete() {
  return (
    <section className="w-full h-[460px] bg-[url('/photo-1505935428862-770b6f24f629.avif')] bg-no-repeat bg-cover bg-center flex items-center">
      <div className="max-w-lg mx-auto flex flex-col items-center text-[#3F5D45]">
        <div className="flex justify-center items-center mb-[32px]">
          <span className="w-[20px] h-[20px] bg-[#3F5D45] rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#EAF0ED" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className='w-[65px] border-b'></span>
          <span className="w-[20px] h-[20px] bg-[#3F5D45] rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#EAF0ED" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className='w-[65px] border-b'></span>
          <span className="w-[20px] h-[20px] bg-[#3F5D45] rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#EAF0ED" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <h1 className="text-[44px] tracking-[4px] font-[600] mb-[50px]">付款成功</h1>
        <NavLink
          to="/product"
          className="inline-block text-[24px] py-[16px] px-[100px] text-center bg-[#FFE180] text-[#3F5D45] font-medium"
        >
          繼續逛逛
        </NavLink>
      </div>
    </section>
  )
}
