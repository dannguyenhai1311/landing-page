import { RootState } from "@/app/store";
import { getApiData } from "@/services/apiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ContentsData from "@/content/ContentsData";
import LivingLabData from "@/content/LivingLabData";
import CampaignData from "@/content/CampaignData";
import FreeBoard from "@/content/FreeBoard";

const HomePage = () => {
  const notice = "/notice";
  const contents = "/content";
  const apiUrl = "http://qa.forum-bulletin-board.dev.politetech.com/api/v1";
  const searchValue = "title";
  const pageSize = 4;
  const [dataContent, setDataContent] = useState([
    {
      author: "Author",
      content: "Content",
      created_at: "Created At",
      id: "Id",
      title: "Title",
      updated_at: "Updated At",
      user_id: "User Id",
    },
  ]);
  useEffect(() => {
    axios
      .get(
        `${apiUrl}${notice}?search_value=${searchValue}&page_size=${pageSize}`
      )
      .then((response) => {
        setDataContent(response.data.data.list);
      });
  }, []);

  console.log("dataContent", dataContent);
  const titleData = [
    {
      titleSecond: `콘텐츠`,
    },
    {
      titleSecond: `리빙랩`,
    },
    {
      titleSecond: `캠페인`,
    },
    {
      titleSecond: `자유게시판`,
    },
  ];
  const user = useSelector((state: RootState) => state);
  console.log(user);
  return (
    <>
      <div className="w-full h-full">
        <header className="relative container-layout max-h-[900px] md:max-h-[1900px] bg-no-repeat -z-10 w-full">
          <div className="flex items-center justify-center left-auto right-auto flex-wrap top-[39%] flex-cols content-header">
            <div className="w-full md:w-[654px] h-[auto] flex flex-center justify-center items-start m-2">
              <div className="absolute m-5 text-3xl font-bold text-center text-white bottom-[40%] md:text-4xl">
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
      <section className="mx-[9%] h-full sm:max-h-[1280px] md:max-h-[2000px] lg:max-h-[922px] mt-[136px]">
        <div className="content-1">
          <div className="flex items-center justify-between mb-6">
            <div className=" text-2xl  text-[#000000] font-bold">공지사항</div>
            <span className="w-[40px] h-[40px] flex items-center justify-center text-center bg-[#0066C1]">
              <FontAwesomeIcon
                icon={faPlus}
                className="p-2 text-xl font-bold text-white"
              />
            </span>
          </div>
          <div className="grid h-full gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content">
            {dataContent.map((items, index) => {
              return (
                <div
                  key={index}
                  className="border relative border-[#CCCCCC] rounded-lg max-w-[400px] min-h-[150px] text-box bg-[##FFFFFF] hover:bg-primary hover:text-white p-5"
                >
                  <h3
                    className="text-[##3B4650] font-bold text-[15px]"
                    dangerouslySetInnerHTML={{ __html: items.author }}
                  ></h3>
                  <p
                    className="py-1 line-clamp-3 text-sm text-[##606A74]"
                    dangerouslySetInnerHTML={{ __html: items.content }}
                  ></p>
                  <span className="text-xs absolute bottom-3 mt-auto text-[##3B4650]">
                    {dayjs(items.created_at).format("YYYY-MM-DD")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-10 mt-[120px] content-2 sm:max-h-[1280px] md:max-h-[2000px] lg:max-h-[922px]">
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
                  <span className="w-[40px] h-[40px] flex items-center justify-center text-center bg-[#0066C1]">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="p-2 text-xl font-bold text-white"
                    />
                  </span>
                </div>
              </div>
            );
          })}
          <div className="border-t-2 border-b-2 border-[#0066C1]">
            <ContentsData />
          </div>
          <div className="border-t-2 border-b-2 border-[#0066C1]">
            <LivingLabData />
          </div>
          <div className="border-t-2 border-b-2 border-[#0066C1]">
            <CampaignData />
          </div>
          <div className="border-t-2 border-b-2 border-[#0066C1]">
            <FreeBoard />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
