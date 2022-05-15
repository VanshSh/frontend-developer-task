import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import { UseContext } from '../Context/context'

const PostCard = ({ data }) => {
    const { name, emoji, img, msg, time, comments, edited } = data

    const { setIsModalOpen } = UseContext()
    return (
        <section
            onClick={() => setIsModalOpen(true)}
            className='bg-gray-800 rounded-md mt-5 p-3 w-full '
        >
            <div className='flex justify-between '>
                <div className='flex flex-row px-2'>
                    <div>
                        <img
                            className='rounded-full w-12 h-12'
                            src={img}
                            alt={name}
                        />
                    </div>
                    <div className='px-2'>
                        <p className='text-white'>{name}</p>
                        <span className='text-gray-500'>
                            {time} {edited && '.Edited'}
                        </span>
                    </div>
                </div>
                <div className='text-white'>
                    <MoreHorizIcon />{' '}
                </div>
            </div>
            <div className='bg-black rounded-md p-5 mx-2 mt-3 flex'>
                <div className='pt-3'>
                    <i className='bg-gray-800 m-3 p-2 text-center text-xl rounded-full '>
                        {emoji}
                    </i>
                </div>
                <p className='text-gray-500 px-2'>{msg}</p>
            </div>
            <div className='p-2'>
                <i className='text-gray-500'>
                    <ChatBubbleOutlineRoundedIcon />{' '}
                </i>
                <span className='text-gray-500'>{comments} Comments</span>
            </div>
        </section>
    )
}

export default PostCard
