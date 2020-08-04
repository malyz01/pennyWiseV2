import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {},
    content1Container: {
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
