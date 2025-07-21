import React from 'react'
import useDarkSide from '../config/useDarkMode'
import { Link, Outlet } from 'react-router-dom'
import Comp2 from '../components/switcher'
const Layout = () => {
    const [theme, toggleTheme] = useDarkSide();
    return (
        <div className='bg-gray-100 dark:bg-gray-900'>
            <ul className='flex items-center justify-evenly py-[25px] dark:bg-blue-900 bg-blue-500 text-white font-black'>
                <Comp2 toggleTheme={toggleTheme} />
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/users"}>Users</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout