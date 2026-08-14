import React, { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useNavigate, Outlet, Navigate } from "react-router";
import UserContext from "../Components/UserContext";
const AddUserForm = () => {
  const { formData, setformData } = useContext(UserContext);
  const schema = z.object({
    fullName: z.string().min(1),
    email: z.email(),
    billingEmail: z.email(),
    
    plan: z.enum(["Starter", "Pro", "Enterprise"]),
    role: z.enum(["Admin", "Viewer"]),
  });
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
   
    resolver: zodResolver(schema),
  });
  let navigate = useNavigate();
  const onSubmit = (data) => {
    setformData(data);
   
    navigate("/adduser/reviewuser");
  };
  
  return (
    <div>
        <h1 className="font-bold text-[1.2rem]">Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <label
          htmlFor="Fname"
          className=" flex flex-col font-semibold text-[0.9rem]"
        >
          Full name
          <input
            {...register("fullName")}
            type="text"
            className="border outline-none rounded-md p-2 text-sm"
            id="Fname"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </label>
        <label
          htmlFor="email"
          className=" flex flex-col font-semibold text-[0.9rem]"
        >
          Email
          <input
            {...register("email")}
            type="email"
            className="border outline-none rounded-md p-2 text-sm"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </label>
        <label
          htmlFor="role"
          className=" flex flex-col font-semibold text-[0.9rem]"
        >
          Role
          <select
            {...register("role")}
            name="role"
            id="role"
            className="border outline-none rounded-md p-2"
          >
            <option value="">--SELECT--</option>
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs">{errors.role.message}</p>
          )}
        </label>

        <label
          htmlFor="plan"
          className=" flex flex-col font-semibold text-[0.9rem]"
        >
          Plan
          <select
            {...register("plan")}
            name="plan"
            id="plan"
            className="border outline-none rounded-md p-2"
          >
            <option value="">--SELECT--</option>
            <option value="Starter">Starter</option>
            <option value="Pro">Pro</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          {errors.plan && (
            <p className="text-red-500 text-xs">{errors.plan.message}</p>
          )}
        </label>
      
        <label
          htmlFor="Bill Email"
          className=" flex flex-col font-semibold text-[0.9rem]"
        >
          Billing Email
          <input
            {...register("billingEmail")}
            type="email"
            className="border outline-none rounded-md p-2 text-sm"
            id="Bill Email"
          />
          {errors.billingEmail && (
            <p className="text-red-500 text-xs">
              {errors.billingEmail.message}
            </p>
          )}
        </label>
        <div className="buttonContainer flex justify-between items-center mt-10">
         
          <button
            type="submit"
            className="ml-auto rounded-md px-4 py-2 text-sm bg-[#3D5A80] text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
