import axios from 'axios';

const get = <A,>(url: string) => {
  return axios.request<A>({
    method: 'GET',
    url
  });
};
const post = <T, D>(url: string, data: T) => {
  return axios.request<T, D>({
    method: 'post',
    url,
    data
  });
};
const put = <T, D>(url: string, data: T) => {
  return axios.request<T, D>({
    method: 'put',
    url,
    data
  });
};
export const api = {
  get,
  post,
  put
};
