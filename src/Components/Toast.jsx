import React, { useEffect } from "react";
import { useNavigate } from "react-router";
const Toast = ({ message, type = "success", settoast }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
        settoast(false);
        navigate("/adduser");
    }, 3000); 
    return () => clearTimeout(timer); 
  }, []);


  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? "✓" : "✕";

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slideIn z-50`}
    >
      <span className="text-xl font-bold">{icon}</span>
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Toast;
