import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { AppThunkDispatch, RootState } from "@/app/store";
import { loginFailure, loginUser } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const Token = localStorage.getItem("token")
  console.log("token is:",Token);
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = await (dispatch as AppThunkDispatch)(loginUser(username, password));
    result ? navigate("/") : dispatch(loginFailure("login false"))
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center  w-[480px] h-[551px] border border-[#999999] mt-[167px] mb-[67px] mx-auto">
      <h2 className="mx-auto mt-10 text-2xl font-bold">로그인</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col">
          <label className="p-[10px] font-medium">로그인</label>
          <input
            className="border mb-5 border-gray-400  w-[440px] h-[50px] px-2"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="아이디를 입력하세요."
          />
        </div>
        <div className="flex flex-col">
          <label className="p-[10px]">비밀번호</label>
          <div className=" relative border border-gray-400  w-[440px] h-[50px] flex flex-center items-center justify-between p-5">
            <input
              className="absolute inset-0 p-5"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력하세요."
            />
            <FontAwesomeIcon
              className="absolute cursor-pointer right-5"
              icon={showPassword ? faEyeSlash: faEye}
              onClick={handleShowPassword}
            />
          </div>
        </div>

        <div className="flex items-center mt-5 gap-x-2">
          <input className="h-[30px] w-[30px] " type="checkbox" name="" id="" />
          <label className="text-sm">아이디 기억하기</label>
        </div>

        <button
          className="flex items-center justify-center px-6 py-3  mt-[89px] bg-[#0066C1] border text-white w-full h-[60px]"
          type="submit"
          disabled={isLoading}
          
        >
          {isLoading ? "Logging in..." : "확인"}
        </button>
        <button
          className="flex items-center justify-center px-6 py-3 mt-2 bg-[#F6F6F6] border w-full h-[40px]"
          type="submit"
          disabled={isLoading}
           onClick={() => navigate("/register")}
        >
          리빙랩 회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;
