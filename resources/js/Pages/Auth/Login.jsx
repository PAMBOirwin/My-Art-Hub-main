import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import { useForm } from '@inertiajs/inertia-react'

export default function Login() {

  const{data , setData , post , processing , errors}= useForm({
    email: '',
    password: '',
  })

  const handlesubmit =(e)=>{
    e.preventDefault()
    post('/login_post')
  }
  return (
    <div className="space-y-10">
        <Navbar/>

        <div className="flex items-center justify-center h-40 bg-orange-900 w-full">
                <h2 className="text-3xl  text-white text-font-bold mb-6">Connexion</h2>
            </div>



            <form onSubmit={handlesubmit} className='flex flex-col p-10 space-y-4'>
            <div className="flex  flex-col" >
                            <label htmlFor="email"> Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className=" w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                            {errors.name && <p className="text-red-500">{errors.email}</p>}
                        </div>
            <div  className='flex flex-col'>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className=" w-96 h-10 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-900" />
                {errors.password   && <p className="text-red-500">{errors.password}</p>}

            </div>

            <button className='w-96 h-10 bg-orange-900 rounded-md text-white'>Se connecter</button>

            </form>

          <div className="w-1/2 text-right">
          <p> vous n'avez pas de compte ? <a href="/register" className="text-orange-900">cliquez ici pour vous en créer un </a></p>

          </div>

        <Footer/>
    </div>
  )
}

