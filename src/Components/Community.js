import React from 'react'
import { communityData } from '../data'
import PostCard from './PostCard'
import NewPost from './NewPost'

const Community = () => {
    
    const posts = communityData.map((data) => {
        return <PostCard key={data.id} data={data} />
    })
    return (
        <main className='w-2/4 my-10 mx-auto '>
            <header>
                <h2 className='text-white text-2xl'>Hello Jane</h2>
                <p className='text-gray-500'>
                    How are you doing today? Would you like to share something
                    with the community today 👐{' '}
                </p>
            </header>
            <NewPost  />
            {posts}
        </main>
    )
}

export default Community
