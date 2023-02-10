import axios from "axios";

const api = import.meta.env?.VITE_API_URL;

export const getRequest = async (access_token: string) => {
  const { data } = await axios.get(`${api}/test/userAuth`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return data;
};
