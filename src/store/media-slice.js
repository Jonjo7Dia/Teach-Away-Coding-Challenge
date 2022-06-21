import {createSlice} from '@reduxjs/toolkit';

const mediaSlice = createSlice({
    name:"media",
    initialState : {
        data : [],
        loading: true,
    },
    reducers : {
        setData(state, action){
            state.data = action.payload;
        },
        setLoading(state, action){
            state.loading = action.payload;
        }
    }
})

export const mediaActions = mediaSlice.actions;

export default mediaSlice;