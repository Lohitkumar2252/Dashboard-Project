import React from "react";

const Header = () => {
  return (
    <div className="py-2 px-5 flex items-center justify-between">
      <div className="left">
        <h1 className="text-3xl">Overview</h1>
        <p className="text-base font-light">Last 30 days</p>
      </div>
      <div className="right flex items-center gap-4">
        <button className="border px-8 text-sm py-2 rounded-lg">Admin</button>
        <button className="px-8 text-sm py-2 bg-[#3D5A80] border-none outline-none rounded-lg text-white">Add user</button>
      </div>
    </div>
  );
};

export default Header;
