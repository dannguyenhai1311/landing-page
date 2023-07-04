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
  return api.post('/user/login', data)
};

export const registerUser = (data: IRegister) => {
    return api.post('/user/register', data)
  };
