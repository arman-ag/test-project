/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  TextField,
  Typography
} from '@mui/material';
import { DataType, putResType } from 'hooks/types';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from 'services/api.service';
import useGetSingleUser from './../../hooks/useGetSingleUser';
const CustomTextfield = styled(TextField)({
  marginTop: '10px'
});
const SingleUSer = () => {
  const [value, setValue] = useState<string>();

  const params = useParams();
  const data = useGetSingleUser('fetchSingleUser', params?.id);

  const editUser = useMutation((data: { name: string }) => {
    return api.put<DataType, putResType>(`https://reqres.in/api/users/${params?.id}`, data);
  });

  // useEffect(() => {
  //   editUser?.isLoading
  //     ? toast('sending data...', { autoClose: 1000 })
  //     : editUser?.isError
  //     ? toast('Error to fetch data', { autoClose: 1000 })
  //     : toast('user edited');
  // }, [editUser]);

  return (
    <>
      <Card sx={{ maxWidth: '50%', margin: 'auto' }}>
        <CardMedia component="img" alt="user avatart" image={data?.data?.avatar} />
        <CardContent>
          <Box
            display={'flex'}
            justifyContent={'center'}
            flexDirection="column"
            alignItems="center">
            <Typography variant="h6">{`${data?.data?.first_name}  ${data?.data?.last_name}`}</Typography>
            <Typography variant="h6">{data.data?.email}</Typography>
          </Box>
          <Accordion
            css={css`
              background-color: inherit;
              box-shadow: none;
            `}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} />
            <AccordionDetails>
              <Box
                display={'flex'}
                flexDirection={'column'}
                sx={{ maxWidth: '500px', margin: 'auto' }}>
                <CustomTextfield
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  defaultValue={data?.data?.first_name + ' ' + data?.data?.last_name}
                  placeholder="name"
                  size="small"
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  css={css`
                    margin-top: 20px;
                  `}
                  onClick={() => {
                    editUser.mutate({ name: value! });
                    toast('user edited');
                  }}>
                  edit
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleUSer;
