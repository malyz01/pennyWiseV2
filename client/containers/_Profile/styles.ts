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
      minHeight: '15em'
    }
  })
);