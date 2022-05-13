import * as React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

export default function Login() {
    return (
        <>
            <div className=' container m-auto flex h-screen'>
                <div className='p-5 rounded m-auto  bg-gray-800 border-solid border-2'>
                    <div className='px-16 py-4 mx-14'>
                        <p className=' text-center uppercase text-gray-500 text-sm '>
                            Welcome back
                        </p>
                        <h3
                            className=' text-center
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
                    </form>
                </div>
            </div>
        </>
    )
}
