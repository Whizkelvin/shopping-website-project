import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import pic from "../assets/F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg"


const Login = () => {
  const {signUp} = useContext(AuthContext)
  return (
     <div
          className='font-Neuton absolute flex top-0 z-50 bg-gray-500/50 transfrom transition-transform duration-300 ease-in-out w-full h-screen justify-center items-center 
          '
        >
         <div className='bg-white p-7 w-[80%] flex flex-col items-center '>
      
        <h1 className='font-extrabold'>Car Rental </h1>
        <h1 className='text-3xl font-extrabold'>Welcome Back</h1>
        <p className='text-gray-400 text-sm'>Please login to your account</p>

        <div className='flex flex-col md:w-[30%] w-full'>
          <input className='border-2 p-2 rounded-lg w-full bg-gray-100 placeholder:text-black my-3 border-gray-400' type="email" placeholder='Email address' />
          <input className='border-2 p-2 rounded-lg w-full bg-gray-100 placeholder:text-black border-gray-400' type="password" placeholder='Password'/>
          <p className='text-end text-sm'>Forget Password?</p>
          <button className='bg-blue-800 my-3 text-white py-2 text-md rounded-xl'>Login</button>
        </div>

        <div className='md:w-[30%] text-center w-full'>
          <p className='text-gray-400 text-sm'>Or Login With </p>
          <div className='flex justify-between my-5'>
            <button className='flex items-center border-2 md:px-10 px-5 font-bold gap-2 py-2 border-gray-400 rounded-xl' onClick={signUp} ><FcGoogle /> Google</button>
            <button className='flex items-center border-2 md:px-10 px-5 font-bold gap-2 py-2 border-gray-400 rounded-xl'><FaGithub /> Github</button>
          </div>
          
        </div>
      
        <button className='text-sm text-gray-400'>Dont have an account? <Link to='#' className='text-blue-700'>SignUp</Link></button>
    </div>
    {/* <div><img src={pic} alt="" /></div> */}
    
    </div>
   
  )
}

export default Login