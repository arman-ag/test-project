import { useQuery } from 'react-query';
import { api } from 'services/api.service';
import { SingleUserType } from './../views/Users/types';
const useGetSingleUser = (key: string, id: string | undefined) => {
  return useQuery(
    [key, id],
    async () =>
      await api
        .get<SingleUserType>(`https://reqres.in/api/users/${id}`)
        .then((res) => res.data.data),
    {
      enabled: !!id
    }
  );
};
export default useGetSingleUser;
