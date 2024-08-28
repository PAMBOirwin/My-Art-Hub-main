import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/button'
import { FaRegHeart } from 'react-icons/fa'
import Footer from '../components/footer'

export default function home({user}) {
    return (
        <div  className='space-y-10'>

            <Navbar  user={user}/>
         <p>{user ? user.name : ''} bonjour</p>
            <div className='  p-4   flex w-full gap-20 justify-center align-center '>

                <div className='w-1/2 space-y-10 '>
                    <div className='mb-4 space-y-8'>
                        <p className='text-3xl font-bold'> Lorem ipsum dolor sit.</p>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque dolor nihil libero quas quasi id officiis! Molestiae id a eos soluta temporibus dignissimos odio velit cumque. Obcaecati modi, similique itaque amet quia aliquam, reiciendis aperiam corporis impedit vitae laudantium.</p>
                    </div>

                    <Button text='Voir les oeuvres' />


                </div>

                <div className='' >
                    <img src="https://via.placeholder.com/250x250" alt="" className='h-100 w-100' />
                </div>

            </div>

            {/* Nos selections */}

            <div className='flex flex-col justify-center items-center  p-4 space-y-5'>
                <p className='text-3xl font-bold text-center'> Nos selections </p>

                <div className='grid grid-cols-3  gap-10'>
                    <div className=' space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />


                        <div className=' space-y-2 p-2'>

                        <p className="  text-2xl font-bold flex  items-center ">
                               Titre
                               <span className="text-2xl ml-40">
                                   <FaRegHeart />
                               </span>
                           </p>
                           <p>auteur</p>
                           <p> 3000DHS</p>

                        </div>

                    </div>

                    <div className=' space-y-2'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />

                        <div className=' space-y-2 p-2'>

                     <p className="  text-2xl font-bold flex  items-center ">
                            Titre
                            <span className="text-2xl ml-40">
                                <FaRegHeart />
                            </span>
                        </p>
                        <p>auteur</p>
                        <p> 3000DHS</p>

                     </div>

                    </div>
                    <div className=' space-y-2'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />

                        <div className=' space-y-2 p-2'>

                        <p className="  text-2xl font-bold flex  items-center ">
                               Titre
                               <span className="text-2xl ml-40">
                                   <FaRegHeart />
                               </span>
                           </p>
                           <p>auteur</p>
                           <p> 3000DHS</p>

                        </div>
                    </div>





                </div>
            </div>

            {/* Notre concept */}

            <div>
                <div className='flex justify-center items-center '>
                    <img src="https://via.placeholder.com/100x100" alt="" className='rounded' />
                </div>
                <div className='flex flex-col justify-center items-center  p-4 space-y-5'>
                    <p className='text-3xl font-bold text-justify'>Notre concept</p>
                    <p className='text-center w-1/2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur blanditiis facere nostrum sed alias possimus voluptas debitis tenetur. Labore atque officia facere fugit eaque aspernatur error dignissimos quam alias ipsam.
                        Doloribus a id fugit vero reprehenderit! Veniam nisi, non quam blanditiis quod voluptate provident! Autem, mollitia laboriosam! Necessitatibus eos adipisci ut omnis earum, asperiores, dolore cupiditate sunt, officiis repudiandae minus?
                        Nulla quisquam earum a quas placeat quia tenetur ipsum omnis. Necessitatibus omnis perspiciatis aspernatur tempore fuga vero. Aut fugit maiores, consequatur impedit perspiciatis temporibus dolore atque voluptates at facilis voluptatibus.</p>
                </div>
            </div>

            {/*  des oeuvres d'art uniques */}

            <div className='flex flex-col justify-center items-center  p-4 space-y-5'>
                <p className='text-3xl font-bold text-center'>Titre</p>

                <div className="grid grid-cols-3 gap-10">

                    <div className=' space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />


                        <div className=' space-y-2 p-2'>

                     <p className="  text-2xl font-bold flex  items-center ">
                            Titre
                            <span className="text-2xl ml-40">
                                <FaRegHeart />
                            </span>
                        </p>
                        <p>auteur</p>
                        <p> 3000DHS</p>

                     </div>
                    </div>

                    <div className=' space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />


                        <div className=' space-y-2 p-2'>

                     <p className="  text-2xl font-bold flex  items-center ">
                            Titre
                            <span className="text-2xl ml-40">
                                <FaRegHeart />
                            </span>
                        </p>
                        <p>auteur</p>
                        <p> 3000DHS</p>

                     </div>
                    </div>

                    <div className=' space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />


                        <div className=' space-y-2 p-2'>

                        <p className="  text-2xl font-bold flex  items-center ">
                               Titre
                               <span className="text-2xl ml-40">
                                   <FaRegHeart />
                               </span>
                           </p>
                           <p>auteur</p>
                           <p> 3000DHS</p>

                        </div>

                    </div>

                    <div className='  space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />

                     <div className=' space-y-2 p-2'>

                     <p className="  text-2xl font-bold flex  items-center ">
                            Titre
                            <span className="text-2xl ml-40">
                                <FaRegHeart />
                            </span>
                        </p>
                        <p>auteur</p>
                        <p> 3000DHS</p>

                     </div>
                    </div>

                    <div className=' space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />


                        <div className=' space-y-2 p-2'>

                     <p className="  text-2xl font-bold flex  items-center ">
                            Titre
                            <span className="text-2xl ml-40">
                                <FaRegHeart />
                            </span>
                        </p>
                        <p>auteur</p>
                        <p> 3000DHS</p>

                     </div>

                    </div>

                    <div className=' space-y-2 items-center'>
                        <img src="https://via.placeholder.com/300x300" alt="" className='hover:scale-105 transition-transform duration-300' />


                        <div className=' space-y-2 p-2'>

                        <p className="  text-2xl font-bold flex  items-center ">
                               Titre
                               <span className="text-2xl ml-40">
                                   <FaRegHeart />
                               </span>
                           </p>
                           <p>auteur</p>
                           <p> 3000DHS</p>

                        </div>

                    </div>


                </div>
            </div>

            {/*  achat sur myarthub */}


            <div className='space-y-8  flex flex-col items-center p-10'>

                <p className='text-3xl font-bold text-center'>Achetez sur MyArtHub</p>

                <div className=" flex gap-6  w-full justify-center items-center h-auto ">

                    <div className='flex flex-col space-y-2 p-4 pt-9 w-80 h-52 bg-gray-600 rounded-2xl '>

                        <span className='text-2xl font-bold'> titre</span>
                        <p className='text-gray-200 text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aperiam?</p>
                    </div>

                    <div className=' flex flex-col space-y-2 p-4 pt-9   w-80 h-52 bg-gray-600 rounded-2xl '>

                        <span className='text-2xl font-bold'> titre</span>
                        <p className='text-gray-200 text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aperiam?</p>
                    </div>
                    <div className=' flex flex-col   space-y-2 p-4 pt-9  w-80 h-52 bg-gray-600 rounded-2xl '>

                        <span className='text-2xl font-bold'> titre</span>
                        <p className='text-gray-200 text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aperiam?</p>
                    </div>



                </div>

                <Button text='Créer un compte' route={route('register')} />

                <div className='w-full h-1 bg-black rounded'></div>


            </div>

            {/* footer */}

            <Footer/>




        </div>
    )
}
