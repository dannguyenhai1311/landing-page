import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const HomePage = () => {
  const titleData = [
    {
      titleSecond: `콘텐츠`,
      titleFirst: `공지사항 입니다.`,
      desc: `튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ...`,
      date: `2023-05-05`,
    },
    {
      titleSecond: `리빙랩`,
      titleFirst: `공지사항 입니다.`,
      desc: `튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ...`,
      date: `2023-05-05`,
    },
    {
      titleSecond: `캠페인`,
      titleFirst: `공지사항 입니다.`,
      desc: `튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ...`,
      date: `2023-05-05`,
    },
    {
      titleSecond: `자유게시판`,
      titleFirst: `공지사항 입니다.`,
      desc: `튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ...`,
      date: `2023-05-05`,
    },
  ];
  const user = useSelector((state: RootState )=> state)
  console.log(user);
  return (
    
    <>
    <div className="w-full h-full">
      <header className="container-layout max-h-[900px] md:max-h-[1900px] bg-no-repeat -z-10 w-full">
        <div className="relative flex items-center justify-center left-auto right-auto flex-wrap top-[39%] flex-cols content-header">
          <div className="absolute w-full md:w-[654px] h-[auto] flex flex-center justify-center items-start m-2">
            <div className="absolute p-5 m-5 text-3xl font-bold text-center text-white md:text-4xl">
              <span>함께 하자,</span>
              <br />
              <span>깨끗한 바다 부산으로!</span>
              <p className="w-full px-2 py-5 text-sm md:text-xl text-[#C4F7FF] font-light">
                깨바부는 부산지역 내 테트라포드와 습지 현황에 대한 정보를
                제공하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
      <section className="mx-[9%] h-full sm:max-h-[1280px] md:max-h-[2000px] lg:max-h-[922px] mt-[140px]">
        <div className="content-1">
          <div className="flex items-center justify-between mb-6">
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
          <div className="grid h-full gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content">
            {titleData.map((items, index) => {
              return (
                <div
                  key={index}
                  className="border border-[#CCCCCC] rounded-lg max-w-[400px] min-h-[150px] text-box bg-[##FFFFFF] hover:bg-primary hover:text-white p-5"
                >
                  <h3 className="text-[##3B4650] text-[15px]">
                    {items.titleFirst}
                  </h3>
                  <p className="py-1 text-sm text-[##606A74]">{items.desc}</p>
                  <span className="text-xs text-[##3B4650]">{items.date}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 mt-[120px] p-5 content-2 sm:max-h-[1280px] md:max-h-[2000px] lg:max-h-[922px]">
          {titleData.map((items, index) => {
            return (
              <div>
                <div
                  key={index}
                  className="flex items-center justify-between mb-5"
                >
                  <div className=" text-2xl  text-[#000000] font-bold">
                    {items.titleSecond}
                  </div>
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
                <ul className="border-t-2 border-b-2 border-[#0066C1]">
                  {Array(4)
                    .fill(0)
                    .map(() => {
                      return (
                        <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6] p-2">
                          <div className="flex items-center justify-between flex-center gap-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={0}
                              stroke="currentColor"
                              className="w-2 h-2 font-bold text-white bg-[#3B4650]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                            <a href="">콘텐츠 제목</a>
                          </div>
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
                      );
                    })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;
