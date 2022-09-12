import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableParams } from "../Types/TableParams";

const initialTableParams: TableParams = {
    seenEntries: 10,
    pageNumber: 1,
};

export const tableParamsSlice = createSlice({
    name: "tableParams",
    initialState: initialTableParams,
    reducers: {
        changeSeenEntries: (state, action: PayloadAction<number>) => {
            state.seenEntries = action.payload;
        },
        changePageNumber: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeSeenEntries, changePageNumber } = tableParamsSlice.actions;
export default tableParamsSlice.reducer;
