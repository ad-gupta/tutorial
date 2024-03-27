import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tutorials: {},
    loading: false,
    success: false,
    message: "",
    error: null,
    resultperpage: 4,
    courseCount: 4,
    filteredTutorialsCount: 2
}

const tutorials = createSlice({
    name: 'tutorials',
    initialState,
    reducers: {
        tutorialRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        tutorialSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.tutorials = action.payload.tutorials;
            state.resultperpage = action.payload.resultperpage;
            state.courseCount = action.payload.courseCount;
            state.filteredTutorialsCount = action.payload.filteredTutorialsCount;
            state.success = true;
        },
        tutorialFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = true;
        },

        tutorialAddRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        tutorialAddSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            // Assuming action.payload contains the newly added tutorial
            state.tutorials = { ...state.tutorials, [action.payload._id]: action.payload };
            state.courseCount += 1;
            state.success = true;
          },          
        tutorialAddFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = true;
        },
    }
})


export const {tutorialRequest, tutorialSuccess, tutorialFail, tutorialAddRequest, tutorialAddFail, tutorialAddSuccess} = tutorials.actions

export default tutorials.reducer