import React, { useContext } from "react";
import { Link } from "react-router";
import UserContext from "./UserContext";

const Header = (props) => {
  const {role, setrole} = useContext(UserContext);
  return (
    <div className="py-2 px-5 flex items-center justify-between">
      <div className="left">
        <h1 className="text-3xl">
          {props.page === "users" && "Users"}
          {props.page === "overview" && "Overview"}
          {props.page === "reports" && "Reports"}
        </h1>
        <p className="text-base font-light">
          {props.page === "users" && `${props.NoUsers} Total`}
          {props.page === "reports" && `Revenue Trend`}
          {props.page === "overview" && "Last 30 days"}
        </p>
      </div>
      <div
        className={`right flex items-center gap-4 ${props.page === "reports" && "hidden"}`}
      >
        
        <select name="role" id="role" value={role} onChange={(e)=>setrole(e.target.value)} className="border px-8 text-sm py-2 rounded-lg outline-none">
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
        <Link to="/adduser" className={`${role === "viewer" && "hidden"}`}> 
          <button className=" cursor-pointer px-8 text-sm py-2 bg-[#3D5A80] border-none outline-none rounded-lg text-white">
            Add user
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
