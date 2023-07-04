import NavbarLogin from "@/header/HeaderLogin";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
const FormLayout = () => {
  return (
    <div className="max-h-screen max-w-[1920px]">
      <NavbarLogin />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FormLayout;
