import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const pages = [
    { text: "Overview", url: "/" },
    { text: "Users", url: "users" },
    { text: "Reports", url: "reports" },
    { text: "Add User", url: "adduser" },
  ];
  const [Selected, setSelected] = useState("Overview");

  const handleClick = (clickedItem) => {
    setSelected(clickedItem);
  };
  return (
    <div className="p-3 flex">
      <aside className=" rounded-lg border border-[#8d8d8d76]  bg-[#F1F0EC] py-8 px-6 flex flex-col gap-10 w-full">
        <h1 className="font-bold text-xl">Pulse</h1>
        <ul className=" flex flex-col gap-2">
          {pages.map((e, i) => {
            return (
              <NavLink key={i} to={`${e.url}`}>
                <li
                  onClick={() => handleClick(e.text)}
                  className={`text-[#5B5F68] font-semibold w-full p-2 rounded-lg  ${Selected == e.text && "bg-[#FFFFFF] text-black"}`}
                >
                  {e.text}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
