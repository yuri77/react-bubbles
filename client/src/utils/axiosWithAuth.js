import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    header: { Authorization: localStorage.getItem("token") }
  });
};
