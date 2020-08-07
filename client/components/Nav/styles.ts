import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

// TODO transition animation
export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: '1em 0',
      height: '100%'
    }
  })
);

export const sLogo = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100%'
    },
    logoContainer: {
      width: 50,
      marginRight: '1em',
      [theme.breakpoints.down(400)]: {
        width: 40
      }
    },
    typo: {
      fontFamily: "'Boogaloo' !important",
      fontSize: '3em !important',
      [theme.breakpoints.down(400)]: {
        fontSize: '2em !important'
      }
    }
  })
);
