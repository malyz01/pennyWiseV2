import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      minHeight: 600,
      maxWidth: 900,
      margin: '0 auto'
    },
    paper: {
      padding: '2rem 0',
      borderRadius: '20px'
    },
    container: {
      minWidth: '200px',
      maxWidth: '300px',
      width: '100%'
    },
    image: {
      width: '10em'
    }
  })
);
