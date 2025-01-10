import { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import {ShoppingCartContext} from '../../../Context';

const Navbar = () => {

    const context = useContext(ShoppingCartContext);
    let activeStyle = "underline underline-offset-4";
    
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3 font-light'>
                <li className='font-semibold text-lg'>
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products/furniture"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products/shoes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products/miscellaneous"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    support@domain.ccom
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : null
                        }>
                        Sign In
                    </NavLink>
                </li>

                <li className='flex items-center'>
                    <ShoppingCartIcon className="size-6 text-black" />    
                    <div>
                    {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;