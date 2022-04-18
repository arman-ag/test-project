import axios from 'axios';

const get = (url :string) => {
  return axios({
    method: 'get',
    url
  });
};
const post= <T extends string, U extends object>(url: T, data: U) => {
  return axios({
    method: 'post',
    url,
    data
  });
};
export const api = {
  get,
  post
};
