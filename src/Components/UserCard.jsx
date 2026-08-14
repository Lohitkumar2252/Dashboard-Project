import React, { useContext } from "react";
import { planColors } from "../Data";
import UserContext from "./UserContext";

const UserCard = ({ name, plan, MRR, action, email }) => {
   const {role} = useContext(UserContext);
  const planColorArray = Object.entries(planColors);

  const currentPlan = planColorArray.filter((e) => {
    return e[0] == plan;
  });

  
  return (
    <div
      className={`border-b border-b-[#6b6a6a90] grid grid-cols-4 ${email?.trim() && "grid-cols-5"} grid-rows-1 p-1 py-2 w-full gap-5`}
    >
      <h4 className="    capitalize">{name}</h4>
      {email?.trim() && <p className="capitalize">{email}</p>}
      <div
        className={` text-sm  text-left capitalize p-1 rounded-lg w-fit`}
        style={{
          backgroundColor: currentPlan[0][1].bg,
          color: currentPlan[0][1].text,
        }}
      >
        {plan}
      </div>
      <p className="capitalize">{`$${MRR}`}</p>
      <p className={` ${role === "viewer" && "hidden"} capitalize`}>{action}</p>
    </div>
  );
};

export default UserCard;
