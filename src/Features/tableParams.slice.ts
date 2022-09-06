import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableParams } from "../Types/TableParams";

const initialTableParams: TableParams = {
    seenEntries: 1,
};

export const tableParamsSlice = createSlice({
    name: "tableParams",
    initialState: initialTableParams,
    reducers: {
        changeSeenEntries: (state, action: PayloadAction<number>) => {
            state.seenEntries = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeSeenEntries } = tableParamsSlice.actions;
export default tableParamsSlice.reducer;
