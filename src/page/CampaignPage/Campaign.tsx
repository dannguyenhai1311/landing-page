import { getApiData } from "@/services/apiService";
import { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { loginStart } from "@/features/auth/authSlice";
import { Pagination } from "@/components/Pagination";

const Campaign = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchValue = "title";
  const [selectedOption, setSelectedOption] = useState("title");
  const PAGE_SIZE = 12;
  const pageSize = 20;
  const [currentData, setCurrentData] = useState<any[]>([]);
  console.log(currentData);
  const handleSearch = async () => {
    const data = await getApiData(
      `campaign?search_by=${selectedOption}&search_value=${search}&page=0&page_size=10`
    );
    setCurrentData(data.data.list);
  };
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
  useEffect(() => {
    const fetchData = async () => {
      dispatch(loginStart(true));
      try {
        const data = await getApiData(
          `campaign?search_value=${searchValue}&page_size=${pageSize}`
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
    <div className="md:w-[1240px] min-w-[360px] mx-auto p-[24px] md:p-0 mt-[97px]">
      <div className="mb-[42px] mt-16 md:flex gap-x-2 flex-center justify-between">
        <h1 className="mb-2 text-2xl font-bold text-transparent md:md-0 bg-gradient-to-r from-[#0066C1] to-[#009FE5] bg-clip-text ">
          캠페인
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
      <div className="grid- grid w-full grid-cols-[repeat(auto-fit,minmax(270px,1fr))]  gap-[20px]">
        {currentData.map((i) => {
          return (
            <div className="cursor-pointer  border-[1px] border-[#CCCCC]">
              <div className="h-[210px] w-full">
                <img
                  className="w-full h-full object-cover"
                  src={i.image}
                  alt=""
                />
              </div>
              <div className="h-[60px] hover:bg-[#0066C1] w-full border-[1px] border-[#CCCC] bg-[#D4E9FC]">
                <h3 className="lin h-full text-center text-[15px] leading-[60px]">
                  {i.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        className="flex"
        currentPage={filter.page + 1}
        totalCount={noticeList.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setFilter({ ...filter, page: page - 1 })}
      />
    </div>
  );
};

export default Campaign;
