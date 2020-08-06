import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      backgroundColor: '#00A6A4',
      padding: '4em'
    }
  })
);

export const sLogo = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center'
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
      padding: '0 1em'
    }
  })
);