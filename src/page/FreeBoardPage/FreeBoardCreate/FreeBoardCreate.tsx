import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { postData } from "@/services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyFail} from "@/components/Notify/Notify";
type FormData = {
  title: string;
  link: string;
  content: string;
};
const FreeBoardCreate = () => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    title: yup.string().required(t("register.required")),
    link: yup.string().required(t("register.required")),
    content: yup.string().required(t("register.required")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: FormData) => {
    try {
      const response = await postData("/free-board", {
        title: values.title,
        content: values.content,
      });
      if (response.data.success) {
        setTimeout(() => {
            location.reload();
        },5000)
      } else {
        return notifyFail();
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="w-[1000px] h-full mx-auto mt-[97px] md:mt-[100px]">
      <div className="mt-10">
        <h1 className="bg-gradient-to-r text-2xl from-[#0066C1] to-[#009FE5] text-transparent bg-clip-text font-bold">
          콘텐츠 작성
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-center justify-center items-center text-xl w-full mt-5">
          <span className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border">
            제목
          </span>
          <input
            {...register("title")}
            className="flex-1 border p-2"
            type="text"
            placeholder="제목을 입력하세요. (공백포함 50자이내)"
          />
        </div>
        {errors.title && (
          <p className="text-red-500 text-base">This is required</p>
        )}
        <div className="flex text-xl mt-5">
          <span className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border">
            링크
          </span>
          <input
            {...register("link")}
            className="flex-1 p-2 border"
            type="text"
            placeholder="링크를 입력해주세요."
          />
        </div>
        {errors.link && (
          <p className="text-red-500 text-base">This is required</p>
        )}
        <div className="mt-5">
          <textarea
            {...register("content")}
            className="w-full p-2 h-[460px] border"
          />
          {errors.content && <p className="text-red-500">This is required</p>}
        </div>
        <div className="flex justify-end gap-x-2 items-end mt-5">
          <button
            type="submit"
            className="w-[80px] h-[50px] bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-white border border-gray-400"
          >
            제목
          </button>
          <button className="w-[80px] h-[50px] border border-gray-400 bg-[#D9D9D9]">
            취소
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default FreeBoardCreate;
