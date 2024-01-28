import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { addPopularMovie } from '../Redux/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies()
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION);
        const JSON = await data.json()
        dispatch(addPopularMovie(JSON?.results))
    }
}

export default usePopularMovies;