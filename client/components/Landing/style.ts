import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center'
    },
    contentContainer1: {
      textAlign: 'center'
    },
    contentContainer2: {
      textAlign: 'center'
    }
  })
);

export const sCarousel = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      marginBottom: '2em',
      '&:div': {
        color: 'red'
      }
    }
  })
);
