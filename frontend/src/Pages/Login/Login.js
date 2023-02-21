import React, { useEffect, useState } from 'react'
import 'iconify-icon';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const {
    loading,
    error,
    userInfo,
  } = userLogin
  const navigate = useNavigate()

 
  // if(userInfo){
  //   navigate('/')
  // }

  const submitHandler=async(e)=>{
    e.preventDefault();
    dispatch(login(email,password))
    // if(userLogin!=undefined){
    //   navigate('/')
    // }
    //localStorage.setItem('password',password)

  }


  
  return (
    <div className='w-full h-screen bg-[#F5F5F5] flex justify-center items-center'>

      <div className='grid grid-cols-2 m-4 border rounded-lg max-w-4xl'>
        <div className='bg-[#95959E] rounded-l-lg w-full flex justify-center items-center'>
          <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' alt='image' />
        </div>
        <div className='w-full p-4 bg-white  rounded-r-lg sm:p-6 md:p-8'>
          <form onSubmit={submitHandler} className="space-y-6">
            <div className='flex'>
              <iconify-icon width="30" height="30" icon="fa6-solid:cubes"></iconify-icon>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white ml-4">Sign into your account</h5>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <Link className="ml-auto text-sm text-[#393f81] hover:underline ">Lost Password?</Link>
            </div>
            <button type="submit" className="w-full text-white bg-[#252121]     font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <Link to='/register' className="text-[#393f81] hover:underline">Create account</Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login