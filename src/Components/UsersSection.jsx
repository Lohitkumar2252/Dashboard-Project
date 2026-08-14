import React, { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import { fetchUsers, planColors } from "../Data";
import UserContext from "./UserContext";

const UsersSection = () => {
  const {UserData, setUserData} = useContext(UserContext);
  const slicedUserArray = UserData.slice(0, 3);

  return (
    <div className="border border-[#6b6a6a90] mx-6 px-8 py-5 my-5 rounded-2xl">
      <h2 className="text-[1.3rem] font-semibold">Users</h2>

      <div className="usersContainer flex flex-col gap-2 py-3">
        <div className="header flex items-center justify-between px-1 py-2 border-b border-b-[#6b6a6a90] text-[#5B5F68]">
          <h3 className="w-full  text-left">Name</h3>
          <h3 className="w-full  text-left">Plan</h3>
          <h3 className="w-full  text-left">MRR</h3>
          <h3 className="w-full  text-left">Actions</h3>
        </div>
        {slicedUserArray.map((user, i) => {
         
          return (
            <UserCard
              key={i}
              name={user.fullName}
              MRR={user.mrr}
              plan={user.plan}
              action="remove"
            
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersSection;
