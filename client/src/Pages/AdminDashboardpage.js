import React from "react";
import Navbar from '../LoginRegistarationComponents/Navbar';
import AsideBar from "../Admin/AsideBar";
import AdminDashboard from '../Admin/AdminDashboard';
import ACourses from '../Admin/Acourses';
import InstructorRequests from '../Admin/instructor';
import InstructorDetail from '../Admin/Idetails';
import ReviewTable from '../Admin/Reviews';
import InvoiceDashboard from '../Admin/Earnings';
import AdminSettings from '../Admin/Settings';
import Students from '../Admin/TotalStudents';
import { Routes, Route } from 'react-router-dom';

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />
      <AsideBar />
      <div className='Box-margin'>
        <div className='m-3'>
          {/* Admin routes here */}
          <Routes>
            <Route path="AdminDashboard" element={<AdminDashboard />} />
            <Route path="ACourses" element={<ACourses />} />
            <Route path="Irequest" element={<InstructorRequests />} />
            <Route path="Idetails" element={<InstructorDetail />} />
            <Route path="Reviews" element={<ReviewTable />} />
            <Route path="Earnings" element={<InvoiceDashboard />} />
            <Route path="Settings" element={<AdminSettings />} />
            <Route path="Totalstudents" element={<Students />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
