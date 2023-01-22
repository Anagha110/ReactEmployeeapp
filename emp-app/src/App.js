import "./App.css";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import Layout from "./components/Layout";

function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/employeeform" element={<EmployeeForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </>
  );
}

export default App;
