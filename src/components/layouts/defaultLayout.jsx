import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
