import axios from 'axios';
let apiBase = 'http://localhost:8080/books';

const apiService = {
  getAll() {
    return axios.get(apiBase).then((res) => res.data);
  },
  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },
  deleteById(id) {
    return axios.delete(apiBase + `/${id}`).then((res) => res.data);
  },
  create(data) {
    return axios
      .post(apiBase, data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },

  getIsNotLoaned() {
    return axios.get(apiBase + '/isLoaned').then((res) => res.data);
  },

  toggleIsLoaned(id, data) {
    return axios.put(apiBase + `/${id}`, data);
  },
};

export default apiService;
