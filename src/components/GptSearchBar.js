import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { API_OPTION } from '../utils/constant';
import { addGptMoviesResult } from '../utils/Redux/gptSlice';


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((state) => state.config.lang)
    const searchText = useRef(null)

    const fetchMovie = async (movie) => {
        const movieData = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTION)
        const data = await movieData.json();
        return data.results;
    }

    const handleGptSearch = async () => {
        const gptQuery = 'Act as movie recommendation system and suggest some movies for the query ' + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResult.choices) return
        const gptMovieList = gptResult.choices[0]?.message?.content.split(",");
        const data = gptMovieList.map((movie) => fetchMovie(movie))
        const tmdbResults = await Promise.all(data)
        dispatch(addGptMoviesResult({ movieNames: gptMovieList, movieResults: tmdbResults }))
    }

    return (
        <div className='pt-[45%] md:pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-1/2 grid grid-cols-12'>
                <input ref={searchText} className='px-2 md:px-4  py-2 m-4 text-sm md:text-lg col-span-9 border border-purple-700 rounded-lg placeholder-purple-700' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='px-2 py-2 m-4 bg-red-700 col-span-3 text-white rounded z-50 border-white border cursor-pointer text-sm md:text-lg' onClick={handleGptSearch}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar