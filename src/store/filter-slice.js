import { createSlice} from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState : {
        section: 'Hot',
        sort: 'Viral',
        page: 0,
        window: 'Day',
        showViral: true, 
        loading: true,

    },
    reducers: {
        setSection(state, action) {
            state.section = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setPage(state, action){
            state.page = action.payload;
        },
        setWindow(state, action){
            state.window = action.payload;
        },
        setViral(state, action){
            state.showViral = action.payload;
        }
    }
});

export const filterActions = filterSlice.actions;

export default filterSlice;