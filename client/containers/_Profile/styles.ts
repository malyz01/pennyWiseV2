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