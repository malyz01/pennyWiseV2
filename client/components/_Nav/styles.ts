import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      margin: '1.5em 0 1em',
      padding: '1em 0',
      height: 50
    },
    menuContainer: {
      display: 'flex'
    },
    menu: {
      marginLeft: '1em'
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
      marginRight: '1em'
    },
    typo: {}
  })
);
