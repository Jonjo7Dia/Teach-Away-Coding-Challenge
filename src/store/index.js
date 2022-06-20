import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './filter-slice';
import mediaSlice from './media-slice';
const store = configureStore({
    reducer: {filter: filterSlice.reducer, media: mediaSlice.reducer}
});

export default store;