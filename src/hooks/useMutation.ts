import { useMutation } from 'react-query';
import { api } from 'services/api.service';
import { DataType, putResType } from './types';
const useMutationUser = (id: number, data: DataType) => {
  return useMutation(() => {
    return api.put<DataType, putResType>(`/todods${id}`, data);
  });
};
export default useMutationUser;
