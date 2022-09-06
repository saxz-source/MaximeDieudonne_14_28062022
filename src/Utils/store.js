import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../Features/employees.slice'

export default configureStore({
  reducer: {employees : employeesReducer}
})