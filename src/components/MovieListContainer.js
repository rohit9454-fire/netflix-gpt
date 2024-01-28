import React from 'react'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovie)
    return (
        <div>MovieListContainer</div>
    )
}

export default MovieListContainer