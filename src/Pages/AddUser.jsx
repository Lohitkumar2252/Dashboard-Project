import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { useNavigate, Outlet, Navigate } from "react-router";
import UserContext from "../Components/UserContext";

import AddUserForm from "../Components/AddUserForm";

const AddUser = () => {
  return (
    <div className=" w-full overflow-y-auto p-3 grid place-items-center">
      <div className="formContainer rounded-xl p-4 w-100 bg-[#FAFAF8]">
       
        <Outlet />
      </div>
    </div>
  );
};

export default AddUser;
