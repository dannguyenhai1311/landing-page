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
  return (
    <div className=" max-w-[1920px] scroll-smooth">
      <Routes>
        <Route path="/" element={<FormLayout/>}>
          <Route path="/login" element={<Login/>}></Route>
          <Route
            path="/register"
            element={<RegisterPage/>}
          ></Route>
        </Route>
        
          <Route path="/" element={<BaseLayout/>}>
            <Route index path="/" element={<HomePage/>}></Route>
            <Route path="/" element={<RequiredAuth/>}>
            <Route path="/*" element={<NotFound/>}></Route>
            <Route
              path="/introduction"
              element={<Introduction/>}
            ></Route>
            <Route
              index
              path="/notification"
              element={<Notification/>}
            ></Route>
            <Route
              index
              path="/facility"
              element={<Facility/>}
            ></Route>
            <Route
              index
              path="/contents"
              element={<Contents/>}
            ></Route>
            <Route
              index
              path="/LivingLab"
              element={<LivingLab/>}
            ></Route>
            <Route
              index
              path="/campaign"
              element={<Campaign/>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
