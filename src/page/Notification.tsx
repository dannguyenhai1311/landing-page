import { RootState } from "@/app/store";
import notication from "@/assets/images/notication.png";
import { Pagination } from "@/components/Pagination/Pagination";
import { getApiData } from "@/services/apiService";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { t } from "i18next";

const Notification = () => {
  const PAGE_SIZE = 10;

  type OptionType = {
    value: string;
    label: string;
  };
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const notice = "/notice";
  const searchValue = "title";
  const pageSize = 20;
  const [noticeList, setNoticeList] = useState([
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

  const SEARCH_BY_LIST: any[] = [
    { value: "title", label: t("common.title") },
    { value: "author", label: t("common.author") },
  ];
  const [selectedOption, setSelectedOption] = useState<OptionType>(
    SEARCH_BY_LIST[0]
  );

  const [filter, setFilter] = useState({
    searchBy: selectedOption.value,
    searchValue: "",
    page: 0,
    pageSize: PAGE_SIZE,
  });
  const [currentData, setCurrentData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiData(
          `${notice}?search_value=${searchValue}&page_size=${pageSize}`
        );
        setNoticeList(data.data.list);
        const startIndex = filter.page * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        const value = data.data.list.slice(startIndex, endIndex);
        setCurrentData(value);
      } catch (error) {
        // Xử lý lỗi nếu cần thiết
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("noticeList", noticeList);
    const startIndex = filter.page * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const value = noticeList.slice(startIndex, endIndex);
    setCurrentData(value);
    // noticeList.slice(startIndex, endIndex);
  }, [filter]);

  console.log("apiData", noticeList);
  return (
    <div>
      {isLoading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full mt-[200px] border-primary border-t-transparent animate-spin"></div>
      )}
      {!isLoading && (
        <div className="w-full h-full mx-auto">
          <img
            src={notication}
            className="md:mt-[100px] mt-[76px] w-full h-[200px] md:h-auto object-cover overflow-hidden"
            alt=""
          />

          <div className="md:w-[1240px] min-w-[360px] mx-auto p-[24px] md:p-0">
            <div className="mb-[42px] mt-16 md:flex gap-x-2 flex-center justify-between">
              <h1 className="text-2xl mb-2 md:md-0 font-bold text-[#0069C3]  ">
                공지사항
              </h1>
              <div className="md:flex  mb-2 md:mb-0  gap-[10px]">
                <select className="border p-2 border-[#C0C0C0] w-[100px]">
                  <option value="">제목</option>
                </select>
                <div className="flex mt-2 md:mt-0">
                  <input
                    className="border w-[200px] md:w-[360px] border-[#C0C0C0]"
                    type="text"
                    name=""
                    id=""
                  />
                  <button className="flex text-white bg-[#009FE5] border w-[88px]  items-center justify-center border-[#C0C0C0]">
                    {" "}
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2" />
                    <span>검색</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mx-auto flex-center snap-x">
              <table className="w-full h-full">
                <thead>
                  <tr className="bg-[#d4e9fc]">
                    <th className="w-[6%] text-[14px] font-bold">
                      <div className="my-[10px] h-[30px] border-r border-[#7DA7CC] leading-[30px]">
                        번호
                      </div>
                    </th>
                    <th className="text-[14px] font-bold max-md:w-[380px] ">
                      <div className="my-[10px] h-[30px] border-r border-[#7DA7CC] leading-[30px]">
                        제목
                      </div>
                    </th>
                    <th className="text-[14px] font-bold w-[6%] max-md:w-[380px]">
                      <div className="my-[10px] h-[30px] border-r border-[#7DA7CC] leading-[30px]">
                        작성자
                      </div>
                    </th>
                    <th className="w-[180px] text-[14px] font-bold  ">
                      <div className="my-[10px] h-[30px] leading-[30px]">
                        작성일
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData?.length
                    ? currentData.map((item) => {
                        return (
                          <tr
                            key={item.id}
                            className="h-[50px] cursor-pointer border-b"
                            // onClick={onDetail(item.id)}
                          >
                            <td
                              className="flex items-center justify-center py-[15px] text-center text-[14px]"
                              key="numerical_order"
                            >
                              <div>1</div>
                            </td>

                            <td className="text-[14px] max-md:w-[380px] md:pl-[3.8%] md:text-left">
                              {item.title}
                            </td>
                            <td className="max-w-[200px] text-center text-[14px] max-md:w-[380px] ">
                              {item.author}
                            </td>
                            <td className="w-[180px] text-center text-[14px]">
                              {dayjs(item.created_at).format("YYYY-MM-DD")}
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
              {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              /> */}
            </div>
            <Pagination
              className="flex"
              currentPage={filter.page + 1}
              totalCount={noticeList.length}
              pageSize={PAGE_SIZE}
              onPageChange={(page) => setFilter({ ...filter, page: page - 1 })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
