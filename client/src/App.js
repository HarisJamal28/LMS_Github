import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyContext, MyProvider } from "././ContextApi/Context";
import { useState } from "react";

import Login from "./LoginRegistarationComponents/Login";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentDashboardPage from "./Pages/StudentDashboardPage";
import CoursesPage from "./Pages/CoursesPage";
import PageNotFound from "./LoginRegistarationComponents/PageNotFound";
import ShowProfileDetails from "./UserProfile/ShowProfileDetails";
import CoursesRegistration from "./CoursesComponents/CoursesRegistration";
import Invoice from "./CoursesComponents/Invoice";
import MyCourses from "./CoursesComponents/MyCourses";
import CourseCatagory from "./CoursesComponents/CourseCatagory";
import RegisterOption from "./LoginRegistarationComponents/RegisterOption";
import Register from "./LoginRegistarationComponents/Register";
import Profile from "./LoginRegistarationComponents/Profile";
import ChallanDetails from "./CoursesComponents/ChallanDetails";
import HomeDashboard from "./StudentDashboardComponents/HomeDashboard";
import Videos from "./StudentDashboardComponents/Videos";
import Quiz from "./StudentDashboardComponents/Quiz";
import Assignments from "./StudentDashboardComponents/Assignments";
import Results from "./StudentDashboardComponents/Results";
import Certification from './StudentDashboardComponents/Certification';
import ZoomSession from "./StudentDashboardComponents/ZoomSession";
import Projects from "./StudentDashboardComponents/Projects";
import Comunity from "./StudentDashboardComponents/Comunity";
import CourseDetails from "./TeacherDashboardComponent/CourseDetails";
import ScheduleClass from "./TeacherDashboardComponent/ScheduleClass";
import GradeAssigment from "./TeacherDashboardComponent/GradeAssigment";
import Setting from "./TeacherDashboardComponent/Setting";
import TDashboard from "./Pages/TDashboard";
import Mycourse from "./Pages/Mycourse";
import Assignment from "./Pages/Assigment";
import ManageStudent from "./Pages/ManagestudentPage";
import AdminDashboardpage from './Pages/AdminDashboardpage';
import ACourses from './Admin/Acourses';
import AdminDashboard from './Admin/AdminDashboard';
import InvoiceDashboard from './Admin/Earnings';
import InstructorDetail from './Admin/Idetails';
import InstructorRequests from './Admin/instructor';
import CreateInstructor from "./Admin/InstructorCreate";
import AdminSettings from './Admin/Settings';
import Students from './Admin/TotalStudents';
import ReviewTable from './Admin/Reviews';

function App() {
  const [courseCount, setCourseCount] = useState(0);
  const updateCourseCount = (e) => {
    setCourseCount(e);
  };
  const [Courses, setCourses] = useState([]);
  const addCourses = (e) => {
    setCourses([...Courses, e]);
  };

  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />}>
            <Route index element={<RegisterOption />} />
          </Route>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Courses/" element={<CoursesPage />}>
            <Route index element={<CoursesRegistration />} />
            <Route path="Userprofile" element={<ShowProfileDetails />} />
            <Route path="CourseCatagory" element={<CourseCatagory />} />
            <Route path="Mycourses" element={<MyCourses />} />
            <Route path="Invoice" element={<Invoice />} />
            <Route path="ChallanDetails" element={<ChallanDetails />} />
          </Route>
          <Route path="/dashboard" element={<StudentDashboardPage />}>
            <Route index element={<HomeDashboard />} />
            <Route path="Videos" element={<Videos />} />
            <Route path="ZoomSession" element={<ZoomSession />} />
            <Route path="Quiz" element={<Quiz />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Results" element={<Results />} />
            <Route path="Certification" element={<Certification />} />
            <Route path="Comunity" element={<Comunity />} />
          </Route>
          <Route path="/Tdashboardpage" element={<TDashboard />} />
          <Route path="/Mycourse" element={<Mycourse />} />
          <Route path="/CreateAssigment" element={<Assignment />} />
          <Route path="/ManageStudents" element={<ManageStudent />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/gradeassigment" element={<GradeAssigment />} />
          <Route path="/scheduleClass" element={<ScheduleClass />} />
          <Route path="/setting" element={<Setting />} />

          {/* Admin Routes */}
          <Route path="/Adashboardpage" element={<AdminDashboardpage />} />
          <Route path="/Adashboard" element={<AdminDashboard />} />
          <Route path="/Acourses" element={<ACourses />} />
          <Route path="/Irequest" element={<InstructorRequests />} />
          <Route path="/Idetails" element={<InstructorDetail />} />
          <Route path="/Iregisteration" element={<CreateInstructor />} />
          <Route path="/Reviews" element={<ReviewTable />} />
          <Route path="/Earnings" element={<InvoiceDashboard />} />
          <Route path="/Settings" element={<AdminSettings />} />
          <Route path="/Totalstudents" element={<Students />} />
          <Route path="/CreateCourse" element={<CourseDetails />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;