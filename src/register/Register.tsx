import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppThunk, RootState } from "@/app/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURl } from "@/features/auth/api";

type FormData = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  term: boolean;
};
const RegisterPage = () => {
  const validationSchema = yup.object().shape({
    id: yup.string().required("ID is required"),
    fullName: yup.string().required("Name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(/^\d+$/, "Invalid phone number"),
    term: yup.boolean().oneOf([true], "You must agree to the terms"),
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const onSubmit = async (values: FormData) => {
    try {
      const response = await axios.post(baseURl("register"), {
        username: values.id,
        password: values.password,
        email: values.email,
        full_name: values.fullName,
        phone_number: values.phoneNumber,
      });
      if (response.data.success) {
        navigate("/login");
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="w-[860px] h-[551px] flex flex-col mt-[167px] shadow items-center mx-auto">
      <h2 className="mt-10 text-2xl font-bold">리빙랩 회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mt-6 gap-x-5">
          <div className="flex flex-col">
            <label className="p-2">아이디</label>
            <input
              className="border border-[#ACACAC] w-[400px] h-[50px] px-3"
              placeholder="아이디를 입력하세요."
              type="text"
              {...register("id")}
            />
            {errors.id && <p className="text-red-500">This is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="p-2">이름</label>
            <input
              className="border border-[#ACACAC] w-[400px] h-[50px] px-3"
              placeholder="아이디를 입력하세요."
              type="text"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500">This is required</p>
            )}
          </div>
        </div>
        <div className="flex mt-5 gap-x-5">
          <div className="flex flex-col">
            <label className="p-2">비밀번호</label>
            <div className=" relative border border-gray-400  w-[400px] h-[50px] flex flex-center items-center justify-between p-5">
              <input
                className="absolute inset-0 p-5"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력하세요."
              />

              <FontAwesomeIcon
                className="absolute cursor-pointer right-5"
                icon={showPassword ? faEyeSlash : faEye}
                onClick={handleShowPassword}
              />
            </div>
            {errors.password && (
              <p className="text-red-500">This is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="p-2">이름</label>
            <input
              className="border border-[#ACACAC] w-[400px] h-[50px] px-3"
              placeholder="아이디를 입력하세요."
              type="email"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500">This is required</p>}
          </div>
        </div>
        <div className="flex mt-5 gap-x-5">
          <div className="flex flex-col">
            <label className="p-2">비밀번호</label>
            <div className=" relative border border-gray-400  w-[400px] h-[50px] flex flex-center items-center justify-between p-5">
              <input
                className="absolute inset-0 p-5"
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="비밀번호를 입력하세요."
              />
              <FontAwesomeIcon
                className="absolute cursor-pointer right-5"
                icon={showConfirmPassword ? faEyeSlash : faEye}
                onClick={handleShowConfirmPassword}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">This is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="p-2">이름</label>
            <input
              className="border border-[#ACACAC] w-[400px] h-[50px] px-3"
              placeholder="아이디를 입력하세요."
              type="text"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">This is required</p>
            )}
          </div>
        </div>
        <div className="flex items-center mt-5 gap-x-2">
          <input
            className="h-[30px] w-[30px]"
            type="checkbox"
            {...register("term")}
          />
          <label className="text-sm">아이디 기억하기</label>
          {errors.term && <p className="text-red-500">This is required</p>}
        </div>
        <button
          className="flex items-center justify-center px-6 py-3 mt-[35px] bg-[#F6F6F6] border w-[820px] max-h-[60px]"
          type="submit"
          disabled={isLoading}
        >
          회원가입하기
        </button>
      </form>
    </div>
  );
};
const MyInput = () => {
  return (
    <div>
      <label htmlFor=""></label>
    </div>
  );
};

export default RegisterPage;
