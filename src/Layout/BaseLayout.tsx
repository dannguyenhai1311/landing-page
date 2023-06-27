import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex flex-col flex-1">
      <Outlet/> 
      </div>
      <Footer/>
    </div>
  );
};

export default BaseLayout;
