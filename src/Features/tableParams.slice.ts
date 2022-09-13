import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortedColumn, TableParams } from "../Types/TableParams";

const initialTableParams: TableParams = {
    seenEntries: 10,
    pageNumber: 1,
    sortedColumn: { name: "lastName", type: "up" },
    searchValue : ""
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
        changeSortColumn: (state, action: PayloadAction<SortedColumn>) => {
            state.sortedColumn = action.payload;
        },
        changeSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeSeenEntries, changePageNumber, changeSortColumn, changeSearchValue} =
    tableParamsSlice.actions;
export default tableParamsSlice.reducer;
