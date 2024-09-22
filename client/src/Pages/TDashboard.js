import React from "react";
import Tsidebar from "../TeacherDashboardComponent/Tsidebar";
import Tdashboardpage from "../TeacherDashboardComponent/dashboard";
import Tnavbar from "../TeacherDashboardComponent/Tnavbar";

export default function TDashboard() {
  return (
    <>
      <div className="wrap">
       <Tnavbar />
        <Tdashboardpage />
        <Tsidebar />
      </div>
      
    </>
  );
}
