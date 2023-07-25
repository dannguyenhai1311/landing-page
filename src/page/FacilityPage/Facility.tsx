import facility from "@/assets/images/facility.png";
import { useTranslation } from "react-i18next";
import { ReactComponent as Map } from "../../assets/images/facility.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { CommandType, FacilityData } from "@/models/Facility.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const Facility = () => {
  const { t } = useTranslation();
  // const role = useSelector((state: any) => state.auth.role);
  const [, updateState] = useState<any>();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [request, setRequest] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [data] = useState<Array<FacilityData>>([]);
  console.log("data: ", data);
  const [loading, setLoading] = useState(false);
  const a = import.meta.env.VITE_SOCKET_FACILITY_ENDPOINT;
  const { readyState, sendJsonMessage } = useWebSocket(a, {
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
  const handleClick = (e: any) => {
    const selectedId = e.target.id;
    const element = document.getElementById(selectedId);
    setSelected(element);
    if (element) {
      const array = document.querySelectorAll("path");
      array.forEach((element) => {
        element.classList.remove("mapItemActive");
      });
      element.classList.add("mapItemActive");
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
    console.log("1");
    setBackgroundColor((prevColor) =>
      prevColor === "bg-[#80baef] text-[#0069C3]"
        ? " bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-white"
        : "bg-[#80baef] text-[#0069C3]"
    );
    if (selected) {
      const array = document.querySelectorAll("path");
      console.log("object", array);
      array.forEach((element) => {
        element.classList.remove("mapItemActive");
      });
    }
  };
  return (
    <div className="w-full sm:h-full mx-auto">
      <img
        src={facility}
        className="xl:mt-[100px] mt-[76px] w-full h-[300px] xl:h-auto object-cover overflow-hidden"
        alt=""
      />
      <div className="xl:mx-[18%] md:mx-[12%] mx-auto max-w-[1240px] xl:pl-0">
        <h2 className="text-primary mt-10 text-2xl font-bold pl-5 md:pl-0">
          {t("nav.facilityStatus")}
        </h2>
        <div className="md:flex md:justify-between md:gap-x-[70px] px-5 md:px-0">
          <div className="mt-10">
            <button
              onClick={handleToggleColor}
              className={`${backgroundColor} border w-[120px] h-[40px] rounded-lg border-[#006AC3] font-bold`}
            >
              {t("facility.ViewAllOfBusan")}
            </button>

            <div onMouseMove={handleMouseMove} onClick={handleClick}>
              <Map className="w-full h-[360px] md:h-auto md:w-[438px] xl:w-[550px] mb-10 md:mb-0 cursor-pointer"></Map>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-primary">영도구</span>
              <span>수거사각지대</span>
            </h3>
            <div className="xl:h-[600px] xl:w-[438px] md:w-[350px] md:h-[500px] h-[500px] shadow overflow-auto scrollbar scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-100 snap-normal">
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
                      <h2 className="text-base font-bold md:px-5 mt-5">{items.spotname}</h2>
                      <div className="flex flex-center w-full md:justify-between py-[10px] flex-1 gap-x-5 md:px-5">
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
                            <a>{`위치 : ${items.length}m`}</a>
                          </li>
                          <li className="flex items-center flex-center gap-x-1 font-medium text-sm">
                            <FontAwesomeIcon
                              icon={faSquare}
                              className="w-[8px] h-[8px] text-primary"
                            />
                            <a>{`위치 : ${items.breadth}m`}</a>
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
    </div>
  );
};

export default Facility;
