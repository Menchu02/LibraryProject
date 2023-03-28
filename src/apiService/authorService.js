import axios from 'axios';
let apiBase = 'http://localhost:8080/authors';

const authorService = {
  getAllAuthors() {
    return axios.get(apiBase).then((res) => res.data);
  },

  createAuthor(data) {
    return axios
      .post(apiBase + '/newAuthor', data)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  },
};
export default authorService;
