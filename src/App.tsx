import { Routes, Route } from "react-router-dom";
import Introduction from "./page/IntroductionPage/Introduction";
import BaseLayout from "./Layout/BaseLayout";
import FormLayout from "./login/LoginLayout";
import HomePage from "./page/HomePage/HomePage";
import Notification from "./page/NotificationPage/Notification";
import Contents from "./page/ContentsPage/Contents";
import LivingLab from "./page/LivingLabPage/LivingLab";
import Campaign from "./page/CampaignPage/Campaign";
import Login from "./login/Login";
import RegisterPage from "./components/register/Register";
import NotFound from "./page/NotFoundPage/NotFound";
import { RequiredAuth } from "./components/RequiredAuth";
import NotificationDetail from "./page/NotificationPage/NotificationDetail";
import CampaignDetail from "./page/CampaignPage/CampaignDetail";
import LivingLabDetail from "./page/LivingLabPage/LivingLabDetail";
import ContentCreate from "./page/Content-create/ContentCreate";
import Facility from "./page/FacilityPage/Facility";

function App() {
  return (
    <div className=" max-w-[1920px] scroll-smooth">
      <Routes>
        <Route path="/" element={<FormLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/introduction" element={<Introduction />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/notification/:id" element={<NotificationDetail />} />
          <Route path="/notification/create" element={<ContentCreate />} />
          <Route index path="/facility" element={<Facility />} />
          <Route index path="/contents" element={<Contents />} />
          <Route index path="/living-lab" element={<LivingLab />} />
          <Route
            index
            path="/Living-lab/:id"
            element={<LivingLabDetail />}
          ></Route>
          <Route path="/living-lab/create" element={<ContentCreate />} />
          <Route index path="/campaign" element={<Campaign />} />
          <Route path="/campaign/:id" element={<CampaignDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
