import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://vitejs-phonebook-server.onrender.com/api/persons'
  : 'http://localhost:3001/api/persons';
const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const update = (id, updatedPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedPerson)
    .then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getAll, create, update, remove };
