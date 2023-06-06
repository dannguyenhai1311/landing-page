const Content = () => {
  return (
    <>
      <section className="mx-[9%] h-full md:max-h-[922px] mt-[140px]">
        <div className="content-1">
          <div className="flex items-center justify-between mb-5">
            <div className=" text-2xl  text-[#000000] font-bold">공지사항</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4.0}
                stroke="currentColor"
                className="w-10 h-10 p-2 font-bold text-white bg-[#0066C1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </div>
          <div className="grid gap-10 md:grid-cols-4 content">
            <div className="border border-[#0066C1] rounded-lg max-w-[360px] text-box bg-primary">
              <h3 className="text-[#FFFFFF] text-[15px] p-2">
                공지사항 입니다.
              </h3>
              <p className="p-2 text-sm text-[#FFFFFF]">
                튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의
                바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고
                두손을 원대하고, 인간의 봄바람이 ...
              </p>
              <span className="text-xs p-2 text-[#FFFFFF]">2023-05-05</span>
            </div>
            <div className="border border-[#CCCCCC] rounded-lg max-w-[360px] text-box bg-[##FFFFFF]">
              <h3 className="text-[#3B4650] text-[15px] p-2">
                공지사항 입니다.
              </h3>
              <p className="p-2 text-sm text-[##606A74]">
                튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의
                바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고
                두손을 원대하고, 인간의 봄바람이 ...
              </p>
              <span className="text-xs p-2 text-[##3B4650]">2023-05-05</span>
            </div>
            <div className="border border-[#CCCCCC] rounded-lg max-w-[360px] text-box bg-[##FFFFFF]">
              <h3 className="text-[#3B4650] text-[15px] p-2">
                공지사항 입니다.
              </h3>
              <p className="p-2 text-sm text-[##606A74]">
                튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의
                바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고
                두손을 원대하고, 인간의 봄바람이 ...
              </p>
              <span className="text-xs p-2 text-[##3B4650]">2023-05-05</span>
            </div>
            <div className="border border-[#CCCCCC] rounded-lg max-w-[360px] text-box bg-[##FFFFFF]">
              <h3 className="text-[#3B4650] text-[15px] p-2">
                공지사항 입니다.
              </h3>
              <p className="p-2 text-sm text-[##606A74]">
                튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의
                바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고
                두손을 원대하고, 인간의 봄바람이 ...
              </p>
              <span className="text-xs p-2 text-[##3B4650]">2023-05-05</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-10 mt-[120px] p-5 content-2">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className=" text-2xl  text-[#000000] font-bold">콘텐츠</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.0}
                  stroke="currentColor"
                  className="w-10 h-10 p-2 font-bold text-white bg-[#0066C1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </div>
            <ul className="list-decimal border-t-2 border-b-2 border-[#0066C1]">
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className=" text-2xl  text-[#000000] font-bold">콘텐츠</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.0}
                  stroke="currentColor"
                  className="w-10 h-10 p-2 font-bold text-white bg-[#0066C1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </div>
            <ul className="list-decimal border-t-2 border-b-2 border-[#0066C1]">
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">리빙랩</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className=" text-2xl  text-[#000000] font-bold">캠페인</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.0}
                  stroke="currentColor"
                  className="w-10 h-10 p-2 font-bold text-white bg-[#0066C1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </div>
            <ul className="list-decimal border-t-2 border-b-2 border-[#0066C1]">
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">자유게시판</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className=" text-2xl  text-[#000000] font-bold">콘텐츠</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4.0}
                  stroke="currentColor"
                  className="w-10 h-10 p-2 font-bold text-white bg-[#0066C1]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </div>
            <ul className="list-decimal border-t-2 border-b-2 border-[#0066C1]">
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6]">
                <a href="">콘텐츠 제목</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
