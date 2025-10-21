import { NavLink } from 'react-router-dom'
import { React, useState } from 'react'

const BASE_URL = import.meta.env.BASE_URL || '/'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="mx-auto max-w-[1024px] w-full px-[12px] py-3">
            <div className=" flex items-center justify-between max-sm:hidden">
                <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight py-[20px] ">
                    <img src={BASE_URL + 'logo-all-dark.svg'} alt="Rocket Sweet" className="h-[38px] w-auto" />
                </NavLink>
                <nav className="flex gap-x-[80px] text-sm items-center text-[20px] leading-[1.5">
                    <div className='flex gap-x-[60px]'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600') + ' py-[20px]'}>
                            首頁
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => (isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600') + ' py-[20px]'}>
                            甜點
                        </NavLink>
                        <NavLink to="/signup" className={({ isActive }) => `${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-[20px]`}>
                            登入
                        </NavLink>
                    </div>
                    <NavLink to="/cart" className={({ isActive }) => (isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600') + ' py-[20px]'}>
                        <img src={BASE_URL + 'shopping_cart.png'} alt="購物車" className="h-[38px] w-auto" />
                    </NavLink>
                </nav>
            </div>

            {/* 手機版  */}
            {/* <div className={`${isOpen ? "block" : "hidden"} mt-2`}  */}
            <div className={`flex items-center justify-between sm:hidden`}>
                <nav className="flex w-full justify-between text-sm relative">
                    <div onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[red]">
                        <img src={BASE_URL + 'dehaze-24px.png'} alt="hamburger_menu" className="h-[38px] w-auto" />
                    </div>

                    <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[red]">
                        <img src={BASE_URL + 'logo-all-dark.svg'} alt="Rocket Sweet" className="h-[38px] w-auto" />
                    </NavLink>
                    <NavLink to="/cart" className={
                        ({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                    }>
                        <img src={BASE_URL + 'shopping_cart.png'} alt="購物車" className="h-[38px] w-auto" />
                    </NavLink>
                    {/* 手機版選單 */}
                    <div className={`${isOpen ? "flex" : "hidden"} flex max-sm:flex-col w-full justify-center gap-y-[0px] absolute top-[100%] text-[20px] tracking-[150%] font-medium text-gray-700`}>
                        <NavLink
                            to="/"
                            className="py-[20px] hover:text-blue-600 block w-full text-center"
                        >
                            首頁
                        </NavLink>

                        <NavLink to="/" className="py-[20px] hover:text-blue-600 block w-full text-center">
                            甜點
                        </NavLink>
                        <NavLink to="/" className="py-[20px] hover:text-blue-600 block w-full text-center">
                            登入
                        </NavLink>
                    </div>
                </nav>
            </div>


            {/* 
            <div className='hidden max-sm:block'>
                 <img src={BASE_URL + 'hamburger_menu.png'} alt="漢堡選單" className="" />
            </div> */}
        </header>
    )
}
