import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import { useForm } from '@inertiajs/inertia-react'

export default function Register
    () {


    const [form, setForm] = useState('client'); // Par défaut, le rôle est "client"

    const toggleForm = () => {
        setForm(prevForm => (prevForm === 'client' ? 'artiste' : 'client'));
    };
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        photo:'',
        nationalité:'',
        date_de_naissance:'',
        biographie:'',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form === 'client') {
            post('/register_client')
        }else{
            post('/register_artiste')
        }
    }
    return (
        <div className="space-y-10">
            <Navbar />
            <div className="flex items-center justify-center h-40 bg-orange-900 w-full">
                <h2 className="text-3xl  text-white text-font-bold mb-6">Inscription</h2>
            </div>



            <div>

                {/*   choix d'inscription client ou artiste */}

                <div className='w-full flex flex-col items-center space-y-4'>
                    <div
                        className='relative flex items-center justify-between w-64 h-12 bg-gray-300 rounded-full cursor-pointer'
                        onClick={toggleForm}
                    >
                        <div
                            className={`absolute top-0 left-0 h-full w-1/2 bg-orange-900 rounded-full transition-transform duration-300 ${form === 'client' ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        ></div>
                        <div className='relative flex justify-between w-full z-10 text-white'>
                            <span
                                className={`w-1/2 text-center ${form === 'client' ? 'text-white' : 'text-gray-600'}`}
                            >
                                Client
                            </span>
                            <span
                                className={`w-1/2 text-center ${form === 'artiste' ? 'text-white' : 'text-gray-600'}`}
                            >
                                Artiste
                            </span>
                        </div>
                    </div>
                    <p>
                        Cliquez pour vous enregistrer en tant que <strong>{form === 'client' ? 'Client' : 'Artiste'}</strong>.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="p-10 space-y-6 ">


                    <div className="w-full flex space-x-20">
                        <div className="flex  flex-col" >
                            <label htmlFor="name"> Nom</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className=" w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="prenom">Email</label>

                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                        </div>
                    </div>

                    {form === 'artiste' && (
                        <div className="space-y-10">
                         <div className="flex  flex-col" >
                         <label htmlFor="name"> Photo</label>
                         <input
                             type="file"
                             name="photo"
                             id="photo"
                             value={data.photo}
                             onChange={(e) => setData('photo', e.target.value)}/>
                         {errors.photo && <p className="text-red-500">{errors.photo}</p>}
                     </div>

                    <div className="flex space-x-20">
                    <div className="flex  flex-col" >
                         <label htmlFor="name"> Nationalité</label>
                         <input
                             type="text"
                             name="nationalité"
                             id="nationalité"
                             value={data.nationalité}
                             onChange={(e) => setData('nationalité', e.target.value)}
                             className=" w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                         {errors.nationalité && <p className="text-red-500">{errors.nationalité}</p>}
                     </div>

                     <div className="flex  flex-col" >
                         <label htmlFor="name"> Date de naissance</label>
                         <input
                             type="date"
                             name="date_de_naissance"
                             id="date_de_naissance"
                             value={data.date_de_naissance}
                             onChange={(e) => setData('date_de_naissance', e.target.value)}
                             className=" w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                         {errors.date_de_naissance && <p className="text-red-500">{errors.date_de_naissance}</p>}
                     </div>
                    </div>
                        <div className='flex flex-col'>
                            <label htmlFor="biographie">biographie</label>
                            <textarea
                                name="biographie"
                                id="biographie"
                                value={data.biographie}
                                onChange={(e) => setData('biographie', e.target.value)}
                                className="w-1/2 h-64 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900"
                            />
                            {errors.biographie && <p className="text-red-500">{errors.biographie}</p>}
                        </div>
                    </div>

                    )}

                    <div className="flex flex-col">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                    </div>

                    <button className='w-96 h-10 bg-orange-900 rounded-md text-white'>S'enregistrer</button>


                </form>

                <div className="w-1/2 text-right">
                    <p> Vous avez deja un compte ? <a href="/login" className="text-orange-900">cliquez ici pour vous connecter </a></p>
                </div>


            </div>


            <Footer />

        </div>
    )
}

