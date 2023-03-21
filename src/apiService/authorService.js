import axios from 'axios';
let apiBase = 'http://localhost:8080/authors';

const authorService = {
  getAllAuthors() {
    return axios.get(apiBase).then((res) => res.data);
  },
};
export default authorService;
