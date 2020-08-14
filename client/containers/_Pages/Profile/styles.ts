import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      minHeight: 600
    }
  })
);

export const sProfileCard = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      border: 'solid 1px black',
      borderRadius: '2.5em',
      minHeight: '15em'
    },
    line: {
      width: '90%'
    }
  })
);

export const sCardTop = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex'
    },
    details: {
      width: '50%'
    },
    name: {
      marginTop: '2em',
      fontSize: '2em',
      letterSpacing: '0.25em',
      marginBottom: '2em'
    },
    email: {
      fontSize: '1em',
      marginBottom: '2em',
      letterSpacing: '0.25em'
    },
    button: {
      minWidth: '94px !important',
      marginLeft: '1em !important'
    },
    avatar: {
      width: '10em',
      height: '10em'
    }
  })
);

export const sCardBottom = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
    }
  })
);
