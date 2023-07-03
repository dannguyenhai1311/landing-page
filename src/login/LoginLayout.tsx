import NavbarLogin from "@/header/HeaderLogin";
import FooterLogin from "@/components/Footer/FooterLogin";
import { Outlet } from "react-router-dom";
const FormLayout = () => {
  return (
    <div className="max-h-screen max-w-[1920px]">
      <NavbarLogin />
      <Outlet />
      <FooterLogin />
    </div>
  );
};

export default FormLayout;
