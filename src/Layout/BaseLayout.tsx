import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <div className="grid min-h-screen grid-rows-1 ">
      <Navbar />
      <div className="flex flex-col flex-1 mt-[76px] md:mt-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
