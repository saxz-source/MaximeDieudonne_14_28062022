import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../Types/Employee";

const initialEmployees: Employee[] = [];

export const employeesSlice = createSlice({
    name: "employees",
    initialState: initialEmployees,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;

// {
//     id : "",
//     firstName: "",
//     lastName: "",
//     birthDate: new Date(),
//     startDate: new Date(),
//     adress: {
//         street : "",
//         city : "",
//         zipCode : 0,
//         state:""
//     },
//     department: "",
// };