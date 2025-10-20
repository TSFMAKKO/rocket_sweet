import { NavLink } from 'react-router-dom'

const BASE_URL = import.meta.env.BASE_URL || '/'

export default function Header() {
    return (
        <header className="mx-auto max-w-[1280px] w-full px-[12px] py-3">
            <div className=" flex items-center justify-between max-sm:hidden">
                <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[red]">
                    <img src={BASE_URL + 'logo-all-dark.svg'} alt="Rocket Sweet" className="h-[38px] w-auto" />
                </NavLink>
                <nav className="flex gap-x-[80px] text-sm items-center">
                    <div className='flex gap-x-[60px]'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
                            首頁
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
                            甜點
                        </NavLink>
                        <NavLink to="/signup" className={({ isActive }) => `${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                            登入
                        </NavLink>
                    </div>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
                        <img src={BASE_URL + 'shopping_cart.png'} alt="購物車"  className="h-[38px] w-auto" />
                    </NavLink>
                </nav>
            </div>

            {/* 手機版  */}
            <div className=" flex items-center justify-between sm:hidden">
                <nav className="flex w-full justify-between text-sm">
                    <div className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[red]">
                        <img src={BASE_URL + 'dehaze-24px.png'} alt="hamburger_menu" className="h-[38px] w-auto" />
                    </div>

                    <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[red]">
                        <img src={BASE_URL + 'logo-all-dark.svg'} alt="Rocket Sweet" className="h-[38px] w-auto" />
                    </NavLink>
                    {/* <div className='flex gap-x-[60px]'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
                            首頁
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
                            甜點
                        </NavLink>
                        <NavLink to="/signup" className={({ isActive }) => `${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}>
                            登入
                        </NavLink>
                    </div> */}
                    <NavLink to="/cart" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
                        <img src={BASE_URL + 'shopping_cart.png'} alt="購物車" className="h-[38px] w-auto" />
                    </NavLink>
                </nav>
            </div>

            {/* 
            <div className='hidden max-sm:block'>
                 <img src={BASE_URL + 'hamburger_menu.png'} alt="漢堡選單" className="" />
            </div> */}
        </header>
    )
}
