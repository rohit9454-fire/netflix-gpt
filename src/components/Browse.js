import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/custom/useNowPlayingMovies';
import VideoContainer from './VideoContainer';
import MovieListContainer from './MovieListContainer';

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <VideoContainer />
            <MovieListContainer />
            {/* 
                1@ Video Player Contaioner
                    - Video Title 
                2@ Movies List With n Movies List.
                    - Movie List 
                    - Cards * n
            */}
        </div>
    )
}

export default Browse