import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    papers: {},
    loading: false,
    error: null,
    message: "",
    success: false,
    resultperpage: 6,
    paperCount: 4,
    filteredPapersCount: 2,
}

const slice = createSlice({
    name: "paper",
    initialState,
    reducers: {
        addPaperRequest: (state) => {
            state.loading = true;
        },
        addPostSuccess: (state, action) => {
            state.loading = false,
            state.papers = { ...state.papers, [action.payload._id]: action.payload };
            state.paperCount += 1;
            state.success = true
        },
        addPostFail: (state, action) => {
            state.loading = false,
            state.error = action.payload,
            state.success = false
        },
        getPaperRequest: (state) => {
            state.loading = true;
        },
        getPaperSuccess: (state, action) => {
            state.loading = false,
            state.papers = action.payload.paper,
            state.resultperpage = action.payload.resultperpage;
            state.paperCount = action.payload.paperCount;
            state.filteredPapersCount = action.payload.filteredpaperCount;
            state.success = true
        },
        getPaperFail: (state, action) => {
            state.loading = false,
            state.error = action.payload,
            state.success = false
        },
        clearErrors: (state) => {
            state.error = null
        }

    }
})


export const {addPaperRequest, addPostFail, addPostSuccess, getPaperRequest, getPaperFail, getPaperSuccess, clearErrors} = slice.actions;

export default slice.reducer