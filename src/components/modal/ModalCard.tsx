import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { singleUserType } from '../../components/UserCard/type';

const ModalCard = ({ user }: singleUserType) => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          bgcolor: 'background.paper',
          p: 4
        }}>
        <CardActionArea>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="400px"
              width="200px"
              image={user?.avatar}
            />
            <CardContent>
              <Box mt={2} display="flex" alignItems="center">
                <AccountCircleIcon color="primary" fontSize="large" style={{ marginRight: 10 }} />
                <Typography variant="h6">{`${user?.first_name}   ${user?.last_name}`}</Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <AlternateEmailIcon color="primary" fontSize="large" style={{ marginRight: 10 }} />
                <Typography>{user?.email}</Typography>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </CardActionArea>
      </Box>
    </>
  );
};

export default ModalCard;
