import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../Redux/movieSlice';
import { API_OPTION } from '../constant';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
        const data = await fetch(url, API_OPTION);
        const JSON = await data.json()
        const filterData = JSON?.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : JSON?.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideo()
    }, [])


}

export default useMovieTrailer