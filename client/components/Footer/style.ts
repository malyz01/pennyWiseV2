import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      backgroundColor: '#00A6A4'
    }
  })
);

export const sLogo = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center'
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