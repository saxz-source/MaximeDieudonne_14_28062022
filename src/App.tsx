import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage/HomePage";
import EmployeePage from "./Components/EmployeePage/EmployeePage/EmployeePage";
import Header from "./Components/Header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/employees" element={<EmployeePage />} />
            </Routes>
        </>
    );
}

export default App;
