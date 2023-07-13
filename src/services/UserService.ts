import { api } from "./apiService";

interface ILogin {
  username: string;
  password: string;
}

interface IRegister {
  email: string;
  username: string;
  password: string;
  phone_number: string;
  full_name: string;
}

export const login = (data: ILogin) => {
  return api.post("/user/login", data);
};

export const registerUser = (data: IRegister) => {
  return api.post("/user/register", data);
};
export const postData = (
  path: string,
  data: { title: string; content: string }
) => {
  return api.post(path, data);
};
// export const deleteData = (data: any[]) => {
//     return api.delete('living-lab', data)
//   };
export const deleteData = (path: string, data: { ids: string[] }) => {
  return api.delete(path, { data });
};
