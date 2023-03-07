import axios from "axios";
let apiBase = "http://localhost:8080/books";

const apiService = {
  getAll() {
    return axios.get(apiBase).then((res) => res.data);
  },
  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },
};
export default apiService;
