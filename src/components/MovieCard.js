import React from 'react'
import { TMDB_IMAGE } from '../utils/constant'

const MovieCard = ({ poster_path }) => {
    if (!poster_path) return null;
    return (
        <div className='md:w-48 w-32 flex cursor-pointer'>
            <img className='pr-4' src={TMDB_IMAGE + poster_path} alt='Movie Card' />
        </div>
    )
}

export default MovieCard