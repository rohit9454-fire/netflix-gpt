import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
})

export const { toggleGptSearchView, addGptMoviesResult } = gtpSlice.actions;
export default gtpSlice.reducer;