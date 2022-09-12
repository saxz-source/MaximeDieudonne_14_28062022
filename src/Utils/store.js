import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../Features/employees.slice";
import tableParamsReducer from "../Features/tableParams.slice";

export default configureStore({
    reducer: { employees: employeesReducer, tableParams: tableParamsReducer },
});
