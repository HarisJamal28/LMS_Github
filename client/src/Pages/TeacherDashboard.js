import React from "react";
import Tnavbar from "../TeacherDashboardComponent/Tnavbar";
import Tsidebar from "../TeacherDashboardComponent/Tsidebar";

export default function TeacherDashboard() {
  return (
    <>
      <div className="wrapper">
        <Tnavbar />
        <Tsidebar />
        
      </div>
    </>
  );
}
