import React from "react";
import { useAuth } from "../hooks";

// Chat
const Home = () => {
  // auth
  const { auth } = useAuth();

  return (
    <div className="p-4 rounded-lg">
      <h3>Welcome! {auth?.user?.username || "No User Found"}</h3>
    </div>
  );
};

export default Home;
