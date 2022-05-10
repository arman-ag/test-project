import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import useMutationUser from 'hooks/useMutation';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGetSingleUser from './../../hooks/useGetSingleUser';
const SingleUSer = () => {
  const params = useParams();
  // const [data, setData] = useState({});
  const data = useGetSingleUser('fetchSingleUser', params?.id);

  return (
    <>
      {data?.isLoading ? (
        <h2>data is fetching . please wait </h2>
      ) : data?.isError ? (
        <div>
          <h2>Error to fetch data</h2>
        </div>
      ) : (
        <CardActionArea>
          <Card>
            <CardMedia component="img" alt="user avatart" image={data?.data?.avatar} />
            <CardContent>
              <Box
                display={'flex'}
                justifyContent={'center'}
                flexDirection="column"
                alignItems="center">
                <Typography variant="h5">{`${data?.data?.first_name}  ${data?.data?.last_name}`}</Typography>
                <Typography variant="h5">{data.data?.email}</Typography>
              </Box>
              <Box>
                <Button onClick={() => useMutationUser(2, { name: 'arman', job: 'programmer' })}>
                  Edit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </CardActionArea>
      )}
    </>
  );
};

export default SingleUSer;
