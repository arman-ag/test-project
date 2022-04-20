import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { singleUserType } from './type';

const UserCard = ({ user }: singleUserType) => {
  return (
    <>
      <CardActionArea>
        <Card>
          <CardMedia component="img" alt="user avatart" image={user?.avatar} />
          <CardContent>
            <Box display={'flex'} justifyContent={'center'}>
              <Typography variant="h5">{user?.first_name}</Typography>
            </Box>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

export default UserCard;
