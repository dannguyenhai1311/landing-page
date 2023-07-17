import facility from "@/assets/images/facility.png";
import { useTranslation } from "react-i18next";
import { ReactComponent as Map } from "../../assets/images/facility.svg";
const Facility = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1920px] h-full mt-[100px] md:mt-[97px]">
      <img src={facility} className="w-full h-[300px] object-cover" alt="" />
      <div className="mx-[17%] max-w-[1240px] mt-[60px]">
        <div>
          <h2 className="text-primary text-2xl font-bold">
            {t("nav.facilityStatus")}
          </h2>
          <div className="flex flex-center justify-center gap-x-2 mr-80">
            <button className="border w-[120px] h-[40px] rounded-lg border-[#006AC3] bg-[#B7DCFF] text-primary">
              {t("facility.ViewAllOfBusan")}
            </button>
            <button className="border w-[120px] h-[40px] rounded-lg border-[#006AC3]  text-white bg-gradient-to-r from-[#0066C1] to-[#009FE5]">
              {t("facility.ViewAllOfBusan")}
            </button>
          </div>
          <div className="flex justify-between mt-[37px] gap-x-[70px]">
            <div>
              <Map></Map>
            </div>
            <div className="h-[634px] w-[438px]">
              <h3 className="text-lg font-bold">
                <span className="text-primary">영도구</span>
                <span>수거사각지대</span>
              </h3>
              <div className="w-full p-2">
                <h2>부산국립해양대학교 진입로 방파재</h2>
                <div className="flex w-[438px] flex-center justify-between py-[10px]">
                  <div className="w-[150px] h-[100px] bg-[#D9D9D9]"></div>
                  <ul>
                    <li>위치 : 영도구 해양로 435</li>
                    <li>규모 :길이 590m</li>
                    <li>규모 :길이 590m</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
