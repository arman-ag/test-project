import { Button, Container, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { api } from 'services/api.service';
import ModalCard from '../../components/modal/ModalCard';
import UserCard from '../../components/UserCard';
import { userType } from './types';

const UserInfo: FC = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const [choseUser, setChoseUser] = useState<userType>();

  const handleOpen = (user: userType) => {
    setOpen(true), setChoseUser(user);
  };
  const handleClose = () => setOpen(false);

  const getData = async (page: number) => {
    return await api.get(`https://reqres.in/api/users?page=${page}`).then((res) => res);
  };
  const { isLoading, isError, error, data, status, isFetching, isPreviousData } = useQuery(
    ['projects', page],
    () => getData(page),
    {
      keepPreviousData: true
    }
  );

  const showStatus = () => {
    switch (status) {
      case 'error':
        return (
          <div>
            <h2>Error to fetch data</h2>
          </div>
        );
      case 'loading':
        return <h2>data fetching . please wait</h2>;
      case 'success':
        return (
          <>
            <Container>
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                {data?.data.data.map((user: userType) => (
                  <Grid
                    onClick={() => {
                      handleOpen(user);
                    }}
                    key={user.id}
                    item
                    md={3}
                    xs={12}>
                    <UserCard user={user} />
                  </Grid>
                ))}
              </Grid>
            </Container>
            <Modal open={open} onClose={handleClose}>
              <ModalCard user={choseUser} />
            </Modal>
          </>
        );
    }
  };
  return (
    <>
      {showStatus()}
      <Box mt={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => ++old);
            }
          }}
          disabled={isPreviousData || page >= 2}>
          Next page
        </Button>
        <Typography variant={'h6'} style={{ margin: '0 40px' }}>
          {page}
        </Typography>
        <Button
          onClick={() => {
            setPage((pre: number) => Math.max(--pre, 1));
          }}>
          pervious page
        </Button>
      </Box>
    </>
  );
};

export default UserInfo;
