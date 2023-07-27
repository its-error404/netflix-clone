import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen'>
      <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/4af43238-4df9-4946-9920-a4bd55f2e50b/IN-en-20230724-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'>
      </img>
      <div className='fixed top-0 left-0 w-full h-screen bg-black/60'>
        <div className='fixed z-50 w-full px-4 py-24'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form>
                        <input className='p-3 my-2 bg-gray-700 rounded placeholder:text-gray-300' type='email' autoComplete='email' placeholder='Email Address'></input>
                        <input className='p-3 my-2 bg-gray-700 rounded placeholder:text-gray-300' type='password' placeholder='Password' autoComplete='current-password'></input>
                        <button className='py-3 my-6 font-bold bg-red-700 rounded'>Sign In</button>
                    </form>
                    
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
