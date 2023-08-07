import React, { useRef, useState } from "react";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { notifyFail } from "@/components/Notify/Notify";
import { postCampaignData, postData } from "@/services/UserService";
import { useNavigate, useParams } from "react-router-dom";
import { CreateSuccess } from "@/components/Notify/EditSuccess";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  title: string;
  content: string;
  link: string;
  image: string;
}
const CampaignCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    link: Yup.string().required("Content is required"),
    image: Yup.string().required("Content is required"),
  });
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    link: "",
    image: "",
  });
  // handle file
  const [selectedFile, setSelectedFile] = useState<any>();
  console.log(selectedFile);
  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    //
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleContentChange = (value: string) => {
    setFormData({
      ...formData,
      content: value,
    });
  };
  const backToPage = () => {
    navigate("/notification");
  };
  const handleTitleInput = () => {
    setErrors({});
  };
  const handleContentBlur = () => {
    setErrors({});
  };
  const quillRef = useRef<ReactQuill>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      const content = quillRef.current?.getEditor().getText() || "";
      const response = await postCampaignData("/campaign", {
        title: formData.title,
        content: content.trim(),
        link : formData.link,
        image: selectedFile.name,
      });
      if (response.data.success) {
        CreateSuccess();
        setTimeout(() => {
          location.reload();
        }, 5000);
      } else {
        return notifyFail();
      }
    } catch (err: any) {
      const newErrors: { [key: string]: string } = {};
      err.inner.forEach((e: Yup.ValidationError) => {
        if (e.path) {
          newErrors[e.path] = e.message;
        }
      });
      setErrors(newErrors);
    }
  };
  return (
    <div className="w-[1000px] h-full mx-auto mt-[97px] md:mt-[100px]">
      <div className="mt-10">
        <h1 className="text-2xl bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-transparent bg-clip-text font-black">
          공지사항 작성
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-center mt-10">
          <label
            className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border"
            htmlFor="title"
          >
            제목
          </label>
          <input
            className="flex-1 border p-2"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            onInput={handleTitleInput}
            placeholder="제목을 입력하세요. (공백포함 50자이내)"
          />
        </div>
        {errors.title && (
          <p className="text-red-500 text-sm block pt-2">This is required</p>
        )}
        <div className="my-5">
          <ReactQuill
            ref={quillRef}
            className="h-[360px]"
            value={formData.content}
            onChange={handleContentChange}
            onBlur={handleContentBlur}
            placeholder="내용을 입력하세요."
          />
        </div>
        {errors.content && (
          <p className="text-red-500 text-sm block pt-2 mt-10">
            This is required
          </p>
        )}
        <div className="flex flex-center pt-10">
          <label
            className="flex flex-center justify-center items-center h-[50px] w-[180px] bg-[#d4e9fc] border"
            htmlFor="title"
          >
            링크
          </label>
          <input
            className="flex-1 border p-2"
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            onInput={handleTitleInput}
            placeholder="제목을 입력하세요. (공백포함 50자이내)"
          />
        </div>
        {errors.link && (
          <p className="text-red-500 text-sm block pt-2">
            This is required
          </p>
        )}
        <div className="flex flex-center justify-start items-center gap-x-5 mt-5">
          <button
            type="button"
            className=" text-white h-[50px] w-[200px] bg-gradient-to-r from-[#0066C1] to-[#009FE5] border"
          >
            <label htmlFor="file-uploader" className="flex flex-center items-center justify-center gap-x-3">
              <p> 대표이미지 첨부</p>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className="text-base font-extrabold text-white"
              />
            </label>
          </button>
          <p>{selectedFile?.name}</p>
          <input
          name="file"
            onChange={changeHandler}
            className="hidden"
            id="file-uploader"
            type="file"
            accept=".jpg,.png,.jpeg"
          />
        </div>
        {errors.file && (
          <p className="text-red-500 text-sm block pt-2">
            This is required
          </p>
        )}
        <div className="flex justify-end gap-x-2 items-end mt-10 pt-2">
          <button
            type="submit"
            className="w-[88px] h-[42px] bg-gradient-to-r from-[#0066C1] to-[#009FE5] text-white border border-gray-400"
          >
            제목
          </button>
          <button
            onClick={backToPage}
            className="w-[88px] h-[42px] border border-gray-400 bg-[#D9D9D9]"
          >
            취소
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default CampaignCreate;
