import React from "react";
import Tsidebar from "../TeacherDashboardComponent/Tsidebar";
import Tnavbar from "../TeacherDashboardComponent/Tnavbar";
import ManageStudents from "../TeacherDashboardComponent/ManageStudents";

export default function ManageStudent() {
  return (
    <>
      <div className="wrap">
       <Tnavbar />
        <ManageStudents />
        <Tsidebar />
      </div>
      
    </>
  );
}
