import React from "react";
import Tsidebar from "../TeacherDashboardComponent/Tsidebar";
import Tnavbar from "../TeacherDashboardComponent/Tnavbar";
import MyCourse from "../TeacherDashboardComponent/MyCourse";

export default function Mycourse() {
  return (
    <>
      <div className="wrap">
       <Tnavbar />
        <MyCourse />
        <Tsidebar />
      </div>
      
    </>
  );
}