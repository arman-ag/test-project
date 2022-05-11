/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PasswordIcon from '@mui/icons-material/Password';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { api } from '../../services/api.service';
import { LoginReq, LoginRes } from './types';

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (value: { email?: string; password?: string }) => {
    setFormValues({ ...formValues, ...value });
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setButtonLoading(true);

    api
      .post<LoginReq, LoginRes>('https://reqres.in/api/login', formValues)
      .then((res) => {
        setButtonLoading(false);
        toast('login sucsesfully', { autoClose: 2000 }),
          localStorage.setItem('user', res.data.token);
        setTimeout(() => {
          navigate('/user');
        }, 2000);
      })
      .catch((err) => {
        toast(err.response.data.error, { autoClose: 2000 });
        setTimeout(() => {
          setButtonLoading(false);
        }, 2000);
      });
  };
  return (
    <>
      <Grid
        container
        css={css`
          height: 100vh;
        `}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Grid item xs={10} md={5}>
          <Card
            css={css`
              background-color: #f5f6fa;
            `}>
            <CardContent>
              <form onSubmit={(event) => handleSubmit(event)}>
                <Box
                  css={css`
                    height: 40vh;
                    padding: 50px;
                  `}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'space-around'}>
                  <Typography
                    css={css`
                      margin: 0 10px;
                    `}>
                    For see user list please login first{' '}
                  </Typography>
                  <TextField
                    label="Email"
                    variant="outlined"
                    onChange={(e) => handleInputChange({ email: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon />
                        </InputAdornment>
                      )
                    }}
                    label="password"
                    variant="outlined"
                    onChange={(e) => handleInputChange({ password: e.target.value })}
                  />
                  <Box sx={{ position: 'relative' }} display="flex" justifyContent={'center'}>
                    <Button
                      disabled={buttonLoading}
                      variant="contained"
                      color="primary"
                      type="submit">
                      Submit
                    </Button>
                    {buttonLoading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: 'absolute',
                          top: '20%',
                          left: '47%',
                          color: 'blue'
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </form>
              <Accordion
                css={css`
                  background-color: inherit;
                  box-shadow: none;
                `}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography>** user pass hint</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    If you forget your username and password, enter this ;)
                    <br />
                    <b> user:eve.holt@reqres.in</b>
                    <br /> <b>pass:cityslicka</b>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
