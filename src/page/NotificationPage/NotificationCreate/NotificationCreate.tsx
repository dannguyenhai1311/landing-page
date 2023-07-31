import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { postData } from "@/services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyFail } from "@/components/Notify/Notify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type FormData = {
  title: string;
  link: string;
  content: string;
};
const NotificationCreate = () => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    title: yup.string().required(t("register.required")),
    link: yup.string().required(t("register.required")),
    password: yup.string().required(t("register.required")),
    content: yup.string().required(t("register.required")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: FormData) => {
    try {
      const response = await postData("/notice", {
        title: values.title,
        content: values.content,
      });
      if (response.data.success) {
        setTimeout(() => {
          location.reload();
        }, 5000);
      } else {
        return notifyFail();
      }
    } catch (error) {
      return error;
    }
  };
  // const handleEditorChange = (content: string) => {
  //   setValue("content", content);
  // };
  const contentValue = watch("content");
  console.log(contentValue);
  return (
    <div className="w-[1000px] h-full mx-auto mt-[97px] md:mt-[100px]">
      <div className="mt-10">
        <h1 className="text-2xl bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-transparent bg-clip-text font-black">
          콘텐츠 작성
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 text-base w-full mt-5">
          <div className="flex flex-col">
            <div className="flex flex-center justify-between">
              <span className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border">
                비밀번호
              </span>
              <input
                {...register("title")}
                className="flex-1 border p-2"
                type="text"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
            {errors.title && (
              <p className="text-red-500 text-sm">This is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 flex-center justify-center">
              <span className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border">
                비밀번호
              </span>
              <input
                {...register("password")}
                className="flex-1 border p-2"
                type="text"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
            {errors.title && (
              <p className="text-red-500 text-sm">This is required</p>
            )}
          </div>
        </div>
        <div className="flex text-base mt-5">
          <span className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border">
            링크
          </span>
          <input
            {...register("link")}
            className="flex-1 p-2 border"
            type="text"
            placeholder="제목을 입력해주세요."
          />
        </div>
        {errors.link && (
          <p className="text-red-500 text-sm">This is required</p>
        )}
        <div className="mt-5 flex flex-col h-[400px]">
          <ReactQuill
            className="flex-1"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "link",
              "image",
            ]}
            // {...register("content")}
          />
        </div>
         <div className="mt-10">
         {errors.content && <p className="text-red-500 text-sm block pt-2">This is required</p>} 
         </div>
        <div className="flex justify-end gap-x-2 items-end pt-2">
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

export default NotificationCreate;
