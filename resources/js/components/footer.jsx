import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <div className='w-full bg-gray-950  flex flex-col space-y-5 p-10 '>

                <div className='flex justify-between'>

                    <img src="https://via.placeholder.com/50x50" alt="" className='rounded-full' />


                    <p className='text-white text-center'>Copyright © 2022 MyArtHub. Tous droits réservés.</p>

                    <ul className=' text-2xl flex space-x-4 text-white'>
                        <li> <a href="#"> <FaInstagramSquare /></a></li>
                        <li><a href='#'> <FaFacebookSquare /></a></li>
                    </ul>
                </div>

                <div className='h-0.5 w-full bg-white  '></div>

                <div className='flex space-x-80 pl-10 text-white text-center '>
                    <ul className='space-y-2 underline '>
                        <li><a href="" className='text-2xl'> Acceuil</a></li>
                        <li><a href="">Peinture</a></li>
                        <li><a href="">Artistes</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    <ul className='space-y-2 underline' >
                        <li><a href=""> Qui sommes-nous ?</a></li>
                        <li>CGU/CGV</li>
                        <li><a href="">Politique</a></li>
                        <li><a href="">Confidentialité</a></li>
                        <li> <a href=""> Avis légal</a></li>
                    </ul>
                </div>



                  
            </div>
        </div>
    )
}
