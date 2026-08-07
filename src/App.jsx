import React from "react";
import Navbar from "./Components/Navbar";
import Overview from "./Pages/Overview";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Users from "./Pages/Users";
import Reports from "./Pages/Reports";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container max-w-384 border mx-auto grid grid-cols-[20%_80%] h-screen overflow-hidden ">
        <Navbar />
        <Routes>
           {/* <Route path="/" element={<Navigate to="/Overview" replace />} /> */}
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>

     
      </div>
    </BrowserRouter>
  );
};

export default App;
