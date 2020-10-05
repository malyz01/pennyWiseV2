import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import useStyles from './styles/profile';

const data = [
  { name: 'total Income', amount: 1200 },
  { name: 'total Expense', amount: 366.14 },
  { name: 'total Budget', amount: 833.86 },
  { name: 'total Goals', amount: 6 }
];

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
          <Box className={c.box}>
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
          <Box className={c.box}>
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
              {data.map((d, i) => (
                <Box my="5px" display="flex" key={i}>
                  <div>{d.name}</div>
                  <div>{d.amount}</div>
                </Box>
              ))}
            </div>
          </Box>
        </Paper>
      </section>
    </main>
  );
};

export default Profile;
