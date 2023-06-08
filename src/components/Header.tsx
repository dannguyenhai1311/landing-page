import { useRef } from "react";
import logoLogo from "./img/logo.png";
const Header = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const showNavbar = () => {
    buttonRef.current?.classList.toggle("responsive-nav");
  }
  return (
    <div className="w-full h-full">
      <header className="container-layout max-h-[900px] -z-10 w-full">
        <nav className="flex justify-between p-2 pl-5 md:p-8 text-white flex-center gap-x-10  px-[10px] md:pl-[15%]  w-full">
          <a href="#">
            <img src={logoLogo} className="w-[218px] h-[36px]" alt="" />
          </a>
          <div
            ref={buttonRef}
            className="flex items-center justify-around navigation flex-center"
          >
            <ul className="flex text-xl font-light md:-mr-[40%] navbar gap-x-5">
              <li className="hover:font-medium ">
                <a href="#">홈</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">소개</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">소개공지사항</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">시설현황</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">콘텐츠</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">리빙랩</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">캠페인</a>
              </li>
              <li className="hover:font-medium">
                <a href="#">자유게시판</a>
              </li>
            </ul>
            <button className="nav-btn " onClick={showNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 button"
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
              className="w-6 h-6 button nav-close-btn"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
        <div className="relative flex items-center justify-center left-auto right-auto flex-wrap top-[39%] flex-cols content-header">
          <div className="absolute w-full md:w-[654px] h-[auto] flex flex-center justify-center items-start m-2">
            <div className="absolute text-3xl font-bold text-center text-white md:text-4xl">
              <span>함께 하자,</span>
              <br />
              <span>깨끗한 바다 부산으로!</span>
              <p className="w-full px-0 py-5 text-sm md:text-xl text-[#C4F7FF] font-light">
                깨바부는 부산지역 내 테트라포드와 습지 현황에 대한 정보를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
