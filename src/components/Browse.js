import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/custom/useNowPlayingMovies';
import VideoContainer from './VideoContainer';
import MovieListContainer from './MovieListContainer';
import usePopularMovies from '../utils/custom/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
    const showGptSearch = useSelector(state => state.gpt?.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div>
            <Header />
            {showGptSearch ? (<GptSearch />) : (<>
                {/* 1@ Video Player Contaioner - Video Title  */}
                <VideoContainer />
                {/* 2@ Movies List With n Movies List. - Movie List  - Cards * n  */}
                <MovieListContainer />
            </>)}

        </div>
    )
}

export default Browse