import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieListContainer = () => {
    const movies = useSelector(store => store?.movies)

    return (
        movies?.nowPlayingMovie && <div className='bg-black'>
            <div className='mt-0 md:-mt-32 pl-12 z-40 relative'>
                <MovieList
                    title={'Now Playing'}
                    movies={movies?.nowPlayingMovie}
                />
                <MovieList
                    title={'Recomended'}
                    movies={movies?.nowPlayingMovie}
                />
                <MovieList
                    title={'Tranding'}
                    movies={movies?.nowPlayingMovie}
                />
                <MovieList
                    title={'Populer'}
                    movies={movies?.popularMovie}
                />
            </div>
        </div>
    )
}

export default MovieListContainer