import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      backgroundColor: '#00A6A4',
      padding: '4em',
      [theme.breakpoints.down(850)]: {
        padding: '.8em'
      }
    },
    footerLine: {
      width: '66%'
    }
  })
);

export const sLogo = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      justifyContent: 'center',
      width: '6em',
      [theme.breakpoints.down(850)]: {
        display: 'none'
      }
    },
    penny: {
      fontSize: '1.5em',
      fontFamily: 'Boogaloo',
      color: '#d1a435'
    },
    wise: {
      color: '#d1a435'
    }
  })
);

export const sFooterItems = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      padding: '0 1em',
      marginBottom: '2em',
      [theme.breakpoints.down(1000)]: {
        fontSize: '.8em'
      },
      [theme.breakpoints.down(850)]: {
        flexDirection: 'column'
      }
    },
    footerItemContainer: {
      zIndex: 2,
      [theme.breakpoints.down(850)]: {
        margin: '1em auto'
      }
    }
  })
);

export const sSocialLogos = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      color: 'white',
      justifyContent: 'center',
      marginTop: '2em'
    },
    icon: {
      fontSize: '3em',
      margin: '0 0.5em'
    }
  })
);
