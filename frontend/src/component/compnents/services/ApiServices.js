import http from "../axiosAPI";

const getAll = () => {
  return http.get("/");
};

const get = id => {
  return http.get(`/${id}`);
};

export default { getAll, get };