import { useQuery } from 'react-query';
import { api } from 'services/api.service';
import { getUserType } from './../views/Users/types';
const useFetch = (key: string, page: number) => {
  return useQuery(
    [key, page],
    async () =>
      await api
        .get<getUserType>(`https://reqres.in/api/users?page=${page}`)
        .then((res) => res.data.data),
    {
      keepPreviousData: true
    }
  );
};
export default useFetch;
