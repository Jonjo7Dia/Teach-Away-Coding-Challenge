import {createSlice} from '@reduxjs/toolkit';

const mediaSlice = createSlice({
    name:"media",
    initialState : {
        data : [],
        loading: true,
        error: {
            success: true, 
            message: '',
            number: 200,
        }
    },
    reducers : {
        setData(state, action){
            state.data = action.payload;
        },
        setLoading(state, action){
            state.loading = action.payload;
        },
        setError(state, action){
            state.error = {
                success: action.payload.success,
                message: action.payload.data.error,
                number: action.payload.status
            }
        }
    }
})

export const mediaActions = mediaSlice.actions;

export default mediaSlice;