import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center'
    },
    contentContainer1: {
      margin: '4em auto',
      fontSize: '1.1em'
    },
    contentContainer2: {
      margin: '4em auto'
    },
    imageContainer: {
      width: '80%',
      margin: '1em auto'
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
