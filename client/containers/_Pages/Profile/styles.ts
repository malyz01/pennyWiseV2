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
      maxWidth: '1000px',
      border: 'solid 1px black',
      borderRadius: '2.5em',
      minHeight: '15em',
      margin: '2em auto 5em'
    },
    line: {
      width: '90%'
    }
  })
);

export const sCardTop = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '2em 5em'
    },
    details: {
      textAlign: 'left'
    },
    name: {
      fontSize: '2em',
      letterSpacing: '0.25em',
      marginBottom: '1em'
    },
    email: {
      fontSize: '1em',
      letterSpacing: '0.25em',
      marginBottom: '2em'
    },
    button: {
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

    },
    overviewTable: {
      display: 'flex',
      border: 'solid 1px black',
      borderRadius: '2em',
      width: '25%'
    },
    totalKeys: {

    },
    totalValues: {

    }
  })
);
