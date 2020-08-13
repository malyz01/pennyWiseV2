import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sLogin = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      minHeight: 100,
      minWidth: 200,
      padding: '2em 2em 2.5em',
      background: theme.palette.neutral.main
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      fontSize: 50
    }
  })
);
