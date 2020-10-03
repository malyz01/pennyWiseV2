import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center',
      minHeight: 600,
      paddingBottom: '5em'
    }
  })
);
