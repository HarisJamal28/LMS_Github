import React from "react";
import Tsidebar from "../TeacherDashboardComponent/Tsidebar";
import Tnavbar from "../TeacherDashboardComponent/Tnavbar";
import CreateAssigment from "../TeacherDashboardComponent/CreateAssigment";

export default function Assignment() {
  return (
    <>
      <div className="wrap">
       <Tnavbar />
        <CreateAssigment />
        <Tsidebar />
      </div>
      
    </>
  );
}
