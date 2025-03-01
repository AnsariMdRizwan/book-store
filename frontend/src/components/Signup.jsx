import React from 'react'

import Footer from './Footer'
import { json, Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) =>{
        const userinfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
       await  axios.post("http://localhost:4001/user/signup",userinfo).then((res)=>{
            console.log(res.data)
                if(res.data){
                    toast.success('Signup successful',
                        {
                            className:"font-mono",
                        }
                    );
                }
                localStorage.setItem("User",JSON.stringify(res.data.user));
        }).catch((err)=>{
           if(err.response){
            console.log(err)
            toast.error('error:'+ err.response.data.message,
                {
                    className:"font-mono",
                }
            );
           }
        })
      }
    return (
        <>
            
            <div className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow mt-20 flex items-center justify-center px-4">
          <div className="w-full max-w-md p-4 md:max-w-lg">
            <div className=" modal-box bg-white shadow-md rounded-lg p-6 dark:bg-slate-600 dark:text-white">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                             onClick={()=> document.getElementById("my_modal_3").close()}
                            >✕</Link>
                        
                        <h3 className="font-bold text-lg text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-pink-500 flex justify-center">signup..</h3>
                        <div className='mt-4'>
                            <span className='pt-5  font-serif'>Name</span>
                            <br />
                            <input type="text" placeholder='enter your full name here ' className='dark:text-black mt-3 w-80 px-3 border rounded-md outline-none font-mono' 
                            {...register("fullname", { required: true })}
                            />
                            <br />
                            {errors.fullname && <span className='text-red-600              font-serif'>This field is required!</span>}    
                        </div>
                        <div className='mt-4'>
                            <span className='pt-5  font-serif'>Email</span>
                            <br />
                            <input type="email" placeholder='enter your E-mail here ' className=' dark:text-black mt-3 w-80 px-3 border rounded-md outline-none font-mono'
                             {...register("email", { required: true })}
                            />
                             <br />
                             {errors.email && <span className='text-red-600              font-serif'>This field is required!</span>} 
                        </div>
                        <div className='mt-4'>
                            <span className='pt-5  font-serif'>Password</span>
                            <br />
                            <input type="Password" placeholder='Enter your psassword' className=' dark:text-black mt-3 w-80 px-3 border rounded-md outline-none font-mono' 
                            {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-red-600              font-serif'>This field is required!</span>} 

                        </div>
                        <div className='mt-4'>
                            <span className='pt-5  font-serif'>Password</span>
                            <br />
                            <input type="Password" placeholder='confirm your password' className='dark:text-black mt-3 w-80 px-3 border rounded-md outline-none font-mono'
                            {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-red-600              font-serif'>This field is required!</span>} 
                        </div>
                        <div className='flex justify-between mt-4'>
                            <button className='bg-blue-500 text-white rounded-md border p-2 m-3 hover:scale-95 duration-200'>Signup</button>
                            <p className='  mt-5  flex flex-row float-end justify-around'>
                                Have account?{""} <span
                                    className='hover:text-blue-200 hover:scale-105 duration-200 cursor-pointer underline'
                                    onClick={()=>{
                                        document.getElementById("my_modal_3").showModal();
                                    }}
                                    >Login</span >
                        <Login/>
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
            </div>
            
        </>
    )
}

export default Signup
