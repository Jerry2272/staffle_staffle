// import React from "react";
import { Outlet } from "react-router-dom"; 
import { Navbar } from "../components/Navbar"; 

const ProjectLayout = () => {
  return (
    <> 
      <div className=" ">
        <Navbar />
        <Outlet /> 
      </div>
    </>
  );
};

export default ProjectLayout;
