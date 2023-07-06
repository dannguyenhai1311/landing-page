import { RootState } from "@/app/store";
import livingLab from "@/assets/images/LivingLab.png";
import { Pagination } from "@/components/Pagination/Pagination";
import { loginStart } from "@/features/auth/authSlice";
import { getApiData } from "@/services/apiService";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LivingLab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const PAGE_SIZE = 10;
  const pageSize = 20;
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const [search, setSearch] = useState("");
  const searchValue = "title";
  const notice = "/notice";
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("title");
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

  const [filter, setFilter] = useState({
    page: 0,
    pageSize: PAGE_SIZE,
  });

  const handleSearch = async () => {
    const data = await getApiData(
      `living-lab?search_by=${selectedOption}&search_value=${search}&page=0&page_size=10`
    );
    setCurrentData(data.data.list);
  };
  const handleClickDetail = (id: any) => {
    navigate(`/living-lab/${id}`)
  }
  useEffect(() => {
    const fetchData = async () => {
      dispatch(loginStart(true));
      try {
        const data = await getApiData(
          `living-lab?search_value=${searchValue}&page_size=${pageSize}`
        );
        setNoticeList(data.data.list);
        dispatch(loginStart(false));
        const startIndex = filter.page * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        const value = data.data.list.slice(startIndex, endIndex);
        setCurrentData(value);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const startIndex = filter.page * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const value = noticeList.slice(startIndex, endIndex);
    setCurrentData(value);
  }, [filter, noticeList]);

  return (
    <div>
      {isLoading && (
        <div className="absolute top-[40%] inset-0 justify-center w-10 h-10 mx-auto border-4 border-t-4 rounded-full mt- fex flex-center border-primary border-t-transparent animate-spin"></div>
      )}
      {!isLoading && (
        <div className="w-full h-full mx-auto">
          <img
            src={livingLab}
            className="md:mt-[100px] mt-[76px] w-full h-[200px] md:h-auto object-cover overflow-hidden"
            alt=""
          />

          <div className="md:w-[1240px] min-w-[360px] mx-auto p-[24px] md:p-0">
            <div className="mb-[42px] mt-16 md:flex gap-x-2 flex-center justify-between">
              <h1 className="mb-2 text-2xl font-bold text-transparent md:md-0 bg-gradient-to-r from-[#0066C1] to-[#009FE5] bg-clip-text ">
                공지사항
              </h1>
              <div className="md:flex  mb-2 md:mb-0  gap-[10px]">
                <select
                  onChange={(e: any) => setSelectedOption(e.target.value)}
                  className="border p-2 border-[#C0C0C0] w-[100px]"
                >
                  <option value="title">제목</option>
                  <option value="author">작성자</option>
                </select>
                <div className="flex mt-2 md:mt-0">
                  <input
                    className="border w-[200px] p-2 md:w-[360px] border-[#C0C0C0]"
                    onChange={(e: any) => setSearch(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <button
                    onClick={handleSearch}
                    type="submit"
                    className="flex text-white bg-gradient-to-r from-[#0066C1] to-[#009FE5] border w-[88px]  items-center justify-center border-[#C0C0C0]"
                  >
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
                    <th className="w-[180px] text-[14px] font-bold">
                      <div className="my-[10px] h-[30px] leading-[30px]">
                        작성일
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData?.length
                    ? currentData.map((item, index) => {
                        return (
                          <tr
                            key={item.id}
                            onClick={() => handleClickDetail(item.id)}
                            className="h-[50px] cursor-pointer border-b"
                          >
                            <td
                              className="flex items-center justify-center py-[15px] text-center text-[14px]"
                              key="numerical_order"
                            >
                              <div>
                                {noticeList.length -
                                  (PAGE_SIZE * filter.page + index)}
                              </div>
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

export default LivingLab;
