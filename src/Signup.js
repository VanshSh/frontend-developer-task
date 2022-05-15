import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'
import { UseContext } from './Context/context'

const Signup = () => {
    const { isLoginOpen,setIsLoginOpen } = UseContext()
    return (
        <main className='absolute top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4  '>
            <div className='rounded p-4 pt-3  bg-gray-800 border-solid border-2'>
                <div className=' text-center px-14 py-8 m-3 '>
                    <p className='  uppercase text-gray-500 text-sm '>
                        Sign up
                    </p>
                    <h3
                        className=' 
                     text-white font-semibold '
                    >
                        Create an account to continue
                    </h3>
                </div>
                <form className='pt-2 '>
                    <label className='block text-white'>Email</label>
                    <input
                        type='text'
                        placeholder='Enter your email '
                        className='text-gray-500 p-2 bg-transparent  rounded-md border-solid border-2 border-gray-500 min-w-full
                             '
                    />
                    <label className='block pt-3 text-white'>Username</label>
                    <input
                        type='text'
                        placeholder='Choose a preferred username'
                        className='text-gray-500 p-2 bg-transparent  rounded-md border-solid border-2 border-gray-500 min-w-full
                             '
                    />
                    <label className='block text-white pt-3'>Password</label>
                    <div className='flex relative'>
                        <input
                            type='text'
                            placeholder='Choose a strong password'
                            className='text-gray-500 p-2 bg-transparent  rounded-md border-solid border-2 border-gray-500 min-w-full
                             '
                        />

                        <div className=' absolute right-1 top-2 pr-2 text-white '>
                            <VisibilityOutlinedIcon />
                        </div>
                    </div>
                    <Link
                        to='/community'
                        className='flex justify-center mt-5 bg-blue-400 font-semibold text-white py-1 rounded'
                    >
                        Continue
                    </Link>
                </form>
                <p className='text-gray-500'>
                    Already have an account?{' '}
                    <span
                        onClick={() => setIsLoginOpen(!isLoginOpen)}
                        className='text-white'
                    >
                        Login
                        <ArrowForwardIcon fontSize='small' />{' '}
                    </span>{' '}
                </p>
            </div>
        </main>
    )
}

export default Signup
