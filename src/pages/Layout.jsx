import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout(props) {
  const {setSearchText} = props
  return (
    <div>
      <Header {...props}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
