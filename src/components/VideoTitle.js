import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='px-6 md:px-24 md:pt-[20%] pt-[85%] absolute w-screen aspect-video top-0 bg-gradient-to-r from-black'>
            <h1 className='font-bold md:text-6xl text-lg text-white'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/4  text-white'>{overview}</p>
            <div className='flex md:w-56 w-full'>
                <button className='bg-white text-black p-2 md:w-28 rounded-lg text-sm md:text-lg hover:opacity-80'> ▶️ Play</button>
                <button className="bg-gray-500 p-2 md:w-28 ml-5 text-sm md:text-lg rounded-lg text-white bg-opacity-75 hover:opacity-80">More Info !</button>
            </div>
        </div>
    )
}

export default VideoTitle