import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../Types/Employee";

const initialEmployees: { employees: Employee[] } = {
    employees: [],
};

export const employeesSlice = createSlice({
    name: "employees",
    initialState: initialEmployees,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            return {
                employees : [...state.employees, action.payload]
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;