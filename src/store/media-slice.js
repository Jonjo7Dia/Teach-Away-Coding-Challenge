import {createSlice} from '@reduxjs/toolkit';

const mediaSlice = createSlice({
    name:"media",
    initialState : {
        data : {},
    },
    reducers : {
        setData(state, action){
            state.data = action.payload;
        }
    }
})

export const mediaActions = mediaSlice.actions;

export default mediaSlice;