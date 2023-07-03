import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://qa.forum-bulletin-board.dev.politetech.com/api/v1',
});

export const getApiData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
export const postApiData = async (endpoint: string) => {
  try {
    const response = await api.post(endpoint);
    const userToken = response.data.data.user.token;
    localStorage.setItem("token", userToken);
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};