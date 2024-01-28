import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_IMAGE } from '../utils/constant'

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10 bg-black bg-opacity-80'>
                <img className='h-screen object-cover ' src={BG_IMAGE} alt={'background img'} />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    )
}

export default GptSearch