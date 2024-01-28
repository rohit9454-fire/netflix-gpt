import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-0 md:px-6 bg-transparent'>
            <h1 className='md:text-3xl font-light  text-lg py-10  md:py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex mt-2'>
                    {movies?.map((movie) => <MovieCard key={movie.id} poster_path={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList