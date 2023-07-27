import Navbar from "../components/Navbar/NavbarOnlyView";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const ViewLayout = () => {
  return (
    <div className="grid w-full min-h-screen grid-rows-1 ">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ViewLayout;
