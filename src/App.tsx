import { Routes, Route } from "react-router-dom";
import Introduction from "./page/Introduction";
import BaseLayout from "./Layout/BaseLayout";
import FormLayout from "./login/LoginLayout";
import HomePage from "./page/HomePage";
import Notification from "./page/Notification";
import Facility from "./page/Facility";
import Contents from "./page/Contents";
import LivingLab from "./page/LivingLab";
import Campaign from "./page/Campaign";
import Login from "./login/Login";
import RegisterPage from "./register/Register";
import NotFound from "./page/NotFound";
import { RequiredAuth } from "./RequiredAuth";
function App() {
  const Token = localStorage.getItem("token");
  console.log("token is:", Token);
  return (
    <div className=" max-w-[1920px] scroll-smooth">
      <Routes>
        <Route path="/" element={<FormLayout></FormLayout>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
        </Route>
        
          <Route path="/" element={<BaseLayout></BaseLayout>}>
            <Route index path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/" element={<RequiredAuth />}>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
            <Route
              path="/introduction"
              element={<Introduction></Introduction>}
            ></Route>
            <Route
              index
              path="/notification"
              element={<Notification></Notification>}
            ></Route>
            <Route
              index
              path="/facility"
              element={<Facility></Facility>}
            ></Route>
            <Route
              index
              path="/contents"
              element={<Contents></Contents>}
            ></Route>
            <Route
              index
              path="/LivingLab"
              element={<LivingLab></LivingLab>}
            ></Route>
            <Route
              index
              path="/campaign"
              element={<Campaign></Campaign>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
