import React from "react";

const UserCard = ({ name, plan, MRR, action }) => {
  return (
    <div className="border-b border-b-[#6b6a6a90] flex items-center justify-between p-1 py-2 ">
      <h4 className=" w-full text-left capitalize">{name}</h4>
      <button className=" w-full text-left capitalize bg">{plan}</button>
      <p className=" w-full text-left capitalize">{MRR}</p>
      <p className=" w-full text-left capitalize">{action}</p>
    </div>
  );
};

export default UserCard;
