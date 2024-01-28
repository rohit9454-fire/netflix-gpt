import React from 'react'
import { TMDB_IMAGE } from '../utils/constant'

const MovieCard = ({ poster_path }) => {
    return (
        <div className='w-48 flex cursor-pointer'>
            <img className='pr-4' src={TMDB_IMAGE + poster_path} alt={'/movie'} />
        </div>
    )
}

export default MovieCard