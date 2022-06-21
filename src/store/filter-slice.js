import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    section: "hot",
    sort: "viral",
    page: 0,
    window: "day",
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
    setWindow(state, action) {
      state.window = action.payload;
    },
    setViral(state, action) {
      state.showViral = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    nextPage(state) {
      return {
        ...state,
        page: state.page + 1,
      };
    },
    prevPage(state) {
      return {
        ...state,
        page: state.page - 1,
      };
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
