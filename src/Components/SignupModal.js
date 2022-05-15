import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { UseContext } from '../Context/context'
import ClearIcon from '@mui/icons-material/Clear'

const Signup = () => {
    const { isLoginOpen, setIsLoginOpen, modalCloseHandler } = UseContext()

    return (
        <main>
            <div className='rounded p-4 pt-3  bg-gray-800 border-solid border-2'>
                <div className='relative text-center px-11 py-5 m-4 '>
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
                    <button
                        onClick={modalCloseHandler}
                        className=' mt-5 bg-blue-400 w-full font-semibold text-white py-2 rounded'
                    >
                        Continue
                    </button>
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
