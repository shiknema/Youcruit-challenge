import http from "../axiosAPI";

const getAll = () => {
  return http.get("/");
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("/", data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const remove = id => {
  return http.delete(`/${id}`);
};

const removeAll = () => {
  return http.delete(`/`);
};

const findByDriver = name => {
  return http.get(`?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByDriver
};