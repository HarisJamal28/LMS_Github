import React from "react";
import Navbar from "../CoursesComponents/CourseNavbar";
import Footer from "../LoginRegistarationComponents/Footer";
import { Outlet } from 'react-router-dom';
import Optionbar from "../CoursesComponents/Optionbar";

function CoursesPage() {
  return (
    <>
        <Navbar />
        <Optionbar/>
        <Outlet />
        <Footer/>
       
      
    </>
  );
}

export default CoursesPage;
