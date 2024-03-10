import { BrowserRouter, Route, Routes } from "react-router-dom";
import Record from "./pages/Record/Record";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterEmployee from "./pages/RegisterEmployee/RegisterEmployee";
import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";
import { axiosAPI } from "./utils/axiosInstance";

function App() {
  const [qrData, setQrData] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === "Shift") return;
      setQrData((prevData) => prevData + event.key);
    };

    document.addEventListener("keydown", handleKeyDown);

    if (qrData.length === 3 && !isNaN(Number(qrData))) {
      const postQrData = async () => {
        try {
          await axiosAPI.post("/records", { employee_id: qrData });
        } catch (error) {
          console.error(error);
        } finally {
          setQrData("");
        }
      };

      postQrData();
    }

    setQrData("");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [qrData]);

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

