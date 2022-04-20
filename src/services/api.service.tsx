import axios from 'axios';

const get = (url: string) => {
  return axios({
    method: 'get',
    url
  });
};
const post = <T,>(url: string, data: T) => {
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
