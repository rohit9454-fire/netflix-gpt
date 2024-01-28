import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_IMAGE } from '../utils/constant'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10 bg-black bg-opacity-50'>
                <img src={BG_IMAGE} alt={'background img'} />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch