import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      position: 'relative'
    },
    fern: {
      width: '25em',
      right: '0',
      bottom: '0',
      position: 'absolute',
      zIndex: 1,
      opacity: '66%',
      [theme.breakpoints.down(850)]: {
        display: 'none'
      }
    }
  })
);
