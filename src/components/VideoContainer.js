import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovie)
    if (!movies) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie

    return (
        <div className='pt-[40%] md:pt-0 bg-black'>
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default VideoContainer