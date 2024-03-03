import { BrowserRouter, Route, Routes } from "react-router-dom";
import Record from "./pages/Record/Record";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterEmployee from "./pages/RegisterEmployee/RegisterEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Record />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-employee" element={<RegisterEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

