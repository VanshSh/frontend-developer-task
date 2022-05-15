import * as React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ClearIcon from '@mui/icons-material/Clear'
import { UseContext } from '../Context/context'

export default function LoginModal() {
    const { isLoginOpen, setIsLoginOpen, modalCloseHandler } = UseContext()

    return (
        <main>
            <div className='rounded  pt-1 pb-3 px-3  bg-gray-800 border-solid border-2'>
                <div className='relative text-center px-11 py-6 m-4 '>
                    <ClearIcon
                        sx={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            color: 'white',
                            cursor: 'pointer',
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            zIndex: '1',
                            padding: '0.5rem',
                            fontSize: '2rem',
                        }}
                        onClick={modalCloseHandler}
                    />
                    <p className='  uppercase text-gray-500 text-sm '>
                        Welcome back
                    </p>
                    <h3
                        className=' 
                     text-white font-semibold '
                    >
                        Log into your account
                    </h3>
                </div>
                <form className='pt-2 '>
                    <label className='block text-white'>
                        Email or Username
                    </label>
                    <input
                        type='text'
                        placeholder='Enter your email or username'
                        className='text-gray-500 p-2 bg-transparent  rounded-md border-solid border-2 border-gray-500 min-w-full
                             '
                    />
                    <label className='block text-white pt-3'>
                        <div className='flex justify-between'>
                            <span>Password</span>
                            <span>Forgot password?</span>
                        </div>
                    </label>
                    <div className='flex relative'>
                        <input
                            type='text'
                            placeholder='Enter your email or username'
                            className='text-gray-500 p-2 bg-transparent  rounded-md border-solid border-2 border-gray-500 min-w-full
                             '
                        />

                        <div className=' absolute right-1 top-2 pr-2 text-white '>
                            <VisibilityOutlinedIcon />
                        </div>
                    </div>
                    <button
                        onClick={modalCloseHandler}
                        className=' mt-5 bg-blue-400 w-full font-semibold text-white py-2 rounded'
                    >
                        Login now
                    </button>
                </form>
                <p className='text-gray-500'>
                    Not registered yet?{' '}
                    <span
                        onClick={() => setIsLoginOpen(!isLoginOpen)}
                        className='text-white'
                    >
                        Register <ArrowForwardIcon fontSize='small' />{' '}
                    </span>{' '}
                </p>
            </div>
        </main>
    )
}
