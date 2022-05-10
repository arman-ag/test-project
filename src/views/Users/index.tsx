import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useFetch from 'hooks/useFetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../../components/UserCard';
import { userType } from './types';

const UserInfo = () => {
  const [page, setPage] = useState(1);
  // const [open, setOpen] = useState(false);
  const [choseUser, setChoseUser] = useState<userType>();

  // const handleOpen = (user: userType) => {
  //   setOpen(true), setChoseUser(user);
  // };
  // const handleClose = () => setOpen(false);

  const getData = useFetch('users', page);
  return (
    <>
      {getData.isLoading ? (
        <h2>data fetching . please wait</h2>
      ) : getData.isError ? (
        <div>
          <h2>Error to fetch data</h2>
        </div>
      ) : (
        <>
          <Container>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              {getData?.data?.map((user: userType) => (
                <Grid key={user.id} item md={3} xs={12}>
                  <Link to={`/single-user/${user.id}`}>
                    <UserCard user={user} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* <Modal open={open} onClose={handleClose}>
            <ModalCard user={choseUser} />
          </Modal> */}
        </>
      )}
      <Box mt={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button
          onClick={() => {
            if (!getData.isPreviousData) {
              setPage((old) => ++old);
            }
          }}
          disabled={getData.isPreviousData || page >= 2}>
          Next page
        </Button>
        <Typography variant={'h6'} style={{ margin: '0 40px' }}>
          {page}
        </Typography>
        <Button
          onClick={() => {
            setPage((pre: number) => Math.max(--pre, 1));
          }}
          disabled={page === 1}>
          pervious page
        </Button>
      </Box>
    </>
  );
};

export default UserInfo;
