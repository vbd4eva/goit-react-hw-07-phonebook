import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContactsList() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContactCart(id) {
  const data = await axios.delete(`/contacts/${id}`);
  return {...id, data };
};

export async function addContactCart(newContactCart) {
  const { data } = await axios.post('/contacts', newContactCart);
  return data;
};