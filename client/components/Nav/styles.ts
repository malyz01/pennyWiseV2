import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1em'
    }
  })
);

export const sLogo = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex'
    },
    logoContainer: {
      width: 60,
      marginRight: '1em'
    }
  })
);
