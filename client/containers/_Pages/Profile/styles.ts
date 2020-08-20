import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      minHeight: 600,
      paddingBottom: '5em'
    }
  })
);

export const sProfileCard = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      maxWidth: '800px',
      border: 'solid 1px black',
      borderRadius: '2.5em',
      minHeight: '15em',
      margin: '2em auto',
      padding: '2em 5em'
    },
    line: {
      margin: '2em 0'
    }
  })
);

export const sCardTop = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between'
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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cardButtons: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      margin: '0.5em 0'
    },
    overview: {
      width: '50%'
    },
    overviewHeading: {
      fontSize: '1.5em',
      marginBottom: '1em'
    },
    overviewTable: {
      display: 'flex',
      border: `solid 2px ${theme.palette.primary.main}`,
      borderRadius: '2em',
      backgroundColor: theme.palette.primary.main
    },
    totalKeys: {
      width: '50%',
      backgroundColor: theme.palette.neutral.main,
      borderRadius: '2em 0 0 2em',
    },
    totalValues: {
      width: '50%',
      color: 'white',
      borderRadius: '0 2em 2em 0'
    }
  })
);
