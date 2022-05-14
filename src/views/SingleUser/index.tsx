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
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetSingleUser from './../../hooks/useGetSingleUser';
import useMutationUsers from './../../hooks/useMutation';
const CustomTextfield = styled(TextField)({
  marginTop: '10px'
});
const SingleUSer = () => {
  const [value, setValue] = useState<string>();
  const params = useParams();
  const data = useGetSingleUser('fetchSingleUser', params?.id);
  const editUserInfo = () => {
    useMutationUsers(2, { name: value! });
  };
  //  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {data?.isLoading ? (
        <h2>data is fetching . please wait </h2>
      ) : data?.isError ? (
        <div>
          <h2>Error to fetch data</h2>
        </div>
      ) : (
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
                    onClick={editUserInfo}>
                    edit
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SingleUSer;
