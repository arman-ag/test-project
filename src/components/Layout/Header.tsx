import { AppBar, Button, Grid, Paper, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
const Header = () => {
  const [result, setResult] = React.useState([]);

  // React.useEffect(async () => {
  //   const response = await api.get(`https://reqres.in/api/users?page=${1}`);
  //   response()
  //     .then((res) => {
  //       setResult(res.data?.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  // const classes = useStyles();

  return (
    <header>
      <AppBar position="static" style={{ backgroundColor: '#4b6584', marginBottom: 50 }}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            style={{ margin: '10px 0' }}>
            <Grid item xs={4} md={2}>
              <Button style={{ color: '#d1d8e0' }} onClick={handleLogout}>
                <Typography>logout</Typography>
              </Button>
            </Grid>
            <Grid item md={10} xs={8}>
              <Paper>
                {/* <Autocomplete
                  freeSolo
                  disableClearable
                  options={result?.map((option) => option.name)}
                  renderInput={(params) => (
                    <TextField
                      placeholder="search..."
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                /> */}
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
