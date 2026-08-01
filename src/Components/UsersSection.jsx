import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { fetchUsers, planColors } from "../Data";

const UsersSection = () => {
  const [UserData, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const planColorArray = Object.entries(planColors);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetchUsers();
        setUserdata(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;
  const slicedUserArray = UserData.slice(0, 3);
  console.log(planColorArray);
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
              name={user.name}
              MRR={user.mrr}
              plan={user.plan}
              action="edit"
            
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersSection;
