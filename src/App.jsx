import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Overview from "./Pages/Overview";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Users from "./Pages/Users";
import Reports from "./Pages/Reports";
import AddUser from "./Pages/AddUser";
import Step3 from "./Components/ReviewUser";
import UserContext from "./Components/UserContext";
import AddUserForm from "./Components/AddUserForm";
import { fetchUsers } from "./Data";

const App = () => {
  const [formData, setformData] = useState({});
  const [UserData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
 const [role, setrole] = useState("admin");
  function handleRemoveUser(uid) {
    const updatedUserData = UserData.filter((user) => user.id !== uid);
    setUserData(updatedUserData);
    console.log("User removed successfully");
  }
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetchUsers();
        setUserData(response);
       
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ formData, setformData, UserData, setUserData, role, setrole, handleRemoveUser }}
      >
        <div className="container max-w-384 border mx-auto grid grid-cols-[20%_80%] h-screen overflow-hidden ">
          <Navbar />
          <Routes>
            
            <Route path="/" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />

            <Route path="/adduser" element={<AddUser />}>
              <Route index element={<AddUserForm />} />
              <Route path="reviewuser" element={<Step3 />} />
            </Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
