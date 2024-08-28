import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

export default function Navbar({user}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open);
    return (
        <div>

            <nav className="  p-4  flex items-center  bg justify-between   ">
                <div>
                    <img src="https://via.placeholder.com/150" alt=""  className='h-12'/>
                </div>

                <div>
                    <ul className="flex  space-x-4 text-decoration-none text-gray-200 ">
                        <li>
                            <Link href={route('home')} className=" hover:text-white hover:bg-slate-600 px-4 py-2 rounded transition-colors duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="#" className='hover:text-white hover:bg-slate-600 px-4 py-2 rounded transition-colors duration-300'>peinture</Link>
                        </li>
                        <li>
                            <Link href={route('artistes')} className='hover:text-white hover:bg-slate-600 px-4 py-2 rounded transition-colors duration-300'>Artiste</Link>
                        </li>
                        <li>
                            <Link href='' className='hover:text-white hover:bg-slate-600 px-4 py-2 rounded transition-colors duration-300'>peinture</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className='flex space-x-4'>
                        <li className='m-2'>
                            <button className='font-size-3xl'  onClick={handleOpen}><FaUser /></button>
                            {open && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg">
                        {user ?(
                            <>
                             <Link href={route('dashbord')} className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-slate-600 rounded transition-colors duration-300">
                             {user.name}
                           </Link>
                           <Link href={route('logout')} className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-slate-600 rounded transition-colors duration-300">
                             logout
                           </Link>
                           </>
                        ): ( <Link href={route('login_show')} className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-slate-600 rounded transition-colors duration-300">
                        Se connecter
                      </Link> )}



        </div>)}

                        </li>
                        <li className='m-2'> <Link href='#'><FaShoppingCart /></Link></li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}
