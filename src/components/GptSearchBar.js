import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((state) => state.config.lang)
    return (
        <div className='pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='w-1/2 grid grid-cols-12'>
                <input className='px-4  py-2 m-4 col-span-9 border border-purple-700 rounded-lg placeholder-purple-700' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='px-2 py-2 m-4 bg-red-700 col-span-3 text-white rounded z-50 border-white border'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar