import { Routes, Route } from "react-router-dom";
import Introduction from "./page/IntroductionPage/Introduction";
import BaseLayout from "./Layout/BaseLayout";
import FormLayout from "./login/LoginLayout";
import HomePage from "./page/HomePage/HomePage";
import Notification from "./page/NotificationPage/Notification";
import Facility from "./page/FacilityPage/Facility";
import Contents from "./page/ContentsPage/Contents";
import LivingLab from "./page/LivingLabPage/LivingLab";
import Campaign from "./page/CampaignPage/Campaign";
import Login from "./login/Login";
import RegisterPage from "./register/Register";
import NotFound from "./page/NotFoundPage/NotFound";
import { RequiredAuth } from "./RequiredAuth";
import NotificationDetail from "./page/NotificationPage/NotificationDetail";
function App() {
  return (
    <div className=" max-w-[1920px] scroll-smooth">
      <Routes>
        <Route path="/" element={<FormLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>

        <Route path="/" element={<BaseLayout />}>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/" element={<RequiredAuth />}>
            <Route path="/*" element={<NotFound />}></Route>
            <Route path="/introduction" element={<Introduction />}></Route>
            <Route path="/notification" element={<Notification />}></Route>
            <Route
              path="/notification/:id"
              element={<NotificationDetail />}
            ></Route>
            <Route index path="/facility" element={<Facility />}></Route>
            <Route index path="/contents" element={<Contents />}></Route>
            <Route index path="/LivingLab" element={<LivingLab />}></Route>
            <Route index path="/campaign" element={<Campaign />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
