import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='px-24 pt-[20%] absolute w-screen aspect-video top-0 bg-gradient-to-r from-black'>
            <h1 className='font-bold text-6xl text-white'>{title}</h1>
            <p className='py-6 text-lg w-1/4  text-white'>{overview}</p>
            <div className='flex w-56'>
                <button className='bg-white text-black p-2 w-28 rounded-lg hover:opacity-80'> ▶️ Play</button>
                <button className="bg-gray-500 p-2 w-28 ml-5 rounded-lg text-white bg-opacity-75 hover:opacity-80">More Info !</button>
            </div>
        </div>
    )
}

export default VideoTitle