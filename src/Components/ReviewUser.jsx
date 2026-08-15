import React, { useContext, useEffect, useState } from "react";
import { PLANS } from "./Data";
import UserContext from "./UserContext";
import { useNavigate } from "react-router";
import Toast from "./Toast";
import { faker } from "@faker-js/faker";

const ReviewUser = () => {
  const { formData, setformData, UserData, setUserData } =
    useContext(UserContext);
  let navigate = useNavigate();
  const selectedPlan = PLANS.find((plan) => plan.label === formData.plan);
  const [toast, settoast] = useState(false);
  useEffect(() => {
    if (!selectedPlan) {
      navigate("/adduser");
    }
  }, []);
  if (!selectedPlan) {
    return null;
  }
  const reviewForm = [
    ["Name", formData.fullName],
    ["Email", formData.email],
    ["Plan", selectedPlan.label],
    ["MRR", selectedPlan.mrr],
  ];

  const addUser = () => {
    const completeFormData = {
      ...formData,
      mrr: selectedPlan.mrr,
      id: faker.string.uuid(),
    };
    setformData(completeFormData);
    setUserData([completeFormData, ...UserData]);
    settoast(true);
    console.log("User added successfully");
  };

  return (
    <div className="">
      <h1 className="font-bold text-[1.2rem]">Review & confirm</h1>

      <div className="container text-lg bg-white  py-5 px-3 rounded-xl mt-5">
        {reviewForm.map((elem, i) => {
          return (
            <div key={i} className="flex items-center justify-between">
              <p className="text-sm">{elem[0]}</p>
              <p>{elem[1]}</p>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer flex justify-between items-center mt-10">
        <button
          onClick={() => {
            navigate("/adduser");
          }}
          className="border border-[#6e6e6e] rounded-md px-4 py-2 text-sm font-semibold"
        >
          Back
        </button>
        <button
          onClick={addUser}
          disabled={toast}
          className={`rounded-md px-4 py-2 text-sm bg-[#3D5A80] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Confirm
        </button>
      </div>
      {toast && (
        <Toast
          message="User added successfully"
          type="success"
          settoast={settoast}
        />
      )}
    </div>
  );
};

export default ReviewUser;
