import facility from "@/assets/images/facility.png";
import facilityIcon from "@/assets/images/icon-facility.png";
import { useTranslation } from "react-i18next";
import { ReactComponent as Map } from "../../assets/images/facility.svg";
import { useCallback, useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { CommandType, FacilityData } from "@/models/Facility.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { ModalDetail } from "./ModalDetail";
const BUSAN = "부산";
const Facility = () => {
  const { t } = useTranslation();
  const [, updateState] = useState<any>();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [request, setRequest] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [data] = useState<Array<FacilityData>>([]);
  console.log("data: ", data);
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string>(BUSAN);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    (FacilityData & { index: number }) | null
  >(null);

  const onDetail = () => {
    setSelectedItem(selectedItem);
    setShowDetail(true);
  };
  const url = import.meta.env.VITE_SOCKET_FACILITY_ENDPOINT;
  const { readyState, sendJsonMessage } = useWebSocket(url, {
    onOpen: () => {
      console.log("Connect successfully!");
    },
    onClose: () => {
      console.log("Close!");
    },
    onMessage: (e) => {
      const res = JSON.parse(e.data);
      if (typeof res?.data?.number === "number" && request === 0) {
        setTotalCount(res?.data?.number);
        setRequest(1);
        return;
      }
      if (res.data && request === 1) {
        // console.log("res.data",res.data);
        data.push(res.data);
        if (data.length % 10 === 0 || data.length === totalCount) {
          // rerender batch
          forceUpdate();
        }
        if (data.length === totalCount - 1) {
          setLoading(false);
        }
      }
    },
    onError: (e) => {
      console.log("error", e);
    },
    filter: () => false,
  });
  const onSelectLocation = (district: string) => {
    if (district === location) {
      setLocation(BUSAN);
    } else {
      setLocation(district);
    }
  };

  useEffect(() => {
    if (readyState === 1) {
      // 1 - open
      setLoading(true);
      sendJsonMessage({
        head: "monitoring",
        command: CommandType.spot,
        data: {
          request,
        },
      });
    }
  }, [readyState, request]);
  const [selected, setSelected] = useState<any>();
  const handleClickMap = (e: any) => {
    const selectedId = e.target.id;
    const element = document.getElementById(selectedId);
    setSelected(element);
    if (element) {
      // const array = document.querySelectorAll("path");
      // array.forEach((element) => {
      //   element.classList.remove("mapItemActive");
      // });
      element.classList.toggle("mapItemActive");
      setBackgroundColor((prevColor) =>
      prevColor === "bg-[#80baef] text-[#0069C3]"
        ? " bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-white"
        : "bg-[#80baef] text-[#0069C3]"
    );
    }
  };
  const handleMouseMove = (e: any) => {
    const selectedId = e.target.id;
    const element = document.getElementById(selectedId);
    if (element) {
      const array = document.querySelectorAll("path");
      array.forEach((element) => {
        element.classList.remove("mapItemMouseMove");
      });
      element.classList.add("mapItemMouseMove");
    }
  };
  const [backgroundColor, setBackgroundColor] = useState(
    "bg-[#80baef] text-[#0069C3]"
  );
  const handleToggleColor = () => {
    setBackgroundColor((prevColor) =>
      prevColor === "bg-[#80baef] text-[#0069C3]"
        ? " bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-white"
        : "bg-[#80baef] text-[#0069C3]"
    );
    if (selected) {
      const array = document.querySelectorAll("path");
      array.forEach((element) => {
        element.classList.remove("mapItemActive");
      });
    }
  };
  return (
    <div className="w-full sm:h-full mx-auto">
      <>
        <div className="relative">
          <img
            src={facility}
            className="xl:mt-[100px] mt-[76px] w-full h-[300px] xl:h-auto object-cover overflow-hidden"
            alt=""
          />
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] text-white">
            <div
              data-aos="fade-up"
              className="flex flex-col items-center justify-center text-center right-0 left-0 mt-16 p-2 md:p-0"
            >
              <img src={facilityIcon} alt="" className="" />
              <p className="text-xl font-bold">
                깨끗한 바다 산을 위해 각 지역별 쓰레기 수거현황을 전합니다.
              </p>
            </div>
          </div>
        </div>
      </>

      <div className="xl:mx-[18%] md:mx-[12%] mx-auto max-w-[1240px] xl:pl-0">
        <h2 className="text-primary mt-10 text-2xl font-bold pl-5 md:pl-0">
          {t("nav.facilityStatus")}
        </h2>
        <div className="md:flex md:justify-between md:gap-x-[70px] px-5 md:px-0">
          <div className="mt-10">
            <button
              onClick={handleToggleColor}
              className={`${backgroundColor}  border w-[120px] h-[40px] rounded-lg border-[#006AC3] font-bold`}
            >
              {t("facility.ViewAllOfBusan")}
            </button>
            <div onMouseMove={handleMouseMove} onClick={handleClickMap}>
              <Map className="w-full h-[360px] md:h-auto md:w-[438px] xl:w-[550px] mb-10 md:mb-0 cursor-pointer"></Map>
            </div>
          </div>
          <div className="flex flex-col items-center xl:items-start">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-primary">영도구</span>
              <span>수거사각지대</span>
            </h3>
            <div className="xl:h-[600px] xl:w-[438px] md:w-[350px] md:h-[500px] h-[500px] shadow-lg scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin overflow-auto">
              {!data.length && (
                <div className="flex flex-col md:mx-0 p-2 md:p-0 items-center">
                  <h3 className="text-lg">
                    <span>현재 사용 가능한 데이터가 없습니다.</span>
                  </h3>
                </div>
              )}
              {data.length !== 0 &&
                data.map((items, index) => (
                  <div key={index} className="flex flex-col mx-2 md:mx-0">
                    <div className="w-full pl-3 md:pl-0 hover:bg-[#E6F3FF]">
                      <h2 className="text-lg font-bold md:px-5 mt-5">
                        {items.spotname}
                      </h2>
                      <div
                        onClick={onDetail}
                        className="flex flex-center w-full md:justify-between py-[10px] flex-1 gap-x-5 md:px-5"
                      >
                        <img
                          src={`data:image/png;base64, ${items.img}`}
                          alt="thumnail"
                          className="xs:h-[100px] xs:w-[150px] w-[99px] h-[66px] object-cover overflow-hidden"
                        />
                        <ul className="flex flex-col gap-y-2 w-[50%]">
                          <li className="flex items-center flex-center gap-x-1 font-medium text-sm ">
                            <FontAwesomeIcon
                              icon={faSquare}
                              className="w-[8px] h-[8px] text-primary"
                            />
                            <a>위치 : {items.address}</a>
                          </li>
                          <li className="flex items-center flex-center gap-x-1 font-medium text-sm">
                            <FontAwesomeIcon
                              icon={faSquare}
                              className="w-[8px] h-[8px] text-primary"
                            />
                            <a>{`길이: ${items.length}m`}</a>
                          </li>
                          <li className="flex items-center flex-center gap-x-1 font-medium text-sm">
                            <FontAwesomeIcon
                              icon={faSquare}
                              className="w-[8px] h-[8px] text-primary"
                            />
                            <a>{` 폭: ${items.breadth}m`}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <ModalDetail
        showDetail={showDetail}
        selectedItem={selectedItem}
        onClose={() => {
          setShowDetail(false);
          setSelectedItem(null);
        }}
      />
    </div>
  );
};
export default Facility;
