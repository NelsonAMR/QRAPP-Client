import { BrowserRouter, Route, Routes } from "react-router-dom";
import Record from "./pages/Record/Record";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterEmployee from "./pages/RegisterEmployee/RegisterEmployee";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Record />} />
          <Route path="register-employee" element={<RegisterEmployee />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

