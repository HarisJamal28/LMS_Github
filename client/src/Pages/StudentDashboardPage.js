import React from "react";

import Sidebar from "../StudentDashboardComponents/Sidebar"
import Snavbar from "../StudentDashboardComponents/Snavbar"
import Footer from "../StudentDashboardComponents/Footer";
import HomeDashboard from "../StudentDashboardComponents/HomeDashboard";
import { Outlet } from "react-router-dom";


export default function StudentDashboardPage() {

  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <div className="main-panel"> 
        <Snavbar/>
        <Outlet/>
        </div>
        
      
      </div> 
    </>
  );
}
