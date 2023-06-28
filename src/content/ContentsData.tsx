import { getApiData } from '@/services/apiService';
import  { useEffect, useState } from 'react';
import {
  faSquare,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContentsData = () => {
  const contents = "/content";
  const searchValue = "title";
  const pageSize = 4;
  const [apiData, setApiData] = useState([
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
    const fetchData = async () => {
      try {
        const data = await getApiData(
          `${contents}?search_value=${searchValue}&page_size=${pageSize}`
        );
        setApiData(data.data.list);
      } catch (error) {
        // Xử lý lỗi nếu cần thiết
      }
    };
    fetchData();
  }, []);
  // console.log("apiData", apiData);
  return (
    <>
       <ul className="border-t-2 border-b-2 border-[#0066C1]">
                  {apiData.map((items) => {
                    return (
                      <li className="flex items-center justify-between flex-center max-w-[360px] h-[60px] hover:bg-[#F6F6F6] p-2">
                        <div className="flex items-center justify-between flex-center gap-x-2">
                          <FontAwesomeIcon
                            icon={faSquare}
                            className="w-[8px] h-[8px]"
                          />
                          <a className="line-clamp-1" href="">
                            {items.title}
                          </a>
                        </div>
                        <span>
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="w-[10px] h-[16px]"
                          />
                        </span>
                      </li>
                    );
                  })}
                </ul>
    </>
  );
};

export default ContentsData;