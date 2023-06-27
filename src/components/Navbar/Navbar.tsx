import logoLogo from "../img/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const showNavbar = () => {
    buttonRef.current?.classList.toggle("responsive-nav");
  };
  const {t} = useTranslation()
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location);
  const pathName = location.pathname;
  const checkActive = (to: string) => {
    return pathName === to;
  };
  console.log(checkActive("/"));
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  const LinkList = [
    {
      to: "/",
      title: t("nav.home"),
      id: 1,
    },
    {
      to: "/introduction",
      title: t("nav.introduction"),
      id: 2,
    },
    {
      to: "/notification",
      title: t("nav.announcement"),
      id: 3,
    },
    {
      to: "/facility",
      title: t("nav.facilityStatus"),
      id: 4,
    },
    {
      to: "/contents",
      title: t("nav.content"),
      id: 5,
    },
    {
      to: "/LivingLab",
      title: t("nav.livingLab"),
      id: 6,
    },
    {
      to: "/campaign",
      title: t("nav.campaign"),
      id: 7,
    },
    {
      to: "/freeBoard",
      title: t("nav.freeBoard"),
      id: 8,
    },
  ];
  return (
    
    <div>
      <nav
        className={` ${
          checkActive("/") ? "text-white" : "bg-white  shadow"
        } flex  justify-between p-5 pl-5 md:p-8 flex-center gap-x-10  px-[10px] md:pl-[15%] font-semibold  w-full absolute`}
      >
        <a href="/">
          <img src={logoLogo} className="w-[218px] h-[36px]" alt="" />
        </a>
        <div
          ref={buttonRef}
          className="flex items-center justify-around navigation flex-center"
        >
          <ul className="flex text-xl font-light md:-mr-[40%] navbar gap-x-5">
            {LinkList.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                onClick={() => {if(item.to === "/freeBoard") handleLogOut()}}
                className={({ isActive }) => {
                  return isActive
                    ? checkActive("/")
                      ? "text-white font-bold"
                      : "text-[#0066C1] font-bold"
                    : "";
                }}
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
          <button className="nav-btn " onClick={showNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-7 h-7 button sd:w-[50px] sd:h-[50px]  md:right-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 button nav-close-btn sm:w-[50px] sm:h-[50px]  md:right-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
