import React, { useContext, useState } from "react";
import Register from "../LoginRegistarationComponents/Register";
import Head from "../LoginRegistarationComponents/Head";
import Navbar from "../LoginRegistarationComponents/Navbar";
import Profile from "../LoginRegistarationComponents/Profile";
import { MyContext } from "../ContextApi/Context";
import Footer from "../LoginRegistarationComponents/Footer";
import RegisterOption from "../LoginRegistarationComponents/RegisterOption";
import { Outlet } from "react-router-dom";

function RegistrationPage() {
  const { pageName } = useContext(MyContext);
  return (
    <>
      <Head />
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default RegistrationPage;
