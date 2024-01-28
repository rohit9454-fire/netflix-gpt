import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { addPopularMovie } from '../Redux/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovie)

    useEffect(() => {
        !popularMovies && getPopularMovies()
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION);
        const JSON = await data.json()
        dispatch(addPopularMovie(JSON?.results))
    }
}

export default usePopularMovies;