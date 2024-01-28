import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { addNowPlayingMovie } from '../Redux/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovie)

    const getPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?US&page=1', API_OPTION);
        const JSON = await data.json()
        dispatch(addNowPlayingMovie(JSON?.results))
    }

    useEffect(() => {
        !nowPlayingMovies && getPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;