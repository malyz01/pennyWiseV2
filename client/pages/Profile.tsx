import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import useStyles from './styles/profile';

const Profile = () => {
  const c = useStyles();

  return (
    <main className={c.mainContainer}>
      <section>
        <h1>Welcome to your Profile</h1>
        <hr />
        <p>Manage your account and profile settings</p>
      </section>

      <section>
        <Paper className={c.paper} elevation={8}>
          <Box display="flex" justifyContent="space-around">
            <div className={c.container}>
              <h3>FULL NAME</h3>
              <h5>EMAIL@EMAIL.COM</h5>
              <Button variant="contained" fullWidth>
                edit profile
              </Button>
            </div>
            <div className={c.image}>
              <Image
                aspectRatio={1 / 1}
                color="none"
                src="/assets/images/avatar.png"
                alt="Avatar"
              />
            </div>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <div className={c.container}>
              <Button variant="contained" fullWidth color="primary">
                Manage Your Income
              </Button>
              <Button variant="contained" fullWidth color="primary">
                Manage Your Expenses
              </Button>
              <Button variant="contained" fullWidth color="primary">
                Manage Your Budget
              </Button>
            </div>
            <div>
              <Typography>An Overview of your Finances</Typography>
              some components here
            </div>
          </Box>
        </Paper>
      </section>
    </main>
  );
};

export default Profile;
